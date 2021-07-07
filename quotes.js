import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getquote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((json) => {
          setQuote(json.content)
          setAuthor(json.author)
        
        });
  };

  return (
<View>
    <View style={styles.quoteContainer}>
        <Text style={styles.text}>{quote}</Text>
        <Text style={styles.text}>{`- ${author}`}</Text>
    </View>

        <Pressable style={styles.quotebtn} onPress={getquote} >
            <Text>Get a quote</Text>
        </Pressable>
</View>
   
  );
}

const styles = StyleSheet.create({
    quotebtn: {
        backgroundColor: '#FB615A',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
    },

    quoteContainer: {
        marginBottom: 10
        
    },

    text: {
        width: 300,
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    }
})
