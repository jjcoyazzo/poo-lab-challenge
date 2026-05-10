window.banco = [

/* =========================
   CLASES ABSTRACTAS E INTERFACES
========================= */

/* 1–20 FUNDAMENTOS */

{
pregunta: "¿Qué es una clase abstracta?",
opciones: [
"Una clase normal",
"Una clase que no puede instanciarse",
"Una variable",
"Una función privada"
],
correcta: 1
},
{
pregunta: "¿Qué elemento suele tener una clase abstracta?",
opciones: [
"Variables globales",
"Funciones virtuales puras",
"Archivos",
"Constructores privados"
],
correcta: 1
},
{
pregunta: "¿Qué significa interfaz en POO?",
opciones: [
"Clase con solo atributos",
"Contrato de métodos",
"Archivo ejecutable",
"Variable global"
],
correcta: 1
},
{
pregunta: "¿Qué palabra se usa para declarar métodos virtuales?",
opciones: [
"public",
"friend",
"virtual",
"static"
],
correcta: 2
},
{
pregunta: "¿Cómo se declara una función virtual pura?",
opciones: [
"virtual void f();",
"void f() = 0;",
"virtual void f() = 0;",
"static void f();"
],
correcta: 2
},
{
pregunta: "¿Qué ocurre si una clase tiene una función virtual pura?",
opciones: [
"Se vuelve abstracta",
"Se elimina",
"Se vuelve privada",
"Se compila normal"
],
correcta: 0
},
{
pregunta: "¿Qué representa Empleado en la práctica?",
opciones: [
"Clase derivada",
"Clase abstracta",
"Interfaz",
"Variable"
],
correcta: 1
},
{
pregunta: "¿Qué representa IResponsable?",
opciones: [
"Constructor",
"Interfaz",
"Archivo",
"Objeto"
],
correcta: 1
},
{
pregunta: "¿Qué método obliga a implementar la interfaz?",
opciones: [
"trabajar()",
"main()",
"generarReporte()",
"mostrarInformacion()"
],
correcta: 2
},
{
pregunta: "¿Qué clases heredan de Empleado?",
opciones: [
"main y vector",
"Programador, AdministradorRed y SoporteTecnico",
"Solo Programador",
"Solo AdministradorRed"
],
correcta: 1
},
{
pregunta: "¿Qué ventaja tiene una interfaz?",
opciones: [
"Eliminar herencia",
"Definir comportamientos comunes",
"Reducir compilación",
"Evitar métodos"
],
correcta: 1
},
{
pregunta: "¿Qué se sobrescribe en las clases derivadas?",
opciones: [
"Variables globales",
"Métodos",
"Archivos",
"Bibliotecas"
],
correcta: 1
},
{
pregunta: "¿Qué permite el polimorfismo?",
opciones: [
"Muchos archivos",
"Distintos comportamientos",
"Eliminar objetos",
"Evitar clases"
],
correcta: 1
},
{
pregunta: "¿Qué ocurre si no se implementa un método puro?",
opciones: [
"No compila",
"Funciona normal",
"Se ignora",
"Se elimina"
],
correcta: 0
},
{
pregunta: "¿Qué método demuestra comportamiento distinto?",
opciones: [
"main()",
"trabajar()",
"cout",
"cin"
],
correcta: 1
},
{
pregunta: "¿Qué hace Programador en trabajar()?",
opciones: [
"Reparar red",
"Desarrollar código",
"Atender tickets",
"Eliminar usuarios"
],
correcta: 1
},
{
pregunta: "¿Qué hace AdministradorRed?",
opciones: [
"Desarrollar videojuegos",
"Monitorear servidores",
"Vender productos",
"Editar imágenes"
],
correcta: 1
},
{
pregunta: "¿Qué hace SoporteTecnico?",
opciones: [
"Administrar base de datos",
"Atender incidencias",
"Crear videojuegos",
"Compilar programas"
],
correcta: 1
},
{
pregunta: "¿Qué permite usar una clase base?",
opciones: [
"Polimorfismo",
"Eliminar métodos",
"Evitar objetos",
"Eliminar herencia"
],
correcta: 0
},
{
pregunta: "¿Qué tipo de programación usa interfaces?",
opciones: [
"Estructurada",
"Orientada a objetos",
"Lineal",
"Procedimental"
],
correcta: 1
},

/* 21–40 ANÁLISIS */

{
pregunta: "¿Por qué usar Empleado*?",
opciones: [
"Reducir memoria",
"Permitir polimorfismo",
"Eliminar clases",
"Evitar funciones"
],
correcta: 1
},
{
pregunta: "¿Qué permite vector<Empleado*>?",
opciones: [
"Guardar distintos empleados",
"Eliminar memoria",
"Evitar objetos",
"Guardar enteros"
],
correcta: 0
},
{
pregunta: "¿Qué ocurre al llamar trabajar() desde un puntero base?",
opciones: [
"Siempre ejecuta base",
"Depende del objeto real",
"Da error",
"No funciona"
],
correcta: 1
},
{
pregunta: "¿Qué se reutiliza mediante abstracción?",
opciones: [
"Interfaz común",
"Variables",
"Archivos",
"Compilador"
],
correcta: 0
},
{
pregunta: "¿Qué evita usar interfaces?",
opciones: [
"Organización",
"Código rígido",
"Objetos",
"Herencia"
],
correcta: 1
},
{
pregunta: "¿Qué ventaja tiene el diseño abstracto?",
opciones: [
"Mayor flexibilidad",
"Más errores",
"Más if",
"Más memoria"
],
correcta: 0
},
{
pregunta: "¿Qué se comparte entre empleados?",
opciones: [
"Nombre de métodos",
"Dirección memoria",
"Archivos",
"Compilador"
],
correcta: 0
},
{
pregunta: "¿Qué cambia entre empleados?",
opciones: [
"Comportamiento",
"Compilador",
"Bibliotecas",
"Variables globales"
],
correcta: 0
},
{
pregunta: "¿Qué representa trabajar()?",
opciones: [
"Variable",
"Comportamiento",
"Archivo",
"Compilador"
],
correcta: 1
},
{
pregunta: "¿Qué define el tipo real del objeto?",
opciones: [
"Instancia creada",
"Vector",
"Archivo",
"Compilador"
],
correcta: 0
},
{
pregunta: "¿Qué se ejecuta realmente?",
opciones: [
"Método derivado",
"Método base siempre",
"Constructor",
"Destructor"
],
correcta: 0
},
{
pregunta: "¿Qué facilita mantenimiento?",
opciones: [
"Código flexible",
"Muchos if",
"Variables globales",
"Duplicación"
],
correcta: 0
},
{
pregunta: "¿Qué ocurre si agregas nueva clase derivada?",
opciones: [
"Rompe sistema",
"No afecta diseño general",
"Elimina polimorfismo",
"Da error"
],
correcta: 1
},
{
pregunta: "¿Qué ayuda a escalar el sistema?",
opciones: [
"Polimorfismo",
"Variables globales",
"Archivos",
"Memoria"
],
correcta: 0
},
{
pregunta: "¿Qué ventaja tiene generarReporte()?",
opciones: [
"Comportamiento común",
"Eliminar objetos",
"Evitar clases",
"Reducir RAM"
],
correcta: 0
},
{
pregunta: "¿Qué permite una interfaz?",
opciones: [
"Definir obligaciones",
"Eliminar métodos",
"Evitar objetos",
"Eliminar clases"
],
correcta: 0
},
{
pregunta: "¿Qué sucede sin virtual?",
opciones: [
"Polimorfismo correcto",
"Pierde comportamiento dinámico",
"No afecta",
"Mejora rendimiento"
],
correcta: 1
},
{
pregunta: "¿Qué simplifica el polimorfismo?",
opciones: [
"Lógica del sistema",
"Compilación",
"Hardware",
"Archivos"
],
correcta: 0
},
{
pregunta: "¿Qué representa un buen diseño?",
opciones: [
"Muchos if",
"Uso de abstracción",
"Más variables",
"Más memoria"
],
correcta: 1
},
{
pregunta: "¿Qué se busca con interfaces?",
opciones: [
"Reutilización",
"Duplicación",
"Desorden",
"Eliminar herencia"
],
correcta: 0
},

/* 41–60 DISEÑO */

{
pregunta: "¿Qué ventaja tiene una clase abstracta?",
opciones: [
"Define estructura común",
"Elimina objetos",
"Evita herencia",
"Reduce memoria"
],
correcta: 0
},
{
pregunta: "¿Qué mejora el diseño orientado a objetos?",
opciones: [
"Abstracción",
"Duplicación",
"Variables globales",
"Muchos switch"
],
correcta: 0
},
{
pregunta: "¿Qué facilita agregar nuevos empleados?",
opciones: [
"Interfaces",
"Variables",
"Archivos",
"Compilador"
],
correcta: 0
},
{
pregunta: "¿Qué evita múltiples if/switch?",
opciones: [
"Polimorfismo",
"Variables",
"Archivos",
"Memoria"
],
correcta: 0
},
{
pregunta: "¿Qué define una interfaz?",
opciones: [
"Comportamientos obligatorios",
"Variables privadas",
"Archivos",
"Objetos"
],
correcta: 0
},
{
pregunta: "¿Qué indica diseño moderno?",
opciones: [
"Uso de abstracción",
"Muchos condicionales",
"Duplicación",
"Más memoria"
],
correcta: 0
},
{
pregunta: "¿Qué permite reutilizar código?",
opciones: [
"Herencia",
"Duplicación",
"Variables globales",
"Archivos"
],
correcta: 0
},
{
pregunta: "¿Qué mejora extensibilidad?",
opciones: [
"Interfaces",
"Condicionales",
"Variables globales",
"Memoria"
],
correcta: 0
},
{
pregunta: "¿Qué se busca en software empresarial?",
opciones: [
"Flexibilidad",
"Rigidez",
"Duplicación",
"Desorden"
],
correcta: 0
},
{
pregunta: "¿Qué ayuda a mantener orden?",
opciones: [
"Separar responsabilidades",
"Duplicar código",
"Más variables",
"Más if"
],
correcta: 0
},

/* 61–80 AVANZADO */

{
pregunta: "¿Qué tipo de enlace usa polimorfismo?",
opciones: [
"Dinámico",
"Manual",
"Estático",
"Local"
],
correcta: 0
},
{
pregunta: "¿Qué ocurre en tiempo de ejecución?",
opciones: [
"Se decide método real",
"Se elimina objeto",
"Se compila otra vez",
"Se borra memoria"
],
correcta: 0
},
{
pregunta: "¿Qué representa IResponsable?",
opciones: [
"Contrato de comportamiento",
"Variable",
"Archivo",
"Compilador"
],
correcta: 0
},
{
pregunta: "¿Qué sucede si una clase no implementa interfaz?",
opciones: [
"Debe ser abstracta",
"Funciona normal",
"No usa métodos",
"Elimina herencia"
],
correcta: 0
},
{
pregunta: "¿Qué permite un menú dinámico?",
opciones: [
"Interacción usuario",
"Eliminar objetos",
"Reducir RAM",
"Evitar funciones"
],
correcta: 0
},
{
pregunta: "¿Qué mejora la reutilización?",
opciones: [
"Interfaces y abstracción",
"Duplicación",
"Variables globales",
"Archivos"
],
correcta: 0
},
{
pregunta: "¿Qué define arquitectura flexible?",
opciones: [
"Componentes reutilizables",
"Muchos if",
"Más memoria",
"Más variables"
],
correcta: 0
},
{
pregunta: "¿Qué característica tiene una interfaz?",
opciones: [
"No implementa lógica completa",
"Elimina métodos",
"Evita herencia",
"Es una variable"
],
correcta: 0
},
{
pregunta: "¿Qué ventaja tiene el polimorfismo empresarial?",
opciones: [
"Adaptabilidad",
"Rigidez",
"Más errores",
"Más memoria"
],
correcta: 0
},
{
pregunta: "¿Qué representa un sistema bien diseñado?",
opciones: [
"Comportamiento adaptable",
"Muchos condicionales",
"Duplicación",
"Desorden"
],
correcta: 0
}

];