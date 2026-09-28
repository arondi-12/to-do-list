import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <Link href="(tabs)/index">Open Todos</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, justifyContent:"center", alignItems:"center"},
  title: {fontSize:24, marginBottom:12}
});
