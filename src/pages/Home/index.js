import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Home </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text>Tabs</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
});

export default Home