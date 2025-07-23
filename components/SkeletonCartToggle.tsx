import { useTheme } from '@/core/providers/ThemeProvider';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, DimensionValue, View } from 'react-native';


type SkeletonChartToggkeProps = {
  translateX: Animated.AnimatedInterpolation<string | number>;
};

export default function SkeletonChartToggleComponent({ translateX }: SkeletonChartToggkeProps) {
const { skeleton } = useTheme();
  return (
    <View className="flex-row justify-center mb-4 py-2">
      {[1, 2].map((_, index) => (
        <View
          key={index}
          className="rounded mr-4"
          style={{
            width: 80, 
            height: 32, 
            backgroundColor: skeleton.background, 
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Animated.View
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: [{ translateX }],
            }}
          >
            <LinearGradient
              colors={['transparent', 'rgba(160,160,160,0.3)', 'transparent']}
              start={[0, 0]}
              end={[1, 0]}
              style={{ width: skeleton.lineGradientWidth as DimensionValue, height: skeleton.lineGradientHeight as DimensionValue}}
            />
          </Animated.View>
        </View>
      ))}
    </View>
  );
}
