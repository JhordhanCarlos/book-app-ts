import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function BookInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <Text style={{ color: "#FFF" }}>DUNA</Text>
      </View>

      <View style={styles.info}>
        <View style={styles.card}>
          <Text style={{ color: "#7C7C8A", fontSize: 14 }}>
            Once upon a time...
          </Text>
          <Text style={{ color: "#E1E1E6", fontSize: 16 }}>
            You started this book in: 00/00/0000
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={{ color: "#7C7C8A", fontSize: 14 }}>Progress</Text>
          <View style={styles.progressBar}></View>
          <View style={[styles.progress, { width: "50%" }]}></View>
          <Text style={{ color: "#E1E1E6", fontSize: 16 }}>
            Last time read: 00/00/0000
          </Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={{ color: "#7C7C8A", fontSize: 14 }}>Total pages</Text>
          <Text style={{ color: "#E1E1E6", fontSize: 16 }}>620</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={{ color: "#7C7C8A", fontSize: 14 }}>Current page</Text>
          <Text style={{ color: "#E1E1E6", fontSize: 16 }}>361</Text>
        </View>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={{ color: "#FFF" }}>Finish book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
