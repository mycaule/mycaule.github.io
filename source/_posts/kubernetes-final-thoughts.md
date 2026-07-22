---
title: Final thoughts on Kubernetes
date: 2017-10-21 18:41:08
tags:
- kubernetes
- microservices
---

In production, define deployments to set up replicas in case of failure, then modify those deployments to roll out updates gradually.

This works best with the stack below; changing any of these components may require some tweaking:
- Any continuous integration build tool
- Container technology: Docker
- Kubernetes
- Cloud platform: Google Cloud Platform


```
kubectl describe deployments [name]
kubectl get replicasets

kubectl apply -f [deployment-yaml]
```
