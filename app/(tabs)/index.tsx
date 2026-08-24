import Logo from "@/components/brand/Logo";
import { Tab } from "@/components/ui/Tab";
import { Colors } from "@/constants/theme";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";

export default function Home() {
  let [query, setQuery] = useState("");

  return (
    <Tab>
      <View style={{ alignItems: "center" }}>
        <Logo style={{ width: "30%" }} color={Colors.light.tint}></Logo>
      </View>

      <SearchBar
        placeholder="Search a book..."
        onChangeText={setQuery}
        value={query}
        platform="ios" // Force l'aspect natif iOS (avec l'icône loupe intégrée)
      />
    </Tab>
  );
}
