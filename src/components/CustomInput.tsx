import { Box, Input } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {}

const CustomInput = () => {
  return (
    <Box style={styles.container}>
      <Input />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CustomInput;
