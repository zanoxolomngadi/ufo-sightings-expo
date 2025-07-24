import { addDays, format, isSameWeek, parse } from 'date-fns';
import { UfoSighting } from '../types/sightings';

const parseDate = (dateStr: string) => {
  return parse(dateStr, 'dd/MM/yyyy', new Date());
};

export function getWeekDays(weekStart: Date): string[] {
  return Array.from({ length: 7 }, (_, i) =>
    format(addDays(weekStart, i), 'dd/MM/yyyy')
  );
}

export function groupByWeek(data: UfoSighting[], weekStart: Date): { labels: string[]; values: number[] } {
  const counts: Record<string, number> = {};

  data.forEach((item) => {
    const date = parseDate(item.date);
    if (isSameWeek(date, weekStart, { weekStartsOn: 1 })) {
      const formatted = format(date, 'dd/MM/yyyy');
      counts[formatted] = (counts[formatted] || 0) + item.sightings;
    }
  });

  const weekDays = getWeekDays(weekStart);

  return {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: weekDays.map((day) => counts[day] || 0),
  };
}


export function groupByWeekday(data: UfoSighting[]) {
  const counts: Record<string, number> = {};

  data.forEach((item) => {
    const date = parseDate(item.date);
    const weekday = format(date, 'EEEE');
    counts[weekday] = (counts[weekday] || 0) + item.sightings;
  });

  const weekdayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const colorPalette = [
    '#0ea5e9', '#22c55e', '#facc15', '#f97316', '#a855f7', '#ef4444', '#14b8a6',
  ];

  return weekdayOrder.map((day, index) => ({
    name: day,
    value: counts[day] || 0,
    color: colorPalette[index],
  }));
}

