import { StyleSheet } from "react-native";
import { greenButton, primaryBlack, secondaryBlack, thinText, yellow } from "../../style";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor: secondaryBlack,
        padding: 20,
    },
    bookCounter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    button:{
        backgroundColor: primaryBlack,
        padding: 10,
        width: '48%',
        alignItems: 'center',
        borderRadius: 4,
        
    },
    buttonText:{
        color: thinText
    },
    buttonAdd: {
        width: '100%',
        backgroundColor: greenButton,
        padding: 20,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        position: 'absolute',
        bottom: 0
     },
     buttonAddText:{
        color: '#FFF'
     }
})