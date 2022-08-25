"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
let manUnitedWins = 0;
for (const match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`test ${manUnitedWins}`);