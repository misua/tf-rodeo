export interface TimeSeriesData {
  timestamp: string;
  value: number;
}

export interface StatusUpdate {
  id: string;
  status: "healthy" | "warning" | "error";
  message: string;
  timestamp: string;
}

export async function fetchMetrics(
  timeRange: "hour" | "day" | "week" = "day"
): Promise<TimeSeriesData[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const now = Date.now();
  const data: TimeSeriesData[] = [];

  // Generate mock time series data
  const intervals = timeRange === "hour" ? 60 : timeRange === "day" ? 24 : 7;
  const step =
    timeRange === "hour" ? 60000 : timeRange === "day" ? 3600000 : 86400000;

  for (let i = intervals - 1; i >= 0; i--) {
    data.push({
      timestamp: new Date(now - i * step).toISOString(),
      value: Math.floor(Math.random() * 100) + 50,
    });
  }

  return data;
}

export async function fetchStatus(): Promise<StatusUpdate[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "1",
      status: "healthy",
      message: "All systems operational",
      timestamp: new Date(Date.now() - 300000).toISOString(), // 5 minutes ago
    },
    {
      id: "2",
      status: "warning",
      message: "High CPU utilization detected",
      timestamp: new Date(Date.now() - 900000).toISOString(), // 15 minutes ago
    },
    {
      id: "3",
      status: "error",
      message: "Database connection timeout",
      timestamp: new Date(Date.now() - 1800000).toISOString(), // 30 minutes ago
    },
  ];
}
