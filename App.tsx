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
import NewClientStep2 from "./pages/PrivatePages/NewClient/Step2";
import NewClientStep1 from "./pages/PrivatePages/NewClient/Step1";
import Menu from "./pages/PrivatePages/Menu";
import ChooseGlasses from "./pages/PrivatePages/ChooseGlasses";
import Documents from "./pages/PrivatePages/Documents";

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
              animation: 'default'
            }}
          >
            {token ? (
              <>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="menu" options={{ animation: 'none' }} component={Menu} />
                <Stack.Screen name="new-client-step1" options={{ animation: 'none' }} component={NewClientStep1} />
                <Stack.Screen name="new-client-step2" options={{ animation: 'none' }} component={NewClientStep2} />
                <Stack.Screen name="choose-glasses" options={{ animation: 'none' }} component={ChooseGlasses} />
                <Stack.Screen name="documents" options={{ animation: 'none' }} component={Documents} />

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
