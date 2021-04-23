# WEGnology CLI

## Description

[WEGnology CLI](https://docs.app.wnology.io/) is a command line tool to help manage your [WEGnology Application](https://docs.app.wnology.io/) and its resources.
It easily lets you manage [Experience Views](https://docs.app.wnology.io/), [Experience Versions](https://docs.app.wnology.io/), [Files](https://docs.app.wnology.io/), and [Data Tables](https://docs.app.wnology.io/data-tables/overview/) in your Applications.

## Installation

The CLI requires [Node.js](https://nodejs.org/en/) version 8.3 or higher. The latest stable version is available in NPM and can be installed using:

```bash
npm install -g wegnology-cli
```

## Usage

```bash
wegnology [options] [command]
```

## Commands

* [login](#login)
* [configure](#configure)
* [experience](#experience)
* [files](#files)
* [datatables](#data-tables)

### Login

Before you run any other commands, you will want to run `wegnology login` to authenticate with your wegnology account.
This will ask for the email address and password (and optionally your 2 factor code) for your wegnology account, and store
an authentication token on your computer.

### Configure

The `wegnology configure` command configures and links the current directory to one of your wegnology Applications. Once you have configured you will notice a few new directories into your current directory. There will be the following directories added:

* experience/components
* experience/pages
* experience/layouts
* files/
* dataTables/

This is how the CLI will be able to detect new files, experience views, or data tables that you want to add, update or remove from your wegnology Application. The files directory will contain and reflect the directory and files on your wegnology Application's Files. Similarly, the dataTables directory will contain your wegnology Application's data tables as csv files. and The experience directory is broken down by view type (components, layouts and pages), e.g. if you want to create a new component add this to your components directory, or if you want to remove a page, you will find that page located under experience/pages.

### Experience

The `wegnology experience` command is how you manage the Experience Views and Versions for a configured Application. It has the following subcommands:

* download
* status
* upload
* layout
* bootstrap
* version
* watch

#### Experience Examples

* Download all experience views (components, layouts and pages)  
  `$ wegnology experience download`
* Download component views  
  `$ wegnology experience download --type components`
* Download component views with names that start with error  
  `$ wegnology experience download --type components error*`
* Force a download of all views overwriting local modifications  
  `$ wegnology experience download -f`
* Check status of all experience views  
  `$ wegnology experience status`
* Upload all experience views  
  `$ wegnology experience upload`
* Upload only component views  
  `$ wegnology experience upload --type components /*`
* List all of your current experience versions  
  `$ wegnology experience version`
* List all of your experience versions that match a pattern  
  `$ wegnology experience version -l v1.*`
* Create a new experience version  
  `$ wegnology experience version v1.0.0`
* Create a new experience version with a description  
  `$ wegnology experience version v1.0.1 -d "updated home page"`
* Watch your Experience while you make changes and have them automatically uploaded  
  `$ wegnology experience watch`
* View all your experience pages with their layouts  
  `$ wegnology experience layout`
* View all of your experience pages that match this pattern with their layout  
  `$ wegnology experience layout -l v1.*`
* View all your experience pages with their layouts  
  `$ wegnology experience layout`
* To generate our standard experience starter views  
  `$ wegnology experience bootstrap`

### Files

The `wegnology files` command is how you manage the files for a configured Application. It has the following subcommands:

* download
* status
* upload
* watch

#### Files Examples

* Download all files  
  `$ wegnology files download`
* Download files in images directory  
  `$ wegnology files download images/*`
* Force a download of all files overwriting local modifications  
  `$ wegnology files download -f`
* Check status of all files  
  `$ wegnology files status`
* Upload all files  
  `$ wegnology files upload`
* Upload files in images directory  
  `$ wegnology files upload images/*`
* Force an upload of all files overwriting remote modifications  
  `$ wegnology files upload -f`
* Watch your Files while you make changes and have them automatically uploaded  
  `$ wegnology files watch`

### Data Tables

The `wegnology datatables` command is how you manage the data tables for a configured Application. It has the following subcommands:

* export

#### Data Tables Examples

* Export all data tables  
  `$ wegnology datatables export`
* Export all data tables whose names start with `Chicago`  
  `$ wegnology datatables export Chicago`
* Force a export of all data tables overwriting local modifications  
  `$ wegnology datatables export -f`

*****

Copyright (c) 2021 WEGnology IoT, Inc

<https://docs.app.wnology.io/>
