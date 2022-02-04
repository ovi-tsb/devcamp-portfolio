// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.


import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'channels/blogs'


// import 'bootstrap';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap'



import 'custom/html.sortable'
import 'custom/portfolios.coffee'

import "@fortawesome/fontawesome-free/js/all";

window.jQuery = $;
window.$ = $;

require('jquery')
require("jquery-ui")
require('jquery')
// require("cable")
require("gritter/js/jquery.gritter.js")
require("@nathanvda/cocoon")




Rails.start()
Turbolinks.start()
ActiveStorage.start()





