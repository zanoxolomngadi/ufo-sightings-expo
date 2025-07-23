import { ChartViewType } from "../types/ChartViewType";
import { SupportedLang } from "../types/SupportedLang";

export const chartTitles: Record<SupportedLang, Record<ChartViewType, string>> = {
  en: {
    bar: 'Bar Chart Weekly Sightings',
    line: 'Line Chart Weekly Sightings',
    pie: 'Total Sightings by Day of Week',
  },
};
