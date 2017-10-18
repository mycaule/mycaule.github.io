---
title: Kubernetes course on Udacity - Lesson 2
date: 2017-10-19 10:00:48
tags:
- kubernetes
- microservices
category:
- microservices
- mooc
---

[Lesson 2](https://classroom.udacity.com/courses/ud615/lessons/7826816435/concepts/81980819440923) tells us how to use Docker.

## Useful commands

Creating an instance called `ubuntu` on *Compute Engine*

```
gcloud compute instances create ubuntu --image-project ubuntu-os-cloud --image ubuntu-1604-xenial-v20160420c
```

SSH connecting to it

```
gcloud compute ssh ubuntu
```

Running nginx on the remote host.
```
michel@ubuntu:~$ sudo apt-get install nginx
michel@ubuntu:~$ sudo systemctl start nginx
michel@ubuntu:~$ curl localhost
```
