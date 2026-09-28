import React from "react";
import { Card } from "react-native-paper";

export default function TodoItem({todo}: any) {
  return (
    <Card style={{marginBottom:8}}>
      <Card.Title title={todo.title} subtitle={todo.description} />
    </Card>
  );
}
