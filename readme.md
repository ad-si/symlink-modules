# Symlink Dependencies

Since npm version 3.0.0 npm tries to install the dependency tree
maximally flat. (https://github.com/npm/npm/releases/tag/v3.0.0)

This means it is not possible to know in advance
where the module directory will be on the disk.
Therefore statically loading files from a module directory
can not be safely used anymore.

Symlink-dependencies let's you symlink your dependencies
to a consistent location so that the files can be loaded from there.


## Installation

```sh
npm install --save symlink-dependencies
```


## Usage

### Command Line

```sh
symlink-dependencies <dependency-1> <dependency-2>
```

This will create a `linked_modules` directory
and symlink the specified dependencies.


### Javascript

```js
const symlinkDependencies = require('symlink-dependencies')

symlinkDependencies('dependency-1')

// or

symlinkDependencies(
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
