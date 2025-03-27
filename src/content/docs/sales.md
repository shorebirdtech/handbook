---
title: Sales
description: Shorebird Sales
template: doc
---

We estimate that as of March 2025, less than 3% of all Flutter developers have
ever tried Shorebird. Maybe as many as 5-10% of all Flutter developers have
ever heard of Shorebird. Our primary goal for the next several years is to
grow usage and awareness of the product. Through such, revenues and thus
sustainability of the business will also grow.

## Tools

### Email/Calendar

As described in [onboarding](https://handbook.shorebird.dev/onboarding/#accounts) we use Google Workspace for our Email & Calendar. This allows you to use any other services and/or apps that you typically would to stay organized.

### Calendly

We do have a Shorebird [Calendly](https://calendly.com/) account. On a personal basis, this is useful for adding a "book time with me" link to your email signature. We also use the [Round Robin](https://help.calendly.com/hc/en-us/articles/4402432846999-Round-robin-distribution-overview) feature for the "Contact Sales" buttons on the website. This allows us to spread the sales calls out to a team rather then just filling up one persons calendar all the time.

If you think you need access to Calendly reach out to the Operations team.

### Contracts & Documents

Given our use of Google Workspace, we have a Sales folder in the main company shared drive. Within this we should be keeping all documents sent to customers throughout the sales process along with signed copies of contracts. This becomes our main repository for answering questions if/when they arise.

### CRM

We use [Attio](https://app.attio.com) to track our customer interactions and sales flow. Anyone that regularly interacts with customers, especially via email, should have an Attio account. This will ensure that our communication flow is automatically tracked and viewable by other team members to avoid the cross talk problem of multiple people having multiple conversations with the same person/company. This tracking is done via the [Email and Calendar Sync](https://attio.com/help/reference/email-calendar/email-and-calendar-syncing), (setup details are on the [Attio reference site](https://attio.com/help/reference/attio-101/syncing-people-and-companies)) that Attio provides along with manual & workflow entry of [Tasks](https://attio.com/help/reference/productivity-collaborating/tasks) on Companies and Deals.

#### Useful Links

- [Attio 101](https://attio.com/help/reference/attio-101) - Simple place to start with a lot of good video's to watch on how the tool works.
- [Attio Community](https://www.attio.community) - A lot of good how-to's and an active posting board for questions.

#### Data We Track

Overall there are 2 main things that we need to keep track of: 1) Companies & People and 2) Deals. With both it is important to keep notes and/or comments up to date so that other people working the pipeline can understand what the status of things are.

##### Companies & People

Most of this tracking is done for you by Attio automatically through Email and Calendar tracking. If you have connected your Shorebird Google Account to Attio then it will view your emails and appointments and auto populate records for Companies and People. The tool will also auto-populate some basic company information, based on the domain, and create the linking of the people to the company for easy tracing.

If you have some interaction with a person or company outside of Email and Calendar events then you can also manually add the records needed. The key items that need to be entered are:

- Companies
  - Company Name
  - Domain
- People
  - Name
  - Email Address
  - Company

###### Custom Fields

- Companies
  - Status - This states the status of a company with Code Town/Shorebird. This allows us to run reports on our Companies list and understand who we should be targeting at any given time. See below for a definition of each status.
    - Lead - Starting point for any company record. We know that they use Flutter and therefore could be a potential customer.
    - Talking - We have had communication with the company and conversations are ongoing.
    - Stalled - There was some communication but they have stopped responding. A typical example of this is that our main champion inside a company is leaving or transitioning to a new role and a successor hasn't been nominated.
    - Customer - This company has an account and/or contract with us.
    - Not Interested - This company has stated that they don't see a need for our services. It's important to log this status as it will give us a target list to revisit in the future as situations at the company or solutions that we offer change.
- People

##### Deals

Deal tracking is done in Attio as it makes it easy to track deals by company/associated people and it will give us automated reports based on the pipeline.

A deal record should be made for any company that is reaching out to us for a Business or Enterprise plan, Pro plans do not get tracked here.

###### Deal Stages

- Talking - A company has expressed interest in creating/renewing an account with us. Typically this is opened up after we have a first call or email with the company so we can determine a few things including size of a plan they need.
- Trial/Eval - We have progressed enough through conversations that the prospective customer has either created a free account with us to test out the service or we have provided them a coupon code in order to have a longer and/or larger testing phase.
- Procurement/Contracts - We are actively working through contracts (MSA, Security review, etc)
- Stalled - Any deal that has either had no activity on it in one week or is paused given a certain requirement we can't fullfil (i.e. Tax forms not yet ready).
- Won - Contract has been signed
- Lost - After negotiations the prospective customer decided not to buy from us. It's important to capture this data as we can review that at a later time as a way to reengage with companies at a later date.

###### Custom Fields

- Weighted Deal Value - This is an automatically tracked field via a [workflow that runs when a Deal's stage changes](https://app.attio.com/shorebird/automations/workflows/ff949cfd-fc3b-4347-94d7-456a771f12c7/editor). Given a stage, the deal value is multiplied by a percentage that is tied to the stage essentially giving us a confidence number. This means that if we have a lot of deals in the "Lead" stage we won't oversell the value of the pipeline as they will be weighted lower. The weightings are currently set to
  - Talking - 30%
  - Trial/Eval - 50%
  - Procurement/Contracts - 80%
  - Stalled - 15%
  - Won - 100%
  - Lost - 0%
- Close Date - This is an automatically tracked field via [a workflow that runs when a Deal's stage changes to Won or Lost](https://app.attio.com/shorebird/automations/workflows/78027e45-4455-42e9-b4c1-072fe02362e9/editor). This is set to the date that the deal moves into the Won or Lost stage. It can be manually set as well if needed. This field allows us to track our win/lost deals over a set period of time (i.e. 30 days).

#### Tasks/Action Items

This allows us to ensure that we are staying on top of leads and deals so it is vital to keep up to date on a daily basis.

While at some point in the future we will more then likely build workflows that automate some of the task creation for us, currently this a a manual process. Given that, these are the guidelines we attempt to follow in order to make sure we don't lose track of tasks or let a customer/prospective customer wait on us.

- Tasks are set on Companies and Deals. While we do interact with People the task is really relating to the Company or Deal in our perspective.
- When reaching out to a customer, current or prospective, ensure that there is a "follow up" task put in for a maximum of 1 week away. You can do this either by either moving the currently due task out by a week or closing the current one and writing up a new one.
- Don't assign tasks to more then one person.

## Pricing

We are certain our prices are currently "wrong" for the market we are selling to and will change many times in the coming years as we learn what works and what doesn't.

**Price is not intended to be an obstacle for adoption at this time.** We want to grow our user base so if we have the ability to apply coupons, discounts, etc for a prospective customer to meet their pricing limits please come up with a proposal and run it by the Operations lead before approaching a customer with options. We want to ensure that we are not losing money on a deal/customer and will need to more then likely have some agreement and documentation in place before any pricing changes are communicated or applied.

Our prices, as we have currently set them, are low relative to our costs of providing the service. Although we price based on usage, 90% of our
costs do not relate to usage, but rather development of the product(s), sales, and procurement support. Discounting our usage-based pricing is
somewhat immaterial relative to the cost of providing the service, but does affect our ability to build a sustainable business.

Sales should not lead with discounts. Our Enterprise pricing already includes discounted rates within the pricing plan. Furthermore, more often we've found our prices are too-low for some established businesses and could even cause confusion during procurement. We can always negotiate around discounts deeper in the procurement process.

### Coupons

We use [Stripe](https://www.stripe.com) for our payment processing and subscription tracking. The Stripe platform has a robust [coupons and promotion codes](https://docs.stripe.com/billing/subscriptions/coupons) feature that we can use to easily create and provide codes to customers, current or prospective, on a need by need basis.

We do have some basic coupons that we keep around for overall use including:

- First Month Free - 1 free month of Pro, $20 value and only good for a new paid account.
- Returning Customer Free Month - Allows for a one time free month of Pro. Typically used for customers coming back into the platform and are asking for another trial period
- Event/Partner Specific - If we are doing a sponsorship or partnership we typically create a new coupon code for each of these in order to track the usage and effectiveness of a given investment.

If you have a need for a coupon code reach out to the Operations team in order to get the details.

Overall, basic coupons should be used for one time discounts only. This makes these codes easier to hand out during a sales process and does not require any approval or oversight. The main goal with this is that we then have a customer on a paid plan doing a trial and can then easily grow with us. For customers looking at a Business or Enterprise plan, a trial coupon is a great way to get them started.

### Plan Discounts

In almost all cases, we would rather have a user on a discount than not have a user. We do prefer speed over pricing accuracy in getting customers onboarded. That being said we should be looking at discounts on our pricing as an exception, not a rule. If we find that we are having many discussions across deals about discounts we need to evaluate and adjust our pricing.

If we need to make a bigger discount we can still achieve this via Stripe coupon codes but we do need to understand why we are providing the discount and have a lightweight approval process for it. This is really made to ensure that we are not losing money on any one customer.

Guidelines for Plan Discounts:

- Discounts should be time-limited to 6mo or less, 1y on exception. This is for both accounting/MMR tracking and as a cause to re-visit and hopefully remove the discount as their experience is that our product has become essential to their team/product.
- We will provide discounts to non-profit, or low-income-country users when prompted, even on our Pro plan. We do need to ask for some documentation that we keep on file to ensure that they are actually meeting that description.
