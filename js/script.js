//1 inserire in un input km e con la finestra selezionare il tipo di sconto
const name = prompt('inserisci il tuo nome');
const surname = prompt('inserisci il tuo cognome');
const personalAge = prompt('inserisci la tua età');
const totalKilometers = prompt('inserisci la quantita di km che intendi percorrere');
console.log(name);
console.log(surname);
console.log(personalAge);
console.log(totalKilometers);

//2 calcolare costo al click
let ticketCost = (totalKilometers * 0.21).toFixed(2);
console.log(ticketCost);

//3 calcolare sconti
let discountAmmount, ticketDiscounted;

if (personalAge < 18){
    discountAmmount = (ticketCost * 0.20).toFixed(2);
    ticketDiscounted = ticketCost - discountAmmount;
    console.log(discountAmmount);
    console.log(ticketDiscounted);
} else if (personalAge > 65){
    discountAmmount = (ticketCost * 0.40).toFixed(2);
    ticketDiscounted = ticketCost - discountAmmount;
    console.log(discountAmmount);
    console.log(ticketDiscounted);
} else{
    discountAmmount = 0
    ticketDiscounted = ticketCost
    console.log(discountAmmount);
    console.log(ticketCost);
}

//4 stampare tutto a video
const nameSurname = document.getElementById('nameSurname');
const kilometers = document.getElementById('kilometers');
const price = document.getElementById('price');
const discount = document.getElementById('discount');
const finalPrice = document.getElementById('finalPrice');

nameSurname.innerText = `${name} ${surname}`;
kilometers.innerText = `${totalKilometers}km`;
price.innerText = `${ticketCost}$`;
discount.innerText = `${discountAmmount}$`;
finalPrice.innerText = `${ticketDiscounted}$`;