import {
  ScrollView,
  Text,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
  I18nManager,
} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RegisterAction} from '../../../../Store/Actions/AuthActions';
import {strings} from '../../../../Utils/Localization';
import {AuthReducer} from '../../../../Store/Reducers/AuthReducer';

const Register = () => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const {isLoggedIn, user} = useSelector(
    state => state.AuthReducer as AuthReducer,
  );
  const dispatch = useDispatch();

  const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .email(strings.invalidEmail)
      .required(strings.emailRequired),
    name: Yup.string().required(strings.nameRequired),
    phoneNumber: Yup.string().required(strings.phoneNumberRequired),
    dob: Yup.string().required(strings.dobRequired),
  });

  const {values, handleChange, handleSubmit, errors, setFieldValue, resetForm} =
    useFormik({
      initialValues: {
        id: '',
        email: '',
        name: '',
        password: '',
        phoneNumber: '',
        dob: '',
      },
      onSubmit: () => {
        resetForm();
        dispatch(RegisterAction({...values, id: uuid.v4()}));
      },
      validationSchema: RegisterSchema,
    });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView />

      {isLoggedIn ? (
        <Text style={styles.welcomeText}>
          {strings.welcome} {user?.name}
        </Text>
      ) : (
        <View>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            value={values.email}
            style={{
              ...styles.textInput,
              borderColor: errors.email ? 'red' : 'blue',
              textAlign: I18nManager.isRTL ? 'right' : 'left',
            }}
            placeholder={strings.email}
          />
          {errors.email && (
            <Text
              style={{
                ...styles.errorText,
                alignSelf: 'flex-start',
              }}>
              {errors.email}
            </Text>
          )}
          <TextInput
            autoCapitalize="none"
            onChangeText={handleChange('name')}
            value={values.name}
            style={{
              ...styles.textInput,
              borderColor: errors.name ? 'red' : 'blue',
              textAlign: I18nManager.isRTL ? 'right' : 'left',
            }}
            placeholder={strings.name}
          />
          {errors.name && (
            <Text
              style={{
                ...styles.errorText,
                alignSelf: 'flex-start',
              }}>
              {errors.name}
            </Text>
          )}

          <TextInput
            keyboardType="phone-pad"
            onChangeText={handleChange('phoneNumber')}
            value={values.phoneNumber}
            style={{
              ...styles.textInput,
              borderColor: errors.phoneNumber ? 'red' : 'blue',
              textAlign: I18nManager.isRTL ? 'right' : 'left',
            }}
            placeholder={strings.phoneNumber}
          />
          {errors.phoneNumber && (
            <Text
              style={{
                ...styles.errorText,
                alignSelf: 'flex-start',
              }}>
              {errors.phoneNumber}
            </Text>
          )}

          <TouchableOpacity
            style={{
              ...styles.textInput,
              borderColor: errors.dob ? 'red' : 'blue',
              alignItems: 'flex-start',
            }}
            onPress={() => setOpen(true)}>
            <Text
              style={{
                color: 'gray',
              }}>
              {date ? moment(date).format('MM/DD/YYYY') : strings.dob}
            </Text>
          </TouchableOpacity>
          <DatePicker
            modal
            style={{borderWidth: 1, padding: 10, margin: 5}}
            open={open}
            date={date ? date : new Date()}
            maximumDate={new Date()}
            onConfirm={(date: Date) => {
              setFieldValue('dob', date);
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          {errors.dob && (
            <Text
              style={{
                ...styles.errorText,
                alignSelf: 'flex-start',
              }}>
              {errors.dob}
            </Text>
          )}

          <Button onPress={handleSubmit} title={strings.submit} />
        </View>
      )}
    </ScrollView>
  );
};

export default Register;
