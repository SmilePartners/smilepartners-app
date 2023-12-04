import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets} from 'react-native-safe-area-context';

export const CustomStatusBar = (
    {
      backgroundColor,
      barStyle = "dark-content",
    }
  ) => { 
     
     const insets = useSafeAreaInsets();
     console.log(insets)
  
     return (
       <View style={{ height: insets.top, backgroundColor }}>
          <StatusBar
            animated={true}
            backgroundColor={backgroundColor}
            barStyle={barStyle} 
            />
       </View>
     );
  }