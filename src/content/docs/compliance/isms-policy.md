---
title: ISMS Policy
description:
  Shorebird's Information Security Management System policy for establishing managing information inline with ISO 27001
template: doc
---


## Purpose

The purpose of this Information Security Management System (ISMS) Policy is to establish, implement, maintain, and continually improve a structured approach to managing information security at Code Town, Inc. (D/B/A “Shorebird”), in line with ISO/IEC 27001.

This is the top-level governing document of the ISMS. It defines the context, leadership, planning, support, operation, evaluation, and improvement of the ISMS, and it sits above and references the supporting policies and procedures (such as the Risk Management Policy, Change Management Policy, and Incident Response Policy) and the Statement of Applicability (SoA).

It applies to all employees, contractors, and third-party vendors who access or process information within the scope of the ISMS defined in Section 2.3.

## Context of the Organization

### Understanding the Organization and Its Context

Shorebird determines the internal and external issues that are relevant to its purpose and that affect its ability to achieve the intended outcomes of the ISMS. These include:

**Internal issues**: business objectives, organizational structure, products and services, information systems, and the resources and capabilities available for information security.

Key Internal Factors
- Limited resources and expertise as a startup company
- Need for a strong information security culture and awareness
- Importance of maintaining data confidentiality, integrity, and availability
- Reliance on third-party service providers and cloud infrastructure

**External issues**: the legal, regulatory, and contractual environment; the information security threat landscape; customer and market expectations; and the technologies and third parties Shorebird relies on.

Key External Factors
- Regulatory requirements and industry standards (e.g., GDPR)
- Rapidly evolving cybersecurity threats and vulnerabilities
- Increasing client expectations for data security and privacy
- Competitive pressure to innovate and differentiate services

Shorebird has evaluated the requirements and expectations of relevant interested parties and determined that no climate change-related information security requirements currently apply to the ISMS.

These issues are reviewed during management review and whenever significant changes occur, and inform the scope, risk assessment, and objectives of the ISMS.

### Interested Parties needs and expectations

The following stakeholders are interested parties of the ISMS, along with their information security expectations:

| Stakeholders               | Description                                                              | Expectations                                                                                          |
| -------------------------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Employees                  | Full-time, part-time, and contract workers                               | Clear direction on how to handle information security                                                 |
| Customers                  | Companies and organizations using Shorebird's software and services | Integrity and authenticity of delivered software and updates; availability of services; confidentiality of shared sensitive information; fulfillment of contractual security commitments |
| Partners and Vendors       | Third-party vendors that support operations                              | Maintain security of confidential information                                                         |
| Regulators                 | Regulatory bodies governing data protection and information security     | Comply with information security and business continuity laws and regulations                         |
| Shareholders and Investors | Individuals or entities with a financial stake in Shorebird         | Security of investment and protection from fraud                                                      |

The information security requirements of these interested parties are addressed through the policies, controls, and objectives of the ISMS, and are reviewed during annual management review.

### ISMS Scope

The scope of the Information Security Management System (ISMS) covers the design, development, operation, maintenance, and support of the products and services that Shorebird delivers to customers through its production environment. The scope includes the data, infrastructure, software, people, and procedures used to provide that production environment, including:
- All employees, contractors, and third-party vendors involved in these activities.
- The cloud infrastructure and services used to store, process, and transmit information, including cloud-hosted environments provided by Google Cloud Platform (GCP).
- The company-issued endpoint devices used to access Shorebird systems and data.
- The policies, procedures, and controls implemented to protect the confidentiality, integrity, and availability of information.

The ISMS applies to all business functions of Shorebird and is implemented by a fully distributed remote workforce. Shorebird does not operate permanent office locations.

**Exclusions from the Scope**

The following are excluded from the scope of the ISMS:

- Personal devices of employees that are not used to access Shorebird systems or data.
- Data not managed, processed, or controlled by Shorebird.
- Non-production environments and experimental projects that are not offered to customers and do not process customer data.

**Interfaces and Dependencies**

Shorebird relies on the following third-party providers for services within the scope of the ISMS:

