import { useNavigation } from '@react-navigation/core';
import { Text, Box, Image } from 'native-base';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { getAllStockIn, getAllStockOut } from 'redux/action/stock.actions';
import CardHome from './components/CardHome';

interface Props {}

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const [stockInQuantity, setStockInQuantity] = useState(0);
  const [stockOutQuantity, setStockOutQuantity] = useState(0);

  useEffect(() => {
    const loadStock = async () => {
      const resultStockIn = await getAllStockIn(dispatch, { queryToday: true });
      const resultStockOut = await getAllStockOut(dispatch, {
        queryToday: true,
      });

      setStockInQuantity(resultStockIn.count);
      setStockOutQuantity(resultStockOut.count);
    };

    loadStock();
  }, []);

  // TODO: Compute for Outcome

  const infoMockup: any = {
    Today: {
      name: 'Hôm nay',
      info: {
        total_in: {
          id: 1,
          name: 'Tổng đơn nhập',
          value: stockInQuantity,
        },
        total_out: {
          id: 2,
          name: 'Tổng đơn bán',
          value: stockOutQuantity,
        },
      },
    },
    OutCome: {
      name: 'Doanh thu tháng 10',
      info: {
        revenue: {
          name: 'Doanh thu',
          value: 10000000,
        },
        profit: {
          name: 'Lợi nhuận',
          value: 1000000,
        },
      },
    },
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.bgContainer}
          source={require('assets/images/background-2.png')}
          alt="background"
        />
        <Box style={styles.titleContainer}>
          <Text fontSize={30} bold color="#ED0000">
            TUFY
          </Text>
          <Text fontSize={16} bold italic color="#9D9D9D">
            Inventory Management
          </Text>
        </Box>
        <Box style={styles.contentContainer}>
          {Object.keys(infoMockup).map((option) => (
            <Box key={option}>
              <CardHome data={infoMockup[option]} />
            </Box>
          ))}
          <TouchableOpacity onPress={() => navigation.navigate('Inventory')}>
            <Box style={styles.btnStyle}>
              <Text color="#5200FF" bold fontSize={24}>
                Tồn kho
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    flex: 1,
    width: '100%',
  },
  titleContainer: {
    marginLeft: 20,
    marginTop: 2,
  },
  contentContainer: {
    marginTop: 50,
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  btnStyle: {
    backgroundColor: '#F2EFFF',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
