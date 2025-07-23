

import { useLang } from '@/core/providers';
import { ScreenTitles } from '@/core/texts/screenTitles';
import { addWeeks, format, startOfWeek } from 'date-fns';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTheme } from '../core/providers/ThemeProvider';
import { groupByWeek, groupByWeekday } from '../core/utilities/dateUtils';
import { ChartsUIComponent, ErrorUIComponent, HeaderTextComponent, LoadingUIComponent, PreviousNextComponent } from '@/components';
import { useShimmerAnimation, useUfoSightings } from '@/core/hooks';
import "../global.css";






export default function Index() {
  const { colors } = useTheme();
  const { data, loading, error} = useUfoSightings();
  const [weekStart, setWeekStart] = useState(startOfWeek(new Date('2019-03-15'), { weekStartsOn: 1 }));
  const [view, setView] = useState<'bar' | 'line'>('bar');
  const { labels, values } = groupByWeek(data, weekStart);
    const translateX = useShimmerAnimation();
    const pieData = groupByWeekday(data);
    const { lang } = useLang()
    const title = `${ScreenTitles[lang].heading} ${format(weekStart, 'dd MMM')} – ${format(addWeeks(weekStart, 1), 'dd MMM')}`
  

  return (
    <View className="flex-1 bg-zinc-900 pt-4">
      <ScrollView 
      contentContainerStyle={{ padding: 16 }}>
    
     < HeaderTextComponent title={title} padding='mb-4'/>

      <PreviousNextComponent
        weekStart={weekStart}
          setWeekStart={setWeekStart}
          color={colors.secondary}
      />

    {loading ? (
      <>
       <LoadingUIComponent translateX={translateX}/>
      </>
 
) : error ? (
     <ErrorUIComponent message={error}/>
) : (
       <ChartsUIComponent
            view={view}
            labels={labels}
            values={values}
            pieData={pieData}
            onViewChange={setView}
          />
)}
</ScrollView>
    </View>
  );
}


