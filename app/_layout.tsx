
import AppLayoutComponent from '@/components/AppLayout';
import { LangProvider, ThemeProvider } from '@/core/providers';

import 'react-native-reanimated';




export default function RootLayout() {


 
 return(  
  <ThemeProvider>
    <LangProvider>
    <AppLayoutComponent/>
    </LangProvider>
    </ThemeProvider>
 );
}



