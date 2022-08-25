import { MatchResult } from "./MatchResult";

import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";

const reader = new MatchReader(new CsvFileReader("football.csv"));

reader.load();

let manUnitedWins = 0;

for (const match of reader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`test ${manUnitedWins}`);
