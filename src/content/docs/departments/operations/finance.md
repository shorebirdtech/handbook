---
title: Finance
description: Operations Team - Finance Overview
template: doc
---

Finance at Shorebird is lean by design. We work with an external accounting
partner for bookkeeping and close, and rely on a small set of tools to keep our
financial operations accurate, auditable, and low-friction. This page documents
our core processes so anyone at the company can understand how money moves and
what's expected of vendors, employees, and the team.

## Tools

| Purpose                  | Tool               |
| ------------------------ | ------------------ |
| Payments & subscriptions | Stripe             |
| Bookkeeping              | QuickBooks & Pilot |
| Expense management       | Ramp               |
| Payroll                  | Rippling           |
| Banking                  | Mercury            |

---

## Accounts Payable

### Invoice Requirements

To process payment, vendor invoices must include the following:

- **Legal business name** of the vendor
- **Vendor address**
- **Invoice number**
- **Invoice date** and **due date**
- **Itemized description** of goods or services rendered
- **Total amount due**, with currency clearly specified (USD unless otherwise
  agreed)
- **Payment instructions** — see requirements by payment type below
- **W-9 on file** (US vendors) or **W-8BEN / W-8BEN-E** (international vendors),
  required before first payment

Invoices missing required fields will be returned before processing. We do not
process invoices retroactively submitted more than 90 days after services were
rendered without prior approval.

#### Payment Instructions — US (ACH / Domestic Wire)

US-based vendors should provide:

- Bank name
- Account holder name (must match legal business name on invoice)
- Routing number (ABA)
- Account number
- Account type (checking or savings)

We prefer ACH for domestic payments. If a vendor requires a domestic wire
instead, please note that in the invoice.

#### Payment Instructions — International (Wire Transfer)

International vendors should provide:

- Bank name and full bank address
- Account holder name
- Account holder address
- IBAN or account number
- SWIFT / BIC code
- Intermediary bank details (if applicable)
- Currency to be received (if not USD)

International wires may incur fees on the receiving end. Vendors who require
Shorebird to cover wire fees must specify this in their contract or on the
invoice. We do not retroactively cover undisclosed fees.

### Payment Terms

Our standard payment terms are **Net 30** from invoice date unless a contract
specifies otherwise. We batch most payments on a weekly cycle. If a vendor
requires expedited payment, that must be agreed upon in the contract or
communicated in advance.

### W-9 and Tax Documentation

All US-based contractors and vendors must provide a completed W-9 before their
first invoice is paid. We issue 1099s annually to applicable vendors per IRS
requirements. Non-US vendors should provide a completed W-8BEN or W-8BEN-E as
applicable.

---

## Accounts Receivable

Customer billing is handled through Stripe. Invoices are generated automatically
for subscription customers, and manually for enterprise customers on custom
billing arrangements.

For bank transfer payments, note that wire and ACH fees may result in a payment
amount slightly less than the invoice total. Differences under $25 may be
written off via credit note in Stripe rather than chasing the customer for the
remainder.

---

## Expense Management

Employees should submit expenses with:

- **Receipt** (required for any purchase over $25)
- **Business purpose** — a brief note on what it was for
- **Category** — use our standard chart of accounts (see below)

Expenses should be submitted within 30 days of the purchase. Recurring
subscriptions charged to a company card should be documented in our [Vendor &
Tooling Registry].

---

## Tax & Compliance

We file federal and applicable state tax returns annually through our external
accounting partner. We maintain records of active state registrations and review
nexus obligations as the business grows.

If you receive any notice from a taxing authority — federal, state, or local —
forward it to operations@shorebird.dev immediately. Do not ignore or discard
government correspondence.

---

## Monthly Close

Our external accounting partner runs a monthly close process. To support a clean
close:

- Submit and reconcile all expenses by the **last business day of the month**
- Flag any unusual transactions or one-time purchases so they can be categorized
  correctly
- Ensure any new vendors have a W-9 on file before the close period

Questions about bookkeeping, categorization, or financial reporting should go to
operations@shorebird.dev.
