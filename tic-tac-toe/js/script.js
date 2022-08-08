function joga(celula) {
    celulaclicada = document.getElementById(celula).innerHTML;
    if (celulaclicada == "X" || celulaclicada == "O") {
        alert("Este quadrado já foi escolhido");
    } else {
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X") {
            letra == "O";
        } else {
            letra = "X";
        }
    }
}

function verifica() {
    c11 = document.getElementById('cell11').innnerHTML;
    c12 = document.getElementById('cell12').innnerHTML;
    c13 = document.getElementById('cell13').innnerHTML;
    c21 = document.getElementById('cell21').innnerHTML;
    c22 = document.getElementById('cell22').innnerHTML;
    c23 = document.getElementById('cell23').innnerHTML;
    c31 = document.getElementById('cell31').innnerHTML;
    c32 = document.getElementById('cell32').innnerHTML;
    c33 = document.getElementById('cell33').innnerHTML;
    if (((c11 != '') && (c12 != '') && (c13 != '') &&
        (c11 == c12) && (c12 == c13)) || ((c1 != '') &&
            (c22 != '') && (c33 != '') && (c11 == c22) &&
            ()
        ))
   


}
