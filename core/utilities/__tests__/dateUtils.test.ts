
import { parse } from 'date-fns';
import { getWeekDays, groupByWeek, groupByWeekday } from '../dateUtils';

describe('UFO Sightings Utils', () => {
  const mockData = [
    { date: '01/07/2024', sightings: 2 }, 
    { date: '02/07/2024', sightings: 3 }, 
    { date: '04/07/2024', sightings: 1 }, 
    { date: '07/07/2024', sightings: 4 }, 
    { date: '08/07/2024', sightings: 1 }, 
  ];

  const weekStart = parse('01/07/2024', 'dd/MM/yyyy', new Date());

  test('getWeekDays returns full week starting from Monday', () => {
    const days = getWeekDays(weekStart);
    expect(days).toHaveLength(7);
    expect(days[0]).toBe('01/07/2024'); 
    expect(days[6]).toBe('07/07/2024'); 
  });

  test('groupByWeek returns correct counts and full week', () => {
    const result = groupByWeek(mockData, weekStart);
    expect(result.labels).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    expect(result.values).toEqual([
      2, 
      3,
      0,
      1,
      0,
      0,
      4, 
    ]);
  });

  test('groupByWeekday aggregates data by weekday correctly', () => {
    const result = groupByWeekday(mockData);
    const monday = result.find((d) => d.name === 'Monday');
    const tuesday = result.find((d) => d.name === 'Tuesday');
    const sunday = result.find((d) => d.name === 'Sunday');
    const wednesday = result.find((d) => d.name === 'Wednesday');

    expect(monday?.value).toBe(3);
    expect(tuesday?.value).toBe(3);
    expect(sunday?.value).toBe(4);
    expect(wednesday?.value).toBe(0); 
  });
});
