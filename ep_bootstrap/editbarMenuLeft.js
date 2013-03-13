// eejs is a special templating engine for EPL that should be included.
var eejs = require("ep_etherpad-lite/node/eejs");

// Plugins are defined by overriding 'exports'
// Overriding of the templated content is a SERVER SIDE HOOK,
// most of which occurs in eejsBlock_**BLOCK_NAME**, as set in
// etherpad-lite/src/templates/pad.html
// Override as necessary.
//
exports.eejsBlock_editbarMenuLeft = function(hook_name, args, cb){

    args.content = '<div class="btn-group">\
                    <a href="#" id="bold" class="btn" data-toggle="tooltip" data-placement="bottom" title="Derp" data-l10n-id="pad.toolbar.bold.title">\
                      <span class="buttonicon buttonicon-bold"></span>\
                    </a>\
                    <a id="italic" data-key="italic" class="btn" data-l10n-id="pad.toolbar.italic.title">\
                      <span class="buttonicon buttonicon-italic"></span>\
                    </a>\
                    <a id="underline" data-key="underline" class="btn" data-l10n-id="pad.toolbar.underline.title">\
                      <span class="buttonicon buttonicon-underline"></span>\
                    </a>\
                    <a id="strikethrough" data-key="strikethrough" class="btn" data-l10n-id="pad.toolbar.strikethrough.title">\
                      <span class="buttonicon buttonicon-strikethrough"></span>\
                    </a>\
                </div>\
                <li class="acl-write separator"></li>\
                <li class="acl-write" id="oderedlist" data-key="insertorderedlist">\
                    <a class="grouped-left" data-l10n-id="pad.toolbar.ol.title">\
                      <span class="buttonicon buttonicon-insertorderedlist"></span>\
                    </a>\
                </li>\
                <li class="acl-write" id="unoderedlist" data-key="insertunorderedlist">\
                    <a class="grouped-middle" data-l10n-id="pad.toolbar.ul.title">\
                      <span class="buttonicon buttonicon-insertunorderedlist"></span>\
                    </a>\
                </li>\
                <li class="acl-write" id="indent" data-key="indent">\
                    <a class="grouped-middle" data-l10n-id="pad.toolbar.indent.title">\
                      <span class="buttonicon buttonicon-indent"></span>\
                    </a>\
                </li>\
                <li class="acl-write" id="outdent" data-key="outdent">\
                    <a class="grouped-right" data-l10n-id="pad.toolbar.unindent.title">\
                      <span class="buttonicon buttonicon-outdent"></span>\
                    </a>\
                </li>\
                <li class="acl-write separator"></li>\
                <li class="acl-write" id="undo" data-key="undo">\
                    <a class="grouped-left" data-l10n-id="pad.toolbar.undo.title">\
                      <span class="buttonicon buttonicon-undo"></span>\
                    </a>\
                </li>\
                <li class="acl-write" id="redo" data-key="redo">\
                    <a class="grouped-right" data-l10n-id="pad.toolbar.redo.title">\
                      <span class="buttonicon buttonicon-redo"></span>\
                    </a>\
                </li>\
                <li class="acl-write separator"></li>\
                <li class="acl-write" id="clearAuthorship" data-key="clearauthorship">\
                    <a data-l10n-id="pad.toolbar.clearAuthorship.title">\
                      <span class="buttonicon buttonicon-clearauthorship"></span>\
                    </a>\
                </li>\
        ';

    return cb();
}
