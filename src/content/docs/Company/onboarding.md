---
title: Onboarding
description: Shorebird Onboarding
template: doc
sidebar:
  order: 2
---

Welcome to Shorebird! We're _extremely_ glad you're here.

This guide is here to walk you through the onboarding process. If you have any
problems, please reach out to the team or your manager on Discord to get
unblocked.

## After Signing Employment Contract

- You should get an email from Rippling after signing your offer letter. This
  will include instructions on how to set up your Rippling account and thus
  begin the digital parts of the onboarding process.
- Rippling will also walk you through electing benefits based on your physical
  location and thus setting up payroll deductions for your first payroll.
  - We mainly operate in the US which includes medical, dental, vision and life
    insurance as well as 401k.
  - As we expand out to other locations we will work to provide the needed
    benefits given employment regulations.
- Your manager will reach out to set up a meeting where we walk through this doc
  and also order you any hardware you might need on day one.
  - Our customers tend to use many different devices to develop on including
    Windows, Mac, and Linux. We can supply you with any hardware that you
    prefer, given the business need for it, so to start please pick an operating
    system that you feel the most comfortable and productive with.

## Start Week

While most of the items here will be completed on your first day it is required
that they are completed by the end of your first week.

### Employment Forms/Paperwork

There are a few tax forms required to fill out on your first day. This will be
different based on the country you are employed in.

**United States**

Rippling will help you take care of this process for you and typically includes
your W-4 and I-9. Please review the
[Form I-9 Acceptable Documents](https://www.uscis.gov/i-9-central/form-i-9-acceptable-documents)
and be prepared to show these, typically via video call, to your manager during
your first week.

### Account Setup

Given that we are a remote first company we rely on many cloud services to
conduct business operations. The main ones to have setup on the first day will
be Google & Discord. Other services will depend on your business need.

We keep an up to date list of all of our vendors as part of our
[Privacy Policy](https://shorebird.dev/privacy/). If you have a business need
for a new service please work with your manager to get it added to this list
before signing up.

#### All Employees

- Rippling should have offered you a chance to pick your Google Workspace
  username as part of your offer paperwork. That account should be enabled as
  you start on your first day. You should get an email to your personal account
  with your temporary credentials to login and get everything setup.
- If you have an existing Discord account you are welcome to use it. If you
  don't have one you can create one at
  [https://discord.com](https://discord.com). You can join our discord server at
  [https://discord.gg/shorebird](https://discord.gg/shorebird). Message your
  manager and they will will be able to add to the "Birder" role which will
  allow access to our internal channels.
  - This can be found at `Server Settings > Roles > Birder > Add Member`.
- We utilize Ramp for our expenses. Work with your manager to determine the
  needed level of permissions and they can help get you setup there.

#### Engineering Team

- You will use your existing GitHub account, but you will be added to the
  Shorebird organization. This is currently manual a manual process. Submit your
  GitHub username to your manager to start this process.
  - Owners of the GitHub organization can add new members via
    [the People View](https://github.com/orgs/shorebirdtech/people).
- There are roles as part of our Google Cloud setup which you will need to be
  added to manually after joining based on your business need.

#### Operations Team

This list will change based on the business need your role has. Please work with
your manager to determine and get onboarded to the systems you believe you need.

**Business/Sales**

- Attio - Sales CRM
- Stripe - Payment Platform

**Finance**

- Stripe - Payment Platform
- Pilot - Accountant
- Mercury - Bank Account
- Sphere - Tax Platform
- Ramp - Expense Tool

### ISO Compliance

As part of our ISO Compliance we have certain procedures that we need to follow
during your employment.

#### Set up OneLeet Agent

TBD

#### Accept Policies

TBD

#### Security Training

TBD

### Use The Product

Please try the product, if you haven't already. We are here to build something
people want. What have you seen customers need in trying to use Flutter/Dart? We
should build that.

While your eyes are still fresh, you are encouraged to write down any frictions
you encounter in the product. Anything you see, likely was seen by 100s of
customers and ignored, but we should fix it. You'll find a folder in Google
Drive where others have written friction logs if you wish to feel inspired.

## Day to Day Operations

If your used to a remote first way of working most of this section may be known
to you already. If this is your first role in this way of working please read
the following sections carefully to get an understanding of how we work on a day
to day basis. As usual, these are ever changing and evolving as the team grows
so if you see something that doesn't make sense or could be improved please work
with your manager to do so.

### Communication

We use Discord as our main communication channel. This allows us to have an open
forum with our customers and community members and still have private areas for
internal only discussions.

Please keep in mind that Discord is completely public. So far that's been great,
but the public internet also has a long history of not always being a great
place. You should not feel any obligation to accept DMs on Discord, or use your
real name or likeness. Although so far most of our communications default to
public if you prefer to communicate in our private channels that's also fine.
Similarly, unwanted attention and spam on Discord are violations of our
policies, please do not hesitate to ask in private channels for assistance
removing Discord visitors.

- All employees will be added to the "Birder" role on Discord which will also
  allow you to have moderation capabilities.
- You should consider muting Discord, except for @mentions, if the amount of
  notifications is bothering you.
- Current patterns have involved a most-days sync over VC and brief end-of-day
  updates in #standup. We expect these to evolve over time as we grow.

#### Email & Calendar

You do have an email address and calendar provided via Google Workspace, but so
far we haven't needed them much internally and is mostly used as an external
communication tool.

### Storage

We use Google Drive as our main storage provider. You are supplied with a
personal drive for your own documents and we utilize Shared Drives for any
company wide information that needs to be shared.

Please **do not** keep documents only on your local disk and instead default to
using Google Drive.

### Pay Periods

- For US employees, paychecks are delivered every 2 weeks. Rippling should have
  offered you direct deposits. Let your manager know if you have any trouble
  getting set up.
- For EOR employees, paychecks vary according to the country you are in. Check
  [Deel's FAQ](https://help.letsdeel.com/hc/en-gb/articles/4413976907025-When-Do-I-Get-Paid)
  to check the specific payment schedule for your country.

### Engineering

#### Planning

So far we've been working out of
[GitHub projects](https://github.com/orgs/shorebirdtech/projects) for our
planning. This is extremely useful given that we can easily pull in tickets
filed by our customers into our projects boards.

For longer term discussions and design documents we typically store and work on
these in Google Drive.

#### Code

All of our code is stored in [GitHub](https://github.com/orgs/shorebirdtech/).

Once you've been added to the Shorebird organization on GitHub, the best way to
get started would be to clone the internal
[`_shorebird`](https://github.com/shorebirdtech/_shorebird) repo. It will
automatically clone the public repo `shorebird` for you as a submodule.

```bash
git clone git@github.com:shorebirdtech/_shorebird.git
cd _shorebird
git submodule init
git submodule update
```
