---
title: Scalable microservices - Part 3
date: 2017-10-20 14:00:58
tags:
- kubernetes
- microservices
category:
- mooc
- microservices
---

Today infrastructure is more about choose of tools rather than developing yourself. IT today is about higher level services.

Kubernetes is an abstraction for containers. It enables to treat a entire cluster like a single machine.

Pod have an IP address and can access volumes, they are apps containers.

Using nginx to reverse proxy the app in HTTPS:
{% youtube iL_L3nIJ3dQ %}

Monitoring and Health checks : https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/
Configuration: http://kubernetes.io/docs/user-guide/configmap/
Secrets: http://kubernetes.io/docs/user-guide/secrets/

Configuration and secrets files are accessed through mounted volumes defined in the kubernetes YAML configuration file after loading the `secrets` and `configmap` on the master node.

Service is another level of abstraction: it is a set of identical pods.

Services: http://kubernetes.io/docs/user-guide/services/

Sample configuration files: https://github.com/udacity/ud615/tree/master/kubernetes

###Useful commands

Create a Kubernetes cluster

```
gcloud container clusters create k0
gcloud components install kubectl
```

Create a pod.

```
kubectl create -f [yaml-file]
```

Port forwarding between the cluster and the master machine.

```
kubectl port-forward monolith 10080:80
# http://localhost:10080
kubectl logs -f monolith
```

Executing from within the container
```
kubectl exec monolith --stdin --tty -c monolith /bin/sh
```

Setting nginx configuration and TLS keys.
```
kubectl create secret generic [name] --from-file=[folderls]
kubectl describe secrets [name]
kubectl create configmap [name] --from-file [conf-file]
kubectl describe configmap [name]

```

Create a service
```
kubectl create -f [yaml-file of type NodePort]
```

### References

[Kubernetes cheatsheet](http://kubernetes.io/docs/user-guide/kubectl-cheatsheet/)
