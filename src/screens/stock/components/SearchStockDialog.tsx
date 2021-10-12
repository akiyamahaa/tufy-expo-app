import React, { useState } from 'react';
import {
  Box,
  CheckIcon,
  FormControl,
  Input,
  Modal,
  Select,
  Text,
} from 'native-base';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchStockDialog = (props: Props) => {
  const { showModal, setShowModal } = props;
  const [service, setService] = useState('');
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDate, setShowFromDate] = useState(false);
  const [showToDate, setShowToDate] = useState(false);

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
        <Modal.Content maxWidth="400px">
          <Modal.Body mt="5">
            <FormControl style={styles.formContainer}>
              <FormControl.Label style={styles.labelStyle}>
                Phân phối
              </FormControl.Label>
              <Select
                selectedValue={service}
                style={styles.inputStyle}
                minWidth="200"
                placeholder="Choose Service"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
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
              <TouchableOpacity>
                <Box
                  style={[styles.btnSearch, { backgroundColor: '#F7EFFF' }]}
                  borderRadius={8}
                >
                  <Text>Tìm kiếm</Text>
                </Box>
              </TouchableOpacity>
              <TouchableOpacity>
                <Box
                  style={[styles.btnSearch, { backgroundColor: '#FFF' }]}
                  borderRadius={8}
                >
                  <Icon as={AntDesign} name="reload1" size={5} />
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
    width: 130,
    height: 30,
  },
});

export default SearchStockDialog;
