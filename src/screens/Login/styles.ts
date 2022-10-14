import { StyleSheet } from "react-native"
import theme from "../../global/globalStyles"

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        height: 50,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        width: '70%',
        margin: 10,
        padding: 10,
    },

    text: {
        fontSize: 40,
        fontFamily: theme.fonts.Bold,
        margin: 30
    }
})

export default style