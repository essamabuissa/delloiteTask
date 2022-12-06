import {View, Text, TouchableOpacity, I18nManager} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {strings} from '../../Utils/Localization';
import {useDispatch, useSelector} from 'react-redux';
import RNRestart from 'react-native-restart';
import {SetLanguageAction} from '../../Store/Actions/ConfigsActions';
import SplashScreen from 'react-native-bootsplash';
import {LanguageEnum} from '../../Types';
import {styles} from './styles';

const Splash = ({navigation}) => {
  const {replace} = navigation;
  const dispatch = useDispatch();
  const {language} = useSelector(state => state.ConfigsReducer);

  useEffect(() => {
    let timeout;
    let isRtl = I18nManager.isRTL;
    if (language === LanguageEnum.ar) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      strings.setLanguage(LanguageEnum.ar);
      if (!isRtl) {
        setTimeout(() => {
          RNRestart.Restart();
          SplashScreen.show();
        }, 500);
      }
    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
      strings.setLanguage(LanguageEnum.en);
    }
    if (language) {
      timeout = setTimeout(() => {
        replace('AppStack');
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [language]);

  const handleChangeLanguage = useCallback(
    lang => {
      strings.setLanguage(lang);
      dispatch(SetLanguageAction(lang));
      if (language === LanguageEnum.ar) {
        I18nManager.forceRTL(true);
        setTimeout(() => {
          RNRestart.Restart();
        }, 500);
      } else {
        I18nManager.forceRTL(false);
        setTimeout(() => {
          RNRestart.Restart();
        }, 500);
      }
    },
    [dispatch, language],
  );

  return (
    <View style={styles.container}>
      {language ? (
        <Text>{strings.splash}</Text>
      ) : (
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleChangeLanguage(LanguageEnum.en)}>
            <Text style={{color: 'white'}}>{strings.english}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleChangeLanguage(LanguageEnum.ar)}>
            <Text style={{color: 'white'}}>{strings.arabic}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Splash;
