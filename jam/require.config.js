var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jquery-ui-core",
            "location": "jam/jquery-ui-core",
            "main": "jquery-ui-1.10.2.custom.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "jquery-ui-core": {
            "deps": [
                "jquery"
            ]
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jquery-ui-core",
            "location": "jam/jquery-ui-core",
            "main": "jquery-ui-1.10.2.custom.js"
        }
    ],
    "shim": {
        "jquery-ui-core": {
            "deps": [
                "jquery"
            ]
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "jquery",
            "location": "jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jquery-ui-core",
            "location": "jam/jquery-ui-core",
            "main": "jquery-ui-1.10.2.custom.js"
        }
    ],
    "shim": {
        "jquery-ui-core": {
            "deps": [
                "jquery"
            ]
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}
