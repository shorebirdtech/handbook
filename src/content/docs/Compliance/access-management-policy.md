---
title: Access Management Policy
description: Code Town Access Management Policy
template: doc
---

## Purpose and Scope

Access to Code Town's systems is governed by the principle of least privilege -
all users are to be granted only the minimum necessary access and privileges.

This policy applies to all employees, contractors, and third-party users who
have access to Code Town's information systems and data.

## Policy Statements: Our Commitments

This section outlines our approach to access control, authorization, and
monitoring.

### Access Control

Access to company resources is protected by strong authentication,
authorization, and audit logging mechanisms. Access rights are determined by
information classification and reviewed regularly to ensure they remain
appropriate.

In addition, the following access control commitments are applicable:

- Passwords must comply with the
  [Password Policy](/compliance/password-policy/), and multi-factor
  authentication (MFA) must be used where feasible.
- Unused accounts, passwords, and service accounts are removed within 30 days.
- All default service accounts must have their passwords changed on first use at
  minimum, and deleted if not needed.
- Each user or application has a unique identifier and access mechanism.
- Separate accounts are required for administrative and non-administrative
  access.
- Sessions are invalidated after a period of inactivity.
- Administrative access to production systems is limited to the minimum
  necessary.
- Access rights are reviewed at least quarterly, and access to networks is based
  on business needs.

### Authorization and Termination

User registration and de-registration follow formal processes. Role-Based Access
Control (RBAC) or a similar system is used for all resource access.

Access to critical systems requires approval from both the user's manager and a
security team member. User access reviews occur annually or after role changes.
Unneeded access is revoked promptly.

Upon termination, all access is revoked within 24 hours or one business day.

### Shared Secrets Management

Shared user accounts are minimized and approved on a case-by-case basis. All
shared credentials must be stored in an encrypted vault and shared using secure
methods. Our current solution for this is 1Password.

### Third-Party Access

A risk assessment is conducted before granting third-party access. Onboarding
and offboarding third parties must follow a formal process, and access must
follow the principle of least privilege.

Third-party access is reviewed quarterly, and they must comply with this policy
and other security requirements.

As of May 2025 Code Town does not currently allow third-party access.

### Monitoring and Logging

Access to systems and data must be logged and regularly reviewed to detect
unauthorized activity. Logs must be protected from tampering.

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
