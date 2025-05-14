import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import MainTable from './MainTable';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView horizontal={true}>
      <View style={styles.container}>
        <MainTable></MainTable>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 100, paddingHorizontal: 30,backgroundColor: '#fff' },
})
