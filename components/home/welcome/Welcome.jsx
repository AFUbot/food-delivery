import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";

import { COLORS, icons, SIZES } from "../../../constants";

const jobTypes = ["Main Dishes", "Drinks", "Deserts"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Main Dishes");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello AFUBot User</Text>
        <Text style={styles.userName}>Start Ordering Now!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
      <View style={{ marginTop: 15 }} color="#841584">
        <Button title="Proceed to Checkout" />
      </View>
    </View>
  );
};

export default Welcome;
