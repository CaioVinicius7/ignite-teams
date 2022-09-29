import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

import theme from "@theme/index";
import { Players } from "@screens/Players";
import { Loader } from "@components/Loading";
import { StatusBar } from "react-native";

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? <Players /> : <Loader />}
    </ThemeProvider>
  );
}
