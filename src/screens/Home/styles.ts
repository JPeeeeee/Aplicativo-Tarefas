import { StyleSheet } from "react-native"
import theme from "../../global/globalStyles"

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },

    text: {
        fontSize: 25,
        fontFamily: theme.fonts.Bold,
        marginTop: 50,
        marginBottom: 10,
    },

    flatlist: {
        width: '100%',
    },

    task: {
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        paddingLeft: 20,        
        borderRadius: 10,
        height: 70,
        borderWidth: 1,
        borderColor: theme.colors.lightGrey
    }
})

export default style