import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Touchable } from 'react-native';
import colors from '../../utils/colors';
import { RegularText } from './Typography';
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {

    const [selectedTab, setSelectedTab] = useState('home'); 

    const navigation = useNavigation()

  const goToHome = () => {
    setSelectedTab('home')

    navigation.navigate('home')
  }
  const goToClients = () => {
    setSelectedTab('list')
  }
  const goToCommunity = () => {
    setSelectedTab('users')
  }
  const openMenu = () => {
    setSelectedTab('menu')

    navigation.navigate('menu')
  }

  const getColor = (tabName) => {
    return selectedTab === tabName ? colors.secondary : colors.darkGrey;
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.boxIcon} onPress={goToHome}>
        <Feather color={getColor('home')} name='home' size={24} style={styles.icon} />
        <RegularText.SM style={{ color: getColor('home') }}>Accueil</RegularText.SM>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boxIcon} onPress={goToClients}>
      <Feather color={getColor('list')} name='list' size={24} style={styles.icon} />
        <RegularText.SM style={{ color: getColor('list') }}>Mes clients</RegularText.SM>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('new-client-step1')}>
      <Feather color={colors.secondary} name='plus' size={26} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.boxIcon} onPress={goToCommunity}>
      <Feather color={getColor('users')} name='users' size={24} style={styles.icon} />
        <RegularText.SM style={{ color: getColor('users') }}>Communauté</RegularText.SM>

      </TouchableOpacity>

      <TouchableOpacity style={styles.boxIcon} onPress={openMenu}>
      <Feather color={getColor('menu')} name='menu' size={24} style={styles.icon} />
        <RegularText.SM style={{ color: getColor('menu') }}>Menu</RegularText.SM>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: 90,
    paddingHorizontal: 30,
    backgroundColor: colors.white
  },
  icon: {
    width: 25, 
    height: 25, 
  },
  addButton: {
    position: 'absolute',
    top: -25,
    left: Dimensions.get('window').width / 2 - 25,
    width: 50,
    height: 50,
    borderRadius: 90,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIcon: {
    alignItems: 'center'
  }
});

export default NavBar;
