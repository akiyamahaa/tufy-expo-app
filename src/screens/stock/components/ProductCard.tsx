import { Box, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import moment from 'moment';
import { convertCurrencyVN } from 'utils/utils';

interface Props {
  data: any;
  active: boolean;
}

const ProductCard = (props: Props) => {
  const { data, active } = props;

  const totalPrice = active
    ? data.productStockIn.reduce(
        (total: any, item: any) =>
          total + item.quantity * item.product.purchasePrice,
        0
      )
    : data.productStockOut.reduce(
        (total: any, item: any) => total + item.quantity * item.product.price,
        0
      );

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
            {moment(data.createdAt).format('DD/MM/YYYY')}
          </Text>
        </Text>
        <Text>
          {active ? 'Phân phối: ' : 'Khách hàng: '}
          <Text fontSize={18} bold color="#240046">
            {active ? data.distributor.name : data.customer.name}
          </Text>
        </Text>
      </Box>
      <Box>
        <Text bold italic fontSize={18} color="#008B2F">
          {convertCurrencyVN(totalPrice, ' VND')}
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
