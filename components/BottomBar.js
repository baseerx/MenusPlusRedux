import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BottomBar = () => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={() => console.warn('hello')}>
        <Text>BottomBar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  btnContainer: {
    height: '7%',
    backgroundColor: 'blue',
    paddingTop: 10,
    paddingLeft: 15,
  },
});
