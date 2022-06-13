import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/dishitem/dishindex';

const restaurant = restaurants[0];

const ResturantDetails = () =>  {
    return (
        <View style={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image} />

            <Ionicons
                name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconcontainer}
            />

            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    $ {restaurant.deliveryFee} &#8226;  
                    {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
                </Text>
            </View>
            <DishListItem dish={restaurant.dishes[0]}/>
            <DishListItem dish={restaurant.dishes[2]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    iconcontainer: {
        position: 'absolute',
        top: 40,
        left: 10,
    },

    image: {
        width: "100%",
        aspectRatio: 4/3
    },

    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10,
        margin: 10, 
    },

    subtitle: {
        color: 'gray',
        fontSize: 15
    },

    container: {
        margin: 10,
    }
});

export default ResturantDetails