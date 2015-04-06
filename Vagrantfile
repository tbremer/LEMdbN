# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    ##
    ## SET UP THE BOX BASICS
    ##
        config.vm.box = "ubuntu/trusty32"
        config.vm.provider "virtualbox" do |v|
            v.name = "LEMN-MongoDB"
            v.memory = 1024
            v.cpus = 1
        end

    ##
    ## SET UP THE FOLDERS
    ##
        config.vm.synced_folder "www", "/var/www/"
        config.vm.synced_folder "bash_scripts", "/home/vagrant/bash_scripts"
        config.vm.synced_folder "nginx/global", "/etc/nginx/global"
        config.vm.synced_folder "nginx/sites-available", "/etc/nginx/sites-available"

    ##
    ## ADD PORT FORWARDS AND PRIVATE NETWORK
    ##
        config.vm.network "forwarded_port", guest: 80, host: 8888, auto_correct: true ## NGINX LISTEN PORT
        config.vm.network :forwarded_port, guest: 27017, host: 8889, auto_correct: true ## MONGODB LISTEN PORT

    ##
    ## PROVISION LEMN
    ##
        config.vm.provision :shell, :path   => "bash_scripts/privileged_bootstrap.sh"
        config.vm.provision :shell, privileged: false, :path   => "bash_scripts/user_bootstrap.sh"
end

