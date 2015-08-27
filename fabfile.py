from __future__ import with_statement
from fabric.api import *
from fabric.contrib.console import confirm

# env.hosts = ['tangm@admin.moseeker.com']
env.hosts = ['tangkikodo@kimiaj.com']

def test():
    local("echo testing")

def add():
    local("git add -u")

def commit():
    local("git commit")

def push():
    local("git push")

def prepare_deploy():
    commit()
    push()

def deploy():
    code_dir = "/home/tangkikodo/tour-of-gulp"
    with cd(code_dir):
        run("git pull")
