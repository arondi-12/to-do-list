import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Card } from "react-native-paper";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function TodosScreen() {
  const todos = useQuery(api.list) || [];
  const add = useMutation(api.add);
  const update = useMutation(api.update);
  const remove = useMutation(api.remove);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    if (!title.trim()) return;
    await add({ title: title.trim(), description });
    setTitle(""); setDescription("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todos</Text>
      <TextInput label="Title" value={title} onChangeText={setTitle} style={{marginBottom:8}} />
      <TextInput label="Description" value={description} onChangeText={setDescription} multiline style={{marginBottom:8}} />
      <Button mode="contained" onPress={handleAdd} style={{marginBottom:12}}>Add Todo</Button>

      {todos.length === 0 ? <Text style={{textAlign:"center", marginTop:40}}>No todos yet</Text> :
        todos.map((t:any)=> (
          <Card key={t._id} style={{marginBottom:8}}>
            <Card.Title title={t.title} subtitle={t.description} />
            <Card.Actions>
              <Button onPress={()=> update({ id: t._id, patch: { completed: !t.completed } })}>{t.completed ? "Undo" : "Done"}</Button>
              <Button onPress={()=> remove({ id: t._id })}>Delete</Button>
            </Card.Actions>
          </Card>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, padding:16},
  header: {fontSize:22, fontWeight:"700", marginBottom:12}
});
