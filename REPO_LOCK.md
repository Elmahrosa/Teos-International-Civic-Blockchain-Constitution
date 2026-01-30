# 🔒 REPO_LOCK.md — Canonical Hash Registry & Repository Lock

**Repository:** Teos-International-Civic-Blockchain-Constitution (ICBC)  
**Maintainer / Coordinating Authority:** Elmahrosa International  
**Governing Law & Venue:** Cairo, Arab Republic of Egypt  
**Status:** **CONSTITUTIONALLY LOCKED — CANONICAL SOURCE OF TRUTH**

---

## 1. Purpose & Legal Effect

This document constitutes the **Canonical Hash Registry** and **Repository Lock Declaration** for the
**International Civic Blockchain Constitution (ICBC)**.

It definitively establishes:

- Which documents are **constitutionally binding**
- Which cryptographic hashes are **legally authoritative**
- The exclusive conditions under which **any modification is valid**

**Any discrepancy** between a document’s content and its registered SHA-256 hash renders that document
**non-canonical, void, and without legal effect**.

This file is **operative law**, not descriptive text.

---

## 2. Constitutional Authority

This Registry is binding under:

- **International Civic Blockchain Constitution (ICBC)**
- **Article IX — Cryptographic Enforcement of Authority**
- **ICBC-ANNEX-CI-01 — Cryptographic Integrity & Evidentiary Status**

This file is the **single source of truth** for document integrity within this repository.

---

## 3. Canonical Hash Registry (Authoritative)

### Hash Standard
- Algorithm: **SHA-256**
- Encoding: **UTF-8**
- Digest format: **lowercase hexadecimal**

| File Reference                               | SHA-256 Hash                                                       | Status | Date Locked    | Version |
|--------------------------------------------|---------------------------------------------------------------------|--------|----------------|---------|
| `CONSTITUTION.md`                            | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0.0   |
| `LICENSE.md`                                 | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0.0   |
| `06_PAI_RECEIPT_SPEC.md`                     | `571592d856dcc51999b3a766eb4ce1992c7921890376b9b963fce43bca13449e` | LOCKED | 2026-01-28     | PAI-1.0 |
| `docs/09_AUTHORIZATION_STAMP_SPEC.md`        | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0.0   |
| `contracts/PAIRegistry.contract.md`          | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0.0   |
| `ministerial/PAI_Receipt_Spec_Executive.pdf` | `78db533877c9b71aaad5539658cbd0dba8211a3d58ecbcf47dbdd00db92c18e0` | LOCKED | 2026-01-28     | 1.0.0   |
| `annexes/ICBC-ANNEX-CI-01.md`                | `<INSERT_HASH>`                                                    | LOCKED | `<YYYY-MM-DD>` | 1.0.0   |

> ⚠️ **Any file listed above whose computed hash does not exactly match this registry
> SHALL be deemed altered and constitutionally void.**

---

## 4. Root-of-Trust Definition (Exclusive)

The following files constitute the **exclusive Root of Trust** for this repository:

### Authoritative Root Files (MUST EXIST)
- `REPO_LOCK.md`
- `CONSTITUTION.md`
- `LICENSE.md`
- `docs/AUTHORITY-CHAIN.md`

### Explicitly Non-Authoritative Mirrors
- `docs/CONSTITUTION.md` — derived mirror of `CONSTITUTION.md`  
  *(Must never be edited directly)*

Any modification to Root-of-Trust files **MUST** be accompanied by:
- Regeneration of cryptographic hashes
- Explicit update to this Registry
- A **signed commit** by the Coordinating Authority (GPG or SSH signing)

---

## 5. Verification Procedure

Verification may be performed by **any auditor, regulator, ministry, or court** using:

```bash
sha256sum <file>
