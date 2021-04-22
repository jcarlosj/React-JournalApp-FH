import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Configuracion de Firebase para la WebApp
const firebaseConfig = {
    apiKey: "AIzaSyD57UZ219nt5BrtIxUdk-a9ULMGWnDAX1I",
    authDomain: "react-journal-app-a77de.firebaseapp.com",
    projectId: "react-journal-app-a77de",
    storageBucket: "react-journal-app-a77de.appspot.com",
    messagingSenderId: "501628176021",
    appId: "1:501628176021:web:b351dd318b3422dff2bd9c"
};
  
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Configuraciones Adicionales
const
    db = firebase.firestore(),                                      //  Obtenemos la base de datos 
    googleAuthProvider = new firebase .auth .GoogleAuthProvider();  //  Obtenemos acceso a la autenticacion (usando Google Sign in)

// Exportamos configuraciones que usará la WebApp
export {
    firebase,
    db,
    googleAuthProvider
}