import { Colors } from "@/constants/theme";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  SlideInDown,
  SlideOutLeft,
} from "react-native-reanimated";
import Logo from "../brand/Logo";

export default function SplashScreen() {
  return (
    <Animated.View
      style={[
        { ...styles.container, backgroundColor: Colors.light.tint },
        StyleSheet.absoluteFill,
      ]}
      exiting={SlideOutLeft.easing(Easing.ease)}
    >
      <Animated.View
        entering={SlideInDown.duration(1000)}
        style={styles.loadingContainer}
      >
        <View />

        <Logo style={{ marginBottom: 3 * 16, width: "50%" }} />

        <ActivityIndicator size={"large"} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingContainer: {
    flex: 1,

    paddingVertical: 3 * 16,

    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
