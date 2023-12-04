import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,  } from 'react-native';
import { RegularText, Title } from '../../components/atoms/Typography';
import { colors } from '../../utils/colors'
import { StatusBar } from 'expo-status-bar';
import { CustomStatusBar } from '../../components/atoms/CustomStatusBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title.MD style={{ marginBottom: 10 }}>Se connecter</Title.MD>
                <RegularText.MD >Utilisez les identifiants que vous avez saisis lors de la création de votre compte.</RegularText.MD>
            </View>
            <View style={styles.bottomContainer}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: colors.primary,
    },
    header: {
        justifyContent: 'center',
        height: '30%',
        paddingHorizontal: 30,
    },
    bottomContainer: {
        alignItems: 'center',
        height: '85%',
        backgroundColor: colors.white,
        paddingVertical: 40,
        paddingHorizontal: 30,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    }
});


export default Login;
