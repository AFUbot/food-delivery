import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import styles from "./popularjobcard.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const PopularJobCard = ({ item, selectedFood, handleCardPress }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ width: 150, height: 150 }}
        onPress={() => handleCardPress(item)}
      >
        <View>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: `../../../../assets/images/main/${item.name}.jpg` }}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PopularJobCard;
