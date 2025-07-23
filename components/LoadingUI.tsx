import React from 'react'

import SkeletonChartToggleComponent from '@/components/SkeletonCartToggle'
import SkeletonChartComponent from '@/components/SkeletonChart'
import { skeletonChartProps } from '@/core/types/ChartProps'

export default function LoadingUIComponent({ translateX }: skeletonChartProps) {
  return (
    <>
      <SkeletonChartToggleComponent translateX={translateX} />
      <SkeletonChartComponent translateX={translateX} />
      <SkeletonChartComponent translateX={translateX} />
    </>
  )
}
