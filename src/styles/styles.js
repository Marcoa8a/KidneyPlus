import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleText: {
        marginTop: 80,
        fontSize: 30,
        fontWeight: 'bold',
    },

    infoText: {
        margin: 40,
    },

    img: {
        top: -30,
    },

    imgLogin: {
        top: 50,
    },

    btn_WelcomeLogin: {
        width: '75%',
        borderRadius: 5,
        backgroundColor: 'transparent',
        padding: 5,
    },

    btn_Text_Login: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },

    btn_WelcomeSignup: {
        width: '75%',
        top: -15,
        borderRadius: 5,
        backgroundColor: 'transparent',
        padding: 5,
    },

    gradient: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //Login and signup styles
    titleLogin: {
        textAlign: 'center',
    },
    
    input: {
        borderColor: '#0091FB',
        borderWidth: 2,
    },

    btn_LogIn: {
        width: '100%',
        top: 10,
        borderRadius: 5,
        backgroundColor: 'transparent',
        padding: 5,
    },

    //Home styles
    titleHome: {
        fontSize: 30,
        fontWeight: 'bold',
        top: 30,
    },

    posterImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 5,
    },

    map: {
        width: 100,
        heigth: 100,
    },
    
    //Record screen
    titleRecord: {
        height: 'fit',
        fontSize: 15,
        fontWeight: 'bold',
        // alignText: 'center',

        info: {
            margin: 50,
        },
        graphic: {
            top: 10,
        },
    },

    //ItemBox
    containerItemBox: {
        height: 80,
        widht: '100%',
        /*backgroundColor: '#00B4D8',*/
        borderColor: '#00B4D8',
        borderWidth: 2,
        padding: 16,
        borderRadius: 15,
        marginHorizontal: 10,
        marginTop: 5,
    },
    titles: {
        fontWeight: 'bold',
        fontSize: 16,
        fontStyle: 'italic'
    },
    hours:{
        fontSize: 10,
        color: "gray",
        textAlign: "right"
    },
    deleteBox: {
        backgroundColor: 'green',
        justifyContent: 'center',
        width: 100,
        alignItems: 'center',
        height: 80,
        borderRadius: 15,
        padding: 16,
        marginTop: 5,
    },

    //Notifications
    containerNotifications: {
        flex: 1,
    },
    seperatorLine: {
        height: 1,
        padding: 2,
    },

    //Real time screen
    containerReal: {
        flex: 1,
        justifyContent: 'center', padding: 8,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    textT: {
        textAlign: 'center', fontSize: 18,
        padding: 16,
        marginTop: 16,
        fontSize: 25,
        fontWeight: 'bold'
    },
    btn_Update: {
        width: '75%',
        borderRadius: 5,
        backgroundColor: 'transparent',
        padding: 5,
    },

    btn_Text_RT: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },

    btn_Diagnostic: {
        width: '75%',
        top: -15,
        borderRadius: 5,
        backgroundColor: 'transparent',
        padding: 5,
    },

    //Edit profile
    seperatorLine: {
        height: 1,
        padding: 2,
    },
    styleF: {
        marginHorizontal: 15,
    },

    //Diagnostic Screen
    containerDiagnostic: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
    header: {
            textAlign: 'center', fontSize: 18,
            padding: 16,
            marginTop: 16,
            fontSize: 25,
            fontWeight: 'bold'
    },
    safeA:{
        backgroundColor: "white",
        flex: 1,
    },
});

export default styles;