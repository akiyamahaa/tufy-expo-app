import { Box, Image, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  data: any;
}

const CardInventory = (props: Props) => {
  const { data } = props;
  return (
    <Box style={styles.boxContainer}>
      <Box style={styles.infoBGContainer}>
        <Image
          style={styles.bgContainer}
          source={require('assets/images/card-bg-1-red.png')}
          alt="background"
        />
        <Box style={styles.infoContainer}>
          <Box>
            <Text bold color="#240046" fontSize={18}>
              {data.name}
            </Text>
            <Text color="#240046" italic>
              {data.category}
            </Text>
          </Box>
          <Box>
            <Text bold italic fontSize={30} color="#fff">
              {data.quantity}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    marginVertical: 10,
  },
  infoBGContainer: {
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  infoContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bgContainer: {
    position: 'absolute',
    height: 100,
    width: '100%',
    borderRadius: 10,
    right: -5,
  },
});

export default CardInventory;
