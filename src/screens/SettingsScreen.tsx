import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top,
      }}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  );
}
