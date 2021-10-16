import React, { useState, useEffect } from 'react';
import { Box, FormControl, Input, Modal, Text } from 'native-base';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getStockOutFilter } from 'redux/action/stock.actions';
import { getAllCustomers } from 'redux/action/customers.action';
import { Picker } from '@react-native-picker/picker';

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setStockList: React.Dispatch<any>;
}

const SearchStockOutDialog = (props: Props) => {
  //PROPS
  const { showModal, setShowModal, setStockList } = props;
  //Dispatch
  const dispatch = useDispatch();
  //STATE
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDate, setShowFromDate] = useState(false);
  const [showToDate, setShowToDate] = useState(false);

  const [customerPhone, setCustomerPhone] = useState<any>('');

  const [customerList, setCustomerList] = useState<any>([]);

  const onChangeFromDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDate(Platform.OS === 'ios');
    setFromDate(currentDate);
  };

  const onChangeToDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || toDate;
    setShowToDate(Platform.OS === 'ios');
    setToDate(currentDate);
  };

  const searchByStockOut = async () => {
    const resultFilter = await getStockOutFilter(
      dispatch,
      moment(fromDate).startOf('day').toDate(),
      moment(toDate).endOf('day').toDate(),
      customerPhone
    );
    setStockList(resultFilter);
    setShowModal(false);
  };

  const cancelModel = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const loadList = async () => {
      const listCustomer = await getAllCustomers(dispatch);
      // convert Array to Dictionary
      setCustomerList(listCustomer.customers);
      setCustomerPhone(listCustomer.customers[0].phone);
    };
    loadList();
  }, []);

  return (
    <Box>
      {showFromDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={fromDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeFromDate}
        />
      )}
      {showToDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={toDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeToDate}
        />
      )}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="450px">
          <Modal.Body mt="5">
            <FormControl style={styles.formContainer}>
              <FormControl.Label style={styles.labelStyle}>
                Khách hàng
              </FormControl.Label>
              <Box
                style={{
                  width: '70%',
                  borderWidth: 0.2,
                  borderColor: '#000',
                  borderRadius: 4,
                  backgroundColor: '#fff',
                  height: 50,
                  justifyContent: 'center',
                }}
              >
                <Picker
                  selectedValue={customerPhone}
                  onValueChange={(itemValue, itemIndex) => {
                    setCustomerPhone(itemValue);
                  }}
                >
                  {Boolean(customerList.length) &&
                    customerList.map((each: any, index: number) => {
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
            <FormControl style={styles.formContainer} mt="3">
              <FormControl.Label style={styles.labelStyle}>
                Từ ngày
              </FormControl.Label>
              <Input
                style={styles.inputStyle}
                InputRightElement={
                  <Icon
                    onPress={() => setShowFromDate(true)}
                    as={<MaterialIcons name="date-range" />}
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                }
                value={moment(fromDate).format('DD/MM/YYYY')}
              />
            </FormControl>
            <FormControl style={styles.formContainer} mt="3">
              <FormControl.Label style={styles.labelStyle}>
                Đến ngày
              </FormControl.Label>
              <Input
                style={styles.inputStyle}
                InputRightElement={
                  <Icon
                    onPress={() => setShowToDate(true)}
                    as={<MaterialIcons name="date-range" />}
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                }
                value={moment(toDate).format('DD/MM/YYYY')}
              />
            </FormControl>
            <Box style={styles.btnContainer}>
              <TouchableOpacity onPress={searchByStockOut}>
                <Box
                  style={[styles.btnSearch, { backgroundColor: '#F7EFFF' }]}
                  borderRadius={8}
                >
                  <Text>Tìm kiếm</Text>
                </Box>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelModel}>
                <Box
                  style={[styles.btnSearch, { backgroundColor: '#FFF' }]}
                  borderRadius={8}
                >
                  <Icon as={MaterialIcons} name="clear" size={5} />
                </Box>
              </TouchableOpacity>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelStyle: {
    width: '25%',
  },
  inputStyle: {
    maxWidth: '60%',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  btnSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    width:120,
    height: 30,
  },
});

export default SearchStockOutDialog;
