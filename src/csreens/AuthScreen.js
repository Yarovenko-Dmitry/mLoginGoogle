import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';

export const AuthScreen = ({onSignInPress}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <GoogleSigninButton
        style={styles.googleSigninButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={onSignInPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleSigninButton: {
    width: 192,
    height: 48,
  },
});
