import { useNavigation } from '@react-navigation/core';
import { Text, Box, Image } from 'native-base';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  getStockInFilter,
  getStockOutFilter,
} from 'redux/action/stock.actions';
import CardHome from './components/CardHome';
import moment from 'moment';
import { getStats } from 'redux/action/stats.actions';

interface Props {}

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const START_DAY = moment(new Date()).startOf('day').toDate();
  const END_DAY = moment(new Date()).endOf('day').toDate();
  const MONTH = moment(new Date()).format('M');
  const YEAR = moment(new Date()).format('Y');

  const [stockInQuantity, setStockInQuantity] = useState(0);
  const [stockOutQuantity, setStockOutQuantity] = useState(0);

  const [stats, setStats] = useState<any>({
    cost: 0,
    profit: 0,
    revenue: 0,
  });

  useEffect(() => {
    const loadStock = async () => {
      const resultStockIn = await getStockInFilter(
        dispatch,
        START_DAY,
        END_DAY
      );
      const resultStockOut = await getStockOutFilter(
        dispatch,
        START_DAY,
        END_DAY
      );

      const statsResult = await getStats(
        dispatch,
        parseInt(MONTH),
        parseInt(YEAR)
      );

      if (statsResult) {
        setStats({
          cost: statsResult.cost,
          profit: statsResult.profit,
          revenue: statsResult.revenue,
        });
      }

      if (resultStockIn && resultStockOut) {
        setStockInQuantity(resultStockIn.length);
        setStockOutQuantity(resultStockOut.length);
      }
    };

    loadStock();
  }, []);

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
      name: `Doanh thu tháng ${MONTH}`,
      info: {
        revenue: {
          name: 'Doanh thu',
          value: stats.revenue,
        },
        profit: {
          name: 'Lợi nhuận',
          value: stats.profit,
        },
      },
    },
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
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
          <Box>
            {Object.keys(infoMockup).map((option) => (
              <Box key={option}>
                <CardHome data={infoMockup[option]} />
              </Box>
            ))}
          </Box>
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
    minHeight: Dimensions.get('screen').height,
    width: '100%',
  },
  titleContainer: {
    marginLeft: 20,
    marginTop: 2,
  },
  contentContainer: {
    marginTop: 70,
    paddingHorizontal: 8,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
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
