import { StyleSheet } from "react-native";
import {  greenButton, primaryBlack, secondaryBlack, thinText } from "../../style";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: primaryBlack,
        justifyContent: 'center',
    },
    welcomeText:{
        color:'#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    input:{
        padding: 20,
        backgroundColor: secondaryBlack ,
        color: '#FFF',
        marginVertical: 10,
        borderRadius: 5
    },
    button:{
        backgroundColor: greenButton,
        padding: 20,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonInput:{
        color: '#FFF',
        fontWeight: 'bold'
    }
})