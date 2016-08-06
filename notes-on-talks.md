# Logs

## Adrian Cockroft, Craft Conf 2016
[VIDEO](http://www.ustream.tv/recorded/86151804)

Difference in culture between Web scale companies (Goog, Netflix, Facebook) and Enterprise
 * Freedom and responsability, high trust
 * VS bureaucracy and blame, low trust

Developers responsabilities: faster, cheaper, safer.

Datacenter snowflakes (deploy: months / live: years) -> VM / Clouds (minutes / weeks) -> Containers (seconds / minutes) -> Lambda, serverless (millis / seconds)

## Rebecca Parsons, O'Reilly Software Architecture Conf 2016
[VIDEO](https://www.oreilly.com/ideas/the-evolution-of-evolutionary-architecture-2016)

Pushing the notion of evolvability to architecture. Architecture as to be as easy to change
as well (as code ?) -> Embracing the Agile manifesto principle of adapting to change.

First, design patterns helped in refactoring using well known patterns -> emergent design.

Then Enterprise Architecture and Integration patterns enabled to do the same at
the architecture level.

Then we practiced DB refactoring.

Next step : services, first attempt at breaking down the silos.

Then Continuous Delivery, delivers functionality reliably when needed.

## Dan North Craft conf 2015
[VIDEO](https://craft-conf.com/2015)
Agile a thing of the past - at least of the 90s. Sprints are mini-waterfall !

We doing it wrong, reversing the value proposition.

The civil engineering metaphor we're using is wrong.

"Sustainably minimise lead time to business impact (or results)" --> value stream, 90% of an item or US is waiting for things to happen

Surgery metaphor : nobody wants surgery unless it is mandatory, we want in that case professionals, proven techniques, not always the "standard methodology" ("we know Java, we do Java here")

Kaizen : also about anticipating skill needs, and getting people trained (w/ cross training)

##Adrian Cockroft - Microservices, state of the union

[VIDEO](https://www.infoq.com/presentations/microservices-review)

developper driven architecture
dev responsible for :
- time to value (TTV)
- capacity planning, efficiency (tooling is there)
- availability and security

Continuously deploy the smallest changes, making it less risky
Disruption : CD with containerized microservices

Solution [Time to deploy, Time to live]
 Datacenter [months, years] >
 VM / Cloud [minutes, weeks] >
 Container [seconds, days] >
 Serverless [millis, seconds] 
 
Solutions

JVM : Spring / Netflix stack
Scala : Twitter / Gilt
Go : Hail / Soundcloud

Small team : build things with a simple solution
Growing : break in parts with MS, find the best tools
==> Need to evolve continuously

Segmentation : dev <> ops, tools are pushing the limits
(cf. Docker), dev setting networks and roles

Failure injection for building antifragile services (e.g. Chaos Monkey)

Version aware routing (feature flags consistency)

>> 29'
