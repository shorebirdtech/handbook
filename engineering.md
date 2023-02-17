# Engineering

## Best Practices

### Code Review
Shorebird is too early for code review to be useful as an approval tool.  We
hire great people and we trust them. Code review is still encouraged as it can
be great for knowledge sharing and architecture validation, but also shouldn't
be a bottleneck.  Just TBR another person (to be reviewed) and submit.  We'd
rather move fast than wait for a review, especially as a global team.

### Monorepo

We currently use a monorepo for most of our code.  Part of the theory here is
to use a codebase like what we believe best practices for enterprises should be.
Dart/Flutter do not have great monorepo support (at least outside Google) and
this will force us to develop that.


### Style
We follow common style guides for the languages we use and use autoformatters.
For Dart, we follow the [Effective
Dart](https://dart.dev/guides/language/effective-dart) guide and use dart-format
to enforce it, even for Flutter code.

### Documentation

We're a developer company.  Documentation is what we use to do our jobs, and by
writing good docs we help our customers do theirs.

We use [dartdoc](https://dart.dev/tools/dartdoc) for all Dart documentation and
[rustdoc](https://doc.rust-lang.org/rustdoc/) for Rust documentation.

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
