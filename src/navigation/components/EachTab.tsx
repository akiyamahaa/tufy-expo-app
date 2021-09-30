import { Text, Box } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
interface Props {
  title: string;
  focused: boolean;
}

const EachTab = (props: Props) => {
  const { title, focused } = props;
  return (
    <Box style={styles.root}>
      {/* TODO: ICON here */}
      <Text style={{ color: focused ? '#FF416C' : '#d7d2cc' }}>{title}</Text>
    </Box>
  );
};
Text;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EachTab;
