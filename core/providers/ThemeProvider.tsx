import { ReactNode, createContext, useContext } from 'react';

export type ChartConfig = {
  backgroundColor: string;
  backgroundGradientFrom: string;
  backgroundGradientTo: string;
  decimalPlaces: number;
  color: (opacity?: number) => string;
  labelColor: () => string;
};


type ThemeContextType = {
  chartConfig: ChartConfig;
  colors: {
    background: string;
    secondary: string;
    text: string;
    primary: string;
    muted: string;
  };
  skeleton: {
    background: string;
    lineGradientWidth: string;
    lineGradientHeight: string;
  };
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme: ThemeContextType = {
    chartConfig: {
      backgroundColor: '#000',
      backgroundGradientFrom: '#1e2923',
      backgroundGradientTo: '#08130D',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
      labelColor: () => '#fff',
    },
  colors: {
  background: '#111',     
  text: '#fff',          
  primary: '#0284c7',     
  secondary: '#fff',
  muted: '#334155',    
},
  skeleton: {
    background: '#E5E7EB',
    lineGradientWidth: '100%',
    lineGradientHeight: '100%'
  },
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
