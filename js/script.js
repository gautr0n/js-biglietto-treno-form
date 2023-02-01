//1 inserire in un input km e con la finestra selezionare il tipo di sconto
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const personalAge = document.getElementById('reduction');
const totalKilometers = document.getElementById('giveKilometers');

//2 calcolare costo al click
let submit = document.querySelector('#submit');
submit.addEventListener('click', function(){
    let takeName = name.value;
    let takeSurname = surname.value;
    let takePersonalAge = personalAge.value;
    let takeTotalKilometers = totalKilometers.value;
    console.log(takeName);
    console.log(takeSurname);
    console.log(takePersonalAge);
    console.log(takeTotalKilometers);

    let ticketCost = (takeTotalKilometers * 0.21).toFixed(2);
    console.log(ticketCost);
    
    //3 calcolare sconti
    let discountAmmount, ticketDiscounted;
    
    if (takePersonalAge < 18){
        discountAmmount = (ticketCost * 0.20).toFixed(2);
        ticketDiscounted = (ticketCost - discountAmmount).toFixed(2);
        console.log(discountAmmount);
        console.log(ticketDiscounted);
    } else if (takePersonalAge > 65){
        discountAmmount = (ticketCost * 0.40).toFixed(2);
        ticketDiscounted = (ticketCost - discountAmmount).toFixed(2);
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
    
    nameSurname.innerText = `${takeName} ${takeSurname}`;
    kilometers.innerText = `${takeTotalKilometers}km`;
    price.innerText = `${ticketCost}$`;
    discount.innerText = `${discountAmmount}$`;
    finalPrice.innerText = `${ticketDiscounted}$`;   
    
});