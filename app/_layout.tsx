// app/_layout.tsx
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import SplashScreen from "@/components/pages/SplashScreen";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />

      {loading && <SplashScreen />}

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

let styles = StyleSheet.create({
  root: {
    backgroundColor: "black",
  },
});
