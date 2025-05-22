// screens/MessageFormScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function MessageFormScreen({ route, navigation }) {
  const { directory, message } = route.params;
  const [text, setText] = useState(message ? message.text : '');

  const handleSave = () => {
    const all = globalThis.messages || {};
    const dirMsgs = all[directory] || [];

    if (message) {
      // Update existing message
      const updated = dirMsgs.map(m => m.id === message.id ? { ...m, text } : m);
      all[directory] = updated;
    } else {
      // Add new message
      const newMsg = { id: Date.now(), text };
      all[directory] = [...dirMsgs, newMsg];
    }

    globalThis.messages = all;
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message ? 'Edit' : 'New'} Message</Text>
      <TextInput
        style={styles.input}
        placeholder="Message text"
        value={text}
        onChangeText={setText}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 },
});
