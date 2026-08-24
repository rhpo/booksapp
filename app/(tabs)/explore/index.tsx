import { Text } from "@rneui/themed";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import CategoryCard from "@/components/ui/CategoryCard";
import { CATEGORIES } from "@/data/categories";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function main() {
  return (
    <SafeAreaView>
      <View style={{ marginBottom: 1 * 16, paddingHorizontal: 1 * 16 }}>
        <Text h2 style={{ fontWeight: 600 }}>
          Categories
        </Text>

        <Text>Explore our latest book categories</Text>
      </View>

      <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ gap: 16, paddingHorizontal: 14, paddingBottom: 100 }}>
        {CATEGORIES.map((category, i) => (
          <Link key={i} href={{ pathname: "/(tabs)/explore/[slug]", params: { slug: category.name } }} asChild>
            <Pressable style={{ width: '100%' }}>
              <CategoryCard category={category} />
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
