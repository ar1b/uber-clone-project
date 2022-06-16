import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/homescreen';
import ResturantDetails from './src/screens/resturantdetails/RDindex';
import DishDetails from './src/screens/dishdetails/dishdetails';
import Basket from './src/screens/basket/basketdeets';
import OrderScreen from './src/screens/orderscreen/orders';
import OrderDetails from './src/screens/orderDetails/orderdetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/*<HomeScreen /> */}
      {/*<ResturantDetails /> */}
      {/* <DishDetails /> */ }
      {/* <Basket /> */ }
      {/* <OrderScreen /> */ }

      <OrderDetails />
      <StatusBar style='auto'/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
