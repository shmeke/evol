import React, { useState } from 'react';
import { View, TouchableOpacity,Text,TextInput,Image,Alert } from 'react-native'
import styles from '../utils/styles'
import axios from 'axios';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const handleLogin = () => {

            axios.get('http://192.168.1.151:8000/api/player/' + email)
            .then((response) => {
                if(response.data.password === password) {
                    //login successful
                    setIsLoggedIn(true)
                    navigation.navigate("HomeScreen")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <View style={styles.viewContainer}>
            <Image style={styles.image} source={require("../../img/brand_logo.png")} />

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder='Email'
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder='Password'
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>



            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.loginText} 
                      onPress={() => handleLogin()}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.register_instead_btn}
                      onPress={() =>navigation.navigate('Register')}>Not registered? Signup here!</Text>
            </TouchableOpacity>

        </View>
    )

}

export default Login

