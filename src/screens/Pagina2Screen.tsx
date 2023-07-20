import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
// import {useNavigation} from '@react-navigation/native';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pagina3', {screen: 'Pagina3'})}
      />
    </View>
  );
};
