import React from 'react'
import { View } from 'react-native-web';
import { useRouter } from 'expo-router';
import styles from '../../home/nearby/nearbyjobs.style';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants';

const Cart = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.cardsContainer}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : ()}
    </View>
  )
}

export default Cart;