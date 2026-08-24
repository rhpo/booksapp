import { useRouter } from "expo-router";
import { Tab } from "@/components/ui/Tab";
import { Text, ListItem, Avatar, Button } from "@rneui/themed";
import { StyleSheet, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "@/components/ui/IconButton";

export default function AccountScreen() {
  const router = useRouter();

  return (
    <Tab>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
           <View>
             <Text h2 style={{ fontWeight: 600 }}>Account</Text>
             <Text style={{ color: "gray", marginTop: 4 }}>Manage your profile and settings</Text>
           </View>
           <IconButton href="/profile/settings" size={52} />
        </View>

        <ListItem bottomDivider containerStyle={styles.profileSection}>
          <Avatar 
             rounded 
             icon={{ name: 'person', type: 'ionicon', size: 30, color: '#ccc' as any } as any} 
             containerStyle={{ backgroundColor: '#e0e0e0' }} 
             size="large" 
          />
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "bold" }}>User Profile</ListItem.Title>
            <ListItem.Subtitle style={{ color: "gray" }}>Edit personal details</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Main options</Text>
          <ListItem bottomDivider onPress={() => {}}>
            <Ionicons name="document-text-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>Account Information</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider onPress={() => router.push("/profile/settings")}>
            <Ionicons name="settings-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>Settings</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More Info</Text>
          <ListItem bottomDivider onPress={() => {}}>
            <Ionicons name="information-circle-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>About the app</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider onPress={() => {}}>
            <Ionicons name="help-circle-outline" size={24} color="#333" />
            <ListItem.Content>
              <ListItem.Title>Help & Support</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View style={[styles.section, { marginTop: 20 }]}>
          <Button 
            title="Disconnect"
            type="outline"
            icon={<Ionicons name="log-out-outline" size={20} color="#ff3b30" style={{ marginRight: 8 }} />}
            titleStyle={{ color: '#ff3b30', fontWeight: 'bold' }}
            buttonStyle={{ borderColor: '#ff3b30', borderRadius: 12, paddingVertical: 12, backgroundColor: '#fee8e7' }}
          />
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
  profileSection: {
    marginBottom: 32,
    backgroundColor: "#f5f5f5",
    borderRadius: 16,
    paddingVertical: 12,
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
});
