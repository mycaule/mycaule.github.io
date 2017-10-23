---
title: Final thoughts on Kubernetes
date: 2017-10-21 18:41:08
tags:
- kubernetes
- microservices
---

In production, define deployments to setup replicas in case of failure.
Modify deployments.
Rolling updates.

Works ideally with this stack, and might need tweaking if changing any of the below components:
- Any continuous integration build tool
- Container technology : Docker
- Kubernetes
- Cloud platform : Google Cloud Platform


```
kubectl describe deployments [name]
kubectl get replicasets

kubectl apply -f [deployment-yaml]
```
