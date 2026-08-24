import { Colors } from "@/constants/theme";
import {
  Badge,
  Icon,
  Label,
  NativeTabs,
} from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs tintColor={Colors.light.tint}
      labelStyle={{
        color: Colors.light.tint,
      }}
    >
      <NativeTabs.Trigger name="index">
        <Icon sf="house.fill" drawable="ic_home" />
        <Label>Home</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="books/index">
        <Icon sf="book.fill" drawable="ic_books" />
        <Label>Books</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Icon sf="sparkle.magnifyingglass" drawable="ic_books" />
        <Label>Explore</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <Icon sf="person.fill" drawable="ic_profile" />
        <Label>Account</Label>
        <Badge>9+</Badge>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
