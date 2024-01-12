import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import drinksData from "../components/common/cards/popular/drinksData";
import foodData from "../components/common/cards/popular/foodData";

import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import CartCount from "../components/cart/cartcount/CartCount";

const Home = () => {
  const [cartItems, setCartItems] = useState("");

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
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome></Welcome>
          <CartCount count={1} />
          <Popularjobs
            handleCartItem={() => setCartItems(item)}
            name="Main Dishes"
            items={foodData()}
          />
          <Popularjobs name="Drinks" items={drinksData()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
