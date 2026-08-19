---
title: Expenses
description: Expenses & Travel
template: doc
sidebar:
  order: 4
---

## Spending Company Money

We will pay for the items you need to excel at your work. We will provide you
equipment when you start and you will also be provided a company card through
which to order things needed to advance the company.

In most cases, your time is by far the companies largest expense. So if you're
spending <1k to advance the company more than a day forward, that's likely the
right call.

### Opportunity Cost

We're small, and not yet profitable, so it's important we be frugal. But at this
phase, our largest expense almost never shows up on an invoice. It's the feature
we didn't build, the customer we didn't reach, the month we spent on something
that turned out not to matter.

We believe the future is bigger than the past. There are far more developers who
should be using Shorebird than are using it today, and the distance between
where we are and where we could be is enormous. Nearly all of the value of this
company is still ahead of us. That belief is what should shape your spending.

So the question to ask is rarely "can we afford this?" It's "is this the thing
most likely to grow the company right now?" A thousand dollars spent on the
wrong thing costs us a thousand dollars. A week spent on the wrong thing costs
us the week and everything the right thing would have earned in it. The second
number is almost always the bigger one.

Most of the bets we will make are wrong. Hopefully all of them we will learn
from, and over time that learning will help us find the right ones.

The rest of this page is policies to help us use the cash we have from investors
most impactfully, and arithmetic for the costs you can see. Don't let it
distract you from the one you can't.

### Fixed Costs and Scaling Costs

Not every dollar saved is worth the same. Consider two ways to spend the same
day of engineering:

- Tuning infrastructure to save $30/month in cloud spend takes nearly three
  years to break even.
- Cutting $1,000/month off a cost that grows with our customer count pays for
  itself in a month and returns 12x in the first year.

Same day of work. They are not the same decision, and the difference matters
more than the size of either number.

Some of our costs are fixed. We spend ~$2,000/month on build infrastructure.
We'll probably spend ~$2,000/month a year from now. It doesn't move much with
the size of the team, and it doesn't move at all with the number of customers we
have. Cutting a fixed cost saves us a number, once.

Other costs scale with customers: storage and patch delivery. Those have a
multiplier attached to them. Cutting one doesn't just lower this month's bill,
it lowers what every future customer costs us, and the savings grow as we grow.
These are much more impactful.

So a day spent shaving 10% off a per-customer cost is almost always worth more
than a day spent on the fixed side, even when this month's dollar savings look
identical on the invoice. Before deciding whether something is worth your time,
look at whether the line is flat or climbing.

Storage is our clearest climbing line. It's our dominant infrastructure cost
today, and it's the one that compounds: every byte we pay to store this month,
we pay for again next month, and every month after that. Adding a gigabyte isn't
a purchase, it's a subscription. Deleting one pays us back every month forever,
which makes retention policies and cleanup work worth considerably more than the
first month's savings suggest.

Egress is the counterexample. GCP charges real money to serve bytes, so we serve
the large majority of ours through Cloudflare, where egress is effectively free.
That choice is why egress doesn't show up as a cost that shapes our decisions,
and it's worth remembering before anyone moves delivery back onto a metered
path.

## Spending Guidelines

1. Spend company money like it is your own money. No, really. We hired you
   because we believe you make good decisions. That includes with money.
2. You don't have to ask permission before making purchases in the interest of
   the company. If you're in doubt, just ping Eric.
3. It is generally easiest and fastest for you to make any purchases for office
   supplies yourself and expense them.
4. You may privately use company property, a laptop for example, to check your
   private e-mails or watch a movie as long as it does not violate the law, harm
   the company, or interfere with Intellectual Property.
5. If you make a purchase that will cost the company $1000 USD per item (or
   over), unless otherwise stated, this is classified as company property, you
   will be required to return the item(s) if you leave the company.

Any non-company expenses should not be paid with a company credit card, but
sometimes mistakes happen. We use Ramp and it has tools to help you reimburse
the company for accidental personal expenses.

:::note

In our experience, expense value outcomes tend to be binary. Things that we use
every day end up costing effectively nothing, things that we don't use end up
costing effectively infinity. We've found the same to be true here. Spend money
on things we are using to provide value to our customers and we'll be very happy
we spent it.

:::

## Home Office

Most employees work from their homes. We want you to be comfortable and
productive in your chosen work environment. We will provide you with a laptop
and a company card to purchase any additional equipment you need.

Spending guidelines:

- New hires are encouraged to expense up to 1,500 USD (or equivalent local
  currency) as part of setting up your home office.
- Existing team is encouraged to spend up to 500 USD (or equivalent local
  currency) to purchase upgrades, replacements, or enhancements to your home
  office setup.

Example items include chair, desk, monitor, headset, external mic, external
keyboard and external mouse, additional monitors, laptop stand, external webcam,
supplementary lighting, laptop bag/case. Home office equipment is not considered
company property and you are not required to return it if you leave the company.
Laptops and devices are company property and must be returned if you leave the
company.

