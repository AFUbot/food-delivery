import { Text, View } from "react-native";

const Cart = ({ count }) => {
  return (
    <View>
      <Text>Items: {count}</Text>
    </View>
  );
};

export default Cart;
