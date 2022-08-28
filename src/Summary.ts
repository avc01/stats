import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface IAnalyzer {
  run(matches: MatchData[]): string;
}

export interface IOutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    private analyzer: IAnalyzer,
    private outputTarget: IOutputTarget
  ) {}

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
