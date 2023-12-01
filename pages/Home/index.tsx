import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import GenericButton from '../../components/atoms/GenericButton';
import { Title } from '../../components/atoms/Typography';

const Home = () => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>SMILE PARTNERS</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.welcomeContainer}>
                    <Title.MD>Bienvenue !</Title.MD>
                    <Text style={styles.descriptionText}>Des lunettes pour tous, par tous.</Text>
                    <Text style={styles.descriptionText}>Votre vision, notre mission !</Text>
                </View>
                <GenericButton to='/home' title='Je me connecte' />
                <GenericButton to='/home' title='Je deviens Smileur' />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
        paddingHorizontal: 25, // Ajustez en fonction de votre design
        marginBottom: 20,
        alignItems: 'flex-start',
        width: '100%',
    },
    welcomeText: {
        fontSize: 32, // Ajustez à la taille de votre design
        fontWeight: 'bold',
        fontFamily: 'Ubuntu_700Bold',
        marginBottom: 10, // Espace entre "Bienvenue !" et le texte descriptif
    },
    descriptionText: {
        fontSize: 16, // Ajustez à la taille de votre design
        color: '#141000', // Une couleur grise pour le texte descriptif
        textAlign: 'left',
        lineHeight: 26,
    },
    bottomContainer: {
        alignItems: 'center',
        height: '45%',
        backgroundColor: '#FFDD64',
        paddingVertical: 50,
        borderRadius: 45,
    }
});


export default Home;
