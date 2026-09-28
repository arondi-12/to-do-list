import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MD3LightTheme, MD3DarkTheme } from "react-native-paper";
import { lightTheme, darkTheme } from "../constants/themes";

export const ThemeContext = createContext<any>({});

export function ThemeProvider({ children }: any) {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState({ ...MD3LightTheme, colors: lightTheme });

  useEffect(()=>{
    (async ()=>{
      const s = await AsyncStorage.getItem("theme");
      if (s === "dark") { setIsDark(true); setTheme({...MD3DarkTheme, colors: darkTheme}); }
    })();
  },[]);

  const toggleTheme = async ()=>{
    const toDark = !isDark;
    setIsDark(toDark);
    setTheme(toDark ? {...MD3DarkTheme, colors: darkTheme} : {...MD3LightTheme, colors: lightTheme});
    await AsyncStorage.setItem("theme", toDark ? "dark" : "light");
  };

  return <ThemeContext.Provider value={{isDark, toggleTheme, theme}}>{children}</ThemeContext.Provider>;
}
