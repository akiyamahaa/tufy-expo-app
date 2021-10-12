import { Text, Box, Image } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
interface Props {
  title: string;
  focused: boolean;
}

const EachTab = (props: Props) => {
  const { title, focused } = props;

  const renderIcon = (title: string) => {
    if (title === 'home') {
      return (
        <Image
          source={require('assets/icons/home-icon.png')}
          alt={title}
          style={focused ? styles.btnActive : styles.btnInActive}
        />
      );
    } else if (title === 'stock') {
      return (
        <Image
          source={require('assets/icons/stock-icon.png')}
          alt={title}
          style={focused ? styles.btnActive : styles.btnInActive}
        />
      );
    } else if (title === 'category') {
      return (
        <Image
          source={require('assets/icons/category-icon.png')}
          alt={title}
          style={focused ? styles.btnActive : styles.btnInActive}
        />
      );
    } else {
      return (
        <Image
          source={require('assets/icons/object-type-icon.png')}
          alt={title}
          style={focused ? styles.btnActive : styles.btnInActive}
        />
      );
    }
  };
  return (
    <Box
      style={[
        styles.root,
        title !== 'object' && {
          borderRightColor: '#3C096C',
          borderRightWidth: 1,
        },
      ]}
    >
      {renderIcon(title)}
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
  btnActive: {
    tintColor: '#4400D5',
  },
  btnInActive: {
    tintColor: '#000',
  },
});

export default EachTab;
