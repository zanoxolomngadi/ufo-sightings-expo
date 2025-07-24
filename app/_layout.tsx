
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


const DELAY_TIME =  5 * 60 * 1000; //This is what 5 minutes looks like in milliseconds

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: DELAY_TIME,
      retry: 1, 
       staleTime: DELAY_TIME, 
       refetchOnWindowFocus: true,
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



