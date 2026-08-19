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
phase, our largest expense is time / opportunity cost. Not all of the things we
try work out, but we try, learn and keep trying until we find the things that
do.

The future is bigger than the past. There are far more businesses who should be
using Shorebird than are using it today, and the distance between where we are
and where we could be is enormous. Nearly all of the value of this company is
still ahead of us.

The question to ask is rarely "can we afford this?" It's "is this the thing most
likely to grow the company right now?" A thousand dollars spent on the wrong
thing costs us a thousand dollars. A week spent on the wrong thing costs us the
week and everything the right thing would have earned in it. The second number
is almost always the bigger one.

The rest of this page is policies to help us use the cash we have from customers
and investors most impactfully, and arithmetic for the dollar costs we can
measure.

### Fixed Costs and Scaling Costs

Scaling costs matter more than fixed costs. Two ways to spend the same day of
engineering, each saving $1,000/month today:

- Tuning our build infrastructure saves $12,000 this year, and $12,000 again
  next year.
- Cutting the same $1,000/month off a cost that grows with our customer count
  saves $1,000 in January and two or three times that by December.

Same day of work, same line on this month's invoice. The second cut a slope
instead of a number.

Storage is our biggest scaling cost, and it compounds. Adding a gigabyte isn't a
purchase, it's a subscription: we pay for it again every month until we delete
it. Egress would be the other big one, but we serve the large majority of ours
through Cloudflare where it's free, which is worth remembering before anyone
moves delivery onto a metered path.

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
for your sleep, and for being useful when you land.

Domestically the fare is about what the travel time costs. Six hours in the air
is $600 of your time against a $700 ticket, so money and hours trade roughly one
for one. Take the nonstop.

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
