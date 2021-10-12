import { Box, Input } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  placeholder?: string;
}

const CustomInput = (props: Props) => {
  const { placeholder } = props;
  return (
    <Box style={styles.container}>
      <Input style={styles.inputStyle} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  inputStyle: {
    borderRadius: 10,
  },
});

export default CustomInput;
