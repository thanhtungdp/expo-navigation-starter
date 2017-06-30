import {Platform} from 'react-native';

export function valueForIos(value, defaultValue){
  if(Platform.OS === 'ios') return value;
  else return defaultValue;
}
