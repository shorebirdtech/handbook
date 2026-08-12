---
title: Compliance Monitoring Framework
description:
  How Code Town monitors and measures the performance and effectiveness of its
  ISMS
template: doc
sidebar:
  order: 2
---

This page describes how Code Town evaluates whether its Information Security
Management System (ISMS) is performing effectively, in accordance with ISO/IEC
27001 Clause 9.1. It is the connective layer between our individual security
policies and our management review process. It defines what we measure, how
often, and what we do with the results.

## What We Monitor

Each row below corresponds to an existing policy. The metric column defines the
specific signal we track to assess whether that policy's controls are working.

| Area                      | Policy                                                                                                     | Metric                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Access control            | [Access Management Policy](/compliance/access-management-policy/)                                          | % of user access rights reviewed on quarterly schedule; number of unresolved unauthorized access alerts |
| Logging & monitoring      | [Logging & Monitoring Policy](/compliance/logging-monitoring-policy/)                                      | % of in-scope systems with active log coverage; log review completion rate                              |
| Vulnerability management  | [Vulnerability Management Policy](/compliance/vulnerability-management-policy/)                            | % of critical/high vulnerabilities resolved within SLA                                                  |
| Incident response         | [Incident Response Policy](/compliance/incident-response-policy/)                                          | Incident count; mean time to detect and respond; recurrence rate                                        |
| Asset management          | [Asset Management Policy](/compliance/asset-management-policy/)                                            | % of assets with current classification in inventory                                                    |
| Vendor / third-party risk | [Vendor Policy](/compliance/vendor-policy/)                                                                | % of critical vendors with a completed annual assessment                                                |
| Business continuity       | [Business Continuity and Disaster Recovery Policy](/compliance/business-continuity-and-disaster-recovery/) | BCP/DR test completion; recovery objectives met during tests                                            |
| HR security               | [Human Resource Security Policy](/compliance/hr-security-policy/)                                          | % of onboarding/offboarding checklists completed on schedule; security training completion rate         |
| Secure development        | [Secure Development Policy](/compliance/secure-development/)                                               | % of releases with completed security review; open findings from code review                            |
| Internal audit            | [Internal Audit Program](/compliance/internal-audit-program/)                                              | Annual audit completed on schedule; open non-conformities resolved within SLA                           |

## Monitoring Cadence

| Activity                               | Frequency                         | Owner                                                             |
| -------------------------------------- | --------------------------------- | ----------------------------------------------------------------- |
| Automated log and alert review         | Continuous                        | Engineering                                                       |
| Vulnerability scan                     | Continuous via Tooling            | Engineering                                                       |
| Access rights review                   | Quarterly                         | Engineering (Dev Tools) & Operations (Company Tools)              |
| HR checklist completion check          | Per hire / departure              | Operations                                                        |
| Security awareness training completion | Continuous via Tooling            | Operations                                                        |
| Asset inventory review                 | Quarterly                         | Operations                                                        |
| Vendor risk assessment                 | Annually (or on contract renewal) | Operations                                                        |
| BCP/DR test                            | Annually                          | Engineering                                                       |
| ISMS metrics review                    | Quarterly                         | Leadership Team                                                   |
| Internal audit                         | Annually                          | See [Internal Audit Program](/compliance/internal-audit-program/) |
| Management review                      | Annually                          | Leadership Team                                                   |

## Methods

Monitoring methods are selected to produce results that are consistent across
time periods and reproducible by different reviewers.

- **Automated tooling** is the primary source where available. Our compliance
  platform, vulnerability scanner, and identity provider generate the majority
  of monitoring data.
- **Manual review** is used for controls not covered by automation, such as
  access rights reviews and vendor assessments.
- **Internal audit** provides independent point-in-time verification across all
  ISMS areas. See the
  [Internal Audit Program](/compliance/internal-audit-program/) for scope,
  frequency, and report format.

## Recording Results

Monitoring results are recorded in our compliance platform. Each completed
monitoring activity should capture: the date, method used, person responsible,
result against target, and any findings or exceptions.

Findings that indicate a control gap or failure are logged as non-conformities
per the [Compliance Policy](/compliance/compliance-policy/) and tracked to
resolution. Open non-conformities are reviewed at the annual management review.

## Management Review

The Leadership Team conducts a formal management review of the ISMS at least
annually. The review assesses whether the ISMS remains suitable, adequate, and
effective, and stays aligned with Code Town's objectives, risks, and regulatory
obligations. Additional reviews may be convened when a significant change occurs
— for example a major security incident, a substantial change in risk, or a new
regulatory requirement.

The review is chaired by the CEO.

### Review Inputs

| Input                                                      | Source                                                                                          |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Status of actions from previous management reviews         | Action log in the previous review minutes                                                       |
| Monitoring and measurement results                         | [What We Monitor](#what-we-monitor) and [Recording Results](#recording-results) above           |
| Internal and external audit results                        | [Internal Audit Program](https://handbook.shorebird.dev/compliance/internal-audit-program/)     |
| Non-conformities and corrective actions                    | [Compliance Policy](https://handbook.shorebird.dev/compliance/compliance-policy/)               |
| Risk assessment and risk treatment status                  | [Risk Management Policy](https://handbook.shorebird.dev/compliance/risk-manangement-policy/)    |
| Security incidents since the last review                   | [Incident Response Policy](https://handbook.shorebird.dev/compliance/incident-response-policy/) |
| Fulfillment of information security objectives             | Objectives tracked in the compliance platform                                                   |
| Changes in internal/external issues and interested parties | Compliance Register and Leadership Team input                                                   |
| Feedback from interested parties                           | Customer, partner, and employee feedback                                                        |
| Opportunities for continual improvement                    | Raised by any participant during the review                                                     |

### Review Outputs

The review produces documented decisions and actions covering, at minimum:

- Opportunities for continual improvement of the ISMS
- Any changes needed to the ISMS, including policies, controls, and objectives
- Resource needs and allocation decisions
- Changes to the risk treatment plan, where applicable

Each output is recorded as a decision or action item with an owner and due date,
tracked to completion in our issue tracker, and carried forward to the next
review if still open.

### Process

1. **Preparation** — The ISMS Manager compiles the inputs above and circulates
   the agenda and pre-read at least five business days before the meeting.
2. **Conduct** — The Leadership Team reviews each input and agrees decisions and
   actions.
3. **Record** — Minutes are captured and stored in Google Drive.
4. **Approve** — The minutes are approved by the review chair.
5. **Track** — Actions are tracked to completion; open items are carried to the
   next review.
6. **Retain** — Minutes are retained as ISMS evidence for a minimum of three
   years. Completed minutes are an internal document and are not published here.

## Policy Review and Maintenance

This framework is reviewed annually or when significant changes occur to the
scope, technology environment, or regulatory requirements.

### Review Log

| **Review Date** | **Approver** |
| --------------- | ------------ |
| June 25, 2026   | Eric Seidel  |
