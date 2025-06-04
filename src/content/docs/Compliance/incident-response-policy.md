---
title: Incident Response Policy
description: Code Town Incident Response Policy
template: doc
---

## Purpose and Scope

This Incident Response Policy establishes a framework for detecting, reporting,
assessing, and responding to information security incidents at Code Town. It
aims to minimize the impact of security incidents on business operations, data
integrity, and stakeholder trust.

This policy applies to all employees, contractors, and third parties who have
access to Code Town's information systems and data.

## Policy Statements: Our Commitments

The following policy statements outline how we implement and manage our incident
response processes to protect our information assets. They cover everything from
incident detection to post-incident review.

### Incident Response Framework

Code Town will implement a structured incident response framework that includes
the following phases:

- **Preparation**: Establishing and maintaining the tools, processes,
  procedures, and teams required to respond to incidents.
- **Identification**: Detecting and reporting potential security incidents
  through monitoring systems and user reports.
- **Containment**: Isolating affected systems to prevent further damage.
- **Eradication**: Identifying and removing the root cause of the incident.
- **Recovery**: Restoring systems to normal operations and verifying that the
  incident has been fully resolved.
- **Lessons Learned**: Conducting a post-incident review to identify
  improvements in the incident response process.

### Relevant Definitions

|             | Description                                                                                                                                                                                                                       | Examples                                                                                                                                                                                                                                         |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Events      | An observable occurrence in a system or network. Events include any identifiable occurrence that may have implications for system security. Not all events are security-relevant.                                                 | A file is created or deleted on a server. A network connection is initiated from one machine to another. A firewall blocks an incoming connection attempt                                                                                        |
| Indications | Specific data points or patterns that suggest or give evidence of a particular security event or potential security incident. Indications are often used to detect malicious activity.                                            | Unexpected or unusual outbound data transfers during off-peak hours. Multiple login failures from a foreign IP address within a short period. A user or system suddenly querying large amounts of data that do not match previous usage patterns |
| Incidents   | An adverse event in an information system or network that either threatens the confidentiality, integrity, or availability of the system or the data it contains. Incidents often, but not always, arise from malicious activity. | Unauthorized disclosure of sensitive data. Unauthorized change or destruction of sensitive data. A Denial-of-Service (DoS) attack causing a critical service to become unreachable                                                               |

### Incident Response Procedures

To support the incident response framework, Code Town will maintain detailed
incident response procedures to guide the organization through each phase of
incident handling. These procedures must include:

- **Step-by-step response actions**: Clearly defined steps for handling
  different types of security incidents, such as malware infections, data
  breaches, or denial-of-service attacks.
- **Roles and responsibilities**: Documentation of the specific roles involved
  in incident response and the actions each role must take during an incident.
- **Escalation procedures**: Defined criteria for escalating incidents based on
  their severity and potential impact, ensuring that the appropriate level of
  management and technical expertise is involved.
- **Communication protocols**: Guidelines for internal and external
  communications during incidents, including notifications to affected parties,
  regulatory bodies, and stakeholders.
- **Incident documentation templates**: Templates for logging and documenting
  incident details, actions taken, and evidence collected throughout the
  response process.

The incident response procedures must be reviewed and updated regularly to
reflect changes in technology, threat landscape, and organizational structure.

The Incident Response Team (IRT) will ensure that these procedures are
accessible to all relevant staff and that regular training is conducted to
familiarize teams with their roles and responsibilities during incidents.

### Incident Identification and Reporting

Logs, alerts, and other monitoring tools will be used to detect potential
security incidents in real time. Employees must report any suspicious activity
or potential security incidents to the IT Security Team or Incident Response
Team immediately.

Incidents will be classified based on their severity, such as:

| Classification | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| Critical       | Significant data loss, financial loss, or system outages           |
| High           | Limited data loss, unauthorized access, or service disruptions     |
| Medium         | Low-risk security issues that do not impact critical systems       |
| Low            | Minor incidents with no impact on system integrity or availability |

All incidents, regardless of severity, must be logged and documented for further
analysis and reporting.

