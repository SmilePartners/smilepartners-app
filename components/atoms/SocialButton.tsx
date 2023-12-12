import { Link } from '@react-navigation/native'
import React from 'react'
import {
  StyleSheet,
  Text,
  Pressable,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
  Image,
  TouchableOpacity
} from 'react-native'
import colors from '../../utils/colors'
import { Feather } from '@expo/vector-icons'

const google = require('../../assets/png/google.png')
const fb = require('../../assets/png/fb.png')

interface GenericButtonProps {
  title: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  type: 'fb' | 'google'
  onPress?: () => void
}

const SocialButton: React.FC<GenericButtonProps> = ({ title, style, textStyle, onPress, type }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...Object(style) }} onPress={onPress}>
      <Image style={styles.socialIcon} source={type === 'fb' ? fb : google} />
      <Text style={{ ...styles.text, ...Object(textStyle) }}>{title}</Text>
      <Feather name="arrow-right" size={24} style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.grey,
    width: '100%',
    paddingVertical: 20,
    borderRadius: 90,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10
  },
  text: {
    fontSize: 14,
    color: colors.secondary,
    fontFamily: 'Ubuntu_500Medium'
  },
  socialIcon: {
    height: 30,
    width: 30
  },
  icon: {}
})

export default SocialButton
