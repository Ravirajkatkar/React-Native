import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DocForm from 'react-cross-form';
import {Card, Button} from 'react-native-elements';
import TextInput from './TextInput';

const FORM_FIELDS = [
  {
    key: 'firstName',
    label: 'First Name',
    required: true,
    component: TextInput,
    placeholder: 'Type your first name...',
    validators: {
      presence: {message: 'is required'},
      length: {minimum: 3},
    },
  },
  {
    key: 'lastName',
    label: 'Last Name',
    required: true,
    component: TextInput,
    placeholder: 'Type your last name...',
    validators: {
      presence: {message: 'is required'},
      length: {minimum: 3},
    },
  },
  {
    key: 'email',
    label: 'Email',
    component: TextInput,
    placeholder: 'E-mail',
    validators: {email: true},
  },
  {
    key: 'city',
    label: 'City',
    required: true,
    component: TextInput,
    placeholder: 'City',
    validators: {
      presence: {message: 'is required'},
      length: {minimum: 2},
    },
  },
  {
    key: 'state',
    label: 'State',
    required: true,
    component: TextInput,
    placeholder: 'State',
    validators: {
      presence: {message: 'is required'},
      length: {minimum: 2},
    },
  },
];

export default class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        city: null,
        state: null,
      },
      isFormValid: false,
      validateType: 'onFocus',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>FORM</Text>
        <Card>
          <DocForm
            fields={FORM_FIELDS}
            data={this.state.form}
            onChange={({key, updateData}) => {
              this.setState({form: updateData});
              if (key === 'lastName') {
                this.setState({validateType: 'all'});
              }
            }}
            validateType={this.state.validateType}
            onValidateStateChanged={({isValid}) => {
              this.setState({isFormValid: isValid});
            }}
          />
          <Button
            title={'Submit'}
            onPress={() => alert(JSON.stringify(this.state.form))}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 40,
    color: 'black',
  },
});
