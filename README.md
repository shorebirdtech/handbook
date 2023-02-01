# Handbook

Shorebird company handbook.  Modeled after [GitLab's
handbook](https://about.gitlab.com/handbook/).

## Introduction

The Shorebird handbook is the central repository of how we run the company.  It
is a living document that is updated as we learn and grow.  It is a work in
progress, and we welcome your feedback and contributions.

## About Shorebird

Shorebird (legally Code Town, Inc) is a Delaware C Corp, founded to foster
adoption of multi-platform development globally.  We were founded by some of the
same team who built Flutter and Dart and use those as our vehicle.

Shorebird is likely a placeholder name until we find a better one.  Suggestions
welcome.

Shorebird is the name of the street on which Flutter was created.

## Mission

Make multi-platform the default way all developers build interactive software.

## Why

Shorebird exists because we're frustrated that the world wastes years of human
life, writing the same thing multiple times.

Existing incentive structures, particularly around mobile, force developers to
choose an ecosystem and thus choose a tool-set.  This is unlike how the web
functions, where because everything runs with the same environment everywhere
developers write once and things (mostly) run everywhere.  While we see great
value in the Web, we also see it's limits.  The Web was never designed to build
applications or run on tiny devices and has not been capable of delivering
sufficiently great experiences in many places, including mobile.  We built
Flutter to solve this, but existing Flutter teams, funded primarily out of
Google, are limited in what they are incentivized to solve.

Shorebird was started to solve problems others can't or wont solve with Flutter
and bring the benefits of multi-platform development to the many millions of
developers who are still stuck on single-platform toolchains.  Every interactive
pain of glass should deliver great user experiences, and to do that, Flutter is
the best tool we have so far.  Shorebird is here to help.

It's important that Shorebird is a company.  We're exploiting capitalism to
align incentives behind the world adopting multi-platform.  Flutter and other
multi-platform solutions have suffered from a lack of economic incentives.
Shorebird is here to change that.


## Values

* Focus on the user and all else will follow.  Borrowed from Google (and
  [Flutter](https://github.com/flutter/flutter/wiki/Values)).  Users are the
  reason we exist, and we will always put them first.
* Be open.  We believe in transparency and openness.  We live in a big world.
  Shorebird (and Flutter) serve a global audience.  We can't always be in the
  room and so the best way to "set others up to succeed" is to write things down
  in the open.  Open Source is what made Flutter successful (and web browsers
  before it) and will be what makes Shorebird successful.  Relating to this the
  idea of writing things down.  We're all getting better at this.  Responding
  with something written publicly is almost always better than a one-off
  response.
* The future is bigger than the past.  Akin to Amazon's [Day
  1](https://www.aboutamazon.com/about-us), the idea that what we've
  accomplished so far is small compared to what we shall do together in the
  future.  We are just getting started, join us.  At time of writing, there are
  only a few million Flutter developers.  There are billions of people, and
  probably 100s of millions of developers in the future.  We're here to help
  them all.

## Culture
* All remote.  We're still figuring this out.  There are HUGE benefits to being
  in person, but the world is also too big and too filled with talented people
  to limit our hiring to one location.
* Ship yesterday.  We're too early to know exactly the right path for the
  business, so the most important thing to do is bias towards action and get
  things in customers hands, yesterday.


## Team

* Eric Seidel (@eseidel), Founder & CEO -- Founded Flutter before Shorebird. Was
  previously Director of Flutter and Dart at Google.  Eric has been working on
  helping the world stop writing everything twice 20 years, including major
  contributions to WebKit, Safari, Blink and Chrome.


## User pain
I've spoken with many Flutter customers.  They love Flutter, but still find pain
using or adopting it within their businesses.  Some of the top pains I've heard
from existing Flutter enterprise teams are:
* Mobile releasing is hard.  Mobile releasing is harder than web.  Maintaining
  lots of versions of apps (and associated backends) is hard.  "Code Push" is
  one solution, but Google's Flutter team  has chosen not to invest in it.  We
  should.
* Keeping product and other stakeholders abreast of latest changes is hard.
  Some would like something akin to Vercel's "Deploy Previews" for Flutter apps.
* Teams share mobile code, would like to share backend code.  Most shops write
  in Flutter for mobile and then a variety of languages for backends.  Many have
  backends they would not fully re-write, so would need to plug in with existing
  other services.
* Teams share mobile code, would like to share web code.  Most shops write in
  Flutter for mobile and then React for the web.
* Dart/Flutter builds are too long.  Most often this doesn't seem to be Dart or
Flutter itself, but rather the mobile build systems, particularly when plugins
are involved.
* Hard to manage many apps.  Coordinating updates (e.g. a logo) across multiple
apps and multiple releases is hard, even with Flutter.
* Crash reporting and analytics are "meh".  Existing solutions are not great for
  Flutter. Some complaints that Sentry doesn't play nicely with lots of versions
  in the wild (assumes a model of servers or web with one or few live versions).
  Other complaints that existing analytics solutions don't fully understand
  Flutter views (where the user has scrolled to, etc.).
* Knowing what to use in the Flutter ecosystem is hard.  Quality of the Flutter
  ecosystem is inconsistent.  Platform availability within the Flutter ecosystem
  is inconsistent.
* Testing Flutter apps (and mobile apps in general) is hard.  Some have asked
  for something like [Mobile.dev](https://mobile.dev/) for Flutter apps.
  Particular trouble around testing "invasive" apps, such as ones which use
  system accessibility events.

# Notes
As this doc gets bigger, feel empowered to split it out into multiple files.
