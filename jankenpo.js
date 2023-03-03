var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

    function validarVitoria(){

        let vencedor = document.querySelector('.vencedor');

        if(playerOpt == "pa"){

            if(inimigoOpt == "pa"){
                //empate
                vencedor.innerHTML = "Empate";
            }else if(inimigoOpt == "ken"){
                //derrota
                vencedor.innerHTML = "Derrota";
            }else if(inimigoOpt == "guu"){
                //vitoria
                vencedor.innerHTML = "Vitória";
            }

        }

        if(playerOpt == "ken"){

            if(inimigoOpt == "ken"){
                //empate
                vencedor.innerHTML = "Empate";
            }else if(inimigoOpt == "guu"){
                //derrota
                vencedor.innerHTML = "Derrota";
            }else if(inimigoOpt == "pa"){
                //vitoria
                vencedor.innerHTML = "Vitória";
            }

        }

        if(playerOpt == "guu"){

            if(inimigoOpt == "guu"){
                //empate
                vencedor.innerHTML = "Empate";
            }else if(inimigoOpt == "pa"){
                //derrota
                vencedor.innerHTML = "Derrota";
            }else if(inimigoOpt == "ken"){
                //vitoria
                vencedor.innerHTML = "Vitória";
            }

        }
    }

    function resetInimigo(){
        const enemyOption = document.querySelectorAll('.enemy-options div');
        for(var i = 0; i < enemyOption.length; i++){
            
        enemyOption[i].childNodes[0].style.opacity = 0.7;
        }
    }


function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOption = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i = 0; i < enemyOption.length; i++){
        if(i == rand){
            enemyOption[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOption[i].childNodes[0].getAttribute('opt');
        }
    }

    validarVitoria();



}

function reseOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
       elementos[i].style.opacity = 0.7;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        reseOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
    });
}