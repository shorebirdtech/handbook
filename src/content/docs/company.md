---
title: Shorebird
description: Shorebird as a company
template: doc
---

Shorebird (legally Code Town, Inc) is a Delaware C Corp, founded to foster
adoption of multi-platform development globally. We were founded by some of the
same team who built Flutter and Dart and use those as our vehicle.

Shorebird is the name of the street on which Flutter was created and is likely a
placeholder name until we find a better one. Suggestions welcome.

## Mission

Make multi-platform the default way all developers build interactive software.

## Why

Shorebird exists because we're frustrated that the world wastes years of human
life, writing the same thing multiple times.

Existing incentive structures, particularly around mobile, force developers to
choose an ecosystem and thus choose a tool-set. This is unlike how the web
functions, where because everything runs with the same environment everywhere
developers write once and things (mostly) run everywhere. While we see great
value in the Web, we also see its limits. The Web was never designed to build
applications or run on tiny devices and has not been capable of delivering
sufficiently great experiences in many places, including mobile. We built
Flutter to solve this, but existing Flutter teams, funded primarily out of
Google, are limited in what they are incentivized to solve.

Shorebird was started to solve problems others can't or wont solve with Flutter
and bring the benefits of multi-platform development to the many millions of
developers who are still stuck on single-platform toolchains. Every interactive
pane of glass should deliver great user experiences, and to do that, Flutter is
the best tool we have so far. Shorebird is here to help.

It's important that Shorebird is a company. We're exploiting capitalism to
align incentives behind the world adopting multi-platform. Flutter and other
multi-platform solutions have suffered from a lack of economic incentives.
Shorebird is here to change that.

## Values

