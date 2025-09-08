import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function Home() {
    const [products, setProducts] = useState<string[]>([]);
    const [newProduct, setNewProduct] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Lista de Compras</Text>
        </View>

        <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Nome Do Produto"
                value={newProduct}
                placeholderTextColor="#BDBABA"
                keyboardType="default"
                onChangeText={setNewProduct}
                />
                <TouchableOpacity style={styles.button}>
                <Image
                    source={require("../../../assets/plus.png")}
                />
                </TouchableOpacity>   
            </View>
              
    </View>
  );
}
