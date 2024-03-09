// Richiesta al cliente il numero di km che vuole percorre
const km = parseInt( prompt("Inserire i km che si vogliono percorre:")); //number
console.log(km);
// Richiesta al cliente la propria età
const eta = parseInt (prompt("Inserire l'età:") );
console.log(eta);
 //prezzo al km
 const  pricekm = 0.21;
 //sconto
 let sconto
 //prezzo del biglietto in base i km inseriti
 const subprice = km * pricekm;
 console.log(subprice);

 //SE eta < di 18 anni verrà applicato uno sconto del 20%
 if(eta < 18){
    sconto = subprice * 0.2;
 }else if (eta > 65){ //ALTRIMENTI SE eta > 65 anni verrà applicato uno sconto del 40%
    sconto = subprice * 0.4;
 } else{ //ALTRIMENTI se eta è compreso tra 18 e 65 non verrà applicato nessuno sconto 
    sconto = 0
 }
 //calcolo del prezzo finale
 const prezzo = subprice - sconto;
 console.log(prezzo.toFixed(2),prezzo); 
