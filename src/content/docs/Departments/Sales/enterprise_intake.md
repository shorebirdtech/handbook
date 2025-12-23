# Shorebird Enterprise Contract Intake & Legal Risk Checklist

**Purpose** This document serves as a lightweight **contract‑risk checklist for
Shorebird**. It is intentionally simple and exists to document shared judgment
rather than impose process.

Its goal is to identify structural contract risk early in customer negotiations
before Shorebird commits significant engineering time or escalates to outside
counsel.

It assumes Shorebird is still a:

* a **SaaS‑first company (Shorebird Code Push)**
* offering **no ongoing services**
* allowing **only tightly scoped, fixed‑price, one‑time deliverables** when
  appropriate

---

## Step 0: Paper Reality Check (Gate)

**Goal:** Decide which lane we are in.

Ask explicitly:

> “Can you sign vendor SaaS paper or a short SaaS addendum, or is your paper
> mandatory?”

* ☐ Customer can sign our SaaS paper / short addendum → Proceed with
  **Validation Path** (lighter checks)

* ☐ Customer requires their paper → Proceed with **Risk Path** (hard stops
  apply)

If unclear → treat as **their paper**.

---

# Validation Path (Our Paper)

*Used when the customer can sign our SaaS agreement or a short addendum.*

## 1. Deal Shape (Confirm SaaS + Optional Fixed Deliverables)

* ☐ Core relationship is a SaaS subscription
* ☐ Any deliverables are:

  * ☐ Fixed‑price
  * ☐ One‑time
  * ☐ Separately scoped
* ☐ No ongoing services, retainer, or staff augmentation
* ☐ No acceptance testing tied to the SaaS product

**Stop if:** Customer expects ongoing services, open‑ended scope, or recurring
delivery obligations.

---

## 2. Commercial & Exit Basics

* ☐ Term‑based subscription with renewal or non‑renewal
* ☐ We can terminate or decline renewal
* ☐ Payment terms understood

---

## 3. Operational Expectations

* ☐ Support expectations match our published tiers
* ☐ No bespoke SLAs or penalties
* ☐ Security review is questionnaire‑based (not audit‑based)

---

## 4. Champion & Strategic Value

* ☐ Champion owns budget and urgency
* ☐ Any logo/reference expectations are explicit (or acknowledged as none)

**If all green:** Legal review should be straightforward.

---

# Risk Path (Their Paper)

*Used when the customer insists on their agreement. This is the high‑risk path.*

## 1. Services / Deliverables Scope Check (Hard Stop)

**We do not offer ongoing services.** Fixed‑price, one‑time deliverables may be
acceptable if tightly contained.

* ☐ SaaS is the primary relationship
* ☐ Any deliverables are fixed‑price, one‑time, and separately scoped
* ☐ No SOWs that imply ongoing services, milestones, or staffing
* ☐ No acceptance regimes that bleed into the SaaS subscription
* ☐ No exit or transition obligations tied to deliverables

**HARD STOP:** Any ongoing services, open‑ended deliverables, or work‑for‑hire
concepts touching the core product.

---

## 2. Termination Symmetry (Hard Stop)

**Goal:** We must be able to walk away.

* ☐ Mutual termination for convenience, or
* ☐ At minimum, clean non‑renewal with no survival of licenses

**HARD STOP:** Customer can terminate for convenience but we cannot.

---

## 3. IP Containment (Hard Stop)

**Goal:** Protect the product.

* ☐ No perpetual or irrevocable rights to the SaaS
* ☐ All licenses tied to active subscription term
* ☐ No rights to modify, create derivatives of, or exploit provider materials

**HARD STOP:** Any ownership or perpetual license to materials created “in
connection with” the SaaS.

---

## 4. Liability Is Real (Hard Stop‑ish)

**Goal:** Downside must be bounded.

* ☐ Liability cap applies meaningfully
* ☐ IP, data, security, confidentiality not fully uncapped

**Red flag:** Cap exists but is carved out for all meaningful risks.

---

## 5. Operational Load vs. Deal Size

* ☐ SLAs are best‑effort
* ☐ No audit of subprocessors or cloud providers
* ☐ No unpaid reporting or transition obligations

**Rule of thumb:** 24×7 SLAs or audit rights ⇒ six‑figure ARR minimum.

---

## 6. Champion Reality Check

* ☐ Champion can escalate legal exceptions
* ☐ Exceptions for small vendors have happened before

**Red flag:** Supportive champion with no override power.

---

## AI-Assisted Contract Review (Optional but Recommended)

Before escalating to outside counsel, Shorebird may run customer-provided
agreements through AI-based contract analysis to **quickly surface high-risk
clauses**. This is intended to accelerate triage, not replace legal advice.

AI review is useful to flag:

* Perpetual or irrevocable IP licenses
* Work-for-hire or ownership language tied to deliverables
* One-sided termination or renewal rights
* Liability caps that are heavily carved out
* Broad indemnities (especially first-party or uncapped)
* Audit, SLA, or exit obligations inconsistent with SaaS

**Guidance:**

* Treat AI output as a *risk-highlighting tool*, not a decision-maker
* If AI flags any **Hard Stop** category below, pause immediately
* Do not attempt clause-by-clause negotiation based solely on AI output

---

# Decision Framework

### 🟢 GREEN — Proceed

* SaaS‑first relationship
* Any deliverables are fixed‑price and one‑time
* Clean exit
* IP contained
* Liability bounded

---

### 🟡 YELLOW — Proceed Only If MCV Met

* Minor asymmetry
* Heavy operational terms

→ Requires six‑figure ARR or clear strategic upside.

---

### 🔴 RED — Pause / Walk

Any **one** of:

* Ongoing services or open‑ended deliverables
* One‑sided termination
* Perpetual IP rights
* Effectively uncapped liability
* “Paper is non‑negotiable”

→ Pause early; preserve relationship.

---

## Internal Policy (One Sentence)

> We only engage enterprise customers on a SaaS‑only basis. If their paper
> introduces services, perpetual IP rights, or one‑sided termination, we pause
> unless the deal is six‑figure ARR and structurally rebalanced.
