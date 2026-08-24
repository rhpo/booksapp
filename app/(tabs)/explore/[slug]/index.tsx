import { getCategory } from "@/data/categories";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

const HEADER_HEIGHT = 280;

export default function Category() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();

  let category = getCategory(slug);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
      >
        <Animated.View style={[styles.header, headerAnimatedStyle]}>
          <Animated.Image 
            source={category?.cover as any}
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover"
          />
          {/* subtle gradient or dark overlay to ensure back button visibility */}
          <View style={styles.overlay} />
        </Animated.View>

        <View style={styles.content}>
          <Text style={styles.title}>{category?.name}</Text>
          <Text style={styles.description}>{category?.description}</Text>
          {/* Extra view just to allow for native-feeling scroll room */}
          <View style={{ height: 600 }} />
        </View>
      </Animated.ScrollView>

      <Pressable onPress={() => router.back()} style={styles.closeButton}>
        <Ionicons name="close" size={24} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 18,
    zIndex: 10,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  content: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24, // Pulls the content up slightly over the parallax
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    color: '#666',
    lineHeight: 26,
  }
});
