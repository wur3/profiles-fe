import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { DataTable } from 'react-native-paper';

class Profile {
  firstName: string;
  lastName: string;
  age?: number;
  birthday?: Date;
  constructor(fn: string, ln: string) {
    this.firstName = fn;
    this.lastName = ln;
  }
  withAge(a: number) {
    this.age = a;
    return this;
  }
  withBirthday(b: Date) {
    this.birthday = b;
    return this;
  }
}


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MainTable></MainTable>
    </View>
  );
}

const tableData: Profile[] = [
  new Profile("Fred", "Chang").withAge(23),
  new Profile("Kris", "Po").withAge(44),
  new Profile("Kael", "Grieb"),

]

const MainTable = () => {
  return (
    <ScrollView horizontal={true}>
    <View style={styles.container}>
          <DataTable>
              <DataTable.Header style={styles.head}>
                  <DataTable.Title>First Name</DataTable.Title>
                  <DataTable.Title>Last Name</DataTable.Title>
                  <DataTable.Title numeric>Age</DataTable.Title>
              </DataTable.Header>
              <ScrollView>
              <DataTable.Row style={styles.row}>
                  <DataTable.Cell>Nabendu</DataTable.Cell>
                  <DataTable.Cell>nabendu@gmail.com</DataTable.Cell>
                  <DataTable.Cell numeric>33</DataTable.Cell>
              </DataTable.Row>
              </ScrollView>
          </DataTable>
      </View>
      </ScrollView>

  )
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 100, paddingHorizontal: 30,backgroundColor: '#fff' },
  head: { height: 44, backgroundColor: 'lavender' },
  row: { height: 40, backgroundColor: 'lightyellow' },
})