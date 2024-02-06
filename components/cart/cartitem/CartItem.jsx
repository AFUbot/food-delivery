import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { icons, images } from "../../../constants";
import styles from "./CartItem.style";
import lemonade from "./../../../assets/images/main/Lemonade.jpg";

const CartItem = (props) => {
    const [count, setCount] = useState(1);
    const handleAdd = ()=> {
        let newCount = count + 1;
        setCount(newCount);
    }
    const handleSubtract = ()=> {
        if (count > 1) {
            let newCount = count - 1;
            setCount(newCount);
        }
    }

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 16,
                borderWidth: 0.7,
                borderRadius: '1em',
                width: "90%", 
                margin: 'auto',
            }}
        >
            <Image
                source={{uri: `../../../../assets/images/main/${props.name}.jpg`}}
                style={{ width: 64, height: 64, borderRadius: 8 }}
            />
            <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={{ fontWeight: "bold" }}>{props.name}</Text>
                <Text style={{ fontSize: 14, color: "#888", marginTop: 4 }}>
                    Short description of the food item
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <TouchableOpacity onPress={handleAdd}>
                    <Image style={styles.icon} source={icons.add} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={{ fontSize: 14, marginHorizontal: 8 }}>{count}</Text>
                <TouchableOpacity onPress={handleSubtract}>
                    <Image style={styles.icon} source={icons.minus} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", gap: '1em', alignItems: "flex-end" }}>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>RM {count * 7.99}</Text>
                <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.icon} source={icons.bin} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;
