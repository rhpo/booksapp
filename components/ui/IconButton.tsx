import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AnimatedBlur = Animated.createAnimatedComponent(BlurView);

type IconButtonProps = {
  onPress?: () => void;
  size?: number;
  iconName?: keyof typeof Ionicons.glyphMap;
  href?: string;
};

export default function IconButton({
  onPress,
  size = 52,
  iconName = "cog",
  href,
}: IconButtonProps) {
  const scale = useSharedValue(1);
  const [intensity, setIntensity] = useState(40);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.88, {
      damping: 6,
      stiffness: 200,
      mass: 0.4,
    });
    setIntensity(65);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, {
      damping: 5,
      stiffness: 180,
      mass: 0.5,
    });
    setIntensity(40);
  };

  const button = (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={animatedStyle}>
        <AnimatedBlur
          intensity={intensity}
          tint="light"
          style={[
            styles.button,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        >
          <Ionicons name={iconName} size={size * 0.5} color="black" />
        </AnimatedBlur>
      </Animated.View>
    </Pressable>
  );

  if (href) {
    return (
      <Link href={href as any} asChild>
        {button}
      </Link>
    );
  }

  return button;
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
  },
});
