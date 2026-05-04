---
title: Factionlog
subtitle: A Standard Notation for Open Strategy Game Session Logging
author: Roberto Bisceglie
version: 0.1.0
license: CC BY-SA 4.0
lang: en
parent: Lonelog v1.4.0
---

## 1. Introduction

### 1.1 Why Factionlog?

If you've ever played an Open Strategy Game solo — emulating the referee,
running rival factions, tracking the board state — you know the problem.
You submit your action. You roll dice. Three things happen you didn't predict.
The world looks different from the Brief. And you're trying to record all of it
without breaking the fiction or losing the argument that made your roll matter.

Free-form journaling loses the mechanics. A dice log loses the leverage.
A pure narrative loses the board state. Factionlog offers a different approach:
a lightweight shorthand that captures the essential elements of OSG play —
the three-part action argument, the adjudication, the public report, the
changing positions of every faction — while leaving room for as much or as
little narrative as you want.

### 1.2 What Factionlog Does

Whether you're playing solo with an oracle as referee, running a live game
as scribe, or logging a multi-session campaign, this notation helps you:

- Record the full three-part action (act / out / lev) without slowing down
- Track faction positions, spendable bonuses, and board-state changes across turns
- Log rival and NPA actions with the same argument structure as your own
- Share your game log with other players who'll understand the format at a glance
- Review past turns and trace how each outcome followed from established fiction

The notation is designed to be:

- **Compact** — the argument is structured, not verbose
- **Traceable** — every outcome points back to earlier fiction
- **Format-agnostic** — works in digital markdown or paper notebooks
- **Fork-compatible** — shares Lonelog's tag system and symbol logic

### 1.3 How to Use This Notation

Think of this as a toolbox, not a rulebook. At its core are five elements
that mirror the natural flow of OSG play:

- `@` for your faction's submitted action (three-part argument)
- `!` for rival faction or NPA actions — the world acting without you
- `d:` for the OSG dice mechanic (2d6, keep-high or keep-low)
- `->` for the adjudicated outcome
- `=>` for the consequence on the board state

That's it. Everything else — faction tags, bonus tracking, report blocks,
NPA oracles — is optional. Add it when it helps. Skip it when it doesn't.

### 1.4 Quick Start: Your First Turn

Never used notation before? Here's everything you need:

```
@ Meranto
  act: Send the debt review notice to Caldrath's treasury
  out: Delay Caldrath's army movement for thirty days
  lev: We hold all loan documentation; emergency clause has precedent
[Lev:Strong]
d: 2d6 → 5,3  keep high → 5
-> Partial success
=> Caldrath treasury enters review; army movement delayed one turn

! Saivorn opens a diplomatic channel to Corenth
  lev: No established presence; Corenth has reason to be cautious
[Lev:Weak]
d: 2d6 → 2,4  keep low → 2
-> Failure — Corenth does not respond publicly

 [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/41219805/0e425845-4152-4649-a75e-c52524ef0d0f/osg_handbook.md)
 Meranto stalls Caldrath. Saivorn's overture is rebuffed.
    The Conclave issues no statement. Essaveth watches. 
```

That's a full turn. Everything else in this document helps you handle
complexity when you need it.

### 1.5 Factionlog and Lonelog

Factionlog is a fork of Lonelog, a notation system for solo RPG session
logging. Lonelog's core philosophy — separate mechanics from fiction, stay
compact, scale from one-shots to long campaigns — carries directly into OSG
play. The tag system, progress tracking, and formatting philosophy are shared
DNA. The core symbols shift to reflect OSG's specific model: faction-scale
play, turn structure, and the three-part argument at the heart of every action.

If you know Lonelog, you'll feel at home. If you don't, this document is
fully standalone.

The fundamental design change from Lonelog is this: in solo RPG play, the
world only speaks when asked (`?`). In OSG play, rival factions and NPAs
act on their own interests every turn without being asked. The `!` symbol
— borrowed from Partylog — captures this: the world pushing events into the
fiction, not waiting for your oracle query.

## 2. Digital vs. Analog Formats

### 2.1 Digital Format (Markdown)

In digital markdown files:

