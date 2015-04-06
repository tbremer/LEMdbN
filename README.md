![LEMdbN](www/example/app/assets/images/logo-56.png)&nbsp;&nbsp;LEMdbN
==================================================================

### **LEMdbN is Linux, NGINX, MongoDB & Node**

A basic Ubuntu 14.04 Vagrant set up with NGINX, MongoDB and Nodejs

-	[LEMdbN](#LEMdbN)
	-	[Requirements](#requirements)
	-	[Setup](#setup)
	-	[Usage](#usage)
	-	[Port Forwards](#port-forwards)
	-	[Installed Node Modules](#instaalled-node-modules)
	-	[NGINX](#NGINX)
	-	[Vagrant](#vagrant)

##Requirements

-	VirtualBox - Free virtualization software [Download Virtualbox](https://www.virtualbox.org/wiki/Downloads)
-	Vagrant **1.3+** - Tool for working with virtualbox images [Download Vagrant](https://www.vagrantup.com)
-	Git - Source Control Management [Download Git](http://git-scm.com/downloads)

##Setup

-	Clone this repository `https://github.com/tbremer/LEMdbN.git`
-	Run `vagrant up` inside the newly created directory (the first time you run vagrant it will need to fetch the virtual box image which is ~300mb so depending on your download speed this could take some time)
-	Vagrant will then use puppet and bash scripts to provision the base virtual box with our LEMdbN Stack.
-	Once vagrant box is up you can either navigate to your now working server by going to: http://localhost:8888 or modifying your `/etc/hosts` file and add mapping to your domain that is consistent with your server alias:

```bash
# FILE: /etc/hosts

# ADDED LEMdbN DOMAINS
127.0.0.1    local.example.com
```

Where in your `/etc/nginx/sites-availble/example` file you have: `server_name local.example.com`

Usage
-----

Some basic information on interacting with the vagrant box:

### Port Forwards

-	**8888 - nginx base**
-	**8889 - MongoDB**

### Installed Node Modules
-	**Forever** *continuous running node scripts ([npmjs](https://www.npmjs.org/package/forever), [github](https://github.com/nodejitsu/forever))*


### NGINX

We use nginx as a proxy so you can run multiple node apps within one virtual environment (similar to how one would run a production server).

```
#FILE: /etc/nginx/sites-available/example

server {
    listen          80;
    charset         utf-8;
    server_name     local.example.com
                    ~local.example.(?:[0-9\.]+).xip.io   #for testing on mobile devices
                    example.com;

    root /var/www/example;
    access_log /var/www/example/logs/access.log;
    error_log  /var/www/example/logs/error.log;
    include global/global.conf;

    location / {
      proxy_pass http://127.0.0.1:3000/;
      proxy_redirect off;
    }
 }

```

### Vagrant

Vagrant is [very well documented](http://vagrantup.com/v1/docs/index.html) but here are a few common commands:

-	`vagrant up` starts the virtual machine and provisions it
-	`vagrant suspend` will essentially put the machine to 'sleep' with `vagrant resume` waking it back up
-	`vagrant halt` attempts a graceful shutdown of the machine and will need to be brought back with `vagrant up`
-	`vagrant ssh` gives you shell access to the virtual machine
-	`vagrant destroy` removes all known information about this box (keeps your www folder).

**Table of Contents By: [DocToc](http://doctoc.herokuapp.com/)** && **Markdown Preview By: [StackEdit.io](https://stackedit.io/)**
