import { View, Input, Icon } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  widthFull?: boolean;
  onPress: (text: string) => void;
}

const SearchField = (props: Props) => {
  const { onPress, widthFull } = props;
  const [text, setText] = useState('');
  return (
    <View style={[widthFull ? {} : styles.root]}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onPress(text)}>
          <Icon
            as={<Ionicons name="ios-search" size={24} color="black" />}
            size={5}
            ml="2"
            color="#000"
          />
        </TouchableOpacity>
        <Input
          variant="unstyled"
          style={styles.input}
          placeholder="Tìm kiếm"
          onChangeText={(textChange) => setText(textChange)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    height: 40,
    width: Dimensions.get('screen').width * 0.4,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: -2,
  },
  input: {
    height: 44,
    width: Dimensions.get('screen').width * 0.3,
  },
});

export default SearchField;
