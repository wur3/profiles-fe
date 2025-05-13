import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { Row, Table } from 'react-native-table-component';

interface Profile {
  firstName: string;
  lastName: string;
  age?: number;
  birthday?: Date;
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
      <TableTwo></TableTwo>
    </View>
  );
}

const tableData = {
    tableHead: ['name', 'age', 'allergies'],
    widthArr: [140, 160, 180],
    tableData: [
      ['Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      '$44,331', '$839,702,328,904'],
      ['Ethereum', '$3000.9', '$359,080,563,225'],
      ['Tether', '$1', '$79,470,820,738'],
      ['BNB', '$413.44', '$69,446,144,361'],
      ['USD Coin', '$1', '$53,633,260,549'],
      ['Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      '$44,331', '$839,702,328,904'],
      ['Ethereum', '$3000.9', '$359,080,563,225'],
      ['Tether', '$1', '$79,470,820,738'],
      ['BNB', '$413.44', '$69,446,144,361'],
      ['USD Coin', '$1', '$53,633,260,549'],
      ['Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      '$44,331', '$839,702,328,904'],
      ['Ethereum', '$3000.9', '$359,080,563,225'],
      ['Tether', '$1', '$79,470,820,738'],
      ['BNB', '$413.44', '$69,446,144,361'],
      ['USD Coin', '$1', '$53,633,260,549'],
      ['Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      '$44,331', '$839,702,328,904'],
      ['Ethereum', '$3000.9', '$359,080,563,225'],
      ['Tether', '$1', '$79,470,820,738'],
      ['BNB', '$413.44', '$69,446,144,361'],
      ['USD Coin', '$1', '$53,633,260,549'],
      ['Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      '$44,331', '$839,702,328,904'],
      ['Ethereum', '$3000.9', '$359,080,563,225'],
      ['Tether', '$1', '$79,470,820,738'],
      ['BNB', '$413.44', '$69,446,144,361'],
      ['USD Coin', '$1', '$53,633,260,549'],
      ['Bitcoin (₿) is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
      '$44,331', '$839,702,328,904'],
      ['Ethereum', '$3000.9', '$359,080,563,225'],
      ['Tether', '$1', '$79,470,820,738'],
      ['BNB', '$413.44', '$69,446,144,361'],
      ['USD Coin', '$1', '$53,633,260,549'],
    ],
};


const TableTwo = () => {
  const [data, setData] = useState(tableData);
  return (
      <View style={styles.container}>
          <ScrollView horizontal={true}>
              <View>
                  <Table borderStyle={{ borderWidth: 1, borderColor: 'purple' }}>
                      <Row
                          data={data.tableHead}
                          widthArr={data.widthArr}
                          style={styles.head}
                          textStyle={styles.headText}
                      />
                  </Table>
                  <ScrollView>
                      <Table borderStyle={{ borderWidth: 1, borderColor: 'purple' }}>
                          {data.tableData.map((rowData, index) => (
                              <Row
                                  key={index}
                                  data={rowData}
                                  widthArr={data.widthArr}
                                  style={styles.rowSection}
                                  textStyle={styles.text}
                              />
                          ))}
                      </Table>
                  </ScrollView>
              </View>
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, justifyContent: 'center', backgroundColor: '#fff' },
  rowSection: { height: 60, backgroundColor: '#E7E6E1' },
  head: { height: 44, backgroundColor: 'darkblue' },
  headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
  text: { margin: 6, fontSize: 16, fontWeight: 'bold' , textAlign: 'center' },
})