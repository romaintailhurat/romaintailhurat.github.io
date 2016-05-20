# Seven concurrency models in seven weeks

## Intro

Concurrency ~ Parallelism

Rob Pike definition :

 * Concurrency is about dealing with lots of things at once.
 * Parallelism is about doing lots of things at once.

Parallelism is everywhere : at the bit level, in the CPU, at the task level.

Concurrency allows your software to be responsive, fault tolerant, efficient, and simple.

Distributed systems are intrinsically concurrent.

But we still want simple softwares, easy to think about !

## Threads and locks

The simplest model : when executing multiple threads sharing memory we know bad things are going to happen (non deterministic behavior), so why not lock memory when one thread need to write it ? Yes but no, locks are hard to deal with and might lead to deadlocks... and there is only one way to stop a thread deadlocked : stop the runtime execution !

We could then use interruption mechanism such as timeouts when trying to acquire a lock. But still we only stop a deadlock in a controlled fashion, but we could return to the same deadlock situation... And choosing the right timeout duration could be hard.

Techniques for handling concurrency exist :

 * Concurrent editing a data structure could be done with Hand-over-Hand Locking.
 * We can check conditions of lock between threads, i.e. a thread could signal another that the condition for a lock might have a new state.
 * Atomic variable or data structure allow for lock-free concurrent algorithms.

 ((STOP PAGE 32))
