import { AntDesign } from '@expo/vector-icons';
import Layout from 'components/Layout';
import { Box, FormControl, Icon, Input, Text } from 'native-base';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { getAllDistributors } from 'redux/action/distributors.actions';
import { getListProduct } from 'redux/action/products.actions';
import { createStockIn } from 'redux/action/stock.actions';
import { convertCurrencyVN } from 'utils/utils';

interface Props {}

const CreateStockInScreen = (props: Props) => {
  // Dispatch
  const dispatch = useDispatch();
  const navigation = useNavigation();
  //STATE
  const [distributorPhone, setDistributorPhone] = useState<any>('');
  const [distributorList, setDistributorList] = useState<any>([]);

  const [productId, setProductId] = useState('');
  const [listProduct, setListProduct] = useState<any[]>([]);

  const [objectListProduct, setObjectListProduct] = useState<any>({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [listProductCart, setListProductCart] = useState<any[]>([]);

  useEffect(() => {
    const loadList = async () => {
      const listDistributor = await getAllDistributors(dispatch);

      const listProducts: { count: number; products: any[] } =
        await getListProduct(dispatch);
      // convert Array to Dictionary
      const obj = listProducts.products.reduce(
        (obj, item) => ({
          ...obj,
          [item.id]: item,
        }),
        {}
      );
      setObjectListProduct(obj);
      setDistributorList(listDistributor.distributors);
      setListProduct(listProducts.products);
    };
    loadList();
  }, []);

  const onAddProduct = () => {
    const newProduct: any = {
      product: {
        id: productId,
      },
      quantity: productQuantity,
    };
    setListProductCart([...listProductCart, newProduct]);
  };

  const onCreateStockIn = async () => {
    const data = {
      distributor: {
        phone: distributorPhone,
      },
      products: listProductCart,
      discount: 0,
    };
    await createStockIn(dispatch, data);
    navigation.goBack();
  };
  const totalStockPrice = listProductCart.reduce(
    (total, item) =>
      total + item.quantity * objectListProduct[item.product.id].purchasePrice,
    0
  );

  return (
    <Layout>
      <Box style={styles.children}>
        <Box style={styles.childrenContainer}>
          <Box>
            <FormControl style={styles.formContainer}>
              <FormControl.Label style={styles.labelStyle}>
                <Text bold fontSize={18}>
                  Phân phối
                </Text>
              </FormControl.Label>
              <Box style={styles.inputStyle}>
                <Picker
                  selectedValue={distributorPhone}
                  style={styles.pickerStyle}
                  onValueChange={(itemValue, itemIndex) => {
                    setDistributorPhone(itemValue);
                  }}
                >
                  {Boolean(distributorList.length) &&
                    distributorList.map((each: any, index: number) => {
                      return (
                        <Picker.Item
                          label={each.name}
                          value={each.phone}
                          key={`${each.phone}-${index}`}
                        />
                      );
                    })}
                </Picker>
              </Box>
            </FormControl>
          </Box>
          <Box mt="3">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
            >
              <Text bold fontSize={18}>
                Nhập sản phẩm
              </Text>
              <TouchableOpacity onPress={onAddProduct}>
                <Box>
                  <Icon
                    as={<AntDesign name="plussquareo" />}
                    size={8}
                    color="#FA8072"
                  />
                </Box>
              </TouchableOpacity>
            </Box>
            <Box style={styles.productListContainer}>
              <Box style={styles.product}>
                <FormControl style={styles.formContainer}>
                  <FormControl.Label style={styles.labelStyle} pl="3">
                    <Text bold fontSize={18}>
                      Tên hàng
                    </Text>
                  </FormControl.Label>
                  <Box style={styles.inputStyle}>
                    <Picker
                      selectedValue={productId}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        setProductId(itemValue)
                      }
                    >
                      {Boolean(listProduct.length) &&
                        listProduct.map((item: any, index: any) => (
                          <Picker.Item
                            label={item.name}
                            value={item.id}
                            key={`${item.name}-${index}`}
                          />
                        ))}
                    </Picker>
                  </Box>
                </FormControl>
                <FormControl style={styles.formContainer} mt="3">
                  <FormControl.Label style={styles.labelStyle} pl="3">
                    <Text bold fontSize={18}>
                      Số lượng
                    </Text>
                  </FormControl.Label>
                  <Input
                    style={styles.inputStyle}
                    value={productQuantity.toString()}
                    onChangeText={(text) => setProductQuantity(Number(text))}
                  />
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box mt="3">
            {listProductCart.length > 0 && (
              <>
                <Text bold fontSize={18} mb="3">
                  Danh sách sản phẩm
                </Text>
                <Box style={styles.productListContainer}>
                  {listProductCart.map((eachProduct: any, index) => (
                    <Box
                      style={styles.product}
                      mb="4"
                      key={`${eachProduct.product.id}-${index}`}
                    >
                      <Box>
                        <Text bold fontSize={18} m="1">
                          {objectListProduct[eachProduct.product.id].name}
                        </Text>
                        <Text fontSize={18} m="1">
                          Số lượng: <Text>{eachProduct.quantity}</Text>
                        </Text>
                        <Text fontSize={18} m="1">
                          Đơn giá:{' '}
                          <Text bold>
                            {
                              convertCurrencyVN(parseInt(objectListProduct[eachProduct.product.id].purchasePrice),' VND')
                            }
                          </Text>
                        </Text>
                      </Box>
                    </Box>
                  ))}
                  <Text textAlign="right" bold fontSize={20}>
                    Tổng tiền:{' '}
                    <Text bold color="#008B2F" fontSize={20}>
                      {convertCurrencyVN(totalStockPrice, ' VND')}
                    </Text>
                  </Text>
                  <Box
                    style={[
                      styles.formContainer,
                      { paddingHorizontal: 10, paddingVertical: 20 },
                    ]}
                  >
                    <TouchableOpacity onPress={() => setListProductCart([])}>
                      <Box style={[styles.btnStyle, { marginRight: 2 }]}>
                        <Text>Hủy</Text>
                      </Box>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onCreateStockIn}>
                      <Box
                        style={[styles.btnStyle, { marginLeft: 2 }]}
                        backgroundColor="#F7EFFF"
                      >
                        <Text>Lưu</Text>
                      </Box>
                    </TouchableOpacity>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
const styles = StyleSheet.create({
  children: {
    marginTop: 22,
    flex: 1,
    backgroundColor: '#F7EFFF',
    borderRadius: 50,
  },
  childrenContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  pickerStyle: {
    height: 50,
    width: '100%',
  },
  labelStyle: {
    width: '40%',
  },
  inputStyle: {
    width: '55%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 50,
  },
  productListContainer: {
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  product: {
    borderRadius: 10,
    padding: 20,
    borderWidth: 0.5,
  },
  btnStyle: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default CreateStockInScreen;
