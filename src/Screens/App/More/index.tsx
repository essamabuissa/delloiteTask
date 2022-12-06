import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {strings} from '../../../Utils/Localization';
import {LogoutAction} from '../../../Store/Actions/AuthActions';
import {styles} from './styles';

const More = () => {
  const {user, isLoggedIn} = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(LogoutAction());
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      {isLoggedIn ? (
        <View style={styles.body}>
          <Text style={styles.text}>{`${strings.name}: ${user?.name}`}</Text>
          <Text style={styles.text}>{`${strings.dob}: ${moment(
            user?.dob,
          ).format('DD/MM/YYYY')}`}</Text>
          <Text
            style={
              styles.text
            }>{`${strings.phoneNumber}: ${user?.phoneNumber}`}</Text>

          <Button onPress={handleLogout} title={strings.logout} />
        </View>
      ) : (
        <Text>{strings.pleaseRegister}</Text>
      )}
    </View>
  );
};

export default More;
