import {Button, TextInput, View} from 'react-native'
import React, { Component } from 'react'

import {createUserWithEmailAndPassword} from "firebase/auth"
import firebase from 'firebase';

export class RegisterScreen extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            name:'',
        }

    this.onSignUp = this.onSignUp.bind(this)

    }

    onSignUp(){
        const {email,name,password}=this.state;
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result) => {
            console.log(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  render() {
    return (
      <View>
        <TextInput
        placeholder='name'
        onChangeText={(name)=> this.setState({name})}
        />
        <TextInput
        placeholder='email'
        onChangeText={(email)=> this.setState({email})}
        />
        <TextInput
        placeholder='password'
        secureTextEntry={true}
        onChangeText={(password)=> this.setState({password})}
        />
        <Button
        onPress={() => this.onSignUp() }
        title="Sign up"
        />
      </View>
    )
  }
}

export default RegisterScreen