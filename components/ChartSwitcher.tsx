import { useLang } from '@/core/providers/LangProvider';
import { useTheme } from '@/core/providers/ThemeProvider';
import { chartTitles } from '@/core/texts/chartTitles';
import { BarLineChartProps } from '@/core/types/ChartProps';
import { ChartViewType } from '@/core/types/ChartViewType';
import { useWindowDimensions } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import HeaderTextComponent from './HeadingText';





export default function ChartSwitcherComponent(props: BarLineChartProps) {
  const { width } = useWindowDimensions();
  const { chartConfig } = useTheme();
  const { lang } = useLang();
  const title = chartTitles[lang][props.view as ChartViewType];
 const chartData = {
    labels: props.labels,
    datasets: [{ data: props.values }],
  };

  const commonProps = {
    data: chartData,
    width: width - 32,
    height: 220,
    fromZero: true,
    chartConfig,
    style: { borderRadius: 16 },
    yAxisLabel: '',
    yAxisSuffix: '',
  };


  return (
  <>

    <HeaderTextComponent title={title} padding='mb-2'/>

    {props.view === 'bar' ? (
      <BarChart {...commonProps} />
    ) : (
      <LineChart {...commonProps} bezier />
    )}
  </>
);

}
