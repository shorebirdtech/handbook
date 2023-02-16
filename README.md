# Handbook

Shorebird company handbook.  Modeled after [GitLab's
handbook](https://about.gitlab.com/handbook/).

## Introduction

The Shorebird handbook is the central repository of how we run the company.  It
is a living document that is updated as we learn and grow.  We welcome your
feedback and contributions.

## About Shorebird

Shorebird (legally Code Town, Inc) is a Delaware C Corp, founded to foster
adoption of multi-platform development globally.  We were founded by some of the
same team who built Flutter and Dart and use those as our vehicle.

Shorebird is the name of the street on which Flutter was created and is likely a
placeholder name until we find a better one.  Suggestions welcome.


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
pane of glass should deliver great user experiences, and to do that, Flutter is
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


### A note on remote-only

Eric worked mostly on web browsers before starting Flutter -- something used
globally by billions of people and built open source by persons from every
corner of the globe.  It taught him that there are truly brilliant and motivated
people everywhere.  Leading Flutter and Dart (including through pandemic
lockdowns and the resulting work-from-home diaspora) showed him that
remote-first can work and that people can do their best work when you don't care
where they live but rather what they get done.  So that's what we're doing at
Shorebird. Hiring the best people, wherever they are.

Remote also has its downsides, clearly.  Culture is much harder.  How do you
build social experiences at work for those who want it?  How do you build a
unified understanding of what the company is (as things inevitably change)
without being in the same room regularly?  GitLab and others have written
extensively on these
[challenges](https://about.gitlab.com/company/culture/all-remote/guide/).  So we
don't know, but we sure as heck are gonna try.  The world is simply too big and
too filled with talented people to limit our hiring to one location.

## Team

* Eric Seidel (@eseidel), Founder & CEO -- Founded Flutter before Shorebird. Was
  previously Director of Flutter and Dart at Google.  Eric has been working on
  helping the world stop writing everything twice 20 years, including major
  contributions to WebKit, Safari, Blink and Chrome.


## Engineering Practices

### Code Review
Shorebird is too early for code review to be useful as an approval tool.  We
hire great people and we trust them. Code review is still encouraged as it's
great for knowledge sharing and architecture validation, but also shouldn't be a
bottleneck.  Just TBR another person (to be reviewed) and submit.  We'd rather
move fast than wait for a review, especially as a global team.

### Style
We follow common style guides for the languages we use and use autoformatters.
For Dart, we follow the [Effective
Dart](https://dart.dev/guides/language/effective-dart) guide and use dart-format
to enforce it, even for Flutter code.

### Testing
We write tests.  They're not required (yet), since we're still finding the
product and tests are best at making sure we don't have to fix the same bug
twice.  However fixing the same bug twice is a "problem of success" (something
that can only occur when you have built something worth breaking twice).  So go
make something people want, we'll worry about keeping it working once we know
it's something people want.

Eventually I expect we'll require testing.  The first test is always the
hardest.  Senior team members/founders have a responsibility to write these
first tests and unlock the rest of the team to write tests for new areas.

### Time management & Focus

One of the lessons I've had to learn is focus, particularly when getting
something off the ground. There is always more to do than any of us can
accomplish.  It's critical for us to be regularly reevaluating what we as a team
view as the most important things to do and focus on those.  I've generally
found it to be more important to work on the most important thing than to finish
what I've started at least in the early stages of a project.  Techniques I've
seen work well for this have involved 1) making a list every day together of the
top N things to work on and distributing those, or b) setting a KPI for the week
and only working on we see as moving that.

Ian Hickson's approach (Flutter co-founder) was to have a whiteboard with his
todo list on it, publicly visible next to his desk and would happily accept your
argument as to why something else should be higher on the list.  Adam Barth
(another Flutter co-founder) and I (Eric) would regularly (often daily) write a
list of what we saw was the most important things for the project and pick
things off the list and do them.

### Languages
Where possible we use Dart.  "Dart as a single language everywhere" is part of
the dream we sell our customers and we should eat that dogfood.  That will cause
us to use a bunch of unfinished parts of the Dart ecosystem and find ourselves
building out parts where we need, but that's OK.

We're also practical and when Dart isn't the best choice (e.g. for parts of the
engine) we'll use languages we need to get the job done.  We will prefer to use
languages built in the last decade (e.g. rust, zig, etc) rather than older
less-safe/harder-to-use languages (e.g. c, c++), but we're not dogmatic about
this.

Rarely, we will write in the single-system languages (e.g. Kotlin, Swift, Java,
etc.) that don't port to other places.  We do that to save time for our
customers.

### Open Source
Following our "be open" value, we default all our source code to being open and
licensed as permissively as possible.

### Licensing Philosophy

All Shorebird code is licensed under the Apache 2.0 license OR the MIT license
at the users discretion.  This is done in service of our users.

We wish for our software to be as widely consumable as possible, while also
protecting our users from patent risk.  Apache 2.0 provides patent protections
for users but is not as widely consumable as MIT.  Specifically Apache 2.0 is
[incompatible with
GPL2](https://www.apache.org/licenses/GPL-compatibility.html), which is a
license used by many Linux distributions.

Furthermore we are intentionally using existing common, standard licenses,
rather than something bespoke. This furthers the goal that our software should
be maximally consumable by our users as they do not have to have complicated
discussions with their legal teams about the license as Apache 2.0 is a well
understood license throughout the industry.

[Rust](https://github.com/rust-lang/rust/blob/master/COPYRIGHT) is an example of
sharing this philosophy.  Although I was unable to find official Rust
documentation of this philosophy, I did find
[commentary](https://internals.rust-lang.org/t/rationale-of-apache-dual-licensing/8952/3)
from the core team. 

[Shorebird Template](https://github.com/shorebirdtech/template) contains the
necessary license files. Forking it is the easiest way to start a new repo.

## Management

We don't currently have managers, or plan to anytime soon. Everyone just reports
to Eric. This will eventually break down at scale.  While leading Flutter, Eric
had 20+ direct reports before we added more managers. Managers are very useful
for supporting people (checking in regularly, helping with onboarding, career
development, etc), but can get in the way of constant direct coordination needed
in small teams.

## Communication

Right now we all just use Discord.  We have email, but mostly we use that for
communicating to the outside world or things which need a more permanent record.
Everything else happens on Discord, and 90%+ in public channels.

Flutter started with daily stand-ups (capped to 5 minutes total) and kept those
all the way until 30-40 people.  It was a chance to promote daily coordination
between members of the team and as we got larger (10+) help make sure
individuals had resources to be unblocked and didn't accidentally work on the
same issues.  I imagine we'll find something similar for Shorebird (synchronous
or not) and may even do them publicly.  We'll see.

## User pain
I've spoken with many Flutter customers.  They love Flutter, but still find pain
using or adopting it within their businesses.  Some of the top pains I've heard
from existing Flutter enterprise teams are:
* Mobile releasing is hard.  Mobile releasing is harder than web.  Maintaining
  lots of versions of apps (and associated backends) is hard.  "Code Push" is
  one solution, but Google's Flutter team  has chosen not to invest in it.  We
  should.
* Keeping product and other stakeholders abreast of latest changes is hard. Some
  would like something akin to Vercel's "Deploy Previews" for Flutter apps.
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

If you're reading this and think Shorebird sounds like a fun place to work, come
check us out on Discord.  We're hiring or will be again soon.
