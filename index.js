const fs = require('fs')
const path = require('path')
const resolvePackage = require('resolve-pkg')
const rimraf = require('rimraf')

function createLink (linksDirectory, moduleName) {

	const target = resolvePackage(moduleName)
	const link = path.join(process.cwd(), linksDirectory, moduleName)

	fs.symlinkSync(target, link, 'dir')

	console.log(link, '->', target)
}

module.exports = function (moduleNames, options) {

	options = options || {}
	options.linksDirectory = options.linksDirectory || 'linked_modules'

	try {
		rimraf.sync(options.linksDirectory)
		fs.mkdirSync(options.linksDirectory)

		if (typeof moduleNames === 'string')
			createLink(options.linksDirectory, moduleNames)

		else if (Array.isArray(moduleNames))
			moduleNames.forEach(
				moduleName => createLink(options.linksDirectory, moduleName)
			)
	}
	catch (error) {
		console.error(error.stack)
	}
}
