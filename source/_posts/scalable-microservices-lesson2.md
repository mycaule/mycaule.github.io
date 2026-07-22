---
title: Scalable microservices - Part 2
date: 2017-10-19 10:00:48
tags:
- kubernetes
- microservices
category:
- programming
- microservices
---

[Lesson 2](https://classroom.udacity.com/courses/ud615/lessons/7826816435/concepts/81980819440923) tells us how to use Docker and run an instance on Google Cloud Platform.

Using Google Compute Engine, we first create a new Linux image and connect to it through SSH, then run Docker containers on top of it.

The main advantage of containers is that you can run several isolated environments on the same operating system. You can pull an image from a repository and manage instances with the `docker` command line tool much as you would a regular UNIX process.

Docker images can be either downloaded or custom-built using Dockerfiles. The developer's responsibility here is to deliver the application AND the configuration file for the container.

The images can then be pushed to a public or private registry for reuse. The most notable are [Docker Hub](https://hub.docker.com/), [Quay](https://quay.io/) and [Google Cloud Registry](https://cloud.google.com/container-registry/docs/).

## Useful commands

Creating an instance called `ubuntu` on *Compute Engine*.

```
gcloud compute instances create ubuntu --image-project ubuntu-os-cloud --image ubuntu-1604-xenial-v20160420c
```

Connecting to it over SSH.

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

Listing Docker images and downloading the nginx image.
```
michel@ubuntu:~$ docker images
michel@ubuntu:~$ docker pull nginx:1.10.0
```

Running an image. The image is pulled automatically if it is not found locally.

```
michel@ubuntu:~$ docker run -d nginx:1.10.0
michel@ubuntu:~$ docker run -d nginx:1.9.3
```

Checking which instances are running.
```
michel@ubuntu:~$ docker ps
```

Stopping a Docker instance.

```
# Stopping instance
michel@ubuntu:~$ docker stop [container id]
# Removing instance and configuration files
michel@ubuntu:~$ docker rm [container id]
```

Getting the IP address of a Docker instance.
```
docker inspect [container id]
curl http://[ip address from inspect]
```

A sample Dockerfile defining a base image (Alpine Linux).

```
FROM alpine:3.1
MAINTAINER Kelsey Hightower <kelsey.hightower@gmail.com>
ADD hello /usr/bin/hello
ENTRYPOINT ["hello"]
```

Then build the Docker image and run it as described above.

```
docker build -t hello:1.0.0
```

Pushing an image to a registry.
```
docker tag hello:1.0.0 username/hello:1.0.0
docker login
docker push username/hello:1.0.0
```
## To check later
- [GCP Documentation - gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)
  - The list of images available can be obtained with `gcloud compute images list`: `centos`, `cos`, `debian`, `rhel`, `suse`, `suse-sap`, `ubuntu-os`, `windows`, `windows-sql`...
- [Docker docs - Deploy a registry server](https://docs.docker.com/registry/deploying/)
