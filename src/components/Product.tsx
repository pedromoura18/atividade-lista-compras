import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../screens/Home/styles";

type Props = {
  data: {
    id: string;
    name: string;
    done: boolean;
  };
  onRemove: () => void;
  onToggle: () => void;
};

export default function Product({ data, onRemove, onToggle }: Props) {
  return (
    <View style={styles.item}>
       <TouchableOpacity onPress={onToggle} style={styles.checkButton}>
       <Image source={data.done? require("../../assets/check.png") : require("../../assets/checkverde.png")
        }
       style={styles.checkIcon}
       />
       </TouchableOpacity>
       
      <Text style={[styles.itemText, data.done && styles.itemTextDone]}>
        {data.name}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
