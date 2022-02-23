#!/bin/bash

cd /home/specify/webportal-installer

# start nginx on port 8080
/usr/sbin/nginx -g "no daemon;"&

# start solr (-force as root)
/home/specify/webportal-installer/build/bin/solr restart -force

# this is not a process supervisor
sleep infinity
