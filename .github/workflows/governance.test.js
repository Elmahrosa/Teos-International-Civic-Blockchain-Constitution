name: TEOS Governance CI

on:
  push:
    branches: [main, dev]
  pull_request:
    branches: [main, dev]

jobs:
  test:
    name: Run Governance Schema Tests
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run governance tests
        run: npx jest tests/governance.test.js --coverage

      - name: Fail if validation errors exist
        run: |
          if [ -f tests/validation_errors.json ] && [ -s tests/validation_errors.json ]; then
            echo "❌ Governance schema validation errors detected!"
            cat tests/validation_errors.json
            exit 1
          else
            echo "✅ No governance schema validation errors found."
          fi

      - name: Upload test coverage
        uses: actions/upload-artifact@v3
        with:
          name: coverage-report
          path: coverage/
