import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const IconButton = ({ onPress, name, color }) => {
  return (
    <Pressable onPress={onPress}>
      <AntDesign name={name} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;
