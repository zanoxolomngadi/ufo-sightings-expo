import React from 'react'

import SkeletonChartToggleComponent from '@/components/SkeletonCartToggle'
import SkeletonChartComponent from '@/components/SkeletonChart'
import { skeletonChartProps } from '@/core/types/ChartProps'

export default function LoadingUIComponent({ translateX }: skeletonChartProps) {
   const skeltonPreviousNextStyles = 'flex-row justify-between mb-5 px-4';
   const width = 100;
   const height = 40;
  return (
    <>
       <SkeletonChartToggleComponent translateX={translateX}  mainContainerClassName={skeltonPreviousNextStyles} width={width} height={height}/>
      <SkeletonChartToggleComponent translateX={translateX} />
      <SkeletonChartComponent translateX={translateX} />
      <SkeletonChartComponent translateX={translateX} />
    </>
  )
}
