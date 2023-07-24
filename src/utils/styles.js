import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    /* Chat Styles */
    chatContainer: {
        borderBottomWidth: 1,
        margin: 25,
        alignItems: 'flex-start'
    },
    chatBox: {
        flexDirection: 'row',
        marginBottom: 10
    },
    chatFrom: {
        fontWeight: 'bold',
        fontSize: 15,
        margineLeft: 10
    },
    chatMessage: {
        fontSize: 12,
        margineLeft: 25
    },
    chatProfilePic: {
        borderWidth: 1,
        borderRadius: 100,
        width: 50,
        height: 50
    },
    /*End Chat Styles */

    /* Login/Register Screen styles */
    viewContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputContainer: {
        backgroundColor: '#FFC0CB',
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: 'flex-start'
    },
    textInputContainer_diff: {
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 10,
        alignItems: 'center'
        
    },
    welcomeMessage: {
        fontSize: 18,
        fontFamily: 'arial',
        fontWeight: 'bold'
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10
    },
    submitButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#FF1493',
        marginBottom: 15
    },
    forgot_button: {
        height: 30,
        marginBottom: 10,
        color: 'blue'
    },
    register_instead_btn: {
        height: 30,
        marginBottom: 30,
        color: 'blue'
    },
    image: {
        marginBottom: 20,
    },
    image_reg: {
        marginBottom: 0
    }


    /* End Login/Register screen styles */
})

export default styles