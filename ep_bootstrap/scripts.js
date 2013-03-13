// eejs is a special templating engine for EPL that should be included.
var eejs = require("ep_etherpad-lite/node/eejs");

exports.eejsBlock_scripts= function(hook_name, args, cb){

    args.content = args.content + '<script src="https://s3.amazonaws.com/openwatch-static/static/assets/js/bootstrap-transition.js"></script><script src="https://s3.amazonaws.com/openwatch-static/static/assets/js/bootstrap-dropdown.js"></script><script src="https://s3.amazonaws.com/openwatch-static/static/assets/js/bootstrap-tab.js"></script><script src="https://s3.amazonaws.com/openwatch-static/static/assets/js/bootstrap-tooltip.js"></script><script src="https://s3.amazonaws.com/openwatch-static/static/assets/js/bootstrap-button.js"></script>';
    return cb();
}
