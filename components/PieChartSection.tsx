import { useLang } from "@/core/providers/LangProvider";
import { useTheme } from "@/core/providers/ThemeProvider";
import { chartTitles } from "@/core/texts/chartTitles";
import { PieChartProps } from "@/core/types/ChartProps";
import { useWindowDimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import HeaderTextComponent from "./HeadingText";








export default function PieChartSectionComponent(props: PieChartProps) {
  const { width } = useWindowDimensions();
  const { chartConfig } = useTheme();
  const { lang } = useLang();

  const title = chartTitles[lang].pie;

  const pieData = props.values.map((value) => ({
      name: value.name,
      population: value.value,
      color: value.color,
      legendFontColor: chartConfig?.labelColor?.() || '#fff',
      legendFontSize: 12,
    }));

  return (
    <>
      <HeaderTextComponent title={title} padding='mt-4'></HeaderTextComponent>
      <PieChart
        data={pieData}
        width={width - 32}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="16"
        absolute
        style={{ borderRadius: 16 }}
      />
    </>
  );
}
