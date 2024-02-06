import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons, images } from "../../constants";
import { ScreenHeaderBtn } from "../../components";
import { ScrollView, Text, View } from "react-native";
import CartItem from "../../components/cart/cartitem/CartItem";
import Cart from "../../components/cart/cart/Cart";

const cartPage = (props) => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={images.profile}
                            dimension="100%"
                        ></ScreenHeaderBtn>
                    ),
                    headerTitle: "Cart",
                }}
            />

            <View>
                <Cart />
            </View>
        </SafeAreaView>
    );
};

export default cartPage;
