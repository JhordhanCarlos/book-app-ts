import { View, Text } from "react-native";
import { green, yellow } from "../../style";
import { styles } from "./styles";
export interface BookProps {
  title: string;
  created_at?: string;
  last_updated?: string;
  page_count?: number;
  is_finished?: boolean;
}

export function BookCard(props: BookProps) {
  return (
    <View
      style={
        !props.is_finished
          ? styles.container
          : [styles.container, { borderLeftColor: green }]
      }
    >
      <View>
        <Text style={styles.title}>{props.title}</Text>
        {!props.is_finished ? (
          <Text style={styles.createdAt}>{props.created_at}</Text>
        ) : (
          <Text style={styles.createdAt}>
            Last Updated: {props.last_updated}
          </Text>
        )}
      </View>
      {!props.is_finished && (
        <View style={styles.pageCountContainer}>
          <Text style={styles.pageCountNumber}>{props.page_count} </Text>
          <Text style={styles.pageCountText}>Pgs Readed</Text>
        </View>
      )}
    </View>
  );
}
