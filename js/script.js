//1 inserire in un input km e con la finestra selezionare il tipo di sconto
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const personalAge = document.getElementById('reduction');
const totalKilometers = document.getElementById('giveKilometers');
const display = document.querySelector('.d-none');

//2 calcolare costo al click
let submit = document.querySelector('#submit');
submit.addEventListener('click', function(){
    display.classList.remove('d-none');
    let takeName = name.value;
    let takeSurname = surname.value;
    let takePersonalAge = personalAge.value;
    let takeTotalKilometers = totalKilometers.value;
    console.log(takeName);
    console.log(takeSurname);
    console.log(takePersonalAge);
    console.log(takeTotalKilometers);

    let ticketCost = takeTotalKilometers * 0.21;
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

    //3.5 calcolo vagone e numero treno
    let trainCodeNumber = Math.floor(Math.random() * 2000 + 1000);
    console.log(trainCodeNumber);
    let wagonNumber = Math.floor(Math.random() * 10 + 1);
    console.log(wagonNumber);
    
    //4 stampare tutto a video
    const nameSurname = document.getElementById('nameSurname');
    const kilometers = document.getElementById('kilometers');
    const price = document.getElementById('price');
    const discount = document.getElementById('discount');
    const finalPrice = document.getElementById('finalPrice');
    const trainCode = document.getElementById('trainCode');
    const wagon = document.getElementById('wagon');
    
    nameSurname.innerText = `${takeName} ${takeSurname}`;
    kilometers.innerText = `${takeTotalKilometers}km`;
    price.innerText = `${ticketCost}$`;
    discount.innerText = `${discountAmmount}$`;
    finalPrice.innerText = `${ticketDiscounted}$`;
    trainCode.innerText = `Codice Treno: ${trainCodeNumber}`;
    wagon.innerText = `Vagone N°${wagonNumber}`;
    
});