// const { environment } = require('@rails/webpacker')
// 
// environment.plugins.append('Provide',
//   new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery'
//   })
// 
// module.exports = environment
// 
// 


///////////////////////////////////////////

// const { environment } = require('@rails/webpacker')
// 
// // Add the following lines
// const webpack = require("webpack")
// 
// environment.plugins.append("Provide", new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery',
//     // $: 'jquery/src/jquery',
//     // jQuery: 'jquery/src/jquery',
//     Popper: ['popper.js', 'default']  // Not a typo, we're still using popper.js here
// }))
// // End new addition
// 
// 
// 
// 
// 
// module.exports = environment

////////////////////////////////////////////


const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
);

const aliasConfig = {
    'jquery': 'jquery-ui-dist/external/jquery/jquery.js',
    'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
};

environment.config.set('resolve.alias', aliasConfig);

module.exports = environment