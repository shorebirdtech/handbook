# Security

This is our public security policy, which is a subset of our security practices.

This document exists both for education of our employees as well as for
reference by our customers. Changes are welcome and should be reviewed the CEO.

Authorship and change history for this policy are visible in the git history of
this document.

Management reviews this document annually. Last Reviewed: May 2024.

Exceptions to these policies are reviewed by the CEO.

## About Shorebird

Shorebird is a software application. Most of our code is open source and
publicly reviewable on GitHub. We use Google Cloud for the bulk of our
infrastructure.

Shorebird only offers a hosted service at this time. We do not currently offer
[on-prem or cloud-prem](https://github.com/shorebirdtech/shorebird/issues/485).

## Organization

Shorebird is a small company. We are 4 as of May 2024.

Eric (CEO) is end-responsible for all things Shorebird, including informational
security. We do not have a dedicated security team, but security is part of our
engineering culture and we have built a team with experience in security.

## Bug Bounty

We do not currently offer a bug bounty program. We welcome reports of security
vulnerabilities.

contact@shorebird.dev is the best way to reach us. We will respond to reports in
a timely manner.

## Terms

Throughout this document we will refer to the following terms:

- Customer / you: A user of Shorebird.
- End User: A user of a Customer's application.

## Personnel Security

All employees are required to sign a confidentiality agreement. Employees
receive security training as part of their onboarding process, including reading
this document.

All employees are subject to background checks pursuant to local laws.

Shorebird does not use contractors at this time. If we do in the future, they
will be covered by the same security policies as employees and sign the same
confidentiality agreement.

## Infrastructure

Shorebird is hosted on Google Cloud. We use Google Cloud's security features to
secure our infrastructure. We have a dedicated VPC for our infrastructure.

Currently Shorebird only uses Google Cloud's Iowa region. We have plans to
expand to other regions in the future for our international customers.

Shorebird uses Google Cloud's managed services where possible. We do not manage
custom versions of software or operating systems, but instead rely on Google
Cloud to manage and update these services on a daily basis. For example, our
application end points use Google Cloud Run which is a managed service that
lives no longer than an hour, allowing Google to manage the underlying
infrastructure including patching continuously. Other parts of our
infrastructure are similar.

Shorebird uses Google Cloud's managed services for backups. This data (as well
as all data in Google Cloud) is encrypted at rest.

## Network Access

Shorebird is a web application. We use HTTPS for all communication between our
application and our customers. We use Google Cloud's managed SSL certificates
for this.

Use of Shorebird requires access to the following web addresses:

- `api.shorebird.dev`
- `console.shorebird.dev`
- `storage.googleapis.com`

Only the https port should be needed for access to Shorebird.

See also https://docs.shorebird.dev/faq/#can-i-use-shorebird-in-my-country.

## Confidentiality

Shorebird Terms of Service and Privacy Policy are available at
https://shorebird.dev/terms and https://shorebird.dev/privacy respectively which
cover our obligations to you as our customer.

### Customer Data (data about you as a user of Shorebird)

In general we do not access customer data unless required as part of providing
you support or monitoring the service for usage and security.

We treat customer data as confidential. We have logging in place to detect
unauthorized access to customer data. Customer data may be accessed by employees
as part of providing support to you.

We do not share customer data with third parties except as required by law. We
have a few third party services that we use to run our business, see our privacy
policy for our list of vendors: https://shorebird.dev/privacy/

We try to store very little data for or about our customers. Examples of
customer data we store include:

- Email address and Name
- Stripe Customer ID (we do not store payment information)
- Built applications archives (e.g. .xcarchive, .aab for Releases and Patches)
- Release Metadata (e.g. flutter version, xcode version, java version, etc.)

Shorebird servers never see or store your source code. All `shorebird` commands
run locally on devices you control and only upload the built application
archives (same binaries you distribute to stores and your users) to our servers
for your later use or distribution.

Google Cloud encrypts all data at rest by default.

### End User Data (data about Shorebird's customers' end users)

_Shorebird does not process, transmit or store personally identifiable
information for our customers' end users. We do not have access to end user
data._ Customer security forms often ask for information about how we handle end
user data. We do not handle end user data.

Some regions consider IP addresses to be personally identifiable information,
Google Cloud does record IP addresses in logs. We do not access these IP
addresses in logs for any purpose other than security and monitoring.

Shorebird's product allows you, and only you, to update the code of your
application on end user devices. We do not collect or wish to collect any
information from these users or devices.

## Product Access Control

Shorebird accounts are managed through Google or Microsoft OAuth. We do not
store passwords for our users.

Shorebird accounts provided role-based access control on a per-application
basis. We have three roles: Owner, Admin, and Developer which are described in
https://docs.shorebird.dev/teams/

