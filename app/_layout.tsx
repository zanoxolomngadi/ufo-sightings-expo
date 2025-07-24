
import AppLayoutComponent from '@/components/AppLayout';
import { LangProvider, ThemeProvider } from '@/core/providers';
import {
  QueryClient,
} from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-reanimated';
import { Platform } from 'react-native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, 
    },
  },
})


const persister =
  Platform.OS === 'web'
    ? createAsyncStoragePersister({  storage: typeof window !== 'undefined' ? window.localStorage : undefined,})
    : createAsyncStoragePersister({ storage: AsyncStorage });


export default function RootLayout() {

 return(  
  <PersistQueryClientProvider    client={queryClient}
      persistOptions={{ persister }}>
  <ThemeProvider>
    <LangProvider>
    <AppLayoutComponent/>
    </LangProvider>
    </ThemeProvider>
    </PersistQueryClientProvider>
 );
}



