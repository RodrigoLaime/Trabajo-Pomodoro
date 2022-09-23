/* https://www.youtube.com/watch?v=YfaiDc585Eo&ab_channel=VidaMRR-Programacionweb */
const tasks = []; /* se van a almacenar las tareas que se van ejecutando */
let time = 0;/* va a llevar la cuenta regresiva */
let timer = null;/* va a llevar una funcion setaInterval que nos va a permitir ejecutar un pedaso de codigo cada cierto tiempo */
let timerBreak = null;/* para los 5 minutos de descanso */
let current = null; /* nos va a decir cual es la tarea actual que se esta ejecutando */

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const dorm = document.querySelector('#form');

form.addEventListener('submit', e => { //funcionn cuando se active el submit
  e.preventDefault(); //anulamos el funcionamiento de enviar por defecto
  if (itTask.value === '') { //input text === nada
    createTask(itTask.value); //funcion ?
    itTask.value = ''; //vaciamos el input
    renderTasks(); //funcion 
  }
})
function createTask(value) {
  const newTask = {
    id: (Math.random() * 100).toString(36).slice(3),//genera un valor de enrte 0 y 1 que se multiplica por 100 y da un resultaso decimal, lo transformamos a la base 36, esto genera uno caracteres extraños y le quitamos esos caracteres
    title: value,
    complete: false
  };
  tasks.unshift(newTask); //lo agrega al princio del array
}

function renderTasks() { //va a permitir tomar cada uno de los elementos de las tareas y generar un html que va  a inyectar a un contener 
  s
}