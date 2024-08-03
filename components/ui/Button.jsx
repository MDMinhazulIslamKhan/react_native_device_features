import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/colors";

function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.primary50,

    fontWeight: "bold",
  },
});
