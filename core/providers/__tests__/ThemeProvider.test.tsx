import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native'; 
import { ThemeProvider, useTheme } from '@/core/providers/ThemeProvider';

describe('ThemeProvider', () => {
  it('Should provide theme context values correctly', () => {
    const TestComponent = () => {
      const { colors, skeleton, chartConfig } = useTheme();
      return (
        <>
          <Text testID="primary-color">{colors.primary}</Text>
          <Text testID="skeleton-bg">{skeleton.background}</Text>
          <Text testID="chart-bg">{chartConfig.backgroundColor}</Text>
        </>
      );
    };

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('primary-color').props.children).toBe('#0284c7');
    expect(getByTestId('skeleton-bg').props.children).toBe('#E5E7EB');
    expect(getByTestId('chart-bg').props.children).toBe('#000');
  });

  it('Should throw error when useTheme is used outside ThemeProvider', () => {
    const TestComponent = () => {
      useTheme(); 
      return null;
    };

    expect(() => render(<TestComponent />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
  });
});
