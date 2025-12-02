//SCRIVI UN PROGRAMMA CHE STAMPI I NUMERI DA 1 A 100 
//PER I MULTIPLI DI 3 STAMPO "FIZZ"
//PER I PER I MULTIPLI DI 5 STAMPO "BUZZ"
//PER I MULTIPLI CHE SONO SIA DI 3 CHE DI 5 STAMPO "FIZZBUZZ"

//CREO IL CONTATORE CON IL CICLO FOR

for(let i = 1; i <= 100; i++){
//FIZZ per i multipli di 3 
    if (i % 3 === 0) {
        console.log("fizz")
    }

    //BUZZ per i multipli di 5
    if (i % 5 === 0)
        console.log("buzz")

    //ELSE 
    else{
        console.log(i)
    }
}
