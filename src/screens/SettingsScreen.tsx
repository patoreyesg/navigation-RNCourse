import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const {authState} = useContext(AuthContext);
  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top,
      }}>
      <Text style={styles.title}>SettingsScreen</Text>

      <Text style={styles.title}>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
}