- Campaign metadata: YAML front matter, top of file
- Campaign title: Level 1 heading
- Sessions: Level 2 headings (`## Session 1`)
- Turns: `[Turn:N]` markers within sessions
- Core notation and tracking: inside code blocks
- Narrative and reports: regular prose between code blocks

> **Note:** Always wrap notation in code blocks when using digital markdown.
> This prevents conflicts with Markdown syntax and ensures symbols like `=>`
> render correctly.

### 2.2 Analog Format (Notebooks)

In paper notebooks:

- Write headers and metadata directly as shown
- Core notation works identically but without code fences
- Use the same symbols and structure
- Brackets and tags help scanning paper pages

### 2.3 Format Examples

**Digital:**

```markdown
## Session 1
Date: 2026-05-01 | Turns: 1–2

```

[Turn:1]

@ Meranto
  act: File debt review against Caldrath's treasury
  out: Delay army movement thirty days
  lev: Emergency clause, full documentation, precedent established
[Lev:Strong]
d: 2d6 → 6,2  keep high → 6
-> Success
=> [Fac:Caldrath | pos:army held at border | Clock:LiquidityReview 1/3]

```
```

**Analog:**

```
Turn 1

@ Meranto
  act: File debt review against Caldrath's treasury
  out: Delay army movement thirty days
  lev: Emergency clause, full documentation, precedent established
[Lev:Strong]
d: 2d6 → 6,2  keep high → 6
-> Success
=> [Fac:Caldrath | pos:army held | Clock:LiquidityReview 1/3]
```

Both formats use identical notation — only the wrapping differs.

## 3. Core Notation

This is the heart of the system. Five elements mirror the natural flow
of OSG play: you argue your action, the world argues back, dice decide,
and the board changes.

### 3.1 Your Faction's Action (`@`)

The `@` symbol represents your faction submitting its turn action.
Every action in OSG follows the same three-part structure:

```
@ FactionName
  act: What specifically are you doing?
  out: What result do you want?
  lev: Why is this action likely to produce that outcome?
```

The three sub-lines are not optional decoration. They are the argument.
`act` commits you to a specific course of conduct. `out` separates what
you're doing from what you want — the referee adjudicates the outcome,
not just the action. `lev` is the case for why your plan should work,
grounded in established fiction: resources, relationships, positioning,
prior actions.

**Example — full argument:**

```
@ Meranto
  act: Send formal notice of debt review to Caldrath's treasury,
       citing the emergency clause in our lending agreements
  out: Delay Caldrath's army movement by forcing a liquidity
       assessment before any major campaign expenditure
  lev: Caldrath's military expansion was financed by Meranto loans.
       The emergency clause exists, has precedent, and their treasury
       minister knows invoking it freezes discretionary spending for
       thirty days. We hold documentation for every transaction.
```

**Example — compact (fast play):**

```
@ Meranto
  act: Invoke emergency debt clause against Caldrath
  out: Freeze army expenditure for one turn
  lev: Full documentation; clause has precedent
```

Both are valid. Use the level of detail your play requires.

#### 3.1.1 Spendable Bonuses in the Argument

If your action spends a named bonus asset, record the spend inside
the leverage line using the `[Bon:]` tag:

```
@ Saivorn
  act: Rush naval assets to the Corenth harbour mouth
  out: Establish a naval blockade before Caldrath can resupply
  lev: Two deep-water ports give us unmatched transit speed;
       [Bon:HarbourRights 1/2 → 0/2] — we invoke our treaty
       access to Corenth's outer anchorage
```

The bonus tag ticks down at the point of use and is visible in
the leverage argument, which is where it matters for adjudication.

### 3.2 Rival and NPA Actions (`!`)

The `!` symbol represents any faction acting whose action you did not
submit — a rival player faction, a Non-Player Actor (NPA), or any
force that acts on its own interests this turn.

In solo play, `!` events are generated by oracle query, random NPA
behavior tables, or referee-authored logic. In group play, `!` logs
the actions submitted by other players.

The three-part argument structure applies to `!` actions exactly
as it does to `@` actions. This matters: the leverage argument is
what the referee (or oracle) grades, and it should be visible in
the log for every actor.

