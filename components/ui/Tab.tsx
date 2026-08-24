import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export function Tab(props: ViewProps) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <View style={[styles.view, props.style]}>{props.children}</View>
    </SafeAreaView>
  );
}

const REM = 16;

let styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 1 * REM,
    paddingVertical: 1.5 * REM,
  },
});
