// Skriv ett program som tittar på innehållet i två variabler, genom att använda if/else

// Om den första variabeln innehåller "cancel", skriv ut meddelandet "cancelled"
// Om den innehåller något annat än "cancel" eller "admin", skriv ut meddelandet "I dont know you"
// Om den innehåller "admin", kolla på den andra variabeln
// Om variabel två innehåller "cancel", skriv ut meddelandet "cancelled"
// Om variabel två innehåller något annat än "cancel" eller "TheMaster", skriv ut meddelandet "Wrong password"


let avsluta = "Cancel"
let master = "The Master"


if (avsluta === "Cancel" || avsluta === "admin" ){
    console.log("Cancelled")
}
else if (avsluta != "cancel" && master  != "The Master")
 {
     console.log("Wrong password")
 }

else {
    console.log("I´dont Know you..")
}