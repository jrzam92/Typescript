"use strict";
var Apocalipsis = (function () {
    function Apocalipsis(name) {
        this.name = name;
    }
    Apocalipsis.callApocalipsis = function () {
        if (!Apocalipsis.intance) {
            Apocalipsis.intance = new Apocalipsis("Soy apocalipsis el único ....xD");
        }
        return Apocalipsis.intance;
    };
    return Apocalipsis;
}());
var apocalipsis1 = Apocalipsis.callApocalipsis();
var apocalipsis2 = Apocalipsis.callApocalipsis();
var apocalipsis3 = Apocalipsis.callApocalipsis();
console.log(apocalipsis1, apocalipsis2, apocalipsis3);
//# sourceMappingURL=main.js.map