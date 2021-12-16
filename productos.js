/*localStorage.setItem('nombre','Conita');
localStorage.setItem('tengoHambre','true');
localStorage.setItem('edad','41');
localStorage.setItem('numerodecamisetas',[3,5,6,7,9,10,11,12]);

let nombre = localStorage.getItem('nombre');
console.log(nombre);
let tengoHambre1 = localStorage.getItem('tengoHambre') == 'true';
let numerodeCamisetas2 = localStorage.getItem('numerodecamisetas').split(';');

console.log(typeof tengoHambre1);
console.log(typeof nombre);
console.log(typeof numerodeCamisetas2);
console.log (numerodeCamisetas2);

*/
/* 
let paises = localStorage.getItem('pais');
if (paises == null){ 
    const pais = [];
    for (let index = 0; index < 5; index++) {
    pais.push(prompt("Ingresa un pais"))
} 
   localStorage.setItem('pais', pais);
} else {
    let pais ='';
    const arrayPaises = paises.split(';');
    for (const nombrePaises of arrayPaises){
        pais += nombrePaises + '\n';
    }
    alert(pais); 
}            
*/
const btn = document.getElementsByClassName("nov1");
const btncompra = document.createElement ("button");
//asignar un id o una class
//btncompra.id= 'btn1';
//asignarle nombre
btncompra.innerHTML= "Hace Click aqui para conocer que trae el bolson esta semana";
// escuchar un evento
btncompra.addEventListener('click',function(){
    const h3 = document.createElement ('h3');
    h3.innerHTML ="el bolson trae de verduras trae papa batata zanahoria choclo y cebolla. el bolson de fruta trae mango, kiwi, manzana, banana, mandarinas y naranjas";
    document.body.appendChild(h3);
})

//agregar el boton al dom
document.body.appendChild(btncompra)

/*const btn2 = document.createElement ("button");
//asignar un id o una class
btn2.id= 'btn2';
//asignarle nombre
btn2.innerHTML="Click aqui para conocer el bolson de verduras";
// escuchar un evento
btn2.addEventListener('click',function(){
    const h3 = document.createElement ('h3');
    h3.innerHTML ="el bolson de verduras trae papa, batata, zanahoria, ancho, choclo, y cebolla";
    document.body.appendChild(h3);
})

//agregar el boton al dom
document.body.appendChild(btn)
*/