| Provider               | Interfaces and Dependencies                                                              | 
| -------------------------- | ------------------------------------------------------------------------ |
| Google Cloud Platform (GCP) | Cloud infrastructure and platform services, including compute, network, storage, database, and security services. Google is responsible for the physical and environmental security of its data centers and secure disposal of storage media. |
| Google Workspace                  | Email, productivity tools, and identity and authentication platform. Google is responsible for the physical and environmental security of its facilities, secure data deletion, and secure disposal of storage media.                               |
| GitHub | Source code hosting, code review, and CI/CD pipelines. |
| Cloudflare | CDN and edge delivery for publicly accessible endpoints, including delivery of patches to end-user devices. |

Shorebird is responsible for the secure configuration and use of these services, including access management, data protection, and monitoring, in line with each provider's shared responsibility model. A complete list of third-party service providers and sub-processors is maintained in the Vendor/Sub-Processor List.

### The Information Security Management System

Shorebird establishes, implements, maintains, and continually improves the ISMS, including the processes needed and their interactions, in accordance with ISO/IEC 27001. The applicability of controls is documented and justified in the Statement of Applicability (SoA).

## Leadership

### Leadership and Commitment

Senior Management of Shorebird demonstrates leadership and commitment to the ISMS by:

- Establishing this policy and the information security objectives, and aligning them with the organization's strategic direction.
- Providing the resources needed for the ISMS, including personnel, budget, and technology.
- Communicating the importance of effective information security and of conforming to ISMS requirements.
- Promoting continual improvement and supporting other relevant roles in demonstrating leadership within their areas of responsibility.

### Information Security Commitment

Shorebird is committed to:

- Protecting information from unauthorized access, disclosure, alteration, or destruction.
- Maintaining the confidentiality, integrity, and availability of information and information systems.
- Meeting applicable legal, regulatory, and contractual obligations related to information security.
- Continually improving the ISMS in response to emerging threats, vulnerabilities, and risks.
- Assigning and communicating appropriate information security roles and responsibilities across the organization.

This policy provides the framework for setting and reviewing the information security objectives in Section 4.2. It is communicated within the organization, made available to interested parties as appropriate, and reviewed at least annually.

### Roles, Responsibilities, and Authorities

Information security roles, responsibilities, and authorities are assigned, communicated, and documented. **Segregation of duties is maintained** so that conflicting duties — for example, approving and implementing a change — are not performed by the same individual. Where segregation of duties is not practical due to organizational size, compensating controls (such as monitoring, logging, and independent management review) are applied.

| Role              | Responsibilities                                                                                                                              |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Senior Management | Establish and resource the ISMS, set the direction for information security, and promote continual improvement.                               |
| ISMS Manager      | Own day-to-day ISMS governance: coordinate risk assessments and controls, verify policy adherence, and organize internal and external audits. |
| Department Heads  | Apply ISMS controls within their areas, identify and report risks, and ensure their teams complete required training.                         |
| IT / Engineering  | Implement and operate technical controls (e.g., access control, encryption, logging, monitoring) and maintain secure configurations.          |
| Human Resources   | Perform background checks, embed security responsibilities into roles, and manage the disciplinary process for violations.                    |
| Employees and Contractors    | Follow ISMS policies and procedures, complete security awareness training, and promptly report security incidents and weaknesses.             |

Given the organization's size, individuals may hold more than one role. The ISMS Manager also fulfills the Compliance Officer and Security Officer roles. References to the IT Security Team, Incident Response Team, or security team refer to IT / Engineering, and Human Resources responsibilities are performed by Senior Management. 

## Planning

### Actions to Address Risks and Opportunities

Shorebird identifies, assesses, and treats information security risks and opportunities so that the ISMS can achieve its intended outcomes and undesired effects are prevented or reduced. The risk assessment and risk treatment methodology, including risk acceptance criteria, is defined in the Risk Management Policy. Risk treatment decisions and the applicability of controls are recorded in the Statement of Applicability (SoA).

### Information Security Objectives and Planning to Achieve Them

Shorebird establishes measurable information security objectives, consistent with this policy. For each objective, the organization defines what will be done, the resources required, the responsible owner, the target completion date, and how results will be evaluated. At least two measurable objectives should be maintained and tracked to completion.

