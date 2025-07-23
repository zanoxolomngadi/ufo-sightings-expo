import React from 'react';
import { View} from 'react-native';
import ButtonComponent from './button';

type ChartToggleProps = {
  view: 'bar' | 'line';
  onChange: (view: 'bar' | 'line') => void;
};

export default function ChartToggleComponent({ view, onChange }: ChartToggleProps) {
  const getButtonClass = (active: boolean) =>
    `px-4 py-2 rounded border ${
      active
        ? 'bg-cyan-500/30 text-white border-transparent'
        : 'bg-transparent text-white border-white'
    }`;

  return (
    <View className="flex-row justify-center mb-4 py-2">
      <View className="mr-4">
        <ButtonComponent title={'Bar'} onPress={() => onChange('bar')} buttonClassName={getButtonClass(view === 'bar')} textClassName={'font-medium text-white'}/>
      </View>

      <View>
       <ButtonComponent title={'line'}   onPress={() => onChange('line')} buttonClassName={getButtonClass(view === 'line')} textClassName={'font-medium text-white'} flexDirectionClass='flex-row-reverse'/>
      </View>
    </View>
  );
}
