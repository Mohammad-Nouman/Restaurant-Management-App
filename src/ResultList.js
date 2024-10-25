import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ResultList(props) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const showDetailPage = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const closeDetailPage = () => {
    setSelectedRestaurant(null);
  };

  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>{props.title}</Text>
      {selectedRestaurant ? (
        <RestaurantDetail
          restaurant={selectedRestaurant}
          onClose={closeDetailPage}
        />
      ) : (
        <FlatList
          data={props.results}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => showDetailPage(item)}
                style={styles.viewStyle}
              >
                <Text>{item.name} </Text>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: item.image_url }}
                ></Image>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}

const RestaurantDetail = ({ restaurant, onClose }) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>{restaurant.name}</Text>
      <Text>Distance: {restaurant.distance}</Text>
      <Text>Rating: {restaurant.rating}</Text>
      <Text>Price: {restaurant.price}</Text>
      <TouchableOpacity onPress={onClose}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
