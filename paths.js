/**
 * This file severs to get absolute path to theme assets and plugin assets
 *
 * @type {path.PlatformPath | path}
 */

const path = require( 'path' );

module.exports = {
	root   : path.resolve( './' ),
	public : `/${ path.basename( path.resolve( './' ) ) }/dist/`,
	assets : path.resolve( './assets' ),
	modules: path.resolve( './assets/scripts/modules' ),
	dist   : path.resolve( './dist' ),
};
