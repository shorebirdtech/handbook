---
title: Audit Log Management Policy
description: Code Town Audit Log Management Policy
template: doc
---

## Overview

Code Town employs a robust logging system, tracking detailed information on
actions within production systems, including the initiator, timing, and origin
of each action. This is the foundation of a comprehensive audit system that
allows Code Town employees to identify and remediate any security incidents that
occur on the platform.

## Policy Statements

1. All Code Town production systems must log any security related events. This
   includes but is not limited to:

   a. Login attempts

   b. Administration account actions

   c. Any changes to a user's privileges

   d. Major application lifecycle events (crashes, startup, shutdown)

2. All logs must be securely transmitted from the production system to a
   dedicated audit log datastore

3. The dedicated audit log datastore must have sufficient storage capacity to
   retain audit logs for the required duration.

4. All audit logs must be handled according to any Privacy regulation that
   covers the data collected by the audit log system.

5. High-risk audit events must be regularly reviewed and any indications of a
   security incident identified in accordance with the Incident Response Policy.