| Objective                                                                                   | Action Plan                                                                                                       | Effectiveness Measure(s)                                | Resources Required                                         | Owner   | Expected Completion Date | Status   |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------- | ------- | ------------------------ | -------- |
| Implement, maintain, and improve an ISMS that conforms to the requirements of ISO/IEC 27001 | Establish, implement, maintain, and continually improve the ISMS and undergo an ISO/IEC 27001 certification audit | ISO/IEC 27001 certification achieved                    | Senior Management, ISMS Manager, Engineering; Oneleet | ISMS Manager | December 2026                   | In Progress |
| Remediate critical vulnerabilities within defined SLAs                                      | Operate the vulnerability management process and track remediation to closure                                     | ≥ 95% of critical vulnerabilities remediated within SLA | Engineering, ISMS Manager                     | ISMS Manager | Ongoing (reviewed annually)                  | In Progress |

Progress against objectives is monitored, and the objectives are updated as needed during management review.

Information security performance is measured against defined metrics and criteria:

| Policy / Procedure / Control       | ISMS Control  | Detail of Measurement                   | Who Gathers                      | Who Receives & Frequency       | Criteria                                                              |
| ---------------------------------- | ------------- | --------------------------------------- | -------------------------------- | ------------------------------ | --------------------------------------------------------------------- |
| Technical Vulnerability Management | A.8.8         | Vulnerabilities detected and remediated | Engineering - monthly | ISMS Manager - monthly | Critical and high vulnerabilities are remediated within SLA timelines |

### Planning of Changes

Changes to the ISMS are planned and carried out in a controlled manner, considering their purpose, potential consequences, and the availability of resources. The following roles manage ISMS changes throughout the process, with segregation of duties maintained between approvers and implementers:

- **Change Requester**: Any employee or contractor who identifies and submits a change request, responsible for providing a clear description, justification, and proposed rollback plan.
- **Change Owner**: Accountable for the change from submission through post-implementation review; typically the requester or their manager.
- **Change Approver**: Reviews and approves or rejects change requests based on risk classification and potential impact. Standard changes are approved by the ISMS Manager; high-impact changes require Senior Management approval.
- **Change Implementer**: Carries out the approved change according to the documented plan.
- **Change Advisory Board (CAB)**: Convenes on an as-needed basis to review significant or high-risk changes. Membership is determined by the ISMS Manager based on the nature of the change and relevant stakeholders.
- **Emergency Change Approver**: Emergency changes require expedited approval from the ISMS Manager or, in their absence, a member of Senior Management. Full documentation is completed retrospectively within 24 hours of the change.

## Support

### Resources and Competence

Shorebird determines and provides the resources needed for the ISMS. Personnel performing work that affects information security are competent on the basis of appropriate education, training, or experience, and records of competence are retained.

### Awareness

All employees and relevant contractors receive security awareness training upon onboarding and at least annually thereafter. Personnel are made aware of this policy, their contribution to the effectiveness of the ISMS, and the implications of not conforming to ISMS requirements.

### Communication

Shorebird maintains a structured approach to security-related communications so that relevant information is communicated in a timely, accurate, and secure manner to appropriate internal and external stakeholders.

- Security-related information is communicated clearly, accurately, and on a need-to-know basis, and confidential information is protected using approved secure channels.
- Security incidents, risks, and material changes follow defined escalation and approval paths.
- Legal, regulatory, and contractual security notification obligations are met, and material security communications are logged and retained.

| What is communicated                                    | When                                    | Audience                                                     | Responsible                           | Method                                            |
| ------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------ | ------------------------------------- | ------------------------------------------------- |
| Policies, standards, and updates; awareness messages    | Scheduled (e.g., updates, campaigns)    | Employees and Contractors                                               | IT / Engineering             | Email, internal collaboration platforms           |
| Identified risks and required actions                   | When risks are identified               | IT / Engineering; affected teams                    | ISMS Manager                          | Ticketing, email                                  |
| Security incidents and near misses                      | On detection                            | IT / Engineering; Senior Management for high impact | IT / Engineering             | Incident/ticketing systems, formal correspondence |
| External notifications (clients, regulators, suppliers) | When required by risk, law, or contract | External parties                                             | Senior Management (with external counsel as needed) | Secure portals, formal written correspondence     |

Suspected security incidents must be reported immediately to IT / Engineering. They are assessed for severity and impact and escalated to Senior Management (with external counsel) where warranted. External notifications are centrally coordinated and approved prior to release, consistent with the Incident Response Policy. Material security communications are logged (date, audience, and summary) and retained in accordance with retention requirements.

### Documented Information

The ISMS includes the documented information required by ISO/IEC 27001 and the documented information Shorebird determines is necessary for its effectiveness.

