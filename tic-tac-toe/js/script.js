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
     (c11 == c12) && (c12 == c13)) || ((c11 != '') &&
     (c22 != '') && (c33 != '') && (c11 == c22) &&
     (c22 == c33)) || ((c11 != '') && (c21 != '' ) &&
     (c31 != '') && (c11 == C21) && (c21 == c31) || ((c21 != '') &&
     (c22 != '') && (c23 != '') && (c21 == c22 ) && 
     (c22 == c3)) || ((c31 != '') && (c32 != '') &&
     (c33 != '') && (c31 == c32) && (c32 == c33)) || ((c12 != '')
     (c22 != '') && (c32 != '') &&  (c12 == c22) &&
     (c22 == c32)) || ((c13 !='') && (c23 != '') &&
     (c33 != '') && (c13 == c23 && (c23 == c33)) || (( c31 != '') &&
     (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13 ))){
     alert('Você ganhou! Parabéns campeão!');
     novo(); 
                                   
                                       
                               


}
