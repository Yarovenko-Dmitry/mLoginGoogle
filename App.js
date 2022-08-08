import React, {useEffect, useState} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  REACT_APP_ANDROID_CLIENT_ID,
  REACT_APP_IOS_CLIENT_ID,
} from './envConfig';
import {MainScreen} from './src/csreens/MainScreen';
import {AuthScreen} from './src/csreens/AuthScreen';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleUserAuthorization = (isAuthValue, user) => {
    console.log(' handleUserAuthorization :');
    console.log(' user :', user);
    console.log(' isAuthValue :', isAuthValue);
    console.log(' *********** :');

    setIsLogged(isAuthValue);
  };

  const onSignInPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();

      handleUserAuthorization(true, user);
    } catch (error) {
      console.log(error);
    }
  };

  const onSignOutPress = async () => {
    try {
      await GoogleSignin.signOut();

      handleUserAuthorization(false, null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      iosClientId: REACT_APP_IOS_CLIENT_ID,
      webClientId: REACT_APP_ANDROID_CLIENT_ID,
    });
  }, []);

  if (isLogged) {
    return <MainScreen onSignOutPress={onSignOutPress} />;
  } else {
    return <AuthScreen onSignInPress={onSignInPress} />;
  }
};

export default App;
