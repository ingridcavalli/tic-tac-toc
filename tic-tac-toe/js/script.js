 var letra = "X";

function joga(celula) {
    celulaclicada = document.getElementById(celula).innerHTML; 
    if (celulaclicada == "X" || celulaclicada == "O") {
        alert("Este quadrado já foi escolhido");
    } else {
        document.getElementById(celula).innerHTML = letra;
        if (letra == "X") {
            letra = "O";
        } else {
            letra = "X";
        }
    }
}

function verifica(){
    c11 = document.getElementById('cel11').innnerHTML;
    c12 = document.getElementById('cel12').innnerHTML;
    c13 = document.getElementById('cel13').innnerHTML;
    c21 = document.getElementById('cel21').innnerHTML;
    c22 = document.getElementById('cel22').innnerHTML;
    c23 = document.getElementById('cel23').innnerHTML;
    c31 = document.getElementById('cel31').innnerHTML;
    c32 = document.getElementById('cel32').innnerHTML;
    c33 = document.getElementById('cel33').innnerHTML;
    if (((c11 != '') && (c12 != '') && (c13 != '') && (c11 == c12) && (c12 == c13)) || 
        ((c11 != '') && (c22 != '') && (c33 != '') && (c11 == c22) && (c22 == c33)) || 
        ((c11 != '') && (c21 != '' ) && (c31 != '') && (c11 == c21) && (c21 == c31)) || 
        ((c21 != '') && (c22 != '') && (c23 != '') && (c21 == c22 ) && (c22 == c23)) || 
        ((c31 != '') && (c32 != '') && (c33 != '') && (c31 == c32) && (c32 == c33)) || 
        ((c12 != '') && (c22 != '') && (c32 != '') &&  (c12 == c22) && (c22 == c32)) || 
        ((c13 !='') && (c23 != '') && (c33 != '') && (c13 == c23) && (c23 == c33)) || 
        ((c31 != '') && (c22 != '') && (c13 != '') && (c31 == c22) && (c22 == c13 ))) {
        alert('Você ganhou! Parabéns campeão!');
        novo(); 
     }
 }
        
   function novo(){
    for (i=1; i<4; i++){
        for(j=1; j<4; j++){
            nomecelula = 'cel' + i + j;
            document.getElementById(nomecelula).innerHTML='';   
        }
    }
}
                                       
                               



