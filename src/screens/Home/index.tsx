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
          placeholder="Adicione um novo produto"
          value={newProduct}
          placeholderTextColor="#BDBABA"
          keyboardType="default"
          onChangeText={setNewProduct}
        />
        <TouchableOpacity style={styles.button}>
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>

    <View style={styles.bottom}>
      <View style={styles.contadorContainer}>
        <View style={styles.contadorItem}>
          <Text style={[styles.contadorTexto, styles.produtos]}>Produtos</Text>
          <Text style={styles.contadorNumero}>{products.length}</Text>
        </View>

        <View style={styles.contadorItem}>
          <Text style={[styles.contadorTexto, styles.finalizados]}>
            Finalizados
          </Text>
          <Text style={styles.contadorNumero}>0</Text>
        </View>
      </View>
      </View>

      
      {products.length === 0 && (
        <View style={styles.containerVazio}>
          <Image
            source={require("../../../assets/shopping_list.png")}
            style={styles.imagemVazia}
          />
          <Text style={styles.textoVazio}>
            Você ainda não tem produtos na lista de compra
          </Text>
          <Text style={styles.subtituloVazio}>
            Adicione produtos e organize sua lista de compras
          </Text>
        </View>
      )}
    </View>
  );
}
