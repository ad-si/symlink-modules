# Symlink Modules

Since npm version 3.0.0 npm tries to install the dependency tree
maximally flat. (https://github.com/npm/npm/releases/tag/v3.0.0)

This means it is not possible to know in advance
where the module directory will be on the disk.
Therefore statically loading files from a module directory
can not be safely used anymore.

Symlink-modules let's you symlink your dependencies
to a consistent location so that the files can be loaded from there.


## Installation

```sh
npm install --save symlink-modules
```


## Usage

### Command Line

```sh
symlink-modules <dependency-1> <dependency-2>
```

This will create a `linked_modules` directory
and symlink the specified dependencies.


### Javascript

```js
const symlinkModules = require('symlink-modules')

symlinkModules('dependency-1')

// or

symlinkModules(
	['dependency-2', 'dependency-3'],
	options
)
```

Possible options:

```js
{
	linksDirectory: '<path>' // default: linked_modules
}
```
