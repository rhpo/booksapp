import { Tab } from "@/components/ui/Tab";
import { Text } from "@rneui/base";
import { Link } from "expo-router";

export default function main() {
  return (
    <Tab>
      <Text h1 style={{ fontWeight: 600 }}>Books</Text>

      <Link href="..">Go back!</Link>
    </Tab>
  );
}
