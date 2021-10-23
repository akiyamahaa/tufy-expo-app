import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { IProductWithQuantity } from 'utils/interfaces/products.interface';
import { convertCurrencyVN } from 'utils/utils';

interface Props {
  product: IProductWithQuantity;
}

const ProductCard = (props: Props) => {
  const { product } = props;
  const displayName = () => {
    if (product.name?.length > 24) {
      return product.name.substring(0, 24) + ' ...';
    }
    return product.name;
  };
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.productName}>{displayName()}</Text>
      </View>
      <View>
        <Text style={styles.price}>
          {'Giá nhập: ' + convertCurrencyVN(Number(product.price), ' VND')}
        </Text>
        <Text style={styles.purchasePrice}>
          {'Giá bán: ' +
            convertCurrencyVN(Number(product.purchasePrice), ' VND')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  productName: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: 14,
    color: '#240046',
  },
  productAddress: {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: 14,
    color: '#240046',
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: 14,
    color: '#fc3003',
  },
  purchasePrice: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: 14,
    color: '#03c6fc',
  },
});

export default ProductCard;
