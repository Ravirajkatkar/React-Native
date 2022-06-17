import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
// import validate from 'validation_wrapper';
import * as yup from 'yup';
import {Formik} from 'formik';

const reviewSchema = yup.object({
  firstName: yup.string().required().min(),

  lastName: yup.string().required().min(),

  address: yup.string().required().min(),

  city: yup.string().required().min(),

  state: yup.string().required().min(),
});

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
    };
  }

  // submit() {
  //   const firstNameError = validate('firstName', this.state.firstName);
  //   const lastNameError = validate('lastName', this.state.lastName);
  //   const addressError = validate('address', this.state.address);
  //   const cityError = validate('city', this.state.city);
  //   const stateError = validate('state', this.state.state);

  //   this.setState({
  //     firstNameError: firstNameError,
  //     lastNameError: lastNameError,
  //     addressError: addressError,
  //     cityError: cityError,
  //     stateError: stateError,
  //   });

  //   if (
  //     !firstNameError &&
  //     !lastNameError &&
  //     !addressError &&
  //     !cityError &&
  //     !stateError
  //   ) {
  //     Alert.alert('Opps', 'Details are valid!');
  //   }
  // }

  render() {
    return (
      <View>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
          }}
          validationSchema={reviewSchema}>
          <View>
            <Text style={styles.text}>FIRST NAME :</Text>
            <TextInput
              placeholder="Enter First Name"
              style={[styles.container]}
              onChangeText={value => this.setState({firstName: value.trim()})}
              // onBlur={() => {
              //   this.setState({
              //     firstNameError: validate('firstName', this.state.firstName),
              //   });
              // }}
              // error={this.state.firstNameError}
            />

            <Text style={styles.text}>LAST NAME :</Text>
            <TextInput
              placeholder="Enter Last Name"
              style={[styles.container]}
              onChangeText={value => this.setState({lastName: value.trim()})}
              // onBlur={() => {
              //   this.setState({
              //     lastNameError: validate('lastName', this.state.lastName),
              //   });
              // }}
              // error={this.state.lastNameError}
            />

            <Text style={styles.text}>ADDRESS :</Text>
            <TextInput
              placeholder="Enter Address"
              style={[styles.container]}
              onChangeText={value => this.setState({address: value.trim()})}
              // onBlur={() => {
              //   this.setState({
              //     addressError: validate('address', this.state.address),
              //   });
              // }}
              // error={this.state.addressError}
            />

            <Text style={styles.text}>CITY :</Text>
            <TextInput
              placeholder="City"
              style={styles.container}
              onChangeText={value => this.setState({city: value.trim()})}
              // onBlur={() => {
              //   this.setState({
              //     cityError: validate('city', this.state.city),
              //   });
              // }}
              // error={this.state.cityError}
            />

            <Text style={styles.text}>STATE :</Text>
            <TextInput
              placeholder="State"
              style={styles.container}
              onChangeText={value => this.setState({state: value.trim()})}
              // onBlur={() => {
              //   this.setState({
              //     stateError: validate('state', this.state.state),
              //   });
              // }}
              // error={this.state.stateError}
            />

            <Button title="Update" />
            {/* <Text>{this.state()}</Text> */}
          </View>{' '}
        </Formik>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 8,
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  text: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 25,
  },
});
export default Login;
