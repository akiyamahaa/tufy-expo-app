import { Text, Box, Image } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CardHome from './components/CardHome';

interface Props {}

const infoMockup: any = {
  Today: {
    name: 'Hôm nay',
    info: {
      total_in: {
        id: 1,
        name: 'Tổng đơn nhập',
        value: 20,
      },
      total_out: {
        id: 2,
        name: 'Tổng đơn bán',
        value: 20,
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

const HomeScreen = (props: Props) => {
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
          <TouchableOpacity>
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
