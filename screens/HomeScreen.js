// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [directories, setDirectories] = useState(['Inbox', 'Sent']);
  const [newDir, setNewDir] = useState('');

  const addDirectory = () => {
    if (newDir && !directories.includes(newDir)) {
      setDirectories([...directories, newDir]);
      setNewDir('');
    }
  };

  const deleteDirectory = (dir) => {
    setDirectories(directories.filter(d => d !== dir));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Directories</Text>
      <FlatList
        data={directories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Button title={item} onPress={() => navigation.navigate('Messages', { directory: item })} />
            <Button title="Delete" onPress={() => deleteDirectory(item)} color="red" />
          </View>
        )}
      />
      <TextInput
        placeholder="Add new directory"
        value={newDir}
        onChangeText={setNewDir}
        style={styles.input}
      />
      <Button title="Add Directory" onPress={addDirectory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 10 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
});
