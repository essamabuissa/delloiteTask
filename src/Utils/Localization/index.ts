// ES6 module syntax
import LocalizedStrings from 'react-native-localization';
import en from './en.json';
import ar from './ar.json';

export const strings = new LocalizedStrings({
  en,
  ar,
});
