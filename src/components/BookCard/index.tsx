import { View, Text } from "react-native";
import { yellow } from "../../style";
import { styles } from "./styles";
export interface BookProps {
  title: string;
  created_at: Date;
  page_count?: number;
}

export function BookCard(props: BookProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.createdAt}>
          {props.created_at.toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.pageCountContainer}>
        <Text style={styles.pageCountNumber}>{props.page_count} </Text>
        <Text style={{ color: yellow }}>Pages</Text>
      </View>
    </View>
  );
}
