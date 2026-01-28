# PAI Submission Receipt — Cryptographic Specification

**Objective:** Create an immutable, auditable receipt proving a sovereign official acknowledged the ICBC and TESL at a specific timestamp **before** receiving restricted technical docs.

## Receipt data model (canonical fields)

- `receipt_version`: string (e.g., `PAI-1.0`)
- `applicant_id`: canonical identifier for signatory (organization name + official ID)
- `applicant_pubkey`: public key of the signing authority
- `tesl_document_hash`: SHA-256 hash of the signed TESL PDF (hex)
- `authority_chain_hash`: SHA-256 of the canonical `ICBC/AUTHORITY-CHAIN.md` used for this submission (hex)
- `pai_form_hash`: SHA-256 of canonical serialized PAI form data (canonical JSON)
- `timestamp_utc`: ISO8601 UTC timestamp (e.g., `2026-01-28T15:04:05Z`)
- `jurisdiction_annex`: reference or hash to jurisdictional TESL annex (optional)
- `pki_signature`: signature of the applicant over the canonical receipt representation
- `registrar_signature`: signature of TEOS registrar (Governance) acknowledging receipt

## Canonicalization & hashing

1. Serialize fields (`applicant_id`, `tesl_document_hash`, `authority_chain_hash`, `pai_form_hash`, `timestamp_utc`, `jurisdiction_annex`) in **canonical JSON** (lexicographic key order).
2. Compute:

```text
RECEIPT_HASH = SHA-256(canonical_json_string)
