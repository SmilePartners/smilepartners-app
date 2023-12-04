import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GenericButton from '../../components/atoms/GenericButton';
import { RegularText, Title } from '../../components/atoms/Typography';
import { colors } from '../../utils/colors'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomStatusBar } from '../../components/atoms/CustomStatusBar';

const Home = () => {
    return (
        <SafeAreaProvider>
            <CustomStatusBar backgroundColor="#000" />
            <View style={styles.container}>
                <View style={styles.header}>
                <Text>SMILE PARTNERS</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.welcomeContainer}>
                    <Title.MD style={{ marginBottom: 10 }}>Bienvenue !</Title.MD>
                    <RegularText.MD >Des lunettes pour tous, par tous.</RegularText.MD>
                    <RegularText.MD>Votre vision, notre mission !</RegularText.MD>
                </View>
                <GenericButton 
                    textStyle={{ color: colors.secondary }}
                    style={{ marginBottom: 20 }}
                    to='/login'
                    title='Je me connecte'
                  />
                <GenericButton
                    style={{ backgroundColor: colors.secondary }}
                    textStyle={{ color: colors.white }}
                    to='/login' 
                    title='Je deviens Smileur !'
                 />

            </View>
        </View>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '55%',
    },
    welcomeContainer: {
        marginBottom: 40,
        alignItems: 'flex-start',
        width: '100%',
    },
    bottomContainer: {
        alignItems: 'center',
        height: '50%',
        backgroundColor: colors.primary,
        paddingVertical: 40,
        paddingHorizontal: 30,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    }
});


export default Home;
