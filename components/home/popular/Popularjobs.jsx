import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./popularjobs.style";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { SIZES } from "../../../constants";

const Popularjobs = ({ items, name, handleCartItem }) => {
  const [data, setData] = useState(items);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{name}</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PopularJobCard
              handleCardPress={() => handleCartItem(item)}
              item={item}
            />
          )}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Popularjobs;