- Focus on the user and all else will follow. Borrowed from Google (and
  [Flutter](https://github.com/flutter/flutter/wiki/Values)). Users are the
  reason we exist, and we will always put them first.
- Be open. We believe in transparency and openness. We live in a big world.
  Shorebird (and Flutter) serve a global audience. We can't always be in the
  room and so the best way to "set others up to succeed" is to write things down
  in the open. Open Source is what made Flutter successful (and web browsers
  before it) and will be what makes Shorebird successful. Relating to this the
  idea of writing things down. We're all getting better at this. Responding
  with something written publicly is almost always better than a one-off
  response.
- The future is bigger than the past. Akin to Amazon's [Day
  1](https://www.aboutamazon.com/about-us), the idea that what we've
  accomplished so far is small compared to what we shall do together in the
  future. We are just getting started, join us. At time of writing, there are
  only a few million Flutter developers. There are billions of people, and
  probably 100s of millions of developers in the future. We're here to help
  them all.

## Culture

- All remote. We're still figuring this out. There are HUGE benefits to being
  in person, but the world is also too big and too filled with talented people
  to limit our hiring to one location.
- Ship yesterday. We're too early to know exactly the right path for the
  business, so the most important thing to do is bias towards action and get
  things in customers hands, yesterday.

### A note on remote-only

Eric worked mostly on web browsers before starting Flutter -- something used
globally by billions of people and built open source by persons from every
corner of the globe. It taught him that there are truly brilliant and motivated
people everywhere. Leading Flutter and Dart (including through pandemic
lockdowns and the resulting work-from-home diaspora) showed him that
remote-first can work and that people can do their best work when you don't care
where they live but rather what they get done. So that's what we're doing at
Shorebird. Hiring the best people, wherever they are.

Remote also has its downsides, clearly. Culture is much harder. How do you
build social experiences at work for those who want it? How do you build a
unified understanding of what the company is (as things inevitably change)
without being in the same room regularly? GitLab and others have written
extensively on these
[challenges](https://about.gitlab.com/company/culture/all-remote/guide/). So we
don't know, but we sure as heck are gonna try. The world is simply too big and
too filled with talented people to limit our hiring to one location.

So far our (very early) learnings have reinforced our believe in remote-only,
but made us question if async-only remote will work. We're still learning.

## Team

- Eric Seidel (@eseidel), Founder & CEO -- Founded Flutter before Shorebird. Was
  previously Director of Flutter and Dart at Google. Eric has been working on
  helping the world stop writing everything twice 20 years, including major
  contributions to WebKit, Safari, Blink and Chrome.

- Felix Angelov (@felangel), Founding Engineer -- Was previously
  Head of Open Source Software at Very Good Ventures. Felix is a dedicated
  open source maintainer with a passion for building software that
  enables developers to build wonderful applications.

- Bryan Oltman (@bryanoltman), Founding Engineer -- Was previously Tech Lead
  on Google's internal Flutter team and has extensive experience with
  enterprise usage of Flutter.

## Management

We don't currently have managers, or plan to anytime soon. Everyone just reports
to Eric. This will eventually break down at scale. While leading Flutter, Eric
had 20+ direct reports before we added more managers. Managers are very useful
for supporting people (checking in regularly, helping with onboarding, career
development, etc), but can get in the way of constant direct coordination needed
in small teams.

## Communication

Right now we all just use Discord. We have email, but mostly we use that for
communicating to the outside world or things which need a more permanent record.
Everything else happens on Discord, and 90%+ in public channels.

Flutter started with daily stand-ups (capped to 5 minutes total) and kept those
all the way until 30-40 people. It was a chance to promote daily coordination
between members of the team and as we got larger (10+) help make sure
individuals had resources to be unblocked and didn't accidentally work on the
same issues. I imagine we'll find something similar for Shorebird (synchronous

<!--- cspell:disable-next-line -->

or not) and may even do them publicly. We'll see. For now we use the #standup
channel on Discord to post what we're working on each day.

## Spending company money

We don't have much process around this yet. In short, we trust you to make the
right decisions for the company. I think GitLab has a [very sane
policy](https://about.gitlab.com/handbook/spending-company-money/) on this and
we'll likely adopt something similar.

## Future Products / User Pain

I've spoken with many Flutter customers. They love Flutter, but still find pain
using or adopting it within their businesses. Some of the top pains I've heard
from existing Flutter enterprise teams are:

- Mobile releasing is hard. Mobile releasing is harder than web. Maintaining
  lots of versions of apps (and associated backends) is hard. "Code Push" is
  one solution, but Google's Flutter team has chosen not to invest in it. We
  should.
- Keeping product and other stakeholders abreast of latest changes is hard. Some
  would like something akin to Vercel's "Deploy Previews" for Flutter apps.
- Teams share mobile code, would like to share backend code. Most shops write
  in Flutter for mobile and then a variety of languages for backends. Many have
  backends they would not fully re-write, so would need to plug in with existing
  other services.
- Teams share mobile code, would like to share web code. Most shops write in
  Flutter for mobile and then React for the web.
- Dart/Flutter builds are too long. Most often this doesn't seem to be Dart or
  Flutter itself, but rather the mobile build systems, particularly when plugins
  are involved.
- Hard to manage many apps. Coordinating updates (e.g. a logo) across multiple
  apps and multiple releases is hard, even with Flutter.
- Crash reporting and analytics are "meh". Existing solutions are not great for
  Flutter. Some complaints that Sentry doesn't play nicely with lots of versions
  in the wild (assumes a model of servers or web with one or few live versions).
  Other complaints that existing analytics solutions don't fully understand
  Flutter views (where the user has scrolled to, etc.).
- Knowing what to use in the Flutter ecosystem is hard. Quality of the Flutter
  ecosystem is inconsistent. Platform availability within the Flutter ecosystem
  is inconsistent.
- Testing Flutter apps (and mobile apps in general) is hard. Some have asked
  for something like [Mobile.dev](https://mobile.dev/) for Flutter apps.
  Particular trouble around testing "invasive" apps, such as ones which use
  system accessibility events.

# A note on hiring

If you're reading this and think Shorebird sounds like a fun place to work, come
check us out on [Discord](https://discord.gg/shorebird). We're hiring or will be again soon.
