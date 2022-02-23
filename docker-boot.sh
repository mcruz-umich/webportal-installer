#!/bin/bash

cd /home/specify/webportal-installer

# start nginx on port 8080
/usr/sbin/nginx -g "daemon off;"&

# start solr (-force as root)
/home/specify/webportal-installer/build/bin/solr restart -force

echo "System Ready"

# this is not a process supervisor
sleep infinity
