import { Box, Image, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { convertCurrencyVN } from 'utils/utils';

interface Props {
  data: any;
}

const CardHome = (props: Props) => {
  const { data } = props;

  return (
    <Box style={styles.boxContainer}>
      <Box style={{ marginBottom: 16 }}>
        <Text fontSize={20} bold textTransform="uppercase" color="#BE3838">
          {data.name}
        </Text>
      </Box>
      <Box style={styles.infoBGContainer}>
        <Image
          style={styles.bgContainer}
          source={require('assets/images/card-bg-1-red.png')}
          alt="background"
        />
        <Box style={styles.infoContainer}>
          {Object.keys(data.info).map((item: any) => (
            <Box flexDirection="row" justifyContent="space-between" key={item}>
              <Text fontSize={18} fontWeight="bold" color="#240046">
                {data.info[item].name}
              </Text>
              <Text
                fontSize={data.info[item].size}
                bold
                color={data.info[item].color}
                italic
              >
                {item === 'revenue' || item === 'profit'
                  ? convertCurrencyVN(data.info[item].value, ' VND')
                  : data.info[item].value}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F7EFFF',
    padding: 20,
    height: 200,
    marginBottom: 18,
  },
  infoBGContainer: {
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  infoContainer: {
    paddingVertical: 16,
    paddingLeft: 8,
    paddingRight: 16,
    height: '100%',
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

export default CardHome;
