import React from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../redux/counterSlice';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
      <Button title="Increment value" onPress={() => dispatch(increment())} />

      <Text style={{color:'blue',left:'50%'}}>{count}</Text>
      <Button title="decrement value" onPress={() => dispatch(decrement())} />
    </View>
  );
}
