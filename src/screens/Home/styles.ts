import { StyleSheet } from "react-native"
import theme from "../../global/globalStyles"

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    containerModal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    modal: {
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        width: '100%',
        height: '50%',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
    },

    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightBrown,
        height: 50,
        width: 50,
        borderRadius: 100,
    },

    input: {
        height: 60,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        width: '70%',
        margin: 10,
        padding: 10,
        fontSize: 16,
        fontFamily: theme.fonts.Medium
    },

    nav: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        height: 100,
        marginTop: 40,
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
        maxWidth: '100%',
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
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        backgroundColor: 'white',
        padding: 17,
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
        bottom: 130,
        left: 20,
        elevation: 5,
        shadowColor: '#52006A',
    }
})

export default style