import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { addWeeks } from 'date-fns';
import PreviousNextComponent from '@/components/PreviousNext';
import Ionicons from '@expo/vector-icons/Ionicons';

describe('PreviousNextComponent', () => {
  const baseDate = new Date('2025-07-21'); 

  beforeAll(async () => {
    await Ionicons.loadFont();
  });

  it('Should renders Previous and Next buttons', () => {
    const { getByText } = render(
      <PreviousNextComponent weekStart={baseDate} setWeekStart={jest.fn()} color="blue" />
    );

    expect(getByText('Previous')).toBeTruthy();
    expect(getByText('Next')).toBeTruthy();
  });

  it('Should call setWeekStart with previous week on Previous on selection', () => {
    const mockSetWeekStart = jest.fn();
    const { getByText } = render(
      <PreviousNextComponent weekStart={baseDate} setWeekStart={mockSetWeekStart} color="blue" />
    );

    fireEvent.press(getByText('Previous'));
    expect(mockSetWeekStart).toHaveBeenCalledWith(addWeeks(baseDate, -1));
  });

  it('Should call setWeekStart with next week on Next on selection', () => {
    const mockSetWeekStart = jest.fn();
    const { getByText } = render(
      <PreviousNextComponent weekStart={baseDate} setWeekStart={mockSetWeekStart} color="blue" />
    );

    fireEvent.press(getByText('Next'));
    expect(mockSetWeekStart).toHaveBeenCalledWith(addWeeks(baseDate, 1));
  });
});
