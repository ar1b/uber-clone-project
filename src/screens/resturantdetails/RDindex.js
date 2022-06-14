import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/dishitem/dishindex';
import ResturantHeader from './RDheader';
import styles from './styles';

const restaurant = restaurants[0];

const ResturantDetails = () =>  {
    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={ () => <ResturantHeader restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({item}) => <DishListItem dish={item}/>}
            />
            <Ionicons
                name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconcontainer}
            />
        </View>
    );
};

export default ResturantDetails