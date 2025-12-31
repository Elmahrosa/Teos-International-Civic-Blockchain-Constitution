// tests/governance.test.js
const Ajv = require('ajv');
const fs = require('fs');
const path = require('path');
const schema = require('../governance/proposal_schema.json');

const ajv = new Ajv({ allErrors: true, strict: false });
const validate = ajv.compile(schema);

// Utility to log validation errors to a JSON file
function logErrors(testName, errors) {
  const logPath = path.join(__dirname, 'validation_errors.json');
  const existingLogs = fs.existsSync(logPath) ? JSON.parse(fs.readFileSync(logPath)) : {};
  existingLogs[testName] = errors;
  fs.writeFileSync(logPath, JSON.stringify(existingLogs, null, 2));
}

describe('Governance Proposal Schema Validation', () => {

  test('Valid governance proposal passes schema', () => {
    const proposal = {
      proposer: "Akvm3CbDN448fyD8qmQjowgBGpcYZtjuKFL4xT8PZhbF",
      badge: "Citizen",
      proposal: "Upgrade network parameters for civic node tier",
      type: "upgrade"
    };

    const valid = validate(proposal);
    if (!valid) logErrors('Valid Proposal', validate.errors);
    expect(valid).toBe(true);
  });

  test('Proposal missing required fields fails schema', () => {
    const missingFields = {
      proposer: "Akvm3CbDN448fyD8qmQjowgBGpcYZtjuKFL4xT8PZhbF",
      type: "upgrade"
    };

    const valid = validate(missingFields);
    if (valid) logErrors('Missing Fields', validate.errors);
    expect(valid).toBe(false);
  });

  test('Proposal with wrong field types fails schema', () => {
    const wrongTypes = {
      proposer: 12345,           // should be string
      badge: ["Citizen"],        // should be string
      proposal: true,            // should be string
      type: "upgrade"
    };

    const valid = validate(wrongTypes);
    if (valid) logErrors('Wrong Types', validate.errors);
    expect(valid).toBe(false);
  });

  test('Proposal with extra fields fails schema if additionalProperties=false', () => {
    const extraFields = {
      proposer: "Akvm3CbDN448fyD8qmQjowgBGpcYZtjuKFL4xT8PZhbF",
      badge: "Citizen",
      proposal: "Upgrade network parameters",
      type: "upgrade",
      unauthorized: "hack attempt"  // extra field
    };

    const valid = validate(extraFields);
    if (valid) logErrors('Extra Fields', validate.errors);
    expect(valid).toBe(false);
  });

  test('Empty proposal object fails schema', () => {
    const emptyProposal = {};
    const valid = validate(emptyProposal);
    if (valid) logErrors('Empty Object', validate.errors);
    expect(valid).toBe(false);
  });

  test('Proposal with empty strings fails if minLength>0 in schema', () => {
    const emptyStrings = {
      proposer: "",
      badge: "",
      proposal: "",
      type: ""
    };

    const valid = validate(emptyStrings);
    if (valid) logErrors('Empty Strings', validate.errors);
    expect(valid).toBe(false);
  });

  test('Proposal with invalid type value fails schema if enum is used', () => {
    const invalidType = {
      proposer: "Akvm3CbDN448fyD8qmQjowgBGpcYZtjuKFL4xT8PZhbF",
      badge: "Citizen",
      proposal: "Test invalid type",
      type: "delete"  // assuming schema only allows specific types like "upgrade", "vote", etc.
    };

    const valid = validate(invalidType);
    if (valid) logErrors('Invalid Enum Type', validate.errors);
    expect(valid).toBe(false);
  });

});
