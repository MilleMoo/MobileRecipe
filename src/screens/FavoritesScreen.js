import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import RecipeCard from "../components/RecipeCard";

const FavoritesScreen = () => {
    const [favorites, setFavorites] = useState([]);
    const navigation = useNavigation();

    // โหลดข้อมูลใหม่ทุกครั้งที่หน้า Favorites ถูกเปิด
    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
    );

    const loadFavorites = async () => {
        try {
            const storedFavorites = await AsyncStorage.getItem("favorites");
            setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
        } catch (error) {
            console.error("Error loading favorites", error);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <RecipeCard 
                        recipe={item} 
                        onPress={() => navigation.navigate("RecipeScreen", { recipe: item})}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
});

export default FavoritesScreen;