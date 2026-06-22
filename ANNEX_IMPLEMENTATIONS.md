Annex: Implementation Repositories
This document provides the official mapping between the constitutional layers defined in the ICBC and their corresponding technical implementation repositories.

Note: This annex is subject to update as the TEOS infrastructure evolves. The constitutional principles in the main repository remain stable and are independent of specific repository names or structural reorganizations.

Constitutional Layer Mapping
1. TEOS-FORGE
Constitutional Role: Infrastructure Integration and Policy LayerRepository: TEOS-FORGE (Link to be updated upon public release)Function: Acts as the DPI factory, managing integrations between sovereign infrastructure and the execution layers.

2. Executable Governance Layer
Constitutional Role: Runtime Governance and Policy Enforcement InfrastructureRepository: agent-code-risk-mcpFunction: The Policy Enforcement Engine. Intercepts AI agent actions (MCP, Claude Code) and CI/CD pipelines to enforce governance decisions (ALLOW, WARN, REVIEW, BLOCK) prior to execution.

3. AI Governance, Audit, and Compliance Services
Constitutional Role: AI-Guard, Auditor, Monitoring, and Assurance FunctionsRepository: TEOS-Sentinel-Shield (Link to be updated upon public release)Function: Continuous compliance oversight, historical audit trail aggregation, and risk posture monitoring.

4. Execution Infrastructure
Constitutional Role: Operational Runtime and Service InfrastructureRepository: TEOS-Bot (Link to be updated upon public release)Function: Operational service layer handling approved, governed interactions and automated workflows.

Security Posture of Implementations
All referenced implementation repositories adhere to the TEOS Egypt Sovereign License (TESL) and the architectural principle of Constitutional Separation:

No governance secrets, proprietary detection logic, or operational internals are stored in this Constitutional repository.
Implementation repositories operate under strict audit trail integrity rules (preventing the stripping of cryptographic telemetry).
