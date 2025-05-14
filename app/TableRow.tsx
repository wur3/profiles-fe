import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import Profile from "./Profile";

export type Props = {
  profile: Profile
}

const TableRow: React.FC<Props> = ({profile}) => {
  return (
    <DataTable.Row style={styles.row}>
        <DataTable.Cell>{profile.firstName}</DataTable.Cell>
        <DataTable.Cell>{profile.lastName}</DataTable.Cell>
        <DataTable.Cell numeric>{profile.age}</DataTable.Cell>
    </DataTable.Row>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 100, paddingHorizontal: 30,backgroundColor: '#fff' },
  head: { height: 44, backgroundColor: 'lavender' },
  row: { height: 40, backgroundColor: 'lightyellow' },
})

export default TableRow;