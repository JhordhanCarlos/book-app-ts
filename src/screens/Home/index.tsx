import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BookCard, BookProps } from "../../components/BookCard";
import { green, yellow } from "../../style";
import { styles } from "./styles";

const INITIAL_BOOKS = [
  {
    title: "Harry Potter and the Sorcerer Stone",
    created_at: new Date("now"),
    page_count: 0,
  },
  { title: "Dune", created_at: new Date("now"), page_count: 350 },
  {
    title: "Harry Potter and the Goblet of Fire",
    created_at: new Date("now"),
    page_count: 0,
  },
];

export default function Home({ navigation }) {
  useEffect(() => {
    setBooksToRead(INITIAL_BOOKS);
  }, []);

  const [tab, setTab] = useState(0);
  const [booksToRead, setBooksToRead] = useState<BookProps[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.bookCounter}>
        <Text style={{ color: "#FFF" }}>Books</Text>
        <Text style={{ color: "#FFF" }}>{booksToRead.length}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={
            tab === 0
              ? [styles.button, { borderWidth: 1, borderColor: yellow }]
              : styles.button
          }
          onPress={() => setTab(0)}
        >
          <Text
            style={
              tab === 0
                ? [styles.buttonText, { color: yellow }]
                : styles.buttonText
            }
          >
            Reading
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            tab === 1
              ? [styles.button, { borderWidth: 1, borderColor: green }]
              : styles.button
          }
          onPress={() => setTab(1)}
        >
          <Text
            style={
              tab === 1
                ? [styles.buttonText, { color: green }]
                : styles.buttonText
            }
          >
            Readed
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {booksToRead.length == 0 ? (
          <Text style={[styles.buttonText, { textAlign: "center" }]}>
            No books added yet.
          </Text>
        ) : tab === 0 ? (
          INITIAL_BOOKS.map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              created_at={book.created_at}
              page_count={book.page_count}
            />
          ))
        ) : (
          <Text style={[styles.buttonText, { textAlign: "center" }]}>
            No books finilized yet.
          </Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => navigation.navigate("AddNew")}
      >
        <Text style={styles.buttonAddText}>Add new</Text>
      </TouchableOpacity>
    </View>
  );
}
