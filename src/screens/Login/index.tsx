import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles as style, secondaryBlack } from "../../style";
import { styles } from "./styles";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={style.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        cursorColor={"#fff"}
      />
      <Text style={style.text}>Password</Text>
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonInput}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}
