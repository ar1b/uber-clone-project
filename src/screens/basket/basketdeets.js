import {useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import resturaunts from '../../../assets/data/restaurants.json'
import {AntDesign} from '@expo/vector-icons';

const restaurant = resturaunts[0];

const Basket = () => {
    const [quantity, setQuantity] = useState(1);

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity( quantity - 1)
        }
    }

    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    const getTotal = () => {
        return (dish.price * quantity).toFixed(2)
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text>Your Items</Text> 
            <View style={styles.separator}/>
            
            <View style={styles.quantityContainer}>
        
            </View>

            <View style={styles.button}>
                <Text style={styles.buttonText}>Create Order</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        width: "100%",
        paddingVertical: 40, //Temp
        padding: 10
    },
    name: {
        fontSize: 30,
        fontWeight: "600",
        marginVertical: 10
    },
    description: {
        color: "gray"
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    button: {
        backgroundColor: "black",
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18
    }
})

export default Basket;