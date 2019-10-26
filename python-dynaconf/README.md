# Python dynaconf example

## Introduction

Basic example for using dynaconf for managing configuration in Python https://dynaconf.readthedocs.io/en/latest/

## Installation

- Install pip
- Install virtualenv

        pip install virtualenv

- Create virtualenv

        virtualenv env

- Activate virtualenv

    Windows cmd:

        .\env\Scripts\activate.bat

    Windows Powershell:

        .\env\Scripts\activate.ps1

    UNIX:

        ./env/Scripts/activate

- Install requirements

        pip install -r requirements.txt

## Run script

### Development environment

    python dynaconf_example.py

Expected output:

    port=5001
    host=127.0.0.1

### Production environment

Set value of environment variable ENV_FOR_DYNACONF=production

Windows Powershell

    $env:ENV_FOR_DYNACONF="production"; python dynaconf_example.py

Unix:

    ENV_FOR_DYNACONF=production python dynaconf_example.py

Expected output:

    port=80
    host=0.0.0.0    