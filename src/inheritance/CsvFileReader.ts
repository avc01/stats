import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(private filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): T => {
        const rowSplitted = row.split(",");
        return this.mapRow(rowSplitted);
      });
  }
}
