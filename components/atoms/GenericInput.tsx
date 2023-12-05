import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../../utils/colors";

const GenericInput = ({ icon, error, errorMessage, placeholder, ...rest }) => {
  return (
    <>
      <View style={[styles.container, , error && styles.errorInput]}>
        {icon && <Feather color={colors.secondary} name={icon} size={24} style={styles.icon} />}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.darkGrey}
          style={styles.input}
          {...rest}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 90,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: colors.grey,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    fontFamily: "Ubuntu_400Regular",
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
  },
});

export default GenericInput;
