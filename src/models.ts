export enum ActivityType {
  INDOOR_CYCLING = 'INDOOR_CYCLING',
  RUNNING = 'RUNNING',
  SWIMMING = 'SWIMMING',
  WALKING = 'WALKING',
}

export enum SampleType {
  HEART_RATE = '1',
  SPEED = '2',
  CADENCE = '3',
}

export interface Summary {
  userId: string;
  activityId: number;
  activityName: string;
  activityType: ActivityType;
  activeKilocalories: number;
  durationInSeconds: number;
  startTimeInSeconds: number;
  startTimeOffsetInSeconds: number;
  averageHeartRateInBeatsPerMinute: number;
  maxHeartRateInBeatsPerMinute: number;
  deviceName: string;
}

export interface Lap {
  heartRate: number;
  startTimeInSeconds: number;
  airTemperatureCelsius: number;
  totalDistanceInMeters: number;
  timerDurationInSeconds: number;
}

export interface Sample {
  recordingRate: number;
  sampleType: SampleType;
  data: string;
}

export interface ProcessedHeartRateSample {
  sampleIndex: number;
  heartRate: number;
}

export interface LapWithHeartRate extends Lap {
  heartRateSamples: ProcessedHeartRateSample[];
}
