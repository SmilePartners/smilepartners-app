import * as React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RegularText } from "./Typography";
import colors from "../../utils/colors";
import { Feather } from "@expo/vector-icons";

export const Header = ({ icon, navigation, onlyLogo, backgroundStyle }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, backgroundStyle,  { paddingTop: insets.top }, onlyLogo && { justifyContent: 'center' }]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} />
        </Pressable>
      <RegularText.MD>SMILE</RegularText.MD>
      {!onlyLogo && (
      <RegularText.SM
      style={{
        textAlign: "right",
        fontFamily: "Ubuntu_500Medium",
        lineHeight: 18,
      }}
    >
      Devenir{"\n"}Smileur
    </RegularText.SM>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 30,
  },
});
