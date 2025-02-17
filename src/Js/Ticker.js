import Ticker from './Ticker';

// Basic usage with default items
<Ticker />

// Custom items usage
const customItems = [
  "Hospital A: 10 beds available",
  "Hospital B: 8 beds available",
  "Hospital C: 15 beds available"
];

<Ticker items={customItems} />