---
title: Threat Intelligence Policy
description: Code Town Threat Intelligence Policy
template: doc
---

## Purpose and Scope

This policy establishes how Code Town gathers, analyzes, and acts on threat
intelligence to protect our information systems and customer data. Its goal is
to ensure we stay informed about the evolving threat landscape relevant to our
infrastructure, dependencies, and services.

This policy applies to all employees and contractors with responsibility for
information security at Code Town.

## Policy Statements: Our Commitments

The following statements outline our approach to threat intelligence, how we
collect it, what we do with it, and how it feeds our broader security posture.

### Threat Intelligence Sources

Code Town will maintain awareness of threats relevant to our stack and operating
environment by monitoring a defined set of sources. These include:

- **Government and public sources:** CISA Known Exploited Vulnerabilities (KEV)
  catalog, US-CERT advisories, and the National Vulnerability Database (NVD).
- **Dependency and ecosystem advisories:** GitHub Security Advisories covering
  our key open source dependencies (Flutter, Dart, Node.js, and related
  packages).
- **Infrastructure provider notices:** Security bulletins from Google Cloud,
  Cloudflare, and other vendors whose services we depend on.
- **Community sources:** Security-focused publications, mailing lists, and
  community channels relevant to the developer tools and mobile ecosystem.

### Collection and Analysis

The Security Officer (or designated security-responsible employee) is
responsible for reviewing threat intelligence sources on at least a **monthly
cadence**. Each review should assess:

- Whether any disclosed vulnerabilities apply to Code Town's systems,
  dependencies, or third-party services.
- Whether any active threat campaigns are relevant to our customer base,
  industry, or infrastructure profile.
- Whether any findings should be escalated to immediate action (patching,
  configuration change, customer notification).

Findings are documented in a running threat intelligence log maintained in our
internal team documentation.

### Sharing and Communication

Relevant threat intelligence findings will be shared with the team via a
designated Discord channel. The monthly review summary should include:

- A brief summary of sources checked
- Any notable findings and their assessed relevance to Code Town
- Actions taken or recommended as a result

For findings that require prompt action (e.g., actively exploited
vulnerabilities in our stack), the Security Officer will notify affected team
members directly and initiate response per the Incident Response Policy.

### Integration with Risk Management

Threat intelligence findings inform Code Town's ongoing risk assessment process.
When a new threat or vulnerability is identified, it should be evaluated against
our existing risk register and security controls. Significant findings may
trigger updates to risk assessments, changes to security controls, or revisions
to other compliance policies.

### Training and Awareness

All employees are made aware of this policy as part of onboarding. Employees in
security-relevant roles are expected to familiarize themselves with the threat
intelligence sources listed above and to report any security-relevant findings
they encounter to the Security Officer.

## Compliance and Enforcement

Compliance with this policy is mandatory for all employees and contractors at
Code Town.

In rare cases, business needs, local laws, or regulations may require
exceptions. Management will approve any exceptions and define alternative
solutions.

Non-compliance may lead to disciplinary action, including termination, as per
Code Town's policies.

## Policy Review and Maintenance

This policy will be reviewed annually or when significant changes occur to
maintain its continuing suitability, adequacy, and effectiveness.

Reviews must consider changes in the regulatory landscape.

### Review Log

| Review Date  | Approver    |
| ------------ | ----------- |
| June 9, 2026 | Eric Seidel |
