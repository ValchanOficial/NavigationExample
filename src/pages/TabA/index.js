import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TabA = () => {
  return (<><Text style={styles.container}>TabA </Text></>)
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems:"center",
   justifyContent:"center"
  },
});

export default TabA