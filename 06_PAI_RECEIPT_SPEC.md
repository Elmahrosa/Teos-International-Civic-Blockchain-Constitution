# PAI Submission Receipt — Cryptographic Specification

**Status:** Canonical Specification  
**Scope:** Right to Engage (Pre-Execution)  
**Enforcement Level:** Constitutional (ICBC)

---

## Purpose

The **PAI (Preliminary Access Inquiry) Submission Receipt** provides
**cryptographically verifiable, non-repudiable proof** that a sovereign
or institutional authority has formally acknowledged the ICBC and TESL
*before* receiving restricted technical documentation or execution rights.

The PAI Receipt establishes the **right to engage**.  
It does **not** authorize execution.

Execution authorization is governed separately by the **Authorization Stamp**.

---

## Hash Declaration (Canonical)

All PAI Receipts **MUST** use the following hash standard:

```text
Hash Algorithm: SHA-256
Encoding: UTF-8
Digest Format: Hexadecimal (lowercase)
````

Example (illustrative):

```text
Hash Algorithm: SHA-256
Hash Value (Hex): 571592d856dcc51999b3a766eb4ce1992c7921890376b9b963fce43bca13449e
```

Any receipt using a different algorithm or encoding is **invalid**.

---

## Receipt Data Model (Canonical Fields)

All fields listed below are **mandatory** unless explicitly marked optional.
Missing or malformed fields invalidate the receipt.

| Field                  | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| `receipt_version`      | Version identifier (e.g., `PAI-1.0`)                               |
| `applicant_id`         | Canonical identifier of signatory (institution name + official ID) |
| `applicant_pubkey`     | Public key of the signing authority                                |
| `tesl_document_hash`   | SHA-256 hash of the signed TESL document (hex)                     |
| `authority_chain_hash` | SHA-256 hash of the canonical Authority Chain document             |
| `pai_form_hash`        | SHA-256 hash of the canonical PAI form payload                     |
| `timestamp_utc`        | ISO-8601 UTC timestamp of signing                                  |
| `jurisdiction_annex`   | Hash or reference to jurisdictional annex (optional)               |
| `applicant_signature`  | Signature over `RECEIPT_HASH` by applicant                         |
| `registrar_signature`  | Signature acknowledging receipt by TEOS registrar                  |

---

## Canonicalization Rules

1. Serialize the following fields into **canonical JSON**:

   * `applicant_id`
   * `tesl_document_hash`
   * `authority_chain_hash`
   * `pai_form_hash`
   * `timestamp_utc`
   * `jurisdiction_annex` (if present)

2. Canonical JSON requirements:

   * Lexicographically sorted keys
   * UTF-8 encoding
   * No whitespace ambiguity
   * Deterministic ordering

---

## Receipt Hash Computation

Compute the receipt hash as follows:

```text
RECEIPT_HASH = SHA-256(canonical_json_string)
```

`RECEIPT_HASH` is the **single authoritative identifier** for the PAI Receipt.

---

## Signature Model

### Applicant Signature

```text
applicant_signature = Sign(applicant_private_key, RECEIPT_HASH)
```

### Registrar Signature

```text
registrar_signature = Sign(registrar_private_key, RECEIPT_HASH || applicant_signature)
```

* One cryptographic scheme MUST be used system-wide (Ed25519 or ECDSA).
* Public keys MUST be registered and revocation-tracked.

---

## On-Chain Anchoring

Upon acceptance, the registrar **MUST** anchor the receipt by emitting
an immutable event containing:

* `RECEIPT_HASH`
* `applicant_pubkey`
* `registrar_pubkey`
* `anchored_at_chain_ts`
* `applicant_signature`
* `registrar_signature`
* `offchain_pointer` (CID or vault record ID)

The on-chain anchor serves as **proof of existence and timestamp**.

---

## Off-Chain Storage Requirements

* Store the signed TESL PDF and canonical JSON in encrypted storage
  controlled by the Vault Registry.
* The `offchain_pointer` MUST resolve to immutable content.
* Off-chain data MAY be private; the on-chain hash is public and sufficient for audit.

---

## Verification Procedure

To verify a PAI Receipt:

1. Fetch the on-chain receipt event.
2. Retrieve `RECEIPT_HASH`.
3. Fetch the off-chain canonical JSON via `offchain_pointer`.
4. Recompute SHA-256 and compare to `RECEIPT_HASH`.
5. Verify `applicant_signature`.
6. Verify `registrar_signature`.

If any step fails, the receipt is **invalid**.

---

## Relationship to Authorization Stamp

* **PAI Receipt** → proves the *right to engage*
* **Authorization Stamp** → proves the *right to execute*

A valid PAI Receipt **does not** authorize execution.

Execution requires a valid Authorization Stamp as defined in:

```
docs/09_AUTHORIZATION_STAMP_SPEC.md
```

---

## Non-Negotiable Rule

> A PAI Receipt establishes acknowledgement and eligibility only.
> It **never** authorizes execution.

Execution without an Authorization Stamp is **constitutionally void**.

---

