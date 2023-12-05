import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./pages/PublicPage/Login";
import Homee from "./pages/PrivatePages/Home";
import { useAtom } from 'jotai'
import { tokenAtom } from "./store/atoms/token";
import { QueryClient, QueryClientProvider } from 'react-query';
import Welcome from "./pages/PublicPage/Welcome";
import Home from "./pages/PrivatePages/Home";
import NewClient from "./pages/PrivatePages/NewClient";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();


export default function App() {
  const [token] = useAtom(tokenAtom)

  let [fontsLoaded, fontError] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "slide_from_bottom",
            }}
          >
            {token ? (
              <>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="new-client" component={NewClient} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignUp" component={Welcome} />
                <Stack.Screen name="SignIn" component={Login} />
              </>
            )}

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      </QueryClientProvider>
  );
}
