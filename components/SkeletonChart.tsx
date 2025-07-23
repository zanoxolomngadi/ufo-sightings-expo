
import { useTheme } from '@/core/providers/ThemeProvider';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, DimensionValue, View } from 'react-native';

type SkeletonLoaderProps = {
  translateX: Animated.AnimatedInterpolation<string | number>;
};

export default function SkeletonLoaderComponent({ translateX }: SkeletonLoaderProps) {

const { skeleton } = useTheme();
 

  return (
    <View
      className="w-full h-[220px] rounded-lg overflow-hidden relative mb-4"
      style={{ backgroundColor: skeleton.background}} 
    >
      <Animated.View
        style={{
          position: 'absolute',
          width: '50%',
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
  );
}