```
! Caldrath
  act: Deploy advance units to Essaveth's northern pass
  out: Establish military presence before any treaty negotiation
  lev: Largest army on the peninsula; Essaveth has no defensive
       pact; units are already at the border — one day's march
[Lev:Strong]
d: 2d6 → 6,2  keep high → 6
-> Success, and...
=> [Fac:Caldrath | pos:pass occupied]
=> [Fac:Essaveth | pos:under occupation | Clock:Resistance 0/4]
=> Essaveth's border garrison stands down without resistance —
   visible to all factions in the Report
```

#### 3.2.1 The `@` / `!` Distinction

This is Factionlog's central design choice:

- `@` is **your faction acting** — you chose this, you own it
- `!` is **a rival or the world acting** — it acts on its own,
  you respond to it

In OSG, all factions submit actions privately and simultaneously.
The distinction in the log reflects whose argument you are logging
and whose you are reconstructing from the Report or oracle.

#### 3.2.2 Solo Play: Emulating Rival Arguments

When playing solo, you reconstruct rival arguments from the
Report and NPA behavior rules. Use `?` (Lonelog oracle syntax)
to generate what you don't know:

```
! Saivorn
? What does Saivorn attempt this turn? (oracle: NPA behavior table)
- tbl:NPAAction → "Opportunistic diplomacy"
  act: Open a quiet channel to Corenth, bypassing Caldrath
  out: Establish a private relationship before the army arrives
  lev: Sea access gives Saivorn direct reach; Caldrath's
       aggression gives Corenth reason to listen
[Lev:Weak]  (no established presence in Corenth yet)
d: 2d6 → 3,1  keep low → 1
-> Failure, and... Corenth alerts Caldrath to the approach
=> [Fac:Saivorn | pos:diplomatically exposed]
```

The oracle determines the attempt; you record it with the same
structure as any other action. What enters the log is always
the full argument, regardless of how it was generated.

### 3.3 Leverage Grade (`[Lev:]`)

Before rolling, the referee (or you, as solo oracle-referee)
grades the acting faction's leverage as **Strong** or **Weak**
relative to any opposition.

Record the grade on its own line between the argument and the roll:

```
[Lev:Strong]
[Lev:Weak]
```

**Strong** means the faction has enough established advantage —
resources, relationships, positioning, prior actions — that you'd
expect success more often than not.

**Weak** means the attempt is plausible but without a strong basis
for expecting success: thin resources, an entrenched opponent,
no established presence in the relevant domain.

When playing solo, use an oracle query to grade leverage if you
are uncertain:

```
? Is my leverage Strong against Essaveth's pass claim?
- Yes, but... → Strong, but traceability is thin
```

### 3.4 The Dice Mechanic (`d:`)

OSG uses 2d6: **keep the high die** for Strong leverage,
**keep the low die** for Weak leverage.

```
d: 2d6 → 5,3  keep high → 5   (Strong)
d: 2d6 → 5,3  keep low  → 3   (Weak)
```

**Result interpretation:**

| Kept die | Outcome                                                |
| -------- | undefined---------------------------------------------------- |
| 6        | Success; something especially good may also occur      |
| 4–5      | Desired outcome occurs                                 |
| 2–3      | Action proceeds, but outcome is worse than desired     |
| 1        | Worst outcome; something especially bad may also occur |

#### 3.4.1 Force of Nature (Doubles)

When both dice show the same number, the referee may introduce
a Force of Nature — a chaotic event outside any faction's control.
Record it with an oracle query:

```
d: 2d6 → 3,3  DOUBLES
? Force of Nature relevant to current fiction?
- Yes → [E:HarborStorm | emerges]
=> All sea transit actions opposed next turn
=> Saivorn's naval advantage is temporarily neutralized
```

The Force of Nature is a prompt, not a requirement. Use it when
it fits the fiction and creates genuine new complications —
sparingly, once or twice per game at most.

### 3.5 Adjudication Result (`->`)

The `->` line declares the adjudicated outcome — what actually
happened, following from the leverage grade and the dice.

```
-> Success
-> Partial success — review opens, but scope is disputed
-> Failure — Corenth does not respond
-> Success, and... Essaveth's garrison stands down unprompted
-> Failure, and... Caldrath learns of the attempt
```

The result should be Reasonable (proportionate to the fiction),
Actionable (it leaves something for other factions to respond to),
and Traceable (it points to earlier events). These are the OSG
RAT criteria. When playing solo, check them with brief oracle
queries before writing the outcome:

