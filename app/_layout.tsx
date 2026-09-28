import React from "react";
import { Stack } from "expo-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { PaperProvider } from "react-native-paper";
import { ThemeProvider } from "../context/ThemeContext";
import { CONVEX_DEPLOYMENT } from "@env";
import { API_URL } from '@env';

console.log(API_URL);


const convexClient = new ConvexReactClient(CONVEX_DEPLOYMENT || "dev:placeholder/todo-app");

export default function RootLayout() {
  return (
    <ConvexProvider client={convexClient}>
      <ThemeProvider>
        <PaperProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </PaperProvider>
      </ThemeProvider>
    </ConvexProvider>
  );
}
