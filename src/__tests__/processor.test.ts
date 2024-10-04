import { AthleteDataProcessor } from '../processor';
import { Summary, Lap, Sample, ActivityType, SampleType } from '../models';

describe('AthleteDataProcessor Class', () => {
  test('should load and process summary, laps, and samples data', () => {
    const processor = new AthleteDataProcessor();

    const summaryData: Summary = {
      userId: '1234567890',
      activityId: 9480958402,
      activityName: 'Indoor Cycling',
      durationInSeconds: 3667,
      startTimeInSeconds: 1661158927,
      startTimeOffsetInSeconds: 7200,
      activityType: ActivityType.INDOOR_CYCLING,
      averageHeartRateInBeatsPerMinute: 150,
      activeKilocalories: 561,
      deviceName: 'instinct2',
      maxHeartRateInBeatsPerMinute: 190,
    };

    const lapsData: Lap[] = [
      {
        startTimeInSeconds: 1661158927,
        airTemperatureCelsius: 28,
        heartRate: 109,
        totalDistanceInMeters: 15,
        timerDurationInSeconds: 600,
      },
    ];

    const samplesData: Sample[] = [
      {
        recordingRate: 5,
        sampleType: SampleType.HEART_RATE,
        data: '120,126,122,140,142,155,145',
      },
    ];

    processor.loadSummary(summaryData);
    processor.loadLaps(lapsData);
    processor.loadSamples(samplesData);

    const result = processor.consolidateData();

    expect(result?.activityOverview).toEqual(summaryData);
    expect(result?.lapsData[0].heartRateSamples).toHaveLength(7);
    expect(result?.lapsData[0].heartRateSamples[0].heartRate).toBe(120);
  });
});
