import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
// import {useNavigation} from '@react-navigation/native';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Opción 2',
      headerBackTitle: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pagina3', {screen: 'Pagina3'})}
      />
    </View>
  );
};
