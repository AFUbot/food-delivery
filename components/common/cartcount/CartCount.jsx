import { Text, View } from "react-native";

const CartCount = ({ count }) => {
  return (
    <View>
      <Text>Items: {count}</Text>
    </View>
  );
};

export default CartCount;
