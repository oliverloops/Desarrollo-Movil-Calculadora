import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  //Base states
  const [input, setInput] = useState(0);
  const [temp, setTemp] = useState(0);
  const [operation, setOperation] = useState(null);

  //Reset Output
  const reset = () => setInput(0);

  //Agroup multiple numbers
  const calc = (info) => {
    if (input === 0) {
      setInput(info);
    } else if (input === 0 && info === ".") {
      setInput(input + info.toString());
    } else {
      setInput(input + info.toString());
    }
  };

  //Delete values
  const del = () => {
    let size = input.length;
    let fullStr = input.slice(0, size - 1);
    setInput(fullStr);
  };

  //Addition
  const add = () => {
    setTemp(input);
    setInput(0);
    setOperation("add");
  };

  //Sustraction
  const sust = () => {
    setTemp(input);
    setInput(0);
    setOperation("sust");
  };

  //Multiplication
  const mult = () => {
    setTemp(input);
    setInput(0);
    setOperation("mult");
  };

  //Divide
  const div = () => {
    setTemp(input);
    setInput(0);
    setOperation("div");
  };

  //Return result
  const result = () => {
    switch (operation) {
      case "add":
        setInput(parseInt(temp) + parseInt(input));
        setOperation(null);
        break;
      case "sust":
        setInput(parseInt(temp) - parseInt(input));
        setOperation(null);
        break;
      case "mult":
        setInput(parseInt(temp) * parseInt(input));
        setOperation(null);
        break;
      case "div":
        setInput(parseInt(temp) / parseInt(input));
        setOperation(null);
        break;
    }
  };

  return (
    <View style={styles.content}>
      <View style={{ flexDirection: "row-reverse" }}>
        <Text style={styles.results}>{input}</Text>
      </View>
      <View style={{ marginTop: 12 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
            marginLeft: 40,
          }}
        >
          <TouchableOpacity style={styles.specialButton}>
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => calc(3.141549)}
            style={styles.specialButton}
          >
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>π</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.specialButton}>
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>e</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.specialButton}>
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.firstButtonContainer}>
          <TouchableOpacity onPress={() => reset()} style={styles.acbutton}>
            <Text style={{ fontSize: 21, fontWeight: "normal" }}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => div()} style={styles.operbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => del()} style={styles.operbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>DEL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => calc(7)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calc(8)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calc(9)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => mult()} style={styles.operbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => calc(4)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calc(5)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calc(6)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sust()} style={styles.operbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => calc(1)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calc(2)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calc(3)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => add()} style={styles.operbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => calc(0)} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calc(".")} style={styles.numbutton}>
            <Text style={{ fontSize: 28, fontWeight: "normal" }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => result()} style={styles.equals}>
            <Text style={{ fontSize: 32, fontWeight: "normal" }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  content: {
    flex: 3,
    backgroundColor: "rgb(236, 237, 230)",
  },
  results: {
    height: 250,
    backgroundColor: "rgba(209, 223, 205, 0.8)",
    fontWeight: "normal",
    fontSize: 68,
    width: "100%",
    textAlign: "right",
    paddingTop: 80,
    paddingRight: 16,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
  },
  firstButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    marginTop: 40,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 60,
  },
  specialButton: {
    width: 60,
    height: 60,
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
  acbutton: {
    backgroundColor: "rgb(166, 234, 217)",
    width: 82,
    height: 82,
    paddingTop: 24,
    borderRadius: 50,
    textAlign: "center",
    alignItems: "center",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
  operbutton: {
    backgroundColor: "rgb(203, 221, 195)",
    width: 82,
    height: 82,
    paddingTop: 18,
    borderRadius: 50,
    textAlign: "center",
    alignItems: "center",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
  numbutton: {
    backgroundColor: "rgb(247, 246, 245)",
    width: 82,
    height: 82,
    paddingTop: 18,
    borderRadius: 50,
    textAlign: "center",
    alignItems: "center",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
  equals: {
    backgroundColor: "rgb(214, 233, 139)",
    width: 174,
    height: 82,
    paddingTop: 14,
    borderRadius: 50,
    textAlign: "center",
    alignItems: "center",
    ...Platform.select({
      ios: { fontFamily: "Arial" },
      android: { fontFamily: "Roboto" },
    }),
  },
});
