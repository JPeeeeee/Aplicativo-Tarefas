import { StyleSheet } from "react-native"
import theme from "../../global/globalStyles"

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    nav: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        height: 100,
        marginTop: 20,
        paddingHorizontal: 25
    },

    text: {
        fontSize: 25,
        fontFamily: theme.fonts.Bold,
    },

    flatlist: {
        width: '100%',
    },

    task: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
        height: 70,
        borderWidth: 1,
        borderColor: theme.colors.lightGrey
    },

    checkMarker: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.lightGrey,
        height: '100%',
        width: 50
    },

    editMarker: {
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: theme.colors.lightGrey,
        height: '100%',
        width: 50,
        alignSelf: 'flex-end'
    },

    exit: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.sandYellow,
        height: 50,
        width: 50,
        borderRadius: 100,
    },

    newTask: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightBrown,
        height: 60,
        width: 60,
        borderRadius: 100,
        position: 'absolute',
        bottom: 30,
        left: 30,
        zIndex: 2,
        elevation: 5,
        shadowColor: '#52006A',
    }
})

export default style