---
title: Scalable microservices - Part 2
date: 2017-10-19 10:00:48
tags:
- kubernetes
- microservices
category:
- microservices
- mooc
---

[Lesson 2](https://classroom.udacity.com/courses/ud615/lessons/7826816435/concepts/81980819440923) tells us how to use Docker and run an instance on Google Cloud Platform.

Using Google Compute Engine we first create a new linux image, connect to it through SSH. Then run docker containers on top of it.

Containers main advantage is that you can run two virtual machines on the same operating system. You can retrieve image from a repo and manage instances with the `docker` command line tool like you would with a regular UNIX process.

Docker images can be either downloaded or customly built using dockerfiles. Developers responsibility in this case is to delivery the application AND the configuration file for the container.

The docker images then can be sent in a public or private registry for reuse. Most notables ones are [Docker Hub](https://hub.docker.com/), [Quay](https://quay.io/), [Google Cloud Registry](https://cloud.google.com/container-registry/docs/).

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

Installing docker on the operating system.
```
sudo apt-get install docker.io
```

Listing docker images and downloading nginx image.
```
michel@ubuntu:~$ docker images
michel@ubuntu:~$ docker pull nginx:1.10.0
```

Running an image. The image is pulled off automatically if not found locally.

```
michel@ubuntu:~$ docker run -d nginx:1.10.0
michel@ubuntu:~$ docker run -d nginx:1.9.3
```

Checking which instance is running
```
michel@ubuntu:~$ docker ps
```

Stoping a docker instance

```
# Stoping instance
michel@ubuntu:~$ docker stop [container id]
# Removing instance and configuration files
michel@ubuntu:~$ docker rm [container id]
```

Get the ip address of a docker instance
```
docker inspect [container id]
curl http://[ip address from inspect]
```

Sample Dockerfile defining a base image (Alpine Linux),

```
FROM alpine:3.1
MAINTAINER Kelsey Hightower <kelsey.hightower@gmail.com>
ADD hello /usr/bin/hello
ENTRYPOINT ["hello"]
```

Then build the docker image and run it as told above.

```
docker build -t hello:1.0.0
```

Pushing an image on a registry
```
docker tag hello:1.0.0 username/hello:1.0.0
docker login
docker push username/hello:1.0.0
```
## To check later
- [GCP Documentation - gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)
  - The list of images available can be obtained with `gcloud compute images list`: `centos`, `cos`, `debian`, `rhel`, `suse`, `suse-sap`, `ubuntu-os`, `windows`, `windows-sql`...
- [Docker docs - Deploy a registry server](https://docs.docker.com/registry/deploying/)
