// import React from 'react'
import { useRouter } from "expo-router";
import styles from "../../home/nearby/nearbyjobs.style";
import { View, Text, ActivityIndicator, Button } from "react-native";
import { COLORS } from "../../../constants";
import CartItem from "../cartitem/CartItem";

const Cart = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator size={"large"} color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <View style={styles.cardsContainer}>
                    <CartItem name="Iced Coffee" />
                    <CartItem name="Lemonade" />
                    <View style={{ marginTop: 25, width: "90%", margin: "auto" }} color="#841584">
                        <Button
                            style = {{borderRadius: "2%"}}
                            onPress={() => {router.push('/')}}
                            title="Confirm Order"
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

export default Cart;
