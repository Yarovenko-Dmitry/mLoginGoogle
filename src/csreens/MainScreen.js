import React from 'react';
import {View, Text, Button} from 'react-native';

export const MainScreen = ({onSignOutPress}) => {
  return (
    <View>
      <Text>MainScreen</Text>
      <Text>MainScreen</Text>
      <Text>MainScreen</Text>
      <Button title="SignOut" onPress={onSignOutPress} />
    </View>
  );
};
