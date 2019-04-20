import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = {
        email: '',
        pass: ''
    } 

    render(){
        return (
        <Card>
            <CardSection>
                <Input
                placeholder='user@email.com'
                label='Email'
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                />
            </CardSection>

            <CardSection>
            <Input
                placeholder='Enter your password'
                label='Password'
                value={this.state.pass}
                onChangeText={pass => this.setState({ pass })}
                />
            </CardSection>

            <CardSection>
                <Button>
                    Login
                </Button>
            </CardSection>
        </Card>
        )
    }
}

export default LoginForm