import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default function useShimmerAnimation() {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [animation]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-250, 250],
  });

  return translateX;
}
