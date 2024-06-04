---
title: Engineering
description: Shorebird engineering
template: doc
---

# Engineering

## Best Practices

### Code Review

We code review most things, but it's not required. We'd rather move fast than
wait for a review, especially as a global team.

### Monorepo

We currently use a monorepo for most of our code `shorebird`. Unfortunately
it's not possible to keep all of Flutter's code in a monorepo so we have
separate `engine`, `flutter`, `buildroot`, etc. forked repos for Flutter.

Part of the theory in having a monorepo ourselves is to
use a codebase like what we believe best practices for enterprises should be.
Dart/Flutter do not have great monorepo support (at least outside Google) and
this will force us to develop that.

### Style

We follow common style guides for the languages we use and use autoformatters.
For Dart, we follow the [Effective
Dart](https://dart.dev/guides/language/effective-dart) guide and use dart-format
to enforce it, even for Flutter code.

### Documentation

We're a developer company. Documentation is what we use to do our jobs, and by
writing good docs we help our customers do theirs.

We use [dartdoc](https://dart.dev/tools/dartdoc) for all Dart documentation and
[rustdoc](https://doc.rust-lang.org/rustdoc/) for Rust documentation.

### Testing

We write tests. They're not required (yet), since we're still finding the
product and tests are best at making sure we don't have to fix the same bug
twice. However fixing the same bug twice is a "problem of success" (something
that can only occur when you have built something worth breaking twice). So go
make something people want, we'll worry about keeping it working once we know
it's something people want.

For code which has found its purpose (i.e. we expect to have it still in use
in a few months), we do expect testing. The first test is always the
hardest. Senior team members/founders have a responsibility to write these
first tests and unlock the rest of the team to write tests for new areas.

### Coverage

We aspire to 100% coverage for code which has already found its purpose. If
you're writing something experimental or exploratory, we don't expect coverage.
We have a CodeCov license and it's very easy to set up on new code when it's
ready for coverage.

Almost all of our Dart code is at 100% line coverage. There are likely many
branches that are not covered, but we've not tried to turn on branch coverage
yet.

### Time management & Focus

One of the lessons I've had to learn is focus, particularly when getting
something off the ground. There is always more to do than any of us can
accomplish. It's critical for us to be regularly reevaluating what we as a team
view as the most important things to do and focus on those. I've generally
found it to be more important to work on the most important thing than to finish
what I've started at least in the early stages of a project. Techniques I've
seen work well for this have involved 1) making a list every day together of the
top N things to work on and distributing those, or b) setting a KPI for the week
and only working on we what see as moving that.

Ian Hickson's approach (Flutter co-founder) was to have a whiteboard with his
todo list on it, publicly visible next to his desk and would happily accept your
argument as to why something else should be higher on the list. Adam Barth
(another Flutter co-founder) and I (Eric) would regularly (often daily) write a
list of what we saw was the most important things for the project and pick
things off the list and do them.

For now we've been planning via GitHub project boards and syncing every few
days or so on what we think is most important.
https://github.com/orgs/shorebirdtech/projects

### Languages

Where possible we use Dart. "Dart as a single language everywhere" is part of
the dream we sell our customers and we should eat that dogfood. That will cause
us to use a bunch of unfinished parts of the Dart ecosystem and find ourselves
building out parts where we need, but that's OK.

We're also practical and when Dart isn't the best choice (e.g. for parts of the
engine, or our website) we'll use languages we need to get the job done. We
will prefer to use languages built in the last decade (e.g. rust, zig, etc)
rather than older less-safe/harder-to-use languages (e.g. c, c++), but we're not
dogmatic about this.

Rarely, we will write in the single-system languages (e.g. Kotlin, Swift, Java,
etc.) that don't port to other places. We do that to save time for our
customers.

### Open Source

Following our "be open" value, we default all our source code to being open and
licensed as permissively as possible.

Note that although we _default_ to open (both for source and communication)
being open is itself not the point. We will have closed sourced code (and
communication) when appropriate, but by default we operate in the open.

Examples of when it might be appropriate to be closed:

- When it's safer for users for us to be closed (e.g. we're working on a
  security feature and don't want to give attackers a heads up).
- When it's less distracting for us or customers to be closed (e.g. working on
  experimental features that might be disruptive if adopted too early).
- Communications are closed in regards to customers, suppliers, customer data,
  employee data, financial data, (e.g. when it's not our story to tell).

### Licensing Philosophy

All Shorebird code is licensed under the Apache 2.0 license OR the MIT license
at the users discretion. This is done in service of our users.

We wish for our software to be as widely consumable as possible, while also
protecting our users from patent risk. Apache 2.0 provides patent protections
for users but is not as widely consumable as MIT. Specifically Apache 2.0 is
[incompatible with
GPL2](https://www.apache.org/licenses/GPL-compatibility.html), which is a
license used by many Linux distributions.

Furthermore we are intentionally using existing common, standard licenses,
rather than something bespoke. This furthers the goal that our software should
be maximally consumable by our users as they do not have to have complicated
discussions with their legal teams about the license as Apache 2.0 is a well
understood license throughout the industry.

[Rust](https://github.com/rust-lang/rust/blob/master/COPYRIGHT) is an example of
sharing this philosophy. Although I was unable to find official Rust
documentation of this philosophy, I did find
[commentary](https://internals.rust-lang.org/t/rationale-of-apache-dual-licensing/8952/3)
from the core team.

[Shorebird Template](https://github.com/shorebirdtech/template) contains the
necessary license files. Forking it is the easiest way to start a new repo.

### Forks and Upstreaming

Shorebird is intentionally open source and we use lots of open source software,
including several projects which we have forked, most notably Flutter. Whenever
possible we should seek to upstream our changes to these projects. Depending on
the size of the upstream project, it is generally faster (and recommended) to
make our changes in our fork, and separately file an issue with the upstream
for later upstreaming. It's more important for us to move fast and ship our
changes (and learn from them) than to save total time by upstreaming first.

### Tips and tricks

#### Git Rebase

You will want to set up your local Git to merge with rebase by default.

`git config --global pull.rebase true`

#### Spotlight Config (mac)

If you're on a mac, you will want to tell spotlight not to index your source files (or at least build directories), otherwise mds_store will go crazy when you build:

e.g. https://www.howtogeek.com/718731/how-to-exclude-folders-and-files-from-mac-spotlight-search/

It's under "Spotlight & Siri", scroll down and click the "Privacy..." button and add your source folder.
