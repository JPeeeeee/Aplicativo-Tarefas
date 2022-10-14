import { StyleSheet } from "react-native"
import theme from "../../global/globalStyles"

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 35,
        fontFamily: theme.fonts.Bold,
        margin: 30,
        textAlign: 'center'
    }
})

export default style