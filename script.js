// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

    function splitTheNota(sumNota, antalVänner, dricks) 
    //Beräknar totala beloppet.
    set variabel totalBelopp = sumNota * (1 + dricks);       // (1 + dricks): Adderar 1 till dricksprocenten (som är ett decimaltal). Om dricksprocenten är 0.10, blir det 1 + 0.10 = 1.10. sumNota * (1 + dricks): Multiplicerar kostnaden (sumNota) med 1.10. Totala beloppet inklusive dricks!
    //Beräknar vad varje person ska betala. 
    set variabel sumPerPerson = totalBelopp / antalVänner;                                            
    return sumPerPerson;
    end function

    //Här är koden utanför funktionen
    print "Ange summan: ";
    set variabel sumNota = input;
    if (sumNota <= 0) 
        print "Summan måste vara mer än 0!";
    end if   

    print "Ange antal vänner: ";
    set variabel input = antalVänner;
    if (antalVänner <= 0)
        print "Gå inte ut och ät ensam";
    end if

    print "Ange dricks i decimalform (t.ex. 0.10 för 10%): ";
    set variabel input = dricks;
    if (dricks < 0)
        print "Sluta snåla!";
    end if


    //Beräkna beloppet per person
    set variabel sumPerPerson = splitTheNota(sumNota, antalVänner, dricks);

    //Visa resultatet
    print "Varje vän ska betala: " + sumPerPerson + "kr";

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

function play()
    SET variabel ordbok = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";


end function

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;


    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/