// Skriv en upphöjt till-funktion. Den skall ta emot två värden. Det första värdet skall multipliceras med sig självt så många gånger som värde nummer två. Dvs om du skickar in 2 och 4, så skall funktionen returnera värdet av 2*2*2*2

function pow(a, b) {
    let val = 2*2*2*2
    for (let i = 0; i < 4; i++) {
      val *= 2
    }
    return val
  }
  console.log(pow(2,4))