export type AnalyticsEvent = {
  name: string;
  payload?: Record<string, unknown>;
};

export function track(event: AnalyticsEvent) {
  if (process.env.NODE_ENV === "development") {
    console.info(`[analytics] ${event.name}`, event.payload ?? {});
  } else {
    console.log(`[analytics] ${event.name}`, event.payload ?? {});
  }
}

export function useAnalytics() {
  const log = (name: string, payload?: Record<string, unknown>) => {
    track({ name, payload });
  };

  return { track: log };
}
