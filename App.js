import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// HomeStack component should return the navigator
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ff6f61" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};
const Favorites = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ff6f61" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name == "Home") iconName = "restaurant-menu";
            else if (route.name == "Favorites") iconName = "favorite";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#ff6f61",  // Active icon color
          tabBarInactiveTintColor: "#777",   // Inactive icon color
          tabBarStyle: styles.tabbar,         // Applying the custom tab bar style
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Favorites" component={Favorites} options={{ title: "Favorites Recipes" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabbar: {
    backgroundColor: "#fff", // Set background color of the tab bar
    borderTopLeftRadius: 15,  // Optional styling for rounded corners
    borderTopRightRadius: 15, // Optional styling for rounded corners
    shadowColor: "#000",      // Optional shadow styling
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 5,             // Elevation for Android devices
  },
});

export default App;
