import React, { Component } from "react";
import { Alert,Image,StyleSheet,Text,TextInput,TouchableOpacity,View,} from "react-native";
import { Actions } from "react-native-router-flux";

export default class RegisterView extends Component {
  state = {
    email: "",
    user: "",
    password: "",
    passwordConfirmation: ""
  };

  validateInput = () => {
    const { email, password, user, passwordConfirmation } = this.state;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;

    if (!email || !password) {
      Alert.alert(
        "Error",
        "Correo electrónico, usuario y contraseña no pueden estar vacíos"
      );
      return false;
    }

    if (!user) {
      Alert.alert(
        "Error",
        "Usuario no puede estar vacío"
      );
      return false;
    }

    if (!emailRegex.test(email)) {
      Alert.alert(
        "Error",
        "Introduce un correo electrónico válido"
      );
      return false;
    }

    if (!passwordRegex.test(password) && !passwordRegex.test(passwordConfirmation)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 carácteres, mayúsculas y minúsculas y al menos 1 carácter especial"
      );
      return false;
    }

    if (password !== passwordConfirmation){
      Alert.alert(
        "Error",
        "Las contraseñas deben coincidir"
      );
      return false;
    }

    return true;
  };

  handleSubmit = () => {
    if (this.validateInput()) {
      Alert.alert("Perfecto", "Te has registrado exitosamente");
      Actions.login()
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder="Ingresa tu correo electronico"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Nombre de Usuario</Text>
        <TextInput
          style={styles.input}
          onChangeText={(user) => this.setState({ user })}
          value={this.state.user}
          placeholder="Ingresa un nombre de usuario"
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          onChangeText={(passwordConfirmation) => this.setState({ passwordConfirmation })}
          value={this.state.passwordConfirmation}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
        <Text style={styles.label}>¿Ya tienes cuenta?</Text>
          <Text style={styles.buttonText2}   onPress={() => Actions.login()}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#000000",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  button2: {
    color: "#000000",
    marginTop: 40,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonText2: {
    color: "blue",
    textAlign: "center",
  },
  label: {
    textAlign: "left",
    width: "80%",
    marginTop: 10,
  },
});
