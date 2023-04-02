import { StyleSheet } from "react-native";
import { primaryBlack, thinText, yellow } from "../../style";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: primaryBlack,
        padding: 10,
        paddingVertical: 20,
        marginVertical: 10,
        flexDirection: 'row',
        borderRadius: 5,
        borderLeftColor: yellow,
        borderLeftWidth: 7,
        justifyContent: 'space-between'
     },
     title:{
        color: '#FFF',
        marginBottom: 15
     },
     createdAt:{
        color: thinText,
        fontStyle: 'italic'
     },
     pageCountContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        color: 'transparent'
     },
     pageCountNumber:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: yellow,
        padding: 5,
     },
})