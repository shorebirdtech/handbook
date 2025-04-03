---
title: Security
description: Shorebird Security Policy
template: doc
sidebar:
  order: 6
---

This is our internal security policy. This document exists both for education of
our employees as well as for reference by our customers if needed. Authorship
and change history for this policy are visible in the git history of this
document. If you have questions about the security practices in place for our
products, those details can be found on our
[docs site](https://docs.shorebird.dev/system/security/).

Management reviews this document annually. Last Reviewed: April 2025.

Changes or exceptions to these policies should be reviewed by the CEO.

## Organization & Responsible Parties

Shorebird is a small company. We were fewer than 5 people as of April 2025.

Eric (CEO) is end-responsible for all things Shorebird, including informational
security. We do not have a dedicated security team, but security is part of our
engineering culture and we have built a team with experience in security.

## Employee Security & Confidentiality

All employees are required to sign a confidentiality agreement. Employees
receive security training as part of their onboarding process, including reading
this document as well as Shorebird's
[Terms of Service](https://shorebird.dev/terms) and
[Privacy Policy](https://shorebird.dev/privacy).

All employees are subject to background checks pursuant to local laws.

### Employee Offboarding

When an employee leaves the company, their access to all systems is revoked
immediately. We have a checklist for offboarding employees that includes
revoking access to all systems. Since all access to all production systems is
gated on Google SSO, this is a simple process.

Access to our systems is reviewed regularly. So far our company is small enough
and we use SSO for all access, so this is a trivial process.

## Contractor Security & Confidentiality

Shorebird does not use contractors at this time. If we do in the future, they
will be covered by the same security policies and processes as employees and
sign the same confidentiality agreement.

## Internal Access Control

### Network

Shorebird does not run it's own internal network. Given that we are an all
[remote company](/company/company_details/#a-note-on-remote-only) this is of no
benefit to us and instead rely on Cloud Services.

We use HTTPS for all communication between our employees, our products, and our
customers. We use Google Cloud's managed SSL certificates for this.

### Devices

All employees are provided with company devices for work. If you believe you
need to use an external device for job related functions please work with the
management team to understand the need and purchase the needed equipment via the
company.

Employees are obligated to maintain physical security of their devices and the
confidentiality of any customer data they may access as part of supporting a
customer.

Devices owned and issued by the company and are required to use full disk
encryption.

We do not permit access to Shorebird production systems or customer data from
personal devices.

The vast majority of Shorebird's code and operations are handled in the open,
either via public code on GitHub, or public discussions on Discord, so while we
do not permit access to internal systems from personal devices, employees
generally do not need access to internal systems to do their work.

### Passwords

All passwords are stored in a password manager. We use
[1Password](https://1password.com/). We do not store passwords in code, in
emails, or in any other insecure location. Passwords should never be passed to a
command line program as an argument, as they will then be stored in the shell
history file.

We do not recommend ever typing a password. Instead, we recommend using a
password manager to generate and store passwords. This ensures that passwords
will never be input into a place they were not intended to be.

Access to our SSO provider (Google) has required strong passwords (Google's
guidelines) and two factor authentication (2FA).

### Physical Access

Shorebird is an
[all-remote company](/company/company_details/#a-note-on-remote-only). We have
no physical office or visitor policies. We do not own or operate physical
servers.

### User Access Review

We review all user access to our systems periodically, as well as as part of an
employee joining or leaving the company. All access to Shorebird systems is
gated through Google SSO including required two factor authentication.

## Third Party Suppliers

We use a number of third party services to run our business. We list those which
may come in contact with customer data as part of our privacy policy:
https://shorebird.dev/privacy

### Third Party Service Accounts

Accounts are bucketed into having handling customer data (e.g. Google Cloud) or
not (e.g. Canva).

- All accounts and services we use are logged in our Accounts sheet.
- All accounts should authenticate through Google OAuth (SSO). Exceptions must
  be approved by the CEO.
- Accounts that can never reach customer data (e.g. Twitter), may alternatively
  use a strong password stored in 1Password and two factor authentication if SSO
  is not available.
- Additions to the Accounts sheet are reviewed by the CEO.

## Incident Response

We have a private playbook for incident response. We have logging and alerting
in place to detect and respond to incidents. We have both dedicated private
channels on Discord for response as well as back-up text communication pathways
as well as phone numbers for all engineers.

We do not currently have separate incident tracking beyond our public GitHub. We
always notified all customers when affected by incidents (security or otherwise)
via their billing email address in the past and will continue to do so going
forward.

## Vendor Certifications

Shorebird maintains no vendor certifications at this time. We do from time to
time have security teams reach out and provide feedback on our APIs or source
code (which mostly public on [GitHub](https://github.com/shorebirdtech)).
Feedback always welcome.

We have started our ISO 27001 certification with an expected completion of Q3 2025.

## Product Production System Access

We use [Google Cloud IAM](https://cloud.google.com/iam) for access control and
[Google Cloud Logging](https://cloud.google.com/logging) for logging.

A small number of engineers have access to production systems. Production
changes are all done via CI/CD pipelines, as detailed in the Change Management
section.

We have an additional (read-only) admin layer to a subset of our production
systems for monitoring and support purposes.

## Business Continuity Planning

Shorebird has no formal Business Continuity Plan at this time.

Our code push product is designed such that any interruption to Shorebird's
services will not affect the users of your application, other than that you are
no longer able to provide them patches through Shorebird during such an
interruption. Shorebird is designed so that using Shorebird should never be
worse than not using Shorebird.

Not only is this good hygiene for our system, but it is also necessary since we
provide service to mobile applications which have unreliable network
connectivity and must therefore function well regardless of Shorebird
availability.

We monitor Shorebird's availability and have seen no interruption in Shorebird's
services in over a year. This is in large part due to our reliance on public
cloud infrastructure (Google, Cloud Flare) which themselves maintain high
degrees of reliability and business continuity planning.
https://shorebird.statuspage.io/
