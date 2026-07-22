---
title: Scalable microservices - Part 1
date: 2017-10-18 12:49:00
tags:
- kubernetes
- microservices
category:
- programming
- microservices
---

Today, I am learning more about microservices, a subject software architect Martin Fowler has been writing about a lot in his [personal blog](https://martinfowler.com/articles/microservices.html).

Kubernetes looks like a cool technology. Google, which backs it, offers an online course, [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615), aimed at both devops and developers.

The course has 4 lessons of 2 hours each for the following topics:
 - Introduction to Microservices
 - Building the Containers with Docker
 - Kubernetes
 - Deploying Microservices

Here are my notes for lesson 1, [Introduction to microservices](https://classroom.udacity.com/courses/ud615/lessons/7826112332/concepts/81910831080923):

The course demonstrates with the following technologies: Docker, the Go language, and Google Cloud Container Engine.

The software industry is pressuring developers to release more often and more quickly. Microservices let them do so with a simplified lifecycle, but they require tooling that pushes automation and infrastructure to their limits.

Lesson 1 asks us to build a Go project [from GitHub](https://github.com/udacity/ud615/tree/master/app) — a web server handling authentication — and then to split separate microservices out of it.

More stuff coming tomorrow with [Lesson 2](https://classroom.udacity.com/courses/ud615/lessons/7826816435/concepts/81980819440923).

## To check later

Kelsey Hightower, a main contributor to Kubernetes at Google, has written [a more comprehensive tutorial](https://github.com/kelseyhightower/kubernetes-the-hard-way) on GitHub.
