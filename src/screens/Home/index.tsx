
 {/* Professor, tive que criar um novo projeto pois o antigo estava
  dando muito problema de versão, no pc da facul funcionava bem mas aqui
  no meu nao estava funcionando, estava dando muitos erros, quebrei a cabeça
  para tentar resolver porém não consegui, dava erros de versões e tudo mais
  só consegui resolver criando um novo projeto, e quando fui comitar esse novo 
  projeto, ele substituiu os comits antigos, pois usei o comando para forçar ele
  a comitar e ele acabou excluindo os comits feitos em aula, eram 6 comits.
  Se esta vendo esta mensagem é porque não consegui recuperar os comits antigos. */}

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import Product from "../../components/Product";

type ProductType = {
  id: string;
  name: string;
  done: boolean;
};

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [newProduct, setNewProduct] = useState("");

  function handleAddProduct() {
    if (!newProduct.trim()) return;

    const data: ProductType = {
      id: String(Date.now()),
      name: newProduct,
      done: false,
    };

    setProducts((prev) => [...prev, data]);
    setNewProduct("");
  }

  function handleRemoveProduct(id: string) {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  }

  function handleToggleDone(id: string) {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

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
          onChangeText={setNewProduct}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <View style={styles.contadorContainer}>
          <View style={styles.contadorItem}>
            <Text style={[styles.contadorTexto, styles.produtos]}>Produtos</Text>
            <Text style={styles.contadorNumero}>
              {products.filter((p) => !p.done).length}
            </Text>
          </View>

          <View style={styles.contadorItem}>
            <Text style={[styles.contadorTexto, styles.finalizados]}>
              Finalizados
            </Text>
            <Text style={styles.contadorNumero}>
              {products.filter((p) => p.done).length}
            </Text>
          </View>
        </View>
      </View>

      {products.length === 0 ? (
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
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Product
              data={item}
              onRemove={() => handleRemoveProduct(item.id)}
              onToggle={() => handleToggleDone(item.id)}
            />
          )}
        />
      )}
    </View>
  );
}