import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

const arrayNames = ["Ana Maria", "Ana Maria", "Ana Maria", "Ana Maria", "Ana Maria", "Ana Maria"]

const [ names, setNames ] = useState([])

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          Mostrar Nomes
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: 'red',
    fontSize: 14,
    width: '60%',
    borderRadius: 6,
    margin: 10,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Arial',
    fontWeight: '600'
  }
});
