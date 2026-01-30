# 🔒 **REPO_LOCK.md — Canonical Hash Registry & Repository Lock**

*(UPDATED — Authority Chain Added)*

**Repository:** Teos-International-Civic-Blockchain-Constitution (ICBC)
**Maintainer / Coordinating Authority:** Elmahrosa International
**Governing Law & Venue:** Cairo, Arab Republic of Egypt
**Status:** **CONSTITUTIONALLY LOCKED — CANONICAL SOURCE OF TRUTH**

---

## 1. Purpose & Legal Effect

This document constitutes the **Canonical Hash Registry** and **Repository Lock Declaration** for the
**International Civic Blockchain Constitution (ICBC)**.

It definitively establishes:

* Which documents are **constitutionally binding**
* Which cryptographic hashes are **legally authoritative**
* The exclusive conditions under which **any modification is valid**

Any discrepancy between a document’s content and its registered hash renders it
**non-canonical, void, and without legal effect**.

This file is **operative law**, not descriptive documentation.

---

## 2. Constitutional Authority

This Registry is binding under:

* **International Civic Blockchain Constitution (ICBC)**
* **Article IX — Cryptographic Enforcement of Authority**
* **ICBC-ANNEX-CI-01 — Cryptographic Integrity & Evidentiary Status**

This file is the **single source of truth** for document integrity in this repository.

---

## 3. Canonical Hash Registry (Authoritative)

**Hash Standard**

* Algorithm: **SHA-256**
* Encoding: **UTF-8**
* Digest format: **lowercase hexadecimal**

| File Reference                        | SHA-256 Hash                                                       | Status | Date Locked    | Version |
| ------------------------------------- | ------------------------------------------------------------------ | ------ | -------------- | ------- |
| `CONSTITUTION.md`                     | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0.0   |
| `LICENSE.md`                          | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0.0   |
| `docs/AUTHORITY-CHAIN.md`             | `571592d856dcc51999b3a766eb4ce1992c7921890376b9b963fce43bca13449e` | LOCKED | 2026-01-28     | 1.0.0   |
| `06_PAI_RECEIPT_SPEC.md`              | `571592d856dcc51999b3a766eb4ce1992c7921890376b9b963fce43bca13449e` | LOCKED | 2026-01-28     | PAI-1.0 |
| `docs/09_AUTHORIZATION_STAMP_SPEC.md` | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0     |
| `contracts/PAIRegistry.contract.md`   | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0     |
| `annexes/ICBC-ANNEX-CI-01.md`         | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0.0   |

> ⚠️ **Any file listed above whose computed hash does not exactly match this registry
> SHALL be deemed altered and constitutionally void.**

---

## 4. Root-of-Trust Definition (Exclusive)

The following files constitute the **exclusive Root of Trust**:

**Authoritative Root Files**

* `REPO_LOCK.md`
* `CONSTITUTION.md`
* `LICENSE.md`
* `docs/AUTHORITY-CHAIN.md`

**Explicitly Non-Authoritative Mirrors**

* `docs/CONSTITUTION.md` *(derived mirror — must never be edited directly)*

Any modification to Root-of-Trust files **MUST** include:

* Regenerated SHA-256 hashes
* Update to this Registry
* **Signed commit** by the Coordinating Authority

---

## 5. Verification Procedure (Public & Court-Admissible)

```bash
sha256sum docs/AUTHORITY-CHAIN.md
```

Expected output **must equal**:

```
571592d856dcc51999b3a766eb4ce1992c7921890376b9b963fce43bca13449e
```

No proprietary tooling is required.

---

## 6. Repository Lock — Finality Declaration

As of the signed commit establishing this Registry:

* Constitutional texts
* Authority-chain doctrine
* Cryptographic enforcement mechanisms
* PAI & Authorization frameworks

are **final, authoritative, and locked**.

No CI system, automation, maintainer, or vote may override this lock.

---

## 7. Permitted Non-Breaking Changes

Allowed **without breaking constitutional lock**:

* Translations (Arabic, French, etc.)
* Rendered outputs (PDF / HTML)
* Educational material
* Tooling or CI that does **not** alter locked files

---

## 8. Amendment Rules (Strict)

No registry entry may be modified unless **all** conditions occur:

1. Formal constitutional amendment
2. Explicit version increment
3. Publication of new SHA-256 hashes
4. Direct update to this Registry
5. **Signed commit** by Coordinating Authority

Absent all five → **no legal effect**.

---

## 9. Supremacy Clause

In case of conflict:

1. **ICBC prevails**
2. **ICBC-ANNEX-CI-01 prevails**
3. **This Registry prevails** over any unstamped artifact

---

## 10. Declaration & Signature

This Registry is **active, binding, and enforceable** upon signed commit.

**Declared by:** Elmahrosa International
**Founder & Constitutional Authority:** Ayman Seif
**Date:** 2026-01-28

**Issued under one sovereign charter.**

---
