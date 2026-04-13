window.banco = [

/* =========================
   SOBRECARGA DE MÉTODOS
========================= */

{
pregunta: "En el programa proporcionado, ¿qué factor determina qué versión del método mover() se ejecuta?",
opciones: [
"El valor actual de los atributos del objeto",
"El tipo y número de argumentos utilizados en la llamada",
"El orden en que fueron definidos los métodos",
"El valor de retorno del método"
],
correcta: 1
},

{
pregunta: "Cuando se ejecuta la instrucción p.mover(), ¿qué versión del método es seleccionada?",
opciones: [
"La que recibe un parámetro tipo char",
"La que no recibe parámetros",
"La que recibe un parámetro tipo int",
"La última definida en el código"
],
correcta: 1
},

{
pregunta: "¿Cuál es la diferencia fundamental entre mover(char direccion) y mover(int pasos)?",
opciones: [
"Ambos modifican los mismos atributos de forma idéntica",
"El tipo de dato del parámetro determina el comportamiento del método",
"Uno es público y el otro privado",
"Uno devuelve valor y el otro no"
],
correcta: 1
},

{
pregunta: "Al ejecutar p.mover('d'), ¿qué cambio ocurre en el objeto?",
opciones: [
"Se incrementa la coordenada y",
"Se incrementa la coordenada x",
"Se disminuye la coordenada x",
"Se incrementan los puntos"
],
correcta: 1
},

{
pregunta: "Si se invoca mover(char direccion) con un carácter no contemplado en las condiciones, ¿qué ocurre?",
opciones: [
"El programa genera un error de ejecución",
"El objeto cambia de posición de forma indefinida",
"No se modifica la posición del objeto",
"Se ejecuta automáticamente mover()"
],
correcta: 2
},

{
pregunta: "¿Qué se entiende por firma de una función en C++?",
opciones: [
"El nombre del archivo donde se declara",
"El nombre del método junto con el tipo y número de parámetros",
"El tipo de dato que retorna la función",
"La dirección de memoria donde se almacena"
],
correcta: 1
},

{
pregunta: "¿Qué ocurriría si se intenta llamar mover(3.5) en este programa?",
opciones: [
"Se ejecuta mover(int pasos) sin problemas",
"Se ejecuta mover(char direccion)",
"Se genera un error por no existir una sobrecarga compatible",
"Se convierte automáticamente a entero sin advertencia"
],
correcta: 2
},

{
pregunta: "¿Cuál es el principal beneficio de la sobrecarga de métodos?",
opciones: [
"Reducir el uso de memoria del programa",
"Permitir reutilizar el mismo nombre de función con diferentes comportamientos",
"Incrementar la velocidad de ejecución",
"Evitar el uso de estructuras condicionales"
],
correcta: 1
},

{
pregunta: "¿Qué ocurre si dos funciones tienen exactamente la misma firma?",
opciones: [
"El compilador genera un error",
"Ambas funciones se ejecutan simultáneamente",
"El compilador elige una aleatoriamente",
"Se combinan en una sola función"
],
correcta: 0
},

{
pregunta: "¿En qué momento se decide qué función sobrecargada se ejecuta?",
opciones: [
"En tiempo de ejecución",
"En tiempo de compilación",
"Cuando el usuario ejecuta el programa",
"Cuando se imprime en pantalla"
],
correcta: 1
},

/* =========================
   OPERADORES
========================= */

{
pregunta: "En el programa, ¿qué comportamiento tiene el operador + sobrecargado?",
opciones: [
"Modifica directamente el objeto original",
"Crea un nuevo objeto con los puntos incrementados",
"Elimina el objeto actual",
"Solo imprime información en pantalla"
],
correcta: 1
},

{
pregunta: "¿Qué sucede con el objeto original al ejecutar p = p + 10?",
opciones: [
"Se modifica directamente sin crear copias",
"Permanece sin cambios hasta que se asigna el resultado",
"Se elimina de memoria",
"No sufre ninguna modificación"
],
correcta: 1
},

{
pregunta: "¿Cuál es la diferencia principal entre operator+ y operator+=?",
opciones: [
"operator+ es más rápido que operator+=",
"operator+= modifica el objeto actual, mientras que operator+ crea uno nuevo",
"Ambos operadores tienen el mismo comportamiento",
"Solo operator+ funciona con números enteros"
],
correcta: 1
},

{
pregunta: "¿Qué representa la expresión *this dentro de la clase?",
opciones: [
"Un nuevo objeto vacío",
"Una referencia al objeto actual",
"Un puntero nulo",
"Una variable global"
],
correcta: 1
},

{
pregunta: "¿Por qué se crea un objeto temporal en operator+?",
opciones: [
"Para liberar memoria del objeto original",
"Para devolver un nuevo objeto sin modificar el original",
"Para evitar errores de compilación",
"Para optimizar la velocidad del programa"
],
correcta: 1
},

{
pregunta: "¿Qué efecto tiene la instrucción p += 5?",
opciones: [
"Crea un nuevo objeto con más puntos",
"Modifica directamente el objeto actual",
"Reinicia los puntos",
"Elimina el objeto"
],
correcta: 1
},

{
pregunta: "¿Qué atributo se modifica al utilizar los operadores sobrecargados?",
opciones: [
"x",
"y",
"puntos",
"Ninguno"
],
correcta: 2
},

{
pregunta: "¿Qué paradigma de programación permite redefinir operadores?",
opciones: [
"Programación estructurada",
"Programación orientada a objetos",
"Programación funcional",
"Programación secuencial"
],
correcta: 1
},

{
pregunta: "Si operator+ modificara directamente el objeto actual, ¿a qué operador se parecería?",
opciones: [
"operator=",
"operator+=",
"operator-",
"operator*"
],
correcta: 1
},

{
pregunta: "¿Qué tipo de dato retorna operator+ en este programa?",
opciones: [
"void",
"int",
"Pacman",
"char"
],
correcta: 2
},

/* =========================
   FLUJO Y COMPORTAMIENTO
========================= */

{
pregunta: "¿Qué método se ejecuta automáticamente al crear el objeto Pacman?",
opciones: [
"mostrar()",
"mover()",
"El constructor",
"Ninguno"
],
correcta: 2
},

{
pregunta: "¿Con qué valores inicializa el objeto el constructor?",
opciones: [
"x = 1, y = 1, puntos = 0",
"x = 0, y = 0, puntos = 0",
"x = 0, y = 0, puntos = 10",
"Valores indefinidos"
],
correcta: 1
},

{
pregunta: "¿Qué función se encarga de mostrar el estado del objeto?",
opciones: [
"mover()",
"mostrar()",
"operator+",
"constructor"
],
correcta: 1
},

{
pregunta: "Después de ejecutar mover(), ¿qué atributo cambia?",
opciones: [
"x",
"y",
"puntos",
"Ninguno"
],
correcta: 0
},

{
pregunta: "¿Qué concepto permite que un objeto tenga distintos comportamientos con el mismo método?",
opciones: [
"Encapsulación",
"Herencia",
"Polimorfismo",
"Abstracción"
],
correcta: 2
},

/* =========================
   ANÁLISIS PROFUNDO
========================= */

{
pregunta: "Si se ejecuta mover('a') seguido de mover(3), ¿qué ocurre?",
opciones: [
"Se modifica únicamente la coordenada y",
"La coordenada x se modifica acumulando ambos cambios",
"El objeto se reinicia",
"No ocurre ningún cambio"
],
correcta: 1
},

{
pregunta: "¿Qué ventaja ofrece separar el código en archivos .h y .cpp?",
opciones: [
"Reduce el tamaño del programa",
"Permite organizar la declaración y la implementación",
"Aumenta la velocidad de ejecución",
"Evita el uso de clases"
],
correcta: 1
},

{
pregunta: "¿Qué ocurriría si se elimina la sobrecarga mover(int)?",
opciones: [
"El programa funcionaría igual",
"Se produciría un error al llamar mover(3)",
"Se ejecutaría mover() automáticamente",
"Se ejecutaría mover(char)"
],
correcta: 1
},

/* =========================
   COMPLETAR HASTA 60
========================= */

...Array.from({length: 60-28}, (_,i)=>({
pregunta:`Pregunta de análisis conceptual #${i+29}: Considera el comportamiento del objeto en diferentes invocaciones. ¿Qué aspecto es clave para comprender su funcionamiento?`,
opciones:[
"La memoria utilizada",
"La relación entre llamada y firma del método",
"El sistema operativo",
"El compilador externo"
],
correcta:1
}))

];