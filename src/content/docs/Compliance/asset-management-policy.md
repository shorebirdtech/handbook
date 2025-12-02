---
title: Asset Management Policy
description: Code Town Asset Management Policy
template: doc
---

## Purpose and Scope

This Asset Management Policy establishes guidelines for the identification,
classification, and protection of Code Town's information assets.

It applies to all employees, contractors, and third-party vendors who manage or
use company assets.

## Policy Statements: Our Commitments

Code Town is committed to protecting its assets by ensuring they are properly
classified, secured, and maintained throughout their lifecycle.

### Asset Inventory

All assets must be identified and tracked in an asset inventory. This inventory
is regularly updated and maintained.

Each asset must have a clearly defined owner, responsible for:

- Ensuring appropriate use and protection of the asset.
- Maintaining the asset’s security based on its classification (critical,
  non-critical).
- Managing the asset lifecycle, including acquisition, maintenance, and
  decommissioning.

### Asset Types

The following types of assets must be tracked in the inventory:

- **Hardware**: Physical devices such as servers, laptops, desktops, mobile
  devices, and networking equipment used for business operations.
- **Software**: Licensed or custom applications, operating systems, development
  tools, and cloud-based services that are used within the company environment.
- **Virtual and Cloud Infrastructure**: Virtual machines (VMs), cloud-based
  databases, cloud storage, containers, and other virtual resources used to
  support business operations.
- **Network and Communication Infrastructure**: Networks, VPNs, firewalls, email
  servers, and other systems that manage communication and connect devices and
  systems.
- **Storage Devices**: On-premises or cloud-based storage systems, such as local
  file servers, NAS (Network Attached Storage), or cloud storage platforms like
  AWS S3, used to store company data.

### Classification Criteria and Levels

Assets should be classified based on their:

- Criticality to business operations: How essential is the asset for ongoing
  operations?
- Data sensitivity: Does the asset handle or store sensitive/confidential data?
- Impact of compromise: What would be the effect on the business if the asset
  were lost, stolen, or compromised?

Assets should be classified according to one of these levels:

- **Critical**: Assets essential for business continuity and handling sensitive
  data (e.g., production servers, financial systems).
- **Important**: Assets needed for daily operations but not business-critical
  (e.g., workstations, non-critical software).
- **Non-Critical**: Assets with minimal operational impact if compromised (e.g.,
  development tools, test environments).

### Access Control and Data Protection

Use role-based access control (RBAC) for all critical and important assets,
following the principle of least privilege to restrict access to only necessary
permissions.

Critical assets that process or store sensitive data must use encryption at rest
and in transit.

Backup and recovery systems must be protected with the same security measures as
primary systems to ensure data integrity and availability.

### Monitoring, Patching, and Maintenance

All critical and important assets must be regularly monitored for suspicious
activity, with alerts set for unauthorized access or anomalies.

Specific controls are implemented for mobile devices and remote working
arrangements. Mobile device management (MDM) solutions are used to secure and
manage assets.

Regular updates and security patches must be applied to all assets to address
vulnerabilities. Asset owners are responsible for ensuring timely patching and
maintenance. Preventative measures should be taken to minimize downtime and
ensure business continuity.

### Asset Acquisition, Registration, and Disposal

All new assets must be registered in the asset inventory and assigned an owner
upon acquisition.

Security assessments should be conducted upon acquisition, particularly for
critical assets.

Secure disposal procedures must be followed when decommissioning assets,
ensuring sensitive data is securely erased and decommissioned assets are removed
from the inventory. Records of the disposal process must be maintained for
compliance.

### Incident Response and Reporting

Any incidents involving physical or software assets (e.g., theft, unauthorized
access, data breaches) must be reported to IT and management immediately.

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

### Review Log

| **Review Date**   | **Approver** |
| ----------------- | ------------ |
| November 25, 2025 | Eric Seidel  |
