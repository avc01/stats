"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// const reader = new MatchReader(new CsvFileReader("football.csv"));
const reader = MatchReader_1.MatchReader.fromCsv("football.csv");
reader.load();
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
// summary.buildAndPrintReport(reader.matches);
Summary_1.Summary.winsAnalysisWithHtmlReport("Man United").buildAndPrintReport(reader.matches);
