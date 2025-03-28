---
title: Onboarding
description: Shorebird Onboarding
template: doc
sidebar:
  order: 2
---

Welcome to Shorebird! We're _extremely_ glad you're here.

This guide is here to walk you through your first (days).

If you have any problems, please email Eric!

# Days before

- You should get an email from Rippling after signing your offer letter. This
  will include instructions on how to set up your Rippling account and thus
  begin the digital parts of the onboarding process.
- Rippling will also walk you through electing benefits (in the US that includes
  medical, dental, vision and life insurance as well as 401k) and thus setting
  up payroll deductions for your first payroll.
- Eric will reach out to set up a meeting where we walk through this doc and
  also order you any hardware you might need on day one.

  Our customers are primarily on Windows and targeting Android devices. You will
  eventually want access to a Windows device, even if it's not your primary
  device. If you're more comfortable on a Mac or Linux, that's fine for now, but
  most of us will likely have machines matching what our customers use over
  time.

# Day you join

## Accounts

- Rippling should have offered you a chance to pick your GSuite username as part
  of your offer paperwork. That account should be enabled before you start on
  your first day, you should get an email to your personal account.
- You will use your existing GitHub account, but you will be added to the
  Shorebird organization. This is currently manual (we've not set up Rippling to
  do it): https://github.com/orgs/shorebirdtech/people
- You will use your existing Discord account, but you will be added to the
  "Birder" role on our [Discord server](https://discord.com/invite/9hKJcWGcaB).
  We could automate this with a Discord
  [Linked Role](https://support.discord.com/hc/en-us/articles/10388356626711)
  but haven't yet. `Server Settings > Roles > Birder > Add Member`
- There are roles as part of our Google Cloud setup which you will need to be
  added to manually by Eric after joining. We'll sort that out as part of
  getting your local dev setup working (and hopefully make a list here).

## Communication

- As noted above, you will be added to the "Birder" role on Discord and you will
  have moderation powers on Discord. As a Birder, you'll see our (few) private
  company channels and customer channels as well as the public ones.
- You should consider muting Discord, except for @mentions. If Discord ends up
  too noisy, we'll find something quieter for internal communication.
- Discord is completely public. So far that's been great, but the public
  internet also has a long history of not always being a great place. You should
  not feel any obligation to accept DMs on Discord, or use your real name or
  likeness. Although so far most of our communications default to public if you
  prefer to communicate in our private channels that's also fine. Similarly,
  unwanted attention and spam on Discord are violations of our policies, please
  do not hesitate to ask in private channels for assistance removing Discord
  visitors.
- Current patterns have involved a most-days sync over VC and brief end-of-day
  updates in stand-up. I expect these to evolve over time as we grow.
- You have an email address, but so far haven't needed them much. #dev-chatter
  is where the constant back-and-forth is currently happening.
- You have a calendar, but also don't plan to use it a ton. Eric has meetings
  with the outside world, but the rest of the company shouldn't need to meet
  much yet. Eric's calendar is public to the company should you ever need it.

## Planning

- So far we've been working out of GitHub projects for our planning.
  https://github.com/orgs/shorebirdtech/projects With some other ad-hoc
  documents for longer term discussions.

## Forms

- There are a few tax forms required to fill out on your first day. In the US
  that's W-4 and W-9. Rippling will help you take care of this. If you have an
  iPhone you can use the "Notes" app to scan the signed documents as PDFs.
  Android likely has something similar.

## Finances

- For US employees, paychecks are delivered every 2 weeks. Rippling should have
  offered you direct deposits. Let Eric know if you have any trouble getting set
  up.
- For EOR employees, paychecks vary according to the country you are in. Check
  [Deel's FAQ](https://help.letsdeel.com/hc/en-gb/articles/4413976907025-When-Do-I-Get-Paid)
  to check the specific payment schedule for your country.

## Code

- Once you've been added to the Shorebird organization on GitHub, you should
  clone the internal `_shorebird` repo. It will automatically clone the public
  repo `shorebird` for you as a submodule.

  ```bash
  git clone git@github.com:shorebirdtech/_shorebird.git
  cd _shorebird
  git submodule init
  git submodule update
  ```

## Product

- Please try the product (if you haven't already). We are here to build
  something people want. What have you seen customers need in trying to use
  Flutter/Dart? We should build that. We keep a list of customer pain in the
  Handbook, please feel free to add to it.
- While your eyes are still fresh, you are encouraged to write down any
  frictions you encounter in the product. Anything you see, likely was seen by
  100s of customers and ignored, but we should fix it. You'll find a folder in
  Google Drive where others have written friction logs if you wish to feel
  inspired.

## Please edit the handbook

- I'm sure there is a ton missing from this onboarding guide and the handbook
  more generally. Please send at least one PR to the handbook. I'm sure you
  learned things through onboarding the next person should know.
