requirejs.config({
  baseUrl: "/assets/javascripts",
  paths: {
    jquery: "/assets/lib/jquery/jquery.min"
  }
});
requirejs(["chat"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
  var chatThing = require( "./chat" );
  var message = "Hi cat!";
  console.log( chatThing.chatTest( message ) );
});
