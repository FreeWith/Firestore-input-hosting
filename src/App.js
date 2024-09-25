import './App.css';
import db from "./firebase.js";
import {setDoc,doc} from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js';


function App() {
//Add a new document in collection "cities"
setDoc(doc(db, "cities", "Yamaguchi"), {
  name: "Shinsaku Takasugi",
  state: "kyushu",
  country: "japan"
});

}

export default App;
