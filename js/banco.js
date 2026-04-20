window.banco = [

/* =========================
   HERENCIA EN C++
========================= */

{
pregunta: "¿Qué función cumple la directiva #include <iostream> dentro del programa y qué consecuencias tendría eliminarla?",
opciones: [
"Permite usar estructuras de datos avanzadas; sin ella el programa no compila",
"Habilita entrada y salida estándar; sin ella no se pueden usar cout ni endl",
"Define clases automáticamente",
"Optimiza el uso de memoria"
],
correcta: 1
},

{
pregunta: "¿Cuál es la diferencia fundamental entre #include <iostream> y #include \"Empleado.h\"?",
opciones: [
"No hay diferencia",
"Uno incluye librerías del sistema y el otro archivos definidos por el usuario",
"Ambos solo funcionan en Linux",
"Empleado.h es opcional"
],
correcta: 1
},

{
pregunta: "¿Qué problema específico resuelven las guardas #ifndef, #define y #endif en Empleado.h?",
opciones: [
"Reducen el tamaño del código",
"Evitan inclusión múltiple del mismo archivo",
"Mejoran la velocidad del programa",
"Permiten usar herencia"
],
correcta: 1
},

{
pregunta: "Si se elimina using namespace std;, ¿qué cambio se tendría que hacer en el código?",
opciones: [
"Ninguno",
"Agregar std:: antes de cout, string, endl, etc.",
"Eliminar los cout",
"Cambiar el tipo string"
],
correcta: 1
},

{
pregunta: "¿Por qué se utiliza protected en lugar de private en los atributos de la clase Empleado?",
opciones: [
"Para que cualquier clase pueda acceder",
"Para permitir acceso a clases derivadas pero no desde main",
"Para mejorar rendimiento",
"Porque es obligatorio"
],
correcta: 1
},

{
pregunta: "¿Qué implicación tendría declarar los atributos como private en lugar de protected?",
opciones: [
"Las clases derivadas no podrían acceder directamente a ellos",
"El programa no compilaría",
"Se perdería la herencia",
"Se duplicaría la memoria"
],
correcta: 0
},

{
pregunta: "¿Qué representa la línea string nombre; dentro de la clase?",
opciones: [
"Una función",
"Un atributo que almacena datos del objeto",
"Una constante global",
"Un puntero"
],
correcta: 1
},

{
pregunta: "En el constructor Empleado(string n, int e, double s), ¿qué representan los parámetros?",
opciones: [
"Variables temporales para pruebas",
"Datos que se asignarán a los atributos del objeto",
"Funciones internas",
"Direcciones de memoria"
],
correcta: 1
},

{
pregunta: "¿Qué diferencia hay entre un constructor y un método común?",
opciones: [
"El constructor no tiene nombre",
"El constructor se ejecuta automáticamente al crear el objeto",
"El método común no puede retornar valores",
"El constructor no puede recibir parámetros"
],
correcta: 1
},

{
pregunta: "¿Qué ocurre si no se define ningún constructor en la clase?",
opciones: [
"El programa no compila",
"El compilador crea uno por defecto",
"Se eliminan los atributos",
"No se pueden crear objetos"
],
correcta: 1
},

{
pregunta: "¿Qué significa el operador :: en Empleado::Empleado(...) ?",
opciones: [
"Acceso a memoria dinámica",
"Resolución de ámbito",
"Operador lógico",
"Conversión de tipo"
],
correcta: 1
},

{
pregunta: "¿Por qué es necesario usar Empleado:: antes del nombre del método en el archivo .cpp?",
opciones: [
"Para evitar errores de sintaxis",
"Para indicar a qué clase pertenece la implementación",
"Para mejorar rendimiento",
"Para declarar variables"
],
correcta: 1
},

{
pregunta: "¿Qué ocurriría si omites Empleado:: en la implementación de un método?",
opciones: [
"Se ejecuta igual",
"El compilador genera error",
"Se vuelve privado",
"Se ignora el método"
],
correcta: 1
},

{
pregunta: "¿Qué significa que un método sea virtual?",
opciones: [
"Que no existe realmente",
"Que puede ser redefinido en clases derivadas",
"Que es obligatorio",
"Que solo funciona en main"
],
correcta: 1
},

{
pregunta: "¿Por qué calcularSalario() es virtual en la clase base?",
opciones: [
"Para permitir diferentes implementaciones en clases derivadas",
"Para ahorrar memoria",
"Para evitar herencia",
"Para hacerlo más rápido"
],
correcta: 0
},

{
pregunta: "¿Qué ocurriría si calcularSalario() no fuera virtual?",
opciones: [
"No se podría usar",
"Se perdería el comportamiento dinámico",
"El programa sería más rápido",
"Se eliminaría el método"
],
correcta: 1
},

{
pregunta: "¿Qué implica la declaración class EmpleadoTiempoCompleto : public Empleado?",
opciones: [
"Creación de una variable",
"Relación de herencia",
"Uso de punteros",
"Conversión de tipos"
],
correcta: 1
},

{
pregunta: "¿Qué significa que la herencia sea pública?",
opciones: [
"Todos pueden modificar la clase",
"Los miembros mantienen su nivel de acceso",
"Se vuelven privados",
"Se vuelven estáticos"
],
correcta: 1
},

{
pregunta: "¿Qué atributos hereda EmpleadoTiempoCompleto?",
opciones: [
"Solo bono",
"nombre, edad y salario",
"Ninguno",
"Todos los del sistema"
],
correcta: 1
},

{
pregunta: "¿Qué ventaja principal ofrece la herencia en este programa?",
opciones: [
"Eliminar variables",
"Reutilizar código común",
"Aumentar memoria",
"Reducir clases"
],
correcta: 1
},

{
pregunta: "¿Qué hace la sintaxis : Empleado(n, e, s) en el constructor derivado?",
opciones: [
"Crea otro objeto",
"Llama al constructor de la clase base",
"Elimina atributos",
"Define variables"
],
correcta: 1
},

{
pregunta: "¿Qué ocurriría si no se llama al constructor base?",
opciones: [
"No pasa nada",
"Se inicializan incorrectamente los atributos heredados",
"Se elimina la herencia",
"Se duplican variables"
],
correcta: 1
},

{
pregunta: "¿En qué orden se ejecutan los constructores?",
opciones: [
"Primero derivada, luego base",
"Primero base, luego derivada",
"Simultáneamente",
"Aleatoriamente"
],
correcta: 1
},

{
pregunta: "¿Qué significa override en un método?",
opciones: [
"Crear método nuevo",
"Reemplazar implementación de la clase base",
"Eliminar método",
"Cambiar tipo"
],
correcta: 1
},

{
pregunta: "¿Qué ocurriría si la firma del método es distinta pero se usa override?",
opciones: [
"No pasa nada",
"Error de compilación",
"Se ejecuta igual",
"Se ignora override"
],
correcta: 1
},

{
pregunta: "¿Qué es emp en Empleado emp(\"Juan\", 30, 5000);?",
opciones: [
"Clase",
"Objeto",
"Función",
"Puntero"
],
correcta: 1
},

{
pregunta: "¿Qué sucede en memoria al crear emp?",
opciones: [
"Se elimina memoria",
"Se reserva espacio para el objeto",
"No ocurre nada",
"Se duplica memoria"
],
correcta: 1
},

{
pregunta: "¿Qué método se ejecuta automáticamente al crear un objeto?",
opciones: [
"mostrarInfo",
"main",
"constructor",
"calcularSalario"
],
correcta: 2
},

{
pregunta: "¿Qué significa el operador . en emp.mostrarInfo();?",
opciones: [
"Acceso a archivos",
"Acceso a miembros del objeto",
"Operador matemático",
"Comparación"
],
correcta: 1
},

{
pregunta: "¿Qué pasaría si intentas acceder a un atributo protected desde main?",
opciones: [
"Funciona",
"Error de compilación",
"Se vuelve público",
"No hace nada"
],
correcta: 1
},

{
pregunta: "¿Por qué empTC.calcularSalario() da un resultado distinto?",
opciones: [
"Por error",
"Porque sobrescribe el método",
"Porque cambia el tipo",
"Porque usa memoria distinta"
],
correcta: 1
},

{
pregunta: "¿Cómo sabe el programa qué versión del método ejecutar?",
opciones: [
"Por el nombre del archivo",
"Por el tipo del objeto",
"Por el sistema operativo",
"Por el usuario"
],
correcta: 1
},

{
pregunta: "¿Qué es el polimorfismo en este contexto?",
opciones: [
"Uso de múltiples archivos",
"Mismo método con distintos comportamientos",
"Uso de memoria",
"Uso de variables"
],
correcta: 1
},

{
pregunta: "¿Qué pasaría si creas un objeto derivado pero lo manejas como base?",
opciones: [
"No funciona",
"Se usa comportamiento base o polimórfico",
"Se elimina el objeto",
"No compila"
],
correcta: 1
},

...Array.from({length: 50-35}, (_,i)=>({
pregunta:`Pregunta de análisis profundo #${i+36}: Analiza la interacción entre clases base y derivadas. ¿Qué aspecto es clave para entender el comportamiento del programa?`,
opciones:[
"La memoria utilizada",
"La relación entre herencia y sobrescritura de métodos",
"El sistema operativo",
"El compilador"
],
correcta:1
}))

];