```
? RAT: Is this outcome actionable for other factions?
- Yes → write a visible hook into the Report
```

### 3.6 Consequences and Board State (`=>`)

The `=>` symbol records what changes in the world as a result of
the adjudicated outcome. In OSG, this means faction positions,
contested zones, clock progress, and anything other factions
will now have to contend with.

```
=> [Fac:Caldrath | pos:army held at border | Clock:LiquidityReview 1/3]
=> Caldrath's chancellor publicly accuses Meranto of bad faith
=> [Fac:Meranto | pos:diplomatically exposed in Corenth]
```

Chain multiple `=>` lines for cascading effects. Every outcome
should leave at least one visible hook for another faction.

### 3.7 The Report Block

At the end of each turn, the referee publishes a public Report.
In solo play, write it yourself as the oracle-referee, summarizing
outcomes and seeding hooks for the next turn.

```

 Meranto's debt clause stalls Caldrath's army at the border.
    Saivorn's diplomatic overture is rebuffed — and Caldrath now
    knows. Essaveth has gone quiet. The Conclave has summoned
    representatives from all factions to the temple complex.
    Next turn: the question is who arrives first. 
```

The `` delimiters separate the Report narrative from the
notation log. The Report is public fiction; everything inside
it is known to all factions.

## 4. Optional Layers

### 4.1 Persistent Elements

#### 4.1.1 Faction Tags (`[Fac:]`)

Track faction state across turns. Establish at `[T0]` and update
as the board changes.

```
[Fac:Meranto | obj:control Corenth debt leverage
             | pos:agents everywhere, no map token
             | bon:"Emergency Recall" 1/1, "Debt Clause" 2/2]
```

Fields:

- `obj:` — Faction's objectives (from the Brief; does not change)
- `pos:` — Current position on the board (updates each turn)
- `bon:` — Spendable bonuses with remaining uses

Updating faction state:

```
[Fac:Caldrath | pos:army held at border]        — position update
[Fac:Caldrath | pos:pass occupied]              — after successful action
[Fac:Saivorn  | pos:diplomatically exposed]     — consequence of failure
```

You do not need to restate all fields on every update — show only
what changed.

#### 4.1.2 Spendable Bonuses (`[Bon:]`)

Bonuses are named, one-use (or limited-use) assets tied to a
faction's starting position. They are spent in the leverage
argument to shift leverage from Weak to Strong for one action.

```
[Bon:"Debt Clause" 2/2]      — full, two uses remaining
[Bon:"Debt Clause" 1/2]      — one use spent
[Bon:"Debt Clause" 0/2]      — exhausted
```

A bonus should be contextually bounded — its narrative name
indicates when it applies. `"Debt Clause"` applies to financial
and legal arguments; it does not apply to a military engagement.
A spent bonus cannot be recovered.

#### 4.1.3 Rival / NPA Tags (`[Rival:]`)

For factions you do not control, track what is publicly known
from Reports and what has been revealed through oracle play.

```
[Rival:Caldrath | obj:military dominance | pos:army at border
               | behavior:aggressive; moves on Corenth if unopposed T3+]
[Rival:Saivorn  | obj:secure port access | pos:coast
               | behavior:opportunistic if Caldrath weakened]
[Rival:Conclave | obj:Corenth autonomy   | pos:temple complex
               | behavior:mediates; escalates if temple threatened]
```

The `behavior:` field is for solo play — it defines the NPA's
decision logic for oracle-driven action generation.

#### 4.1.4 Locations (`[L:]`)

Mark significant locations and their current control state.

```
[L:Corenth       | contested | Conclave extraterritorial temple]
[L:Northern Pass | Caldrath-occupied]
[L:Harbour Mouth | Saivorn-patrolled]
```

#### 4.1.5 Objectives (`[Obj:]`)

Track your faction's objectives from the Brief. Mark them at
game end for the debrief.

```
[Obj:Control Corenth debt leverage      | Open]
[Obj:Prevent Caldrath military presence | Open]
[Obj:Isolate Saivorn from Conclave      | Achieved T4]
[Obj:Preserve Meranto financial network | Failed]
```

