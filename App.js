import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import firebaseConfig from './firebaseConfig';
import AuthScreen from './components/AuthScreen';
import AuthenticatedScreen from './components/AuthenticatedScreen';
import Toast from 'react-native-toast-message';

const app = initializeApp(firebaseConfig);

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // If user is already authenticated, log out
        console.log('User logged out successfully!');
        await signOut(auth);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'User logged out successfully!',
          visibilityTime: 2000, // Duration in milliseconds
          position: 'top', // 'top' or 'bottom'
        });
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message,
        visibilityTime: 4000,
        position: 'top',
      });
    }
  };

  return (
    <>
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <AuthenticatedScreen user={user} handleAuthentication={handleAuthentication} />
      ) : (
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          auth={auth}
        />
      )}
    </ScrollView>
     <Toast ref={(ref) => Toast.setRef(ref)} />
     </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