- **System of record**: Oneleet is the official system of record for managing information security documentation and compliance evidence.
- **Document control**: Policies are authored and version-controlled in the Shorebird Handbook and published in Oneleet for review and acknowledgment. Supporting records, such as management review minutes and recovery plans, may be maintained in Notion and Google Drive. Each document has an assigned owner responsible for its accuracy, and documents are reviewed at least annually or when significant changes occur.
- **Version control**: Oneleet's version history tracks document updates automatically, including the date and the individual making the change, and retains previous versions to support audit and traceability.
- **Access and protection**: Access is restricted based on role; only authorized personnel can create, modify, or delete documentation; and documents are protected against unauthorized access, loss, or modification.
- **Availability and retention**: Documentation is available to authorized users when required, retained to meet business, legal, and regulatory requirements, and archived rather than deleted when obsolete to preserve historical records.

## Operation

Shorebird plans, implements, and controls the processes needed to meet information security requirements and to implement the actions determined in planning. Information security risk assessments are performed at planned intervals and when significant changes occur, and the risk treatment plan is implemented in accordance with the Risk Management Policy. The results of risk assessment and treatment are retained as documented information, and the Statement of Applicability is kept current.

## Performance Evaluation

### Monitoring, Measurement, Analysis, and Evaluation

Shorebird monitors and evaluates adherence to its ISMS policies and controls to confirm they remain effective and are followed in practice, using a combination of scheduled reviews and continuous monitoring appropriate to the size and maturity of the organization.

- **Scheduled compliance reviews**: An annual compliance review, owned by IT/Engineering and validated by the ISMS Manager, checks user access to core systems (e.g., Google Workspace, GitHub, GCP) against current roles, reviews outstanding controls and evidence in Oneleet, confirms onboarding/offboarding records, and reviews critical vendors. Reviews are recorded via calendar events and review notes.
- **Continuous monitoring**: Selected controls are monitored continuously through automated mechanisms — for example, dependency vulnerability monitoring (e.g., Dependabot) surfacing issues via pull requests and alerts, and operational alerting for security-relevant events that are escalated and handled per the Incident Response Policy.

The methods, frequency, and timing for analyzing and evaluating each measured item are defined in the Measurement Metrics table in Section 4.2; results feed the management review.

### Internal Audit

Shorebird conducts internal audits of the ISMS at planned intervals, and at least annually, against a documented audit programme, to determine whether the ISMS conforms to ISO/IEC 27001 and to Shorebird's own requirements and is effectively implemented and maintained. Auditors are objective and impartial and do not audit their own work; where in-house independence is not practical, an external party is engaged. Audit results are reported to relevant management and retained as documented information, and any findings are managed as nonconformities under Section 8.2.

### Management Review

Senior Management reviews the ISMS at planned intervals, and at least annually. Reviews consider the status of actions from previous reviews; changes in internal and external issues and in the needs and expectations of interested parties; feedback on information security performance (including the fulfillment of objectives, monitoring and measurement results, audit results, and nonconformities); the status of the risk assessment and risk treatment plan; and opportunities for continual improvement. Outputs include decisions on continual improvement and any need for changes to the ISMS, and are recorded.

## Improvement

### Continual Improvement

Shorebird continually improves the suitability, adequacy, and effectiveness of the ISMS, using the results of monitoring, audits, management review, and feedback from interested parties.

### Nonconformity and Corrective Action

When a nonconformity occurs, Shorebird:

- Reacts to the nonconformity, takes action to control and correct it, and deals with the consequences.
- Evaluates the need to eliminate the cause(s) so that the nonconformity does not recur, including determining the root cause and whether similar nonconformities exist or could occur.
- Implements the corrective action needed, with an assigned owner and a remediation timeline.
- Reviews the effectiveness of the corrective action taken and makes changes to the ISMS where necessary.

Nonconformities and corrective actions are recorded and tracked through to closure, including their nature, the actions taken, and the results, to support monitoring and audit.

## Compliance and Enforcement

Compliance with this policy is mandatory for all employees, contractors, and third parties with access to Shorebird's data.

In rare cases, business needs, local laws, or regulations may require exceptions. Senior Management will approve any exceptions and define alternative solutions. Exceptions are documented, risk-assessed, time-bound, and reviewed at expiry or at least annually.

Non-compliance may lead to disciplinary action, including termination, as per Shorebird's policies.
