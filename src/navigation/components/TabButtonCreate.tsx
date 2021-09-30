import { Box } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const TabButtonCreate = (props: any) => {
  const { children } = props;
  return (
    <TouchableOpacity style={styles.root}>
      <Box style={styles.childStyle}>{children}</Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  childStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF416C',
  },
});

export default TabButtonCreate;
