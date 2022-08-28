import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

// const reader = new MatchReader(new CsvFileReader("football.csv"));
const reader = MatchReader.fromCsv("football.csv");
reader.load();

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
// summary.buildAndPrintReport(reader.matches);
Summary.winsAnalysisWithHtmlReport("Man United").buildAndPrintReport(
  reader.matches
);
