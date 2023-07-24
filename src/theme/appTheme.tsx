import {StyleSheet} from 'react-native';

export const colores = {
  tabPrimary: '#5856D6',
  menuTexto: 'black',
  textoGeneral: 'black',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: colores.textoGeneral,
  },
  botonGrande: {
    width: 100,
    height: 70,
    backgroundColor: 'grey',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
    // alignItems: 'center',
  },
  menuTexto: {
    fontSize: 20,
    color: colores.menuTexto,
  },
  menuBoton: {
    marginVertical: 10,
    flexDirection: 'row',
  },
});
