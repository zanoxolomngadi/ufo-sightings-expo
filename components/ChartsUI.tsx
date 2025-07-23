import ChartSwitcher from '@/components/ChartSwitcher'
import ChartToggle from '@/components/ChartToggle'
import React from 'react'
import { View } from 'react-native'
import PieChartSection from './PieChartSection'

export default function ChartsUIComponent({
  view,
  labels,
  values,
  pieData,
  onViewChange,
}: {
  view: 'bar' | 'line'
  labels: string[]
  values: number[]
  pieData: { name: string; value: number; color: string }[];
  onViewChange: (v: 'bar' | 'line') => void
}) {
  return (
    <>
      <ChartToggle view={view} onChange={onViewChange} />
      <View className="mt-2">
        <ChartSwitcher view={view} labels={labels} values={values} />
      </View>
      <View className="mt-2">
        <PieChartSection values={pieData} />
      </View>
    </>
  )
}
