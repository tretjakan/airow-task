
# Athlete Data Processor

This library processes heart rate data collected from professional athletes' sports computers. The primary goal is to consolidate heart rate data within laps.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Data Loading and Consolidation](#data-loading-and-consolidation)
  - [Model Training](#model-training)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd airow-task
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

### Data Loading and Consolidation

You can load summary, laps, and sample heart rate data, and then consolidate them into a unified structure for further use.

```typescript
import { AthleteDataProcessor } from './processor';
import { Summary, Lap, Sample, ActivityType, SampleType } from './models';

// Sample data
const summaryData: Summary = { /* summary details */ };
const lapsData: Lap[] = [ /* lap details */ ];
const samplesData: Sample[] = [ /* heart rate sample details */ ];

// Create an instance of the processor
const processor = new AthleteDataProcessor();

// Load the data
processor.loadSummary(summaryData);
processor.loadLaps(lapsData);
processor.loadSamples(samplesData);

// Consolidate the data
const result = processor.consolidateData();
console.log(result);
```