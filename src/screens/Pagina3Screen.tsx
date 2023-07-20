import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Pagina 3</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a Página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
