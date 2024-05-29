# Security

This is our public security policy, which is a subset of our security practices.

This document exists both for education of our employees as well as for
reference by our customers.  Changes are welcome and should be reviewed by Eric.

Shorebird is an software application.  Most of our code is open source and
publicly reviewable on GitHub.  We use Google Cloud for the bulk of our
infrastructure.

Shorebird only offers a hosted service at this time.  We do not offer [on-prem
or cloud-prem at this
time](https://github.com/shorebirdtech/shorebird/issues/485).

## Terms

Throughout this document we will refer to the following terms:
- Customer / you: A user of Shorebird.
- End User: A user of a Customer's application.

## Personnel Security

All employees are required to sign a confidentiality agreement.  Employees
receive security training as part of their onboarding process, including reading
this document.

## Access Control

### Passwords

All passwords are stored in a password manager.  We use
[1Password](https://1password.com/).  We do not store passwords in code, in
emails, or in any other insecure location.

We do not recommend ever typing a password.  Instead, we recommend using a
password manager to generate and store passwords.  This ensures that passwords
will never be input into a place they were not intended to be.

### Accounts

Accounts are bucketed into having handling customer data (e.g. Google Cloud) or
not (e.g. Canva).

- All accounts and services we use are logged in our Accounts sheet.
- All accounts should authenticate through Google OAuth (SSO).  Exceptions must
  be approved by Eric.
- Accounts that can never reach customer data (e.g. Twitter), may alternatively
  use a strong password stored in 1Password and two factor authentication if SSO
  is not available.

### Production Access

Production access is logged.  We use [Google Cloud
IAM](https://cloud.google.com/iam) for access control and [Google Cloud
Logging](https://cloud.google.com/logging) for logging.

We have an additional (read-only) admin layer on top of production to obviate
need for direct access to production.

## Change Management

### Code Reviews

All code should be reviewed by at least one other engineer before being merged.
We have branch policies in place on all of our repositories to ensure such. This
is done in service of security, but also in service of code quality.  We believe
that code reviews are the best way to ensure that code is secure, maintainable,
and understandable.

### Deployment

All changes to production are deployed through a CI/CD pipeline.  We use [GitHub
Actions]( https://docs.github.com/en/actions) for this.  We have a staging
environment that is used for testing changes before they are deployed to
production.

Our CI/CD pipeline runs tests, linters, and other checks before deploying to
production.  Our CI/CD pipeline is configured with unique service accounts that
have the minimum permissions necessary to deploy to production.

### Rollbacks

We have the ability to rollback changes to production.  Typically we execute a
rollback via a revert commit in our codebase and a new deployment, however we
also have the ability to rollback individual services in our infrastructure to
previous versions if necessary.

## Network Security

Both our application and our infrastructure are hosted on Google Cloud.  We use
Google Cloud's network security features to secure our infrastructure, including
restricting all public access to our infrastructure outside of our application
endpoint.

We have dedicated machines for access directly to our production environment,
access to such is restricted to a small number of engineers and is logged.

## Supplier Relationships

We use a number of third party services to run our business.  We list those
which may come in contact with customer data as part of our privacy policy:
https://shorebird.dev/privacy

## Incident Response

We have a private playbook for incident response.  We have logging and alerting
in place to detect and respond to incidents.  We have both dedicated private
channels on Discord for response as well as back-up text communication pathways
as well as phone numbers for all engineers.

## Data Privacy

See our privacy policy: https://shorebird.dev/privacy

The information we collect from you is used to provide the service for you. We
do not sell or share your information with third parties, except as required by
law.  Your data is stored in association with your account and deleted when you
delete your account.

Shorebird does not process, transmit or store personally identifiable
information for our customers' end users.  Additionally, we take care to store
as little data from our customers (you) as possible.

## Acceptable Use

Use of Shorebird is governed by our [Terms of
Service](https://shorebird.dev/terms). We have logging and alerting in place to
ensure that our service is not used for malicious purposes or such that would
disrupt the service for other users.

## Architecture Diagrams

We've written more on the architecture of Shorebird in our [architecture
documentation](https://docs.shorebird.dev/architecture).