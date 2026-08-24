import IconButton from "@/components/ui/IconButton";
import { Tab } from "@/components/ui/Tab";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, Switch, Text } from "@rneui/themed";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <Tab>
      <View style={styles.header}>


        <IconButton iconName="arrow-back" size={48} onPress={() => router.back()} />

        <Text h2 style={{ fontWeight: 600 }}>Settings</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Preferences</Text>
          <ListItem bottomDivider>
            <Ionicons name="language-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>Language</ListItem.Title>
            </ListItem.Content>
            <Text style={styles.valueText}>English</Text>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Ionicons name="color-palette-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>Theme</ListItem.Title>
            </ListItem.Content>
            <Text style={styles.valueText}>System</Text>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Display</Text>
          <ListItem bottomDivider>
            <Ionicons name="text-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>Font Size</ListItem.Title>
            </ListItem.Content>
            <Text style={styles.valueText}>Medium</Text>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacy & Security</Text>
          <ListItem bottomDivider>
            <Ionicons name="lock-closed-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>Password & Security</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider>
            <Ionicons name="notifications-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>Push Notifications</ListItem.Title>
            </ListItem.Content>
            <Switch value={true} color="#007aff" />
          </ListItem>
        </View>
      </ScrollView>
    </Tab>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  backButton: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888",
    textTransform: "uppercase",
    marginBottom: 12,
    marginLeft: 4,
  },
  valueText: {
    fontSize: 16,
    color: "#888",
    marginRight: 4,
  }
});
