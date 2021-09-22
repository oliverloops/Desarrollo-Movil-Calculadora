import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Imc} />
        <Stack.Screen name="Resultado" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Imc = ({ navigation }) => {
  const [weigth, setWeigth] = useState(null);
  const [height, setHeight] = useState(null);

  const calculateImc = () => {
    let imc = weigth / (height * height);

    navigation.navigate("Resultado", { imc: imc });
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora IMC</Text>
      </View>
      <View style={{ flex: 3, paddingTop: 60, paddingLeft: 20 }}>
        <Text style={{ fontSize: 17, paddingBottom: 15 }}>
          Ingresa tu peso Kg.:
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder="Ej. 65"
          onChangeText={(text) => setWeigth(text)}
          defaultValue={weigth}
          keyboardType="numeric"
        />
        <Text style={{ fontSize: 17, paddingTop: 15, paddingBottom: 15 }}>
          Ingresa tu estatura m.:
        </Text>
        <TextInput
          style={styles.inputField}
          placeholder="Ej. 1.70"
          onChangeText={(text) => setHeight(text)}
          defaultValue={height}
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
          paddingTop: 250,
        }}
      >
        <TouchableOpacity style={styles.button} onPress={calculateImc}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Result = ({ navigation, route }) => {
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("#000");

  useEffect(() => {
    if (route.params.imc > 50) {
      setStatus("Obesidad IV");
      setColor("#a4133c");
    } else if (route.params.imc >= 40 && route.params.imc < 50) {
      setStatus("Obesidad III");
      setColor("#c9184a");
    } else if (route.params.imc >= 35 && route.params.imc < 40) {
      setStatus("Obesidad II");
      setColor("#ef233c");
    } else if (route.params.imc >= 30 && route.params.imc < 35) {
      setStatus("Obesidad I");
      setColor("#ff4d6d");
    } else if (route.params.imc >= 25 && route.params.imc < 30) {
      setStatus("Sobrepeso");
      setColor("#f27059");
    } else if (route.params.imc >= 18.5 && route.params.imc < 25) {
      setStatus("Normal");
      setColor("#70e000");
    } else {
      setStatus("Bajo Peso");
      setColor("#ffdd00");
    }
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Este es tu estatus</Text>
        <View style={{ alignItems: "center", paddingTop: 40 }}>
          <Text style={{ fontSize: 20 }}>
            IMC: {route.params.imc.toFixed(2)}
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 8,
              fontWeight: "bold",
              color: color,
            }}
          >
            Condición: {status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputField: {
    height: 55,
    width: 280,
    fontSize: 16,
    padding: 5,
    backgroundColor: "rgb(231, 221, 250)",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "rgb(199, 174, 250)",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "rgb(199, 174, 250)",
    borderRadius: 50,
    height: 50,
    width: 110,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
});
