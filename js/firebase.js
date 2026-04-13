import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyACFedcHVWTd7ZSo7t948IXhJoYb5HuuEU",
  authDomain: "poo-lab-challenge.firebaseapp.com",
  databaseURL: "https://poo-lab-challenge-default-rtdb.firebaseio.com",
  projectId: "poo-lab-challenge"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🔥 MISMA ESTRUCTURA QUE SO
export function guardarResultado(nombre, grupo, puntaje){
  push(ref(db, 'resultados_poo'), {
    nombre,
    grupo,
    puntaje,
    fecha: new Date().toLocaleString()
  });
}