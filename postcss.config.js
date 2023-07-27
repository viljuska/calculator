module.exports = {
	plugins: [
		require( 'postcss-preset-env' )( {
			stage: 1,
			features: {
				'logical-properties-and-values': false,
				'dir-pseudo-class': false,
			}
		} ),
		require( 'autoprefixer' ),
		require( 'postcss-combine-media-query' ),
		require( 'postcss-sort-media-queries' )( {
			sort: 'desktop-first'
		} )
	]
};
