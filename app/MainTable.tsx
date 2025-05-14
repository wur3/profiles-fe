import React from 'react';
import { ScrollView, StyleSheet } from "react-native";
import { DataTable } from 'react-native-paper';
import Profile from './Profile';
import TableRow from './TableRow';


const tableData: Profile[] = [
  new Profile("Fred", "Chang").withAge(23),
  new Profile("Kris", "Po").withAge(44),
  new Profile("Kael", "Grieb"),
  new Profile("Will", "Bettleheim")
]

const MainTable = () => {
  return (
        <DataTable>
            <DataTable.Header style={styles.head}>
                <DataTable.Title>First Name</DataTable.Title>
                <DataTable.Title>Last Name</DataTable.Title>
                <DataTable.Title numeric>Age</DataTable.Title>
            </DataTable.Header>
            <ScrollView>
            {tableData.map((prof, index) => (
              <TableRow key={index} profile={prof}></TableRow>
          ))}
            </ScrollView>
        </DataTable>
    
  )
}

const styles = StyleSheet.create({
  head: { height: 44, backgroundColor: 'lavender' },
})

export default MainTable;