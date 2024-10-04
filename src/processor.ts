import {
  Summary,
  Lap,
  Sample,
  ProcessedHeartRateSample,
  LapWithHeartRate,
  SampleType,
} from './models';

export class AthleteDataProcessor {
  private summary: Summary | null = null;
  private laps: Lap[] = [];
  private samples: Sample[] = [];

  loadSummary(summary: Summary): void {
    this.summary = summary;
  }

  loadLaps(laps: Lap[]): void {
    this.laps = laps;
  }

  loadSamples(samples: Sample[]): void {
    this.samples = samples;
  }

  private processHeartRateData(
    sample: Sample,
    sampleIndex: number
  ): ProcessedHeartRateSample[] {
    return sample.data
      .split(',')
      .map((val) => parseInt(val, 10))
      .filter((heartRate) => !isNaN(heartRate))
      .map((heartRate) => ({
        sampleIndex: sampleIndex++,
        heartRate,
      }));
  }

  private processHeartRateSamples(): ProcessedHeartRateSample[] {
    let sampleIndex = 0;

    return this.samples
      .filter((sample) => sample.sampleType === SampleType.HEART_RATE)
      .flatMap((sample) => this.processHeartRateData(sample, sampleIndex));
  }

  consolidateData(): {
    activityOverview: Summary;
    lapsData: LapWithHeartRate[];
  } | null {
    if (!this.summary || !this.laps.length || !this.samples.length) {
      console.error('One or more datasets are missing');
      return null;
    }

    const heartRateSamples = this.processHeartRateSamples();

    const lapsWithHeartRate = this.laps.map((lap) => ({
      ...lap,
      heartRateSamples,
    }));

    return {
      activityOverview: this.summary,
      lapsData: lapsWithHeartRate,
    };
  }
}
