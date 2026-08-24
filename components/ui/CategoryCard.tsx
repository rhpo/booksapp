import { Category } from "@/types/category";
import { Text } from "@rneui/base";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";
import { ImageSourcePropType, Platform, StyleSheet, View } from "react-native";

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <CardImage
      source={category.cover as ImageSourcePropType}
      style={styles.container}
    >
      <View style={{ padding: 24 }}>
        <Text h3 style={styles.serif}>
          {category.name}
        </Text>

        <Text style={styles.serif}>{category.description}</Text>
      </View>
    </CardImage>
  );
}

let styles = StyleSheet.create({
  serif: {
    ...Platform.select({
      ios: {
        fontFamily: "ui-serif", // Alternatively use 'Georgia' or 'Times New Roman'
      },
      android: {
        fontFamily: "serif", // Or 'notoserif'
      },
    }),

    color: "white",
  },

  container: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    overflow: "hidden",

    justifyContent: "flex-end",

    color: "#ffffff",
  },

  containerImage: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
