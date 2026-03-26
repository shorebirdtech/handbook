---
title: Internal Audit Program
description:
  Code Town's internal audit program for evaluating the effectiveness of its
  Information Security Management System (ISMS)
template: doc
---

Code Town, Inc maintains an internal audit program to evaluate the effectiveness
and compliance of its Information Security Management System (ISMS) in
accordance with ISO/IEC 27001. The program ensures we systematically review
security controls, identify gaps, and drive continuous improvement — without
building unnecessary process overhead for a small team.

## Scope

The audit program covers all controls within Shorebird's ISMS as defined in our
Statement of Applicability. This includes:

- Cloud infrastructure and platform security
- Access control and identity management
- Vendor and third-party management
- Incident response and business continuity
- HR security, including onboarding and offboarding
- Internal documentation and policy controls

## Frequency

Shorebird conducts one full internal audit cycle per calendar year. Audit
activities are scheduled at least eight weeks before any external surveillance
or re-certification audit to allow time for corrective action where needed.

Audit areas are selected using risk-based prioritization. Higher-risk areas such
as access control, incident response, and vendor management are prioritized
within each cycle.

## Methods

Audits are conducted using document review, interviews with control owners, and
inspection of evidence in our compliance platform. Where automated monitoring is
already in place, platform records serve as primary evidence, supplemented by
manual review for controls not covered by automation.

## Auditor Independence

Auditors must be independent of the area they are auditing. At the companies
size, this is achieved through cross-functional assignment. Operations staff
audit Engineering and infrastructure controls, and Engineering staff audit
business process and HR security controls. Auditor assignments are documented in
each audit report.

## Findings and Corrective Actions

Audit findings are classified as follows:

- **Nonconformity (Major)** — A control is absent or has completely failed.
  Requires a corrective action plan within 30 days.
- **Nonconformity (Minor)** — A control exists but has a gap or weakness.
  Requires a corrective action plan within 60 days.
- **Observation** — A risk or improvement opportunity with no current gap. Noted
  and reviewed at the next audit cycle.
- **Conformant** — The control is operating effectively. No action required.

Corrective actions are tracked in our issue tracker. Each item includes the
finding reference, owner, target resolution date, and resolution notes. Open
items are reviewed at the annual management review.

## Documentation

Each annual audit cycle produces an internal audit report covering the areas
reviewed, findings by classification, and any corrective actions assigned. The
audit report is an internal document and is not published here. It is retained
as evidence for our ISO/IEC 27001 certification.

## Program Review and Maintenance

This program will be reviewed annually or when significant changes occur to
maintain its continuing suitability, adequacy, and effectiveness.

Reviews must consider changes in the regulatory landscape.

## Review Log

| **Review Date** | **Approver** |
| --------------- | ------------ |
| March 26, 2025  | Eric Seidel  |

his template is completed once per audit cycle and retained as internal evidence
for Shorebird's ISO/IEC 27001 certification. Completed reports are not
published.

---

## Audit Report Template

This audit report template is provided as an example. We have an internal Google
Docs version of this to be used as well. See the Shared "Shorebird" Drive in
Google Workspace to find it.

| Field              | Details                                                          |
| ------------------ | ---------------------------------------------------------------- |
| Audit Period       |                                                                  |
| Conducted By       |                                                                  |
| Auditor Role       |                                                                  |
| Areas Audited      |                                                                  |
| Audit Method       | Document review, interviews, compliance platform evidence review |
| Reference Standard | ISO/IEC 27001:2022                                               |
| Report Date        |                                                                  |
| Approved By        |                                                                  |

---

### Audit Scope

List the ISMS control areas reviewed this cycle and note whether each was in
scope, along with any rationale for exclusion if applicable.

| Control Area                                  | In Scope | Notes |
| --------------------------------------------- | -------- | ----- |
| Access control & identity management          | Yes / No |       |
| GCP infrastructure security                   | Yes / No |       |
| Code Push — artifact pipeline & data handling | Yes / No |       |
| Vendor & third-party management               | Yes / No |       |
| Incident response                             | Yes / No |       |
| HR security (onboarding / offboarding)        | Yes / No |       |
| Business continuity                           | Yes / No |       |
| Internal policies & documentation             | Yes / No |       |

---

### Findings Summary

| Finding Type           | Count |
| ---------------------- | ----- |
| Nonconformity — Major  |       |
| Nonconformity — Minor  |       |
| Observation            |       |
| Conformant (no issues) |       |

**Overall conclusion:**

_Summarize the audit outcome in 1–2 sentences. Example: "The ISMS is operating
effectively with no major nonconformities identified. One minor observation was
noted and assigned for remediation."_

---

### Detailed Findings

Complete one row per finding. For conformant control areas with no issues, a
single row confirming conformance is sufficient.

| Ref   | Control Area | Finding / Observation | Type | Owner | Target Date |
| ----- | ------------ | --------------------- | ---- | ----- | ----------- |
| F-001 |              |                       |      |       |             |
| F-002 |              |                       |      |       |             |
| F-003 |              |                       |      |       |             |

**Finding types:** Major Nonconformity / Minor Nonconformity / Observation /
Conformant

---

### Corrective Actions

All non-conformities require a corrective action plan. Actions are tracked in
Shorebird's issue tracker and referenced by finding number.

| Finding Ref | Corrective Action | Owner | Due Date | Status |
| ----------- | ----------------- | ----- | -------- | ------ |
| F-001       |                   |       |          | Open   |
| F-002       |                   |       |          |        |

---

### Auditor Notes

_Optional. Include any contextual notes, process observations, or
recommendations for improving the audit program._

---

### Sign-Off

| Role                | Name     | Date |
| ------------------- | -------- | ---- |
| Lead Auditor        |          |      |
| ISMS Manager        | Tom Arra |      |
| Management Reviewer |          |      |

---

_This report is a confidential internal document. Retain for a minimum of three
years as evidence for ISO/IEC 27001 certification._
