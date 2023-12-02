import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/colors'

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>SMILE BONJOUR</Text>
            </View>
        </View>
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
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'Ubuntu_700Bold'
    },
    welcomeContainer: {
        marginBottom: 40,
        alignItems: 'flex-start',
        width: '100%',
    },
    bottomContainer: {
        alignItems: 'center',
        height: '45%',
        backgroundColor: colors.primary,
        paddingVertical: 40,
        paddingHorizontal: 30,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    }
});


export default LoginPage;
