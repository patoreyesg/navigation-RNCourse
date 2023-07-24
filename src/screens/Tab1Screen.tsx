import React from 'react';
import {View, Text} from 'react-native';
import {colores, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Tab1Screen() {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={{color: colores.textoGeneral}}>Iconos</Text>

      <Icon name="airplane-outline" size={30} color={colores.tabPrimary} />
      <Icon name="alert-circle-outline" size={30} color={colores.tabPrimary} />
      <Icon name="book-outline" size={30} color={colores.tabPrimary} />
      <Icon name="build-outline" size={30} color={colores.tabPrimary} />
      <Icon
        name="chatbubble-ellipses-outline"
        size={30}
        color={colores.tabPrimary}
      />
      <Icon name="cloud-offline-outline" size={30} color={colores.tabPrimary} />
    </View>
  );
}
