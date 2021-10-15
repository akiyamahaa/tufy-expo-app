import SearchField from 'components/CreateSearchBar/SearchField';
import { Text, Box, Image, Button, Center } from 'native-base';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  getAllInventory,
  searchInventory,
} from 'redux/action/inventory.actions';
import CardInventory from './components/CardInventory';
interface Props {}

const InventoryScreen = (props: Props) => {
  const dispatch = useDispatch();

  const [inventoryList, setInventoryList] = useState<any>([]);

  useEffect(() => {
    const loadInventory = async () => {
      const { inventories } = await getAllInventory(dispatch);

      setInventoryList(
        inventories.map((inven: any) => ({
          name: inven.product.name,
          category: inven.product.category.name,
          quantity: inven.quantity,
        }))
      );
    };
    loadInventory();
  }, []);

  const searchInven = async (textSearch: string) => {
    const { inventories } = await searchInventory(dispatch, textSearch);
    setInventoryList(
      inventories.map((inven: any) => ({
        name: inven.product.name,
        category: inven.product.category.name,
        quantity: inven.quantity,
      }))
    );
  };

  // TODO: Search Action for Inventory

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
          <SearchField widthFull onPress={searchInven} />
          {inventoryList.map((item: any) => (
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
    backgroundColor: '#5200FF',
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