#### 4.1.6 Events and Clocks (`[E:]`, `Clock:`)

Use standard Lonelog clock notation for escalating threats and
timed pressures.

```
[E:CaldhrathLiquidity | Clock: 1/3]   — Caldrath treasury under review
[E:ConclaveSummit     | Clock: 0/1]   — imminent
[E:EssavethResistance | Clock: 2/4]   — building
```

### 4.2 Turn Zero (`[T0]`)

Turn Zero is the pre-game clarification session. Log world
assumptions, faction setups, and any rulings made before
Turn 1 here.

```
[T0]
rule: Unopposed actions succeed; the referee still determines
      how they land — every success reshapes the board
rule: Talking is free — negotiation between factions costs no
      turn; only what you actually do costs your action
rule: One action per faction per turn; two things in one
      action will be returned for revision
assumption: Caldrath's army is one day's march from Corenth
            at game start
assumption: Meranto has no physical presence on the map —
            leverage only, no tokens

[Fac:Meranto | obj:control Corenth debt leverage
             | pos:agents everywhere, no map token
             | bon:"Emergency Recall" 1/1, "Debt Clause" 2/2]
[Rival:Caldrath  | obj:military dominance of Corenth
                 | pos:army at northern border
                 | behavior:aggressive; moves on Corenth if unopposed by T3]
[Rival:Saivorn   | obj:secure port access to Corenth
                 | pos:coast, two deep-water ports
                 | behavior:opportunistic if Caldrath weakened]
[Rival:Essaveth  | obj:preserve pass autonomy
                 | pos:northern passes, small garrison
                 | behavior:defensive; seeks alliance if threatened]
[Rival:Conclave  | obj:Corenth remains neutral
                 | pos:temple complex, extraterritorial
                 | behavior:mediates; escalates if temple threatened]
```

### 4.3 Random Tables and Oracle

For solo play, use standard Lonelog oracle and table notation
to generate NPA arguments, Force of Nature events, and
adjudication inputs.

```
? What does Caldrath attempt this turn?
tbl: NPAAction d6
  1 Hold position
  2 Apply diplomatic pressure
  3 Military advance
  4 Economic blockade
  5 Alliance approach
  6 Escalate — open aggression
tbl: NPAAction d6 → 3
- Military advance

! Caldrath
  act: [generated from table result]
  ...
```

Inline table definitions make the log self-contained — readers
see the full table and the result without needing external tools.

### 4.4 Meta Notes

Step outside the fiction for rulings, design notes, and
retrospective annotations.

```
(rule: NPA behavior tables rolled before each turn, results private
       until logged as ! actions)
(post: Turn 3 reconstructed from notes — dialogue is paraphrased)
(note: Caldrath player absent Turn 2; NPA holding action used)
```

## 5. Optional Structure

### 5.1 Game Header

```yaml
---
title: The Corentine Crisis
system: Open Strategy Game
hack: Factionlog
turns: 6
faction: House Meranto
date: 2026-05-01
---
```

### 5.2 Session Header

For multi-session games:

```
## Session 1
Date: 2026-05-01
Turns: 1–2
Recap: Turn Zero complete. Factions established.
       Caldrath is already moving.
Goals: Delay Caldrath; open a quiet channel to Essaveth.
```

### 5.3 Debrief

At game end, record each faction's self-assessment:

```
[Debrief]
Meranto:  Debt Clause delayed Caldrath two turns. Conclave
          alliance failed. Financial network intact.
          Obj:1 Achieved | Obj:2 Partial | Obj:3 Failed

[Obj:Control Corenth debt leverage      | Achieved]
[Obj:Prevent Caldrath military presence | Partial]
[Obj:Preserve Meranto financial network | Achieved]
```

## 6. Complete Turn Example

A full two-faction turn from *The Corentine Crisis*, Turn 2.

