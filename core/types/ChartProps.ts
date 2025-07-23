import { Animated } from "react-native";

export type BarLineChartProps = {
  view: 'bar' | 'line';
  labels: string[];
  values: number[];
 
};

export type PieChartProps = {
  values: { name: string; value: number; color: string }[];
  labels?: never; 
};

export type skeletonChartProps ={
      translateX: Animated.AnimatedInterpolation<string | number>;
}

