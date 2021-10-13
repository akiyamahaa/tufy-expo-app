import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Layout from 'components/Layout';
import moment from 'moment';
import { Box, FormControl, Icon, Input, Modal, Text } from 'native-base';
import React, { useState } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

interface Props {}

interface IProduct {
  name: string;
  quantity: number;
}

const CreateStockScreen = (props: Props) => {
  const { width } = Dimensions.get('window');
  //STATE
  const [distributor, setDistributor] = useState('');
  const [product, setProduct] = useState('banhgau');
  const [productQuantity, setProductQuantity] = useState(1);
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [listProduct, setListProduct] = useState<IProduct[]>([]);

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onAddProduct = () => {
    const newProduct: IProduct = {
      name: product,
      quantity: productQuantity,
    };
    setListProduct([...listProduct, newProduct]);
  };

  return (
    <Layout>
      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
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
                  selectedValue={distributor}
                  style={styles.pickerStyle}
                  onValueChange={(itemValue, itemIndex) =>
                    setDistributor(itemValue)
                  }
                >
                  <Picker.Item label="Orion" value="orion" />
                  <Picker.Item label="Sun House" value="sunhouse" />
                </Picker>
              </Box>
            </FormControl>
            <FormControl style={styles.formContainer} mt="3">
              <FormControl.Label style={styles.labelStyle}>
                <Text bold fontSize={18}>
                  Ngày
                </Text>
              </FormControl.Label>
              <Box style={styles.inputStyle}>
                <Input
                  InputRightElement={
                    <Icon
                      onPress={() => setShowDate(true)}
                      as={<MaterialIcons name="date-range" />}
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  }
                  borderWidth={0}
                  value={moment(date).format('DD/MM/YYYY')}
                />
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
                      selectedValue={product}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        setProduct(itemValue)
                      }
                    >
                      <Picker.Item label="Bánh Gấu" value="banhgau" />
                      <Picker.Item label="Bánh Gạo" value="banhgao" />
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
            {listProduct.length > 0 && (
              <>
                <Text bold fontSize={18} mb="3">
                  Danh sách sản phẩm
                </Text>
                <Box style={styles.productListContainer}>
                  {listProduct.map((eachProduct, index) => (
                    <Box
                      style={styles.product}
                      mb="4"
                      key={`${eachProduct}-${index}`}
                    >
                      <Box>
                        <Text bold fontSize={18} m="1">
                          {eachProduct.name}
                        </Text>
                        <Text fontSize={18} m="1">
                          Số lượng: <Text>{eachProduct.quantity}</Text>
                        </Text>
                        <Text fontSize={18} m="1">
                          Đơn giá: <Text>{eachProduct.quantity}</Text>
                        </Text>
                      </Box>
                    </Box>
                  ))}
                  <Text textAlign="right" bold fontSize={20}>
                    Tổng tiền:{' '}
                    <Text bold color="#008B2F" fontSize={20}>
                      100000
                    </Text>
                  </Text>
                  <Box
                    style={[
                      styles.formContainer,
                      { paddingHorizontal: 10, paddingVertical: 20 },
                    ]}
                  >
                    <TouchableOpacity>
                      <Box style={styles.btnStyle}>
                        <Text>Hủy</Text>
                      </Box>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Box
                        style={styles.btnStyle}
                        borderRadius={10}
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
    width: 140,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default CreateStockScreen;