These amounts were set based on
[GitLab's policy](https://handbook.gitlab.com/handbook/finance/expenses/#equipment).
As above, you should be spending company money when you believe it is advancing
the company. You being comfortable and productive in your chosen work
environment is a big part of that.

Depending on your local laws, you may also be able to claim tax benefits for use
of your home office, please consult with a tax professional.

### Internet

As part of supporting home office use, the company will pay for the cost of your
internet connection up to $100 USD per month. This is based on
[GitLab's policy](https://handbook.gitlab.com/handbook/finance/expenses/#internet).

### Co-working Spaces

We recognize that not all team members will have space at home to work, in that
case we will provide a budget for co-working spaces. Our current budget is $700
USD (or equivalent local currency) per month. This is based on
[GitLab's policy](https://handbook.gitlab.com/handbook/finance/expenses/#co-working-space).

## Travel

We try to gather for a week, 2-4 times a year as a whole company. For such
gatherings, of course, the company covers all travel expenses. So far we've
traveled to Chicago, San Francisco, Brooklyn, Phoenix and Austin.

### Flight Guidelines

As a rough guideline, we expect flights to cost up to $2,500 USD for
international travel and up to $700 USD for domestic travel. These are
guidelines, not limits. Book what makes sense for the trip: for your own health,
for your sleep, and for being useful when you land. Your time on the trip is
typically the most expensive part of the trip. A week together costs the company
about $5,000 of your time, so a few hundred dollars that gets you there rested
isn't a close call.

If your flight is going to cost meaningfully more than that, just give Eric a
heads up before booking. This isn't for approval, it's so no one is surprised
when the charge shows up.

### Tips for booking travel

- Use your company card for all travel expenses when possible.
- Rental cars are rarely worth it. Uber/Lyft is usually cheaper/better (even for
  1+ hour rides).
- Book hotels and flights _directly_ with the hotel/airline. It's usually
  cheaper and you get better service. The various booking sites are sometimes
  cheaper but non-refundable. (Most are effectively SEO/marketing companies that
  take a majority cut of the booking and result in the hotel/airline not being
  able to adjust your reservation or refund you since they themselves only got a
  small cut of the booking.)
- Book refundable flights. It's usually only $100 more for US travel and allows
  us to adjust plans without losing the entire ticket cost.
- Airbnb can often get a nice place for cheaper than individual hotel rooms if
  you're interested in sharing a house with others.

## What Things Cost

Some spending decisions compare things that aren't obviously comparable: dollars
of storage against dollars of egress against hours of engineering time against
seats of a product we sell. It's hard to reason about those in the abstract, so
here they all are in the same unit.

### What $1,000 Buys

| Thing                | $1,000                                |
| -------------------- | ------------------------------------- |
| Employee time        | 10 hours, ~1 workday                  |
| Legal                | 2 hours with our contract lawyer      |
| Patch installs       | 2.5 million (at our Pro overage rate) |
| Standard storage     | ~50 TiB for a month                   |
| GCP egress           | ~11 TiB                               |
| Cloudflare egress    | Infinite (Free for non-China)         |
| Shorebird Pro        | 50 accounts for one month             |
| Shorebird Business   | 2.5 accounts for one month            |
| Shorebird Enterprise | ~1 basic account for one month        |

US employee time costs about ~$100 per hour, so a thousand dollars is roughly a
day of your time. (Slightly more than that all-up, but close enough.)

| Eng time | Roughly  |
| -------- | -------- |
| 1 hour   | $100     |
| 1 day    | $1,000   |
| 1 week   | $5,000   |
| 1 month  | $20,000  |
| 1 year   | $240,000 |

So when you're looking at a $2,000 purchase, the question isn't "is $2,000 a lot
of money?" It's "would I trade two days of engineering for this?" Framed that
way, most decisions answer themselves:

- A $2,000 machine that makes your builds 10 minutes faster pays for itself in
  about a month.
- Two engineers spending a week hand-rolling something to avoid a $5,000/year
  vendor is a bad trade, twice over.
- A $50/month tool that saves you an hour a month pays for itself twice over.

### Caveats and Sources

Prices drift, so treat these as orders of magnitude and look up the real numbers
if you're trying to make a hard-to-reverse decision. These are close enough for
back of the napkin as is. The listed costs also don't capture compounding: a
slow build or a flaky test costs everyone a little bit, forever, which is worth
far more than the arithmetic suggests. Similarly every new customer is worth
more than they may initially feel, since happy customers tell their friends and
compound over time.

Cloud figures are GCP list prices in `us-central1` as of August 2026:
[storage](https://cloud.google.com/storage/pricing) (Standard, regional) and
[egress](https://cloud.google.com/network-tiers/pricing) (Standard Tier, first
10 TiB band).