```
@ Meranto
  act: Approach Essaveth privately — offer to underwrite their
       garrison costs in exchange for pass access rights
  out: Establish a quiet alliance before Caldrath occupies the pass
  lev: Essaveth is under military pressure and has no defensive pact.
       Meranto holds their small infrastructure debt. We can offer
       immediate financial relief — something Caldrath cannot match.
       [Bon:"Debt Clause" 2/2 → 1/2]
[Lev:Strong]
d: 2d6 → 4,6  keep high → 6
-> Success, and... Essaveth accepts — and volunteers intelligence
   on Caldrath's supply line through the pass
=> [Fac:Essaveth | pos:quiet Meranto ally | Bon:IntelligenceFile 1/1]
=> [Fac:Meranto  | pos:pass access secured | bon:"Debt Clause" 1/2]
=> Essaveth's public posture remains neutral — the alliance is secret

! Caldrath
  act: Send an envoy to Essaveth demanding right of passage for
       the army, framed as a treaty obligation
  out: Secure legal cover for army movement through the pass
  lev: Largest army on the peninsula; Essaveth owes historical
       obligations from the old compact; the army is already visible
       at the border — implicit threat requires no elaboration
[Lev:Strong]
d: 2d6 → 2,5  keep high → 5
-> Partial success — Essaveth stalls, citing the need for
   Conclave ratification before any troop movement
=> [Fac:Caldrath | pos:army delayed at border | Clock:PassNegotiation 1/3]
=> Caldrath's envoy returns empty-handed — publicly noted

! Conclave (NPA)
? Conclave action this turn — does the summit invitation stand?
- Yes, but... → Invitation sent, but with conditions
  act: Issue a formal invitation to all factions for a Corenth
       summit, citing the army movements as a threat to the
       neutral zone
  out: Establish itself as the legitimate mediating authority
       before any faction can act unilaterally in Corenth
  lev: Extraterritorial status; all factions have obligations
       under the old treaty; the neutral city gives the Conclave
       standing no other actor can claim
[Lev:Strong]
d: 2d6 → 3,5  keep high → 5
-> Success — all factions receive the invitation
=> [E:ConclaveSummit | Clock: 1/1] — summit is imminent, Turn 3
=> Every faction must now decide: attend, refuse, or act before it

Caldrath's envoy returns from Essaveth without an answer.
    The Conclave has summoned all factions to Corenth.
    The summit will be held next turn. Essaveth has gone quiet.
    Meranto's agents were seen near the northern pass.
    The question now is who arrives in Corenth, and how. 
```

## 7. Best Practices

**Do** write the full three-part argument before grading leverage.
The leverage grade follows from the argument — not the other way around.

**Don't** write the leverage grade and then construct an argument
to justify it. The argument is the game.

**Do** log `!` rival actions with the same argument structure as
your own, even when reconstructed from the Report or oracle.

**Don't** log rival actions as bare outcomes: `! Caldrath moves army.`
The argument is what makes the log traceable.

**Do** let the `->` outcome be proportionate and leave a hook.
Every result — success or failure — should give at least one other
faction something to respond to.

**Don't** write outcomes that close the fiction: `-> Success.
Caldrath is defeated.` OSG ends after a fixed number of turns,
not when one faction is eliminated.

**Do** tick down `[Bon:]` tags at the moment of spend, inside the
leverage argument where they appear.

**Don't** track bonuses separately from the argument. The spend is
part of the case for why the action should succeed.

**Do** write the `[Report:N]` block in the voice of the public
record — what all factions know. Keep private outcomes out of it.

**Don't** put private intelligence or secret alliance details in
the Report. Log them in `=>` consequences under your faction's
block, not in the public summary.

## 8. Quick Reference

### Core Symbols

| Symbol | Meaning                                     | Example                        |
| ------ | ------------------------------------------- | ------------------------------ |
| `@`    | Your faction's action (three-part argument) | `@ Meranto`                    |
| `!`    | Rival / NPA action                          | `! Caldrath`                   |
| `d:`   | OSG dice roll (2d6 keep high/low)           | `d: 2d6 → 4,6  keep high → 6`  |
| `->`   | Adjudicated outcome                         | `-> Partial success`           |
| `=>`   | Board-state consequence                     | `=> [Fac:Caldrath | pos:...]`  |
| `?`    | Oracle query (solo, optional)               | `? What does Saivorn attempt?` |

### Action Argument

```
@ FactionName
  act: What specifically are you doing?
  out: What result do you want?
  lev: Why is this likely to produce that outcome?
