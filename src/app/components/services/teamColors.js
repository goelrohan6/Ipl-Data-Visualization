(function() {
    'use strict';

    angular.module('app')
        .service('teamColors', [
            function() {
                var obj = {};
                obj.colors = [];
                obj.colors["RCB"] = "#BE3A44";
                obj.colors["DD"] = "#A42726";
                obj.colors["GL"] = "#F7EB0B";
                obj.colors["KXP"] = "#EB1C28";
                obj.colors["KKR"] = "#3C2158";
                obj.colors["MI"] = "#085BA1";
                obj.colors["RP"] = "#592760";
                obj.colors["SH"] = "#F15333";
                obj.colors["RR"] = "#264BA5";
                obj.colors["CSK"] = "#FFE534";
                obj.colors["DC"] = "#222469";
                obj.colors["PW"] = "#393834";
                obj.colors["KT"] = "#FDA963";
                return obj;
            }
        ]);
})();