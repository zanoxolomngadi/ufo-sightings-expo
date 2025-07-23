import { useTheme } from '@/core/providers/ThemeProvider';
import { Stack } from 'expo-router';


export default function AppLayoutComponent() {
const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'UFO Dashboard' }} />
       <Stack.Screen name="[...404]" options={{ title: 'Not Found' }} />

    </Stack>
  );
}
