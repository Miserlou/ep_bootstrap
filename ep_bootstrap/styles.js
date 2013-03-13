// eejs is a special templating engine for EPL that should be included.
var eejs = require("ep_etherpad-lite/node/eejs");

exports.eejsBlock_styles = function(hook_name, args, cb){

    args.content = args.content + "<link href='https://s3.amazonaws.com/openwatch-static/static/assets/css/bootstrap.css' rel='stylesheet'>";

    return cb();
}