As a U.S.-based company, Shorebird will escalate incidents to appropriate U.S.
authorities when necessary. This includes contacting emergency services via 911
for any incidents involving physical safety or threats, and reporting
cyber-related crimes to the
[Internet Crime Complaint Center (IC3)](https://www.ic3.gov). The decision to
involve law enforcement or regulatory agencies will be made by the Incident
Response Team in coordination with legal counsel, based on the nature and
severity of the incident.

### Incident Containment and Eradication

Depending on the severity of the incident, short-term and long-term containment
actions will be taken based on the relevant Incident Response Plan.

Once the incident is contained, the root cause of the incident will be
identified and removed.

All actions taken during containment and eradication must be documented for
review.

### Recovery and Restoration

After the incident has been contained and eradicated, Code Town will work to
restore normal operations based on the relevant Incident Response Plan. This
includes:

- **System recovery**: Restoring systems and data from clean backups.
- **Verification**: Testing and verifying that affected systems are functioning
  normally and that the vulnerability or threat has been eliminated.
- **Monitoring**: Continuing to monitor affected systems for any signs of
  residual threat or recurrence.

During the recovery phase, communication with affected users and stakeholders
will be maintained to ensure transparency and minimize operational disruptions.

### Post-Incident Review and Lessons Learned

A post-incident review will be implemented following the resolution of an
incident, including:

- **Root cause analysis**: Understanding how the incident occurred and
  identifying any weaknesses in systems, processes or procedures.
- **Action plan**: Developing a plan to address any identified gaps, such as
  implementing additional security controls, improving monitoring capabilities,
  or updating policies and procedures.
- **Documentation**: All incidents, responses, and lessons learned will be
  documented and stored in the company’s incident log for future reference.

A post-incident report will be created and shared with senior management to
drive continuous improvement.

## Compliance and Enforcement

Compliance with this policy is mandatory for all employees, contractors, and
third parties with access to Code Town's data.

In rare cases, business needs, local laws, or regulations may require
exceptions. Management will approve any exceptions and define alternative
solutions.

Non-compliance may lead to disciplinary action, including termination, as per
Code Town's policies.

## Policy Review and Maintenance

This policy will be reviewed annually or when significant changes occur to
maintain its continuing suitability, adequacy, and effectiveness.

Reviews must consider changes in the regulatory landscape.

## Appendix A: Template for Incident Response Process

### Step 1: Triage

**Objective:** Determine if the indication is a legitimate threat or a false
alarm.

1. The on-duty engineer receives the indication.
2. Analyze logs, system behaviors, and context related to the indication.
3. Check against known behaviors, patterns, and indicators of compromise.
4. If additional expertise or resources are required during this phase, the
   engineer can consult with peers or utilize threat intelligence platforms.

### Step 2: Validation

**Objective:** Establish whether the indication points to a valid incident or
not.

1. If the indication is validated, it is immediately promoted to a security
   incident and the Security Officer is notified, providing:
   - A brief summary of the incident
   - Any immediate risks or concerns
   - Preliminary findings and scope (if known)
   - Move to the "Team Formation" phase.
2. If the indication is determined to be a false alarm:
   - Document the details of the indication, reasons for dismissal, and any
     supporting evidence.
   - Determine and address the root cause of the false indication to prevent its
     recurrence.
   - Remediate any system or process issues that led to the false alarm.
   - Report the completion and findings to the appropriate stakeholders
   - End the incident response process

### Step 3: Team Formation

**Objective:** Organize a team of experts to handle the incident in an efficient
manner.

1. Upon notification, the Security Officer assesses the situation and determines
   the required expertise.
2. The Security Officer assembles a temporary incident response team.
3. The incident response team commences work, starting with containment of the
   incident.

### Step 4: Containment, Eradication & Resolution

**Objective:** Contain, eradicate, and recover from the incident.

1. **Containment:** Prevent the incident from causing further damage or
   spreading.
2. **Eradication:** Remove the root cause of the incident.
3. **Recovery:** Restore and validate system functionality for business
   operations to resume. Monitor for any signs of weaknesses that could be
   exploited again.
4. Document all actions taken during this phase.

### Step 5: Post-Incident Review

**Objective:** Review the incident, identify lessons learned, and improve future
responses.

1. Once the incident is resolved, the Security Officer convenes a postmortem
   meeting with the incident response team.
2. Discuss:
   - What happened?
   - What was done to respond?
   - What could have been done better?
   - What can be improved in terms of processes, communication, tools, etc.?
3. Document the findings and recommendations.
4. Disseminate the postmortem report to stakeholders and ensure that recommended
   improvements are implemented.