## Internal Access Control

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

### Production Access

We use [Google Cloud IAM](https://cloud.google.com/iam) for access control and
[Google Cloud Logging](https://cloud.google.com/logging) for logging.

A small number of engineers have access to production systems, for which we have
a dedicated machine for access. Production changes are all done via CI/CD
pipelines, as detailed in the Change Management section.

We have an additional (read-only) admin layer to a subset of our production
systems for monitoring and support purposes.

### Personal Devices

We do not permit access to Shorebird production systems from personal devices.

We do not permit access to customer data from personal devices.

The vast majority of Shorebird's code and operations are handled in the open,
either via public code on GitHub, or public discussions on Discord, so while we
do not permit access to internal systems from personal devices, employees
generally do not need access to internal systems to do their work.

All employees are provided with company devices for work.

### Physical Access

Shorebird is an all-remote company. We have no physical office or visitor
policies. We do not have physical servers.

Employees are obligated to maintain physical security of their devices and the
confidentiality of any customer data they may access as part of supporting a
customer.

Employees are issued devices by the company and are required to use full disk
encryption on their devices.

### Employee Offboarding

When an employee leaves the company, their access to all systems is revoked
immediately. We have a checklist for offboarding employees that includes
revoking access to all systems. Since all access to all production systems is
gated on Google SSO, this is a simple process.

Access to our systems is reviewed regularly. So far our company is small enough
and we use SSO for all access, so this is a trivial process.

## Suppliers

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

## Change Management

### Code Reviews

All code should be reviewed by at least one other engineer before being merged.
We have branch policies in place on all of our repositories to ensure such. This
is done in service of security, but also in service of code quality. We believe
that code reviews are the best way to ensure that code is secure, maintainable,
and understandable.

### Dependencies

We keep all of our dependencies up to date. All of our repositories are expected
to use [Dependabot](https://dependabot.com/) to automatically open pull requests
for updates to our dependencies.

All of our production code has 100% test coverage. We have automated tests in
place to ensure that changes do not break our application. Debugging or
non-production code is not required to have 100% test coverage.

See our engineering policies in our [engineering handbook](engineering.md).

### Deployment

All changes to production are deployed through a CI/CD pipeline. We use [GitHub
Actions](https://docs.github.com/en/actions) for this. We have a staging
environment that is used for testing changes before they are deployed to
production.

Our CI/CD pipeline runs tests, linters, and other checks before deploying to
production. Our CI/CD pipeline is configured with unique service accounts that
have the minimum permissions necessary to deploy to production.

### Rollbacks

We have the ability to rollback changes to production. Typically we execute a
rollback via a revert commit in our codebase and a new deployment, however we
also have the ability to rollback individual services in our infrastructure to
previous versions if necessary.

## Network Security

Both our application and our infrastructure are hosted on Google Cloud. We use
Google Cloud's network security features to secure our infrastructure, including
restricting all public access to our infrastructure outside of our application
endpoint.

We have dedicated machines for access directly to our production environment,
access to such is restricted to a small number of engineers and is logged.

## Incident Response

We have a private playbook for incident response. We have logging and alerting
in place to detect and respond to incidents. We have both dedicated private
channels on Discord for response as well as back-up text communication pathways
as well as phone numbers for all engineers.

### Post Mortems

We have a post mortem process in place for incidents. We review incidents within
48 hours of their occurrence and write a post mortem document that is shared
with the team. We use these post mortems to improve our systems and processes.
We do not currently share our post mortems publicly, although we are considering
doing so in the future.

## Data Privacy

See our privacy policy: https://shorebird.dev/privacy

The information we collect from you is used to provide the service for you. We
do not sell or share your information with third parties, except as required by
law. Your data is stored in association with your account and deleted when you
delete your account.

Shorebird does not process, transmit or store personally identifiable
information for our customers' end users. Additionally, we take care to store as
little data from our customers (you) as possible.

## Data Retention

We retain customer data for as long as you have an account with us. Customers
are able to access and delete their data at any time. We retain aggregated,
anonymized data for analytics purposes beyond termination of your account.

Customers can delete almost all information in their account by hand, however
deleting the final database row requires contacting support at this time:
https://docs.shorebird.dev/uninstall/

See our privacy policy for more information: https://shorebird.dev/privacy

## Acceptable Use

Use of Shorebird is governed by our [Terms of
Service](https://shorebird.dev/terms). We have logging and alerting in place to
ensure that our service is not used for malicious purposes or such that would
disrupt the service for other users.

## Architecture Diagrams

We've written more on the architecture of Shorebird in our [architecture
documentation](https://docs.shorebird.dev/architecture).
