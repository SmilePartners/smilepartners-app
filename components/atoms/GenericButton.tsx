import { Link } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";

interface GenericButtonProps {
  to?: string;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const GenericButton: React.FC<GenericButtonProps> = ({
  to,
  title,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...Object(style) }}
      onPress={() => onPress()}
    >
      {to ? (
        <Link to={to}>
          <Text style={{ ...styles.text, ...Object(textStyle) }}>{title}</Text>
        </Link>
      ) : (
        <Text style={{ ...styles.text, ...Object(textStyle) }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    width: "75%",
    paddingVertical: 20,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
});

export default GenericButton;
