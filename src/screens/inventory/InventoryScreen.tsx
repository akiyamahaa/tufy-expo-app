import SearchField from 'components/CreateSearchBar/SearchField';
import { Text, Box, Image, Button, Center } from 'native-base';
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CardInventory from './components/CardInventory';
interface Props {}

const infoMockup = [
  {
    name: 'Bánh gạo',
    category: 'Bánh kẹo',
    quantity: 100,
  },
  {
    name: 'Bánh chuối',
    category: 'Bánh kẹo',
    quantity: 100,
  },
  {
    name: 'Bánh tôm',
    category: 'Bánh kẹo',
    quantity: 100,
  },
  {
    name: 'Bánh khoai',
    category: 'Bánh kẹo',
    quantity: 100,
  },
  
];

const InventoryScreen = (props: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
          <SearchField widthFull onPress={() => {}} />
          {infoMockup.map((item) => (
            <Box key={item.name}>
              <CardInventory data={item} />
            </Box>
          ))}
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
    backgroundColor:'#5200FF'
  },
  btnStyle: {
    backgroundColor: '#F2EFFF',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InventoryScreen;
