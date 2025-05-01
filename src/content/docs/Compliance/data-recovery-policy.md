---
title: Data Recovery Policy
description: Code Town Data Recovery Policy
template: doc
---

## Purpose and Scope

This Data Recovery Policy outlines the requirements for the backup and recovery
of Code Town’s critical data and systems to maintain business continuity and
protect data from accidental loss, corruption, or disasters.

This policy applies to all systems, applications, and data owned, managed, or
controlled by Code Town, including systems hosted by third-party providers.

## Policy Statements: Our Commitments

This section outlines the minimum requirements for our backup and recovery
strategy and operations.

### Backup Requirements

All critical data and systems are backed up according to a defined backup
schedule. Backup frequency and retention periods are determined based on:

- Classification of the data, and
- Regulatory requirements.

Any system that contains production customer data must be backed up using an
automated system at least monthly.

### Backup Process

Automated backup solutions are used where feasible to promote consistency. Any
system that supports Point-in-Time recovery must have this functionality
enabled.

Backup logs are reviewed regularly to confirm successful completion. Any issues
are logged, escalated, and resolved immediately.

### Backup Security

Backups are encrypted in transit and at rest using industry-standard methods.
Access is restricted to authorized personnel only, and backups are stored
securely in multiple locations, including off-site or geographically separate
environments.

Cloud backups are independent of the provider’s redundancy features. Backup
media is physically secured, and old media is disposed of securely using
appropriate data sanitization methods.

### Data Recovery and Testing

A documented recovery process defines Recovery Time Objectives (RTO) and
Recovery Point Objectives (RPO) for each system.

Backup restoration tests are conducted at least annually, with the frequency
based on risk assessments. Test results are documented, and any issues are
resolved.

## Compliance and Enforcement

Compliance with this policy is mandatory for all employees, contractors, and
third parties with access to Code Town's data.

In rare cases, business needs, local laws, or regulations may require
exceptions. Management will approve any exceptions and define alternative
solutions.

Non-compliance may lead to disciplinary action, including termination, as per
Code Town's policies.

## Policy Review and Maintenance

This policy will be reviewed annually or when significant changes occur to
maintain its continuing suitability, adequacy, and effectiveness.

Reviews must consider changes in the regulatory landscape.

## Appendix

### System Recovery Prioritization

All of our systems use Google Cloud Platform, Redis, and Cloudflare managed
services which are easily re-deployable in the case of system loss. The systems
below hold our customer data and therefore are subject to recovery procedures to
ensure system integrity.

| System        | Priority | Data Type                          | Source of Truth | Notes                                                |
| ------------- | -------- | ---------------------------------- | --------------- | ---------------------------------------------------- |
| AlloyDB       | High     | Production Customer Data           | Yes             | Backups are automated via Google Cloud               |
| Cloud Storage | Medium   | Customer Build Artifacts & Patches | Yes             | Cached by Cloudflare and backed up by Google Cloud            |
| BigQuery      | Medium   | Aggregated Logs                    | No              | Cached in Redis, non-critical                  |
| Redis         | Low      | Cache                              | No              | Can be regenerated if needed via AlloyDB & Big Query |

### Data Recovery Plan

- AlloyDB (Production Database)
  - Backup Method: Automated daily backups configured in Google Cloud.
  - Restore Process: One-click restore via Google Cloud Console.
  - Documentation:
    [Google Cloud - AlloyDB Data Backup and Recovery Overview](https://cloud.google.com/alloydb/docs/backup/overview)
  - Recovery Time Objective (RTO): < 1 hour
  - Recovery Point Objective (RPO): ≤ 24 hours
- Cloud Storage (Patches & Artifacts)
  - Backup Method: Object versioning is enabled. No delete permissions granted;
    data is immutable
  - Restore Process: Previous versions available; restore via Google Cloud
    Storage console.
  - Documentation:
    [Google Cloud - Cloud Storage Object Versioning](https://cloud.google.com/storage/docs/object-versioning)
  - Recovery Time Objective (RTO):< 1 hour
  - Recovery Point Objective (RPO): ≤ 24 hours
- BigQuery
  - Backup Method: Duplication via Redis
  - Restore Process: Rebuild via custom scripts with Redis Input
  - Documentation: N/A
  - Recovery Time Objective (RTO): < 24 hours
  - Recovery Point Objective (RPO): < 24 hours
- Redis
  - Backup Method: None
  - Restore Process: Rebuild from AlloyDB & BigQuery via custom scripts
  - Documentation: N/A
  - Recovery Time Objective (RTO): < 24 hours
  - Recovery Point Objective (RPO): < 24 hours
