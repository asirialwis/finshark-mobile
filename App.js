import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const firebaseConfig = {

  apiKey: "AIzaSyBtzKJSU7FgABAEl9AX-6ty-JbVzMlCGP4",
  authDomain: "fir-auth-tutorial-23abd.firebaseapp.com",
  projectId: "fir-auth-tutorial-23abd",
  storageBucket: "fir-auth-tutorial-23abd.appspot.com",
  messagingSenderId: "438234252998",
  appId: "1:438234252998:web:c26df2722e0a709b3b39c7",
  measurementId: "G-46MG7BQE7E"

};


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
