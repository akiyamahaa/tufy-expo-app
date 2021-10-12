import { Box, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

interface Props {
  data: any;
}

const ProductCard = (props: Props) => {
  const { data } = props;
  return (
    <Box
      style={styles.root}
      borderRadius={10}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text>
          Ngày:{' '}
          <Text fontSize={18} bold color="#240046">
            {data.date}
          </Text>
        </Text>
        <Text>
          Phân phối:{' '}
          <Text fontSize={18} bold color="#240046">
            {data.distributor}
          </Text>
        </Text>
      </Box>
      <Box>
        <Text bold italic fontSize={18} color="#008B2F">
          {data.price}
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 16,
    marginTop: 12,
    elevation: 5,
  },
});

export default ProductCard;
