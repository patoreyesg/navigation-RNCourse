import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
          color: 'black',
        }}>
        Navegar con Argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Patricio Reyes',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Patricio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Karen Berna',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Karen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
