import perf from '@react-native-firebase/perf';

export function initPerformance(): void {
  perf().setPerformanceCollectionEnabled(true);
}

export function trace(id): void {
  perf().newTrace(id);
}

export default perf;
