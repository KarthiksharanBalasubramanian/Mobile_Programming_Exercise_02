// screens/MessageListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function MessageListScreen({ route, navigation }) {
  const { directory } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const stored = globalThis.messages?.[directory] || [];
    setMessages(stored);
  }, [directory]);

  const deleteMessage = (id) => {
    const updated = messages.filter(msg => msg.id !== id);
    setMessages(updated);
    globalThis.messages[directory] = updated;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages in {directory}</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text>{item.text}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Edit" onPress={() => navigation.navigate('EditMessage', { directory, message: item })} />
              <Button title="Delete" color="red" onPress={() => deleteMessage(item.id)} />
            </View>
          </View>
        )}
      />
      <Button title="Add Message" onPress={() => navigation.navigate('EditMessage', { directory })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
});
