# WEGnology CLI Changelog

## WEGnology CLI v1.1.1

### Fixed

* locking down client API version.
* now properly scoping the user token.

## WEGnology CLI v1.1.0

### Added

* Experience layout command (`wegnology experience layout [page]`)
* Experience bootstrap command (`wegnology experience bootstrap`)

### Fixed

* Ensuring lock file unlocks when closing the watcher
* Actually generating folder structure on configure

## WEGnology CLI v1.2.0

### Added

* Data Tables export command (`wegnology datatable export`)

### Fixed

* sanitizing file names

## WEGnology CLI v1.2.1

### Fixed

* watch command now has a queueing process incase you have slow internet or a lot of changes at once.
