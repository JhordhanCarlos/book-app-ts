import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm, Controller } from "react-hook-form";

type Book = {
  name: string;
  total_pages: number;
  created_at: string;
  current_page?: number;
};

export default function AddNew({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      bookName: "",
      bookPages: "",
    },
  });

  const [book, setBook] = useState<Book>({
    name: "",
    total_pages: 0,
    created_at: "",
    current_page: 0,
  });

  const addBook = async () => {
    let bookName = watch("bookName");
    let bookPages = watch("bookPages");
    if ((bookName && bookPages).trim() === "") {
      alert("Don't leave the book's informations empty");
    } else {
      let today = new Date();
      setBook({
        name: bookName,
        total_pages: parseInt(bookPages, 10),
        created_at: today.toDateString(),
      });

      await AsyncStorage.setItem("books", JSON.stringify(book));

      alert(`Have a good read with: ${bookName}`);

      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#FFF",
          textAlign: "center",
          marginVertical: 30,
        }}
      >
        Congrats! You about to start a new reading.
      </Text>

      <View>
        <Text style={{ color: "#FFF", marginTop: 5 }}>Book</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="bookName"
        />
        {errors.bookName && <Text>This is required.</Text>}

        <Text style={{ color: "#FFF", marginTop: 15 }}>Page count</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="bookPages"
        />
        {errors.bookPages && <Text>This is required.</Text>}
      </View>

      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={handleSubmit(addBook)}
      >
        <Text style={styles.buttonAddText}>Add new</Text>
      </TouchableOpacity>
    </View>
  );
}
