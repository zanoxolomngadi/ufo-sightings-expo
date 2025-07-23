import Ionicons from '@expo/vector-icons/Ionicons';
import { addWeeks } from 'date-fns';
import { View } from 'react-native';
import ButtonComponent from './button';

type PreviousNextProps = {
  weekStart: Date;
  setWeekStart: (date: Date) => void;
  color: string;
};

export default function PreviousNextComponent({
  weekStart,
  setWeekStart,
  color,
}: PreviousNextProps) {
  const baseButtonStyles = 'px-4 py-2 rounded bg-cyan-600';
  const textStyles = 'text-white font-medium';

  return (
    <View className="flex-row justify-between mb-5 px-4">
      <ButtonComponent
        onPress={() => setWeekStart(addWeeks(weekStart, -1))}
        title="Previous"
        buttonClassName={baseButtonStyles}
        textClassName={`${textStyles} ml-2`}
      >
        <Ionicons name="arrow-back" size={24} color={color} />
      </ButtonComponent>

      <ButtonComponent
        onPress={() => setWeekStart(addWeeks(weekStart, 1))}
        title="Next"
        buttonClassName={baseButtonStyles}
        textClassName={`${textStyles} mr-2`}
        flexDirectionClass="flex-row-reverse"
      >
        <Ionicons name="arrow-forward" size={24} color={color} />
      </ButtonComponent>
    </View>
  );
}
