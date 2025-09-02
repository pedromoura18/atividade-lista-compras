import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Lista de Compras</Text>
        </View>

        <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder="Nome Do Produto"
                placeholderTextColor="#BDBABA"
                keyboardType="default"
                />
            </View>

      
    </View>
  );
}
