import React, { useState } from 'react';
import { View, TouchableOpacity,Text,TextInput,Image, Switch, Alert } from 'react-native'
import styles from '../utils/styles'
import axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reenterPassword, setReenterPassword] = useState('')
    const [acceptTerms, setAcceptTerms] = useState('')

    const handleRegister  = () => {

        if (password === reenterPassword) {
            axios.post('http://127.0.0.1:8000/api/players', {
                email: email,
                password: password
            })
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    Alert.prompt(error)
                    console.log(error)
                })
        } else {
            Alert.prompt("Password must be the same")
            console.log("Password must be the same")
        }

    }

    return (
        <View style={styles.viewContainer}>
            <Image style={styles.image_reg} source={require("../../img/brand_logo.png")} />

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

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder='Reenter Password'
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(reenterpassword) => setReenterPassword(reenterpassword)}
                />
            </View>

            {/*<View style={styles.textInputContainer}>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={acceptTerms ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setAcceptTerms(!acceptTerms)}
                    value={acceptTerms}
                />
    </View>*/}

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.loginText}
                      onPress={() => handleRegister}>REGISTER</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Register