[Lev:Strong] or [Lev:Weak]
d: 2d6 → H,L  keep high/low → result
-> outcome
=> consequence
```

### Dice Results

| Kept die | Outcome                                               |
|----------|-------------------------------------------------------|
| 6        | Success, and... (something especially good may occur) |
| 4–5      | Desired outcome occurs                                |
| 2–3      | Outcome worse than desired                            |
| 1        | Failure, and... (something especially bad may occur)  |
| Doubles  | Potential Force of Nature — query oracle              |

### Tags

| Tag                      | Purpose                | Example                                |
|--------------------------|------------------------|----------------------------------------|
| `[Fac:Name \| ...]`      | Your faction state     | `[Fac:Meranto \| pos:...]`             |
| `[Rival:Name \| ...]`    | Rival / NPA state      | `[Rival:Caldrath \| behavior:...]`     |
| `[Lev:Strong/Weak]`      | Leverage grade         | `[Lev:Strong]`                         |
| `[Bon:Name N/max]`       | Spendable bonus        | `[Bon:"Debt Clause" 1/2]`              |
| `[Obj:... \| state]`     | Faction objective      | `[Obj:Isolate Saivorn \| Achieved T4]` |
| `[L:Name \| ...]`        | Location state         | `[L:Corenth \| contested]`             |
| `[E:Name \| Clock: X/Y]` | Event / clock          | `[E:ConclaveSummit \| Clock: 1/1]`     |
| `[Turn:N]`               | Turn marker            | `[Turn:3]`                             |
| `[T0]`                   | Turn Zero block        | `[T0]`                                 |
| `[Report:N]`             | Public report block    | `[Report:2]`                           |
| `[Debrief]`              | End-of-game assessment | `[Debrief]`                            |

## 9. FAQ

**Q: Do I need to write the full three-part argument every turn?**
A: Yes, always — but compact form is fine for fast play.
`act/out/lev` can each be a single line. What matters is that all
three are present. The leverage line is what gets graded; without
it, the roll has no context.

**Q: What if I genuinely don't know what leverage grade to give
a rival's action?**
A: Use an oracle query: `? Is Caldrath's leverage Strong here?`
Then commit to the answer and grade accordingly. The grade should
follow from the fiction, not from what result you want.

**Q: Can I play Factionlog with a live referee instead of solo?**
A: Yes. In a live game, the referee grades leverage and adjudicates
outside the log — you record the grade and outcome. The `!` blocks
log other players' actions as they are revealed in the Report.
The `?` oracle notation is not needed.

**Q: How do I handle a faction that drops out mid-game?**
A: Convert them to an NPA. Add a `behavior:` field to their
`[Rival:]` tag and note the transition:

```
[Rival:Essaveth | pos:occupied | behavior:passive; holds position
                | note: player absent from T4, NPA from T4]
```

**Q: What's the difference between `[Rival:]` and `[Fac:]`?**
A: `[Fac:]` is your faction — the one whose action you submit with
`@`. `[Rival:]` is everyone else. In a group game with a scribe,
you might have multiple `[Fac:]` tags, one per player-controlled
faction.

**Q: Does Factionlog work with any OSG scenario?**
A: Yes. The notation is system-agnostic within the OSG framework —
it assumes the three-part action structure, the 2d6 keep-high/low
mechanic, and the turn/report cycle. Scenario-specific mechanics
(spendable bonuses, NPAs, maps) are all optional layers.

**Q: How does Factionlog relate to Lonelog add-ons?**
A: Factionlog is a fork, not an add-on. It replaces the solo
character-action model entirely. Lonelog add-ons (Combat, Dungeon
Crawling, Resource Tracking) are not designed for faction-scale
play and are not compatible with Factionlog without adaptation.

## Credits & License

© 2026 Roberto Bisceglie

Factionlog is forked from Lonelog v1.3.0 by Roberto Bisceglie. It shares Lonelog's core philosophy, tag system, and structural conventions, adapted for Open Strategy Game play.

The Open Strategy Game format was defined by Chris McDowall, originating in the Matrix Game tradition established by Chris Engle and Tom Mouat. This document draws on the practice and analysis of Chris McDowall and Sam Doebler.

Version History:

- v 0.1.0  Initial draft

This work is licensed under the Creative Commons
Attribution-ShareAlike 4.0 International License.
Session logs and play records created using this notation
are your own work and are not subject to this license.
