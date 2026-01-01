# Validator Rules

## Purpose
These rules define how Citizens, Validators, and Founders participate in governance under the International Civic Blockchain Charter.

---

## Badge Roles & Voting Weights
- **Citizen**
  - Weight: 1 vote
  - Scope: Petition approval, community proposals
  - Limits: Cannot override treasury or compliance rules

- **Validator**
  - Weight: 5 votes
  - Scope: Proposal validation, treasury enforcement, compliance audits
  - Limits: Must log all actions in `audits/transparency_log.md`

- **Founder**
  - Weight: 10 votes
  - Scope: Module activation, treasury custody, override in governance stalemates
  - Limits: Requires dual verification and ritual logging in `chapter_resurrection.md`

---

## Governance Flow
1. **Proposal Submission**
   - Citizens submit proposals with petition signature.
   - Logged in `governance/proposal_schema.json`.

2. **Validation**
   - Validators review proposals.
   - Treasury rules checked against `compliance/treasury_rules.md`.

3. **Voting**
   - Weighted votes applied: Citizen (1), Validator (5), Founder (10).
   - Results logged in `audits/transparency_log.md`.

4. **Execution**
   - Founder badge required for module activation.
   - Dual verification enforced via `vault_registry.json`.

---

## Compliance
- All governance actions must be timestamped and signed.
- Badge schema enforced via `governance/badge_schema.json`.
- Violations logged and reviewed by Validators.

---

# TEOS Validator Governance Rules

## Validator Duties
- Maintain **99% network uptime** to retain full voting weight and governance privileges.  
- Participate in **all protocol upgrade and constitutional amendment votes**.  
- Prohibit submission of **malicious, fraudulent, or invalid block proposals**.  
- Ensure all governance votes are **immutably logged, auditable, and publicly verifiable**.  

---

## Slashing & Penalties
- **Uptime below 95%** → Automatic **50% reduction in voting weight**.  
- **Three consecutive missed governance votes** → Trigger a **validator suspension proposal**.  
- Proven **fraudulent or malicious validation activity** → **Permanent removal from validator set**.  

---

## Governance Voting Standards
- Any ecosystem proposal requires **⅔ validator supermajority approval**.  
- Constitutional amendments require a minimum **80% network quorum** participation.  
- Amendment motions cannot pass without at least **80% quorum** and **⅔ consensus**.  

---

## Constitutional Amendment Voting
- **80% quorum** is mandatory for amendment vote legitimacy.  
- A **⅔ validator consensus** must be achieved to ratify constitutional changes.  
- No amendment is considered valid if quorum or consensus thresholds are unmet.  
