sap.ui.define(['jquery.sap.global', 'sap/ui/core/library'],
    function(jQuery, library1) {
        "use strict";

        sap.ui.getCore().initLibrary({
            name : "ui5lab.wl.starwars",
            dependencies : ["sap.ui.core"],
            types: [],
            interfaces: [],
            controls: [
                "ui5lab.wl.starwars.Intro"
            ],
            elements: [],
            noLibraryCSS: false,
            version: "${version}"
        });

        return ui5lab.wl.starwars;
    });