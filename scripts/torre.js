// Torre branca (1)

function torre_b1_mostrar_jogadas(){
    if (ycords_torre_b_1 < 7){
    btn_torre_b_1_andar1.style.display = "block";
    } if (ycords_torre_b_1 < 6){
    btn_torre_b_1_andar2.style.display = "block";

    } if (ycords_torre_b_1 < 5){
    btn_torre_b_1_andar3.style.display = "block";

    } if (ycords_torre_b_1 < 4){
    btn_torre_b_1_andar4.style.display = "block";

    } if(ycords_torre_b_1 < 3){
    btn_torre_b_1_andar5.style.display = "block";
    
    } if (ycords_torre_b_1 < 2){
    btn_torre_b_1_andar6.style.display = "block";
    
    } if(ycords_torre_b_1 < 1){
    btn_torre_b_1_andar7.style.display = "block";
    }

    if (ycords_torre_b_1 > 6){
    btn_torre_b_1_andar_tras7.style.display = "block";
    
    } if (ycords_torre_b_1 > 5){
    btn_torre_b_1_andar_tras6.style.display = "block";

    } if (ycords_torre_b_1 > 4){
    btn_torre_b_1_andar_tras5.style.display = "block";

    } if (ycords_torre_b_1 > 3){
    btn_torre_b_1_andar_tras4.style.display = "block";

    } if(ycords_torre_b_1 > 2){
    btn_torre_b_1_andar_tras3.style.display = "block";
    
    } if (ycords_torre_b_1 > 1){
    btn_torre_b_1_andar_tras2.style.display = "block";
    
    } if(ycords_torre_b_1 > 0){
    btn_torre_b_1_andar_tras1.style.display = "block";
    }

    if (xcords_torre_b_1 < 7){
    btn_torre_b_1_andar_lado1.style.display = "block";
    } if (xcords_torre_b_1 < 6){
    btn_torre_b_1_andar_lado2.style.display = "block";
    } if (xcords_torre_b_1 < 5){
    btn_torre_b_1_andar_lado3.style.display = "block";
    } if (xcords_torre_b_1 < 4){
    btn_torre_b_1_andar_lado4.style.display = "block";
    } if (xcords_torre_b_1 < 3){
    btn_torre_b_1_andar_lado5.style.display = "block";
    } if (xcords_torre_b_1 < 2){
    btn_torre_b_1_andar_lado6.style.display = "block";
    } if (xcords_torre_b_1 < 1){
    btn_torre_b_1_andar_lado7.style.display = "block";
    }

    if (xcords_torre_b_1 > 6){
    btn_torre_b_1_andar_lado_esquerdo7.style.display = "block";
    } if (xcords_torre_b_1 > 5){
    btn_torre_b_1_andar_lado_esquerdo6.style.display = "block";
    } if (xcords_torre_b_1 > 4){
    btn_torre_b_1_andar_lado_esquerdo5.style.display = "block";
    } if (xcords_torre_b_1 > 3){
    btn_torre_b_1_andar_lado_esquerdo4.style.display = "block";
    } if (xcords_torre_b_1 > 2){
    btn_torre_b_1_andar_lado_esquerdo3.style.display = "block";
    } if (xcords_torre_b_1 > 1){
    btn_torre_b_1_andar_lado_esquerdo2.style.display = "block";
    } if (xcords_torre_b_1 > 0){
    btn_torre_b_1_andar_lado_esquerdo1.style.display = "block";
    }
}

function limpar_torres_b_1(){
    casa_atual_b_x = xcords_torre_b_1;
    casa_atual_b_y = ycords_torre_b_1;

    btn_torre_b_1_andar1.style.display = "none";
    btn_torre_b_1_andar2.style.display = "none";
    btn_torre_b_1_andar3.style.display = "none";
    btn_torre_b_1_andar4.style.display = "none";
    btn_torre_b_1_andar5.style.display = "none";
    btn_torre_b_1_andar6.style.display = "none";
    btn_torre_b_1_andar7.style.display = "none";

    btn_torre_b_1_andar_tras1.style.display = "none";
    btn_torre_b_1_andar_tras2.style.display = "none";
    btn_torre_b_1_andar_tras3.style.display = "none";
    btn_torre_b_1_andar_tras4.style.display = "none";
    btn_torre_b_1_andar_tras5.style.display = "none";
    btn_torre_b_1_andar_tras6.style.display = "none";
    btn_torre_b_1_andar_tras7.style.display = "none";

    btn_torre_b_1_andar_lado1.style.display = "none";
    btn_torre_b_1_andar_lado2.style.display = "none";
    btn_torre_b_1_andar_lado3.style.display = "none";
    btn_torre_b_1_andar_lado4.style.display = "none";
    btn_torre_b_1_andar_lado5.style.display = "none";
    btn_torre_b_1_andar_lado6.style.display = "none";
    btn_torre_b_1_andar_lado7.style.display = "none";

    btn_torre_b_1_andar_lado_esquerdo1.style.display = "none";
    btn_torre_b_1_andar_lado_esquerdo2.style.display = "none";
    btn_torre_b_1_andar_lado_esquerdo3.style.display = "none";
    btn_torre_b_1_andar_lado_esquerdo4.style.display = "none";
    btn_torre_b_1_andar_lado_esquerdo5.style.display = "none";
    btn_torre_b_1_andar_lado_esquerdo6.style.display = "none";
    btn_torre_b_1_andar_lado_esquerdo7.style.display = "none";
}

// Torre branca (2)

function torre_b2_mostrar_jogadas(){
    if (ycords_torre_b_2 < 7){
    btn_torre_b_2_andar1.style.display = "block";
    } if (ycords_torre_b_2 < 6){
    btn_torre_b_2_andar2.style.display = "block";

    } if (ycords_torre_b_2 < 5){
    btn_torre_b_2_andar3.style.display = "block";

    } if (ycords_torre_b_2 < 4){
    btn_torre_b_2_andar4.style.display = "block";

    } if(ycords_torre_b_2 < 3){
    btn_torre_b_2_andar5.style.display = "block";
    
    } if (ycords_torre_b_2 < 2){
    btn_torre_b_2_andar6.style.display = "block";
    
    } if(ycords_torre_b_2 < 1){
    btn_torre_b_2_andar7.style.display = "block";
    }

    if (ycords_torre_b_2 > 6){
    btn_torre_b_2_andar_tras7.style.display = "block";
    
    } if (ycords_torre_b_2 > 5){
    btn_torre_b_2_andar_tras6.style.display = "block";

    } if (ycords_torre_b_2 > 4){
    btn_torre_b_2_andar_tras5.style.display = "block";

    } if (ycords_torre_b_2 > 3){
    btn_torre_b_2_andar_tras4.style.display = "block";

    } if(ycords_torre_b_2 > 2){
    btn_torre_b_2_andar_tras3.style.display = "block";
    
    } if (ycords_torre_b_2 > 1){
    btn_torre_b_2_andar_tras2.style.display = "block";
    
    } if(ycords_torre_b_2 > 0){
    btn_torre_b_2_andar_tras1.style.display = "block";
    }

    if (xcords_torre_b_2 < 7){
    btn_torre_b_2_andar_lado1.style.display = "block";
    } if (xcords_torre_b_2 < 6){
    btn_torre_b_2_andar_lado2.style.display = "block";
    } if (xcords_torre_b_2 < 5){
    btn_torre_b_2_andar_lado3.style.display = "block";
    } if (xcords_torre_b_2 < 4){
    btn_torre_b_2_andar_lado4.style.display = "block";
    } if (xcords_torre_b_2 < 3){
    btn_torre_b_2_andar_lado5.style.display = "block";
    } if (xcords_torre_b_2 < 2){
    btn_torre_b_2_andar_lado6.style.display = "block";
    } if (xcords_torre_b_2 < 1){
    btn_torre_b_2_andar_lado7.style.display = "block";
    }

    if (xcords_torre_b_2 > 6){
    btn_torre_b_2_andar_lado_esquerdo7.style.display = "block";
    } if (xcords_torre_b_2 > 5){
    btn_torre_b_2_andar_lado_esquerdo6.style.display = "block";
    } if (xcords_torre_b_2 > 4){
    btn_torre_b_2_andar_lado_esquerdo5.style.display = "block";
    } if (xcords_torre_b_2 > 3){
    btn_torre_b_2_andar_lado_esquerdo4.style.display = "block";
    } if (xcords_torre_b_2 > 2){
    btn_torre_b_2_andar_lado_esquerdo3.style.display = "block";
    } if (xcords_torre_b_2 > 1){
    btn_torre_b_2_andar_lado_esquerdo2.style.display = "block";
    } if (xcords_torre_b_2 > 0){
    btn_torre_b_2_andar_lado_esquerdo1.style.display = "block";
    }
}

function limpar_torres_b_2(){
    casa_atual_b_x = xcords_torre_b_2;
    casa_atual_b_y = ycords_torre_b_2;
    btn_torre_b_2_andar1.style.display = "none";
    btn_torre_b_2_andar2.style.display = "none";
    btn_torre_b_2_andar3.style.display = "none";
    btn_torre_b_2_andar4.style.display = "none";
    btn_torre_b_2_andar5.style.display = "none";
    btn_torre_b_2_andar6.style.display = "none";
    btn_torre_b_2_andar7.style.display = "none";

    btn_torre_b_2_andar_tras1.style.display = "none";
    btn_torre_b_2_andar_tras2.style.display = "none";
    btn_torre_b_2_andar_tras3.style.display = "none";
    btn_torre_b_2_andar_tras4.style.display = "none";
    btn_torre_b_2_andar_tras5.style.display = "none";
    btn_torre_b_2_andar_tras6.style.display = "none";
    btn_torre_b_2_andar_tras7.style.display = "none";

    btn_torre_b_2_andar_lado1.style.display = "none";
    btn_torre_b_2_andar_lado2.style.display = "none";
    btn_torre_b_2_andar_lado3.style.display = "none";
    btn_torre_b_2_andar_lado4.style.display = "none";
    btn_torre_b_2_andar_lado5.style.display = "none";
    btn_torre_b_2_andar_lado6.style.display = "none";
    btn_torre_b_2_andar_lado7.style.display = "none";

    btn_torre_b_2_andar_lado_esquerdo1.style.display = "none";
    btn_torre_b_2_andar_lado_esquerdo2.style.display = "none";
    btn_torre_b_2_andar_lado_esquerdo3.style.display = "none";
    btn_torre_b_2_andar_lado_esquerdo4.style.display = "none";
    btn_torre_b_2_andar_lado_esquerdo5.style.display = "none";
    btn_torre_b_2_andar_lado_esquerdo6.style.display = "none";
    btn_torre_b_2_andar_lado_esquerdo7.style.display = "none";
}



// Torre preta (1)

function torre_p1_mostrar_jogadas(){
    if (ycords_torre_p_1 < 7){
    btn_torre_p_1_andar1.style.display = "block";
    } if (ycords_torre_p_1 < 6){
    btn_torre_p_1_andar2.style.display = "block";

    } if (ycords_torre_p_1 < 5){
    btn_torre_p_1_andar3.style.display = "block";

    } if (ycords_torre_p_1 < 4){
    btn_torre_p_1_andar4.style.display = "block";

    } if(ycords_torre_p_1 < 3){
    btn_torre_p_1_andar5.style.display = "block";
    
    } if (ycords_torre_p_1 < 2){
    btn_torre_p_1_andar6.style.display = "block";
    
    } if(ycords_torre_p_1 < 1){
    btn_torre_p_1_andar7.style.display = "block";
    }

    if (ycords_torre_p_1 > 6){
    btn_torre_p_1_andar_tras7.style.display = "block";
    
    } if (ycords_torre_p_1 > 5){
    btn_torre_p_1_andar_tras6.style.display = "block";

    } if (ycords_torre_p_1 > 4){
    btn_torre_p_1_andar_tras5.style.display = "block";

    } if (ycords_torre_p_1 > 3){
    btn_torre_p_1_andar_tras4.style.display = "block";

    } if(ycords_torre_p_1 > 2){
    btn_torre_p_1_andar_tras3.style.display = "block";
    
    } if (ycords_torre_p_1 > 1){
    btn_torre_p_1_andar_tras2.style.display = "block";
    
    } if(ycords_torre_p_1 > 0){
    btn_torre_p_1_andar_tras1.style.display = "block";
    }

    if (xcords_torre_p_1 < 7){
    btn_torre_p_1_andar_lado1.style.display = "block";
    } if (xcords_torre_p_1 < 6){
    btn_torre_p_1_andar_lado2.style.display = "block";
    } if (xcords_torre_p_1 < 5){
    btn_torre_p_1_andar_lado3.style.display = "block";
    } if (xcords_torre_p_1 < 4){
    btn_torre_p_1_andar_lado4.style.display = "block";
    } if (xcords_torre_p_1 < 3){
    btn_torre_p_1_andar_lado5.style.display = "block";
    } if (xcords_torre_p_1 < 2){
    btn_torre_p_1_andar_lado6.style.display = "block";
    } if (xcords_torre_p_1 < 1){
    btn_torre_p_1_andar_lado7.style.display = "block";
    }

    if (xcords_torre_p_1 > 6){
    btn_torre_p_1_andar_lado_esquerdo7.style.display = "block";
    } if (xcords_torre_p_1 > 5){
    btn_torre_p_1_andar_lado_esquerdo6.style.display = "block";
    } if (xcords_torre_p_1 > 4){
    btn_torre_p_1_andar_lado_esquerdo5.style.display = "block";
    } if (xcords_torre_p_1 > 3){
    btn_torre_p_1_andar_lado_esquerdo4.style.display = "block";
    } if (xcords_torre_p_1 > 2){
    btn_torre_p_1_andar_lado_esquerdo3.style.display = "block";
    } if (xcords_torre_p_1 > 1){
    btn_torre_p_1_andar_lado_esquerdo2.style.display = "block";
    } if (xcords_torre_p_1 > 0){
    btn_torre_p_1_andar_lado_esquerdo1.style.display = "block";
    }
}


function limpar_torres_p_1(){
    casa_atual_p_x = xcords_torre_p_1;
    casa_atual_p_y = ycords_torre_p_1;

    btn_torre_p_1_andar1.style.display = "none";
    btn_torre_p_1_andar2.style.display = "none";
    btn_torre_p_1_andar3.style.display = "none";
    btn_torre_p_1_andar4.style.display = "none";
    btn_torre_p_1_andar5.style.display = "none";
    btn_torre_p_1_andar6.style.display = "none";
    btn_torre_p_1_andar7.style.display = "none";

    btn_torre_p_1_andar_tras1.style.display = "none";
    btn_torre_p_1_andar_tras2.style.display = "none";
    btn_torre_p_1_andar_tras3.style.display = "none";
    btn_torre_p_1_andar_tras4.style.display = "none";
    btn_torre_p_1_andar_tras5.style.display = "none";
    btn_torre_p_1_andar_tras6.style.display = "none";
    btn_torre_p_1_andar_tras7.style.display = "none";

    btn_torre_p_1_andar_lado1.style.display = "none";
    btn_torre_p_1_andar_lado2.style.display = "none";
    btn_torre_p_1_andar_lado3.style.display = "none";
    btn_torre_p_1_andar_lado4.style.display = "none";
    btn_torre_p_1_andar_lado5.style.display = "none";
    btn_torre_p_1_andar_lado6.style.display = "none";
    btn_torre_p_1_andar_lado7.style.display = "none";

    btn_torre_p_1_andar_lado_esquerdo1.style.display = "none";
    btn_torre_p_1_andar_lado_esquerdo2.style.display = "none";
    btn_torre_p_1_andar_lado_esquerdo3.style.display = "none";
    btn_torre_p_1_andar_lado_esquerdo4.style.display = "none";
    btn_torre_p_1_andar_lado_esquerdo5.style.display = "none";
    btn_torre_p_1_andar_lado_esquerdo6.style.display = "none";
    btn_torre_p_1_andar_lado_esquerdo7.style.display = "none";
}

// Torre preta (2)

function torre_p2_mostrar_jogadas(){
    if (ycords_torre_p_2 < 7){
    btn_torre_p_2_andar1.style.display = "block";
    } if (ycords_torre_p_2 < 6){
    btn_torre_p_2_andar2.style.display = "block";

    } if (ycords_torre_p_2 < 5){
    btn_torre_p_2_andar3.style.display = "block";

    } if (ycords_torre_p_2 < 4){
    btn_torre_p_2_andar4.style.display = "block";

    } if(ycords_torre_p_2 < 3){
    btn_torre_p_2_andar5.style.display = "block";
    
    } if (ycords_torre_p_2 < 2){
    btn_torre_p_2_andar6.style.display = "block";
    
    } if(ycords_torre_p_2 < 1){
    btn_torre_p_2_andar7.style.display = "block";
    }

    if (ycords_torre_p_2 > 6){
    btn_torre_p_2_andar_tras7.style.display = "block";
    
    } if (ycords_torre_p_2 > 5){
    btn_torre_p_2_andar_tras6.style.display = "block";

    } if (ycords_torre_p_2 > 4){
    btn_torre_p_2_andar_tras5.style.display = "block";

    } if (ycords_torre_p_2 > 3){
    btn_torre_p_2_andar_tras4.style.display = "block";

    } if(ycords_torre_p_2 > 2){
    btn_torre_p_2_andar_tras3.style.display = "block";
    
    } if (ycords_torre_p_2 > 1){
    btn_torre_p_2_andar_tras2.style.display = "block";
    
    } if(ycords_torre_p_2 > 0){
    btn_torre_p_2_andar_tras1.style.display = "block";
    }

    if (xcords_torre_p_2 < 7){
    btn_torre_p_2_andar_lado1.style.display = "block";
    } if (xcords_torre_p_2 < 6){
    btn_torre_p_2_andar_lado2.style.display = "block";
    } if (xcords_torre_p_2 < 5){
    btn_torre_p_2_andar_lado3.style.display = "block";
    } if (xcords_torre_p_2 < 4){
    btn_torre_p_2_andar_lado4.style.display = "block";
    } if (xcords_torre_p_2 < 3){
    btn_torre_p_2_andar_lado5.style.display = "block";
    } if (xcords_torre_p_2 < 2){
    btn_torre_p_2_andar_lado6.style.display = "block";
    } if (xcords_torre_p_2 < 1){
    btn_torre_p_2_andar_lado7.style.display = "block";
    }

    if (xcords_torre_p_2 > 6){
    btn_torre_p_2_andar_lado_esquerdo7.style.display = "block";
    } if (xcords_torre_p_2 > 5){
    btn_torre_p_2_andar_lado_esquerdo6.style.display = "block";
    } if (xcords_torre_p_2 > 4){
    btn_torre_p_2_andar_lado_esquerdo5.style.display = "block";
    } if (xcords_torre_p_2 > 3){
    btn_torre_p_2_andar_lado_esquerdo4.style.display = "block";
    } if (xcords_torre_p_2 > 2){
    btn_torre_p_2_andar_lado_esquerdo3.style.display = "block";
    } if (xcords_torre_p_2 > 1){
    btn_torre_p_2_andar_lado_esquerdo2.style.display = "block";
    } if (xcords_torre_p_2 > 0){
    btn_torre_p_2_andar_lado_esquerdo1.style.display = "block";
    }
}

function limpar_torres_p_2(){
    casa_atual_p_x = xcords_torre_p_2;
    casa_atual_p_y = ycords_torre_p_2;

    btn_torre_p_2_andar1.style.display = "none";
    btn_torre_p_2_andar2.style.display = "none";
    btn_torre_p_2_andar3.style.display = "none";
    btn_torre_p_2_andar4.style.display = "none";
    btn_torre_p_2_andar5.style.display = "none";
    btn_torre_p_2_andar6.style.display = "none";
    btn_torre_p_2_andar7.style.display = "none";

    btn_torre_p_2_andar_tras1.style.display = "none";
    btn_torre_p_2_andar_tras2.style.display = "none";
    btn_torre_p_2_andar_tras3.style.display = "none";
    btn_torre_p_2_andar_tras4.style.display = "none";
    btn_torre_p_2_andar_tras5.style.display = "none";
    btn_torre_p_2_andar_tras6.style.display = "none";
    btn_torre_p_2_andar_tras7.style.display = "none";

    btn_torre_p_2_andar_lado1.style.display = "none";
    btn_torre_p_2_andar_lado2.style.display = "none";
    btn_torre_p_2_andar_lado3.style.display = "none";
    btn_torre_p_2_andar_lado4.style.display = "none";
    btn_torre_p_2_andar_lado5.style.display = "none";
    btn_torre_p_2_andar_lado6.style.display = "none";
    btn_torre_p_2_andar_lado7.style.display = "none";

    btn_torre_p_2_andar_lado_esquerdo1.style.display = "none";
    btn_torre_p_2_andar_lado_esquerdo2.style.display = "none";
    btn_torre_p_2_andar_lado_esquerdo3.style.display = "none";
    btn_torre_p_2_andar_lado_esquerdo4.style.display = "none";
    btn_torre_p_2_andar_lado_esquerdo5.style.display = "none";
    btn_torre_p_2_andar_lado_esquerdo6.style.display = "none";
    btn_torre_p_2_andar_lado_esquerdo7.style.display = "none";
}

// torres brancas configs (1)
btn_torre_b_1.onclick = () =>{
    if(vez == 0){
    torre_b1_mostrar_jogadas();
    }

}
btn_torre_b_1_andar1.onclick = () =>{
    ycords_torre_b_1 += 1;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar2.onclick = () =>{
    ycords_torre_b_1 += 2;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar3.onclick = () =>{
    ycords_torre_b_1 += 3;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar4.onclick = () =>{
    ycords_torre_b_1 += 4;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar5.onclick = () =>{
    ycords_torre_b_1 += 5;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar6.onclick = () =>{
    ycords_torre_b_1 += 6;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar7.onclick = () =>{
    ycords_torre_b_1 += 7;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}


btn_torre_b_1_andar_tras1.onclick = () =>{
    ycords_torre_b_1 -= 1;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_tras2.onclick = () =>{
    ycords_torre_b_1 -= 2;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_tras3.onclick = () =>{
    ycords_torre_b_1 -= 3;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_tras4.onclick = () =>{
    ycords_torre_b_1 -= 4;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_tras5.onclick = () =>{
    ycords_torre_b_1 -= 5;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_tras6.onclick = () =>{
    ycords_torre_b_1 -= 6;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_tras7.onclick = () =>{
    ycords_torre_b_1 -= 7;
    torre_b_1.style.top = posicoes_y[ycords_torre_b_1] + "px";
    limpar_torres_b_1();
}


btn_torre_b_1_andar_lado1.onclick = () =>{
    xcords_torre_b_1 += 1;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado2.onclick = () =>{
    xcords_torre_b_1 += 2;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado3.onclick = () =>{
    xcords_torre_b_1 += 3;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado4.onclick = () =>{
    xcords_torre_b_1 += 4;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado5.onclick = () =>{
    xcords_torre_b_1 += 5;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado6.onclick = () =>{
    xcords_torre_b_1 += 6;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado7.onclick = () =>{
    xcords_torre_b_1 += 7;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}


btn_torre_b_1_andar_lado_esquerdo1.onclick = () =>{
    xcords_torre_b_1 -= 1;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado_esquerdo2.onclick = () =>{
    xcords_torre_b_1 -= 2;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado_esquerdo3.onclick = () =>{
    xcords_torre_b_1 -= 3;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado_esquerdo4.onclick = () =>{
    xcords_torre_b_1 -= 4;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado_esquerdo5.onclick = () =>{
    xcords_torre_b_1 -= 5;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado_esquerdo6.onclick = () =>{
    xcords_torre_b_1 -= 6;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}
btn_torre_b_1_andar_lado_esquerdo7.onclick = () =>{
    xcords_torre_b_1 -= 7;
    torre_b_1.style.left = posicoes_x[xcords_torre_b_1] + "px";
    limpar_torres_b_1();
}


// torres brancas configs (2)
btn_torre_b_2.onclick = () =>{
    if(vez == 0){
    torre_b2_mostrar_jogadas();
    }

}
btn_torre_b_2_andar1.onclick = () =>{
    ycords_torre_b_2 += 1;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar2.onclick = () =>{
    ycords_torre_b_2 += 2;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar3.onclick = () =>{
    ycords_torre_b_2 += 3;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar4.onclick = () =>{
    ycords_torre_b_2 += 4;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar5.onclick = () =>{
    ycords_torre_b_2 += 5;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar6.onclick = () =>{
    ycords_torre_b_2 += 6;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar7.onclick = () =>{
    ycords_torre_b_2 += 7;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}


btn_torre_b_2_andar_tras1.onclick = () =>{
    ycords_torre_b_2 -= 1;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_tras2.onclick = () =>{
    ycords_torre_b_2 -= 2;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_tras3.onclick = () =>{
    ycords_torre_b_2 -= 3;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_tras4.onclick = () =>{
    ycords_torre_b_2 -= 4;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_tras5.onclick = () =>{
    ycords_torre_b_2 -= 5;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_tras6.onclick = () =>{
    ycords_torre_b_2 -= 6;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_tras7.onclick = () =>{
    ycords_torre_b_2 -= 7;
    torre_b_2.style.top = posicoes_y[ycords_torre_b_2] + "px";
    limpar_torres_b_2();
}


btn_torre_b_2_andar_lado1.onclick = () =>{
    xcords_torre_b_2 += 1;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado2.onclick = () =>{
    xcords_torre_b_2 += 2;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado3.onclick = () =>{
    xcords_torre_b_2 += 3;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado4.onclick = () =>{
    xcords_torre_b_2 += 4;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado5.onclick = () =>{
    xcords_torre_b_2 += 5;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado6.onclick = () =>{
    xcords_torre_b_2 += 6;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado7.onclick = () =>{
    xcords_torre_b_2 += 7;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}


btn_torre_b_2_andar_lado_esquerdo1.onclick = () =>{
    xcords_torre_b_2 -= 1;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado_esquerdo2.onclick = () =>{
    xcords_torre_b_2 -= 2;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado_esquerdo3.onclick = () =>{
    xcords_torre_b_2 -= 3;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado_esquerdo4.onclick = () =>{
    xcords_torre_b_2 -= 4;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado_esquerdo5.onclick = () =>{
    xcords_torre_b_2 -= 5;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado_esquerdo6.onclick = () =>{
    xcords_torre_b_2 -= 6;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}
btn_torre_b_2_andar_lado_esquerdo7.onclick = () =>{
    xcords_torre_b_2 -= 7;
    torre_b_2.style.left = posicoes_x[xcords_torre_b_2] + "px";
    limpar_torres_b_2();
}






// torres pretas configs (1)
btn_torre_p_1.onclick = () =>{
    if(vez == 1){
    torre_p1_mostrar_jogadas();
    }

}
btn_torre_p_1_andar1.onclick = () =>{
    ycords_torre_p_1 += 1;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar2.onclick = () =>{
    ycords_torre_p_1 += 2;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar3.onclick = () =>{
    ycords_torre_p_1 += 3;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar4.onclick = () =>{
    ycords_torre_p_1 += 4;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar5.onclick = () =>{
    ycords_torre_p_1 += 5;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar6.onclick = () =>{
    ycords_torre_p_1 += 6;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar7.onclick = () =>{
    ycords_torre_p_1 += 7;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}


btn_torre_p_1_andar_tras1.onclick = () =>{
    ycords_torre_p_1 -= 1;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_tras2.onclick = () =>{
    ycords_torre_p_1 -= 2;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
    
}
btn_torre_p_1_andar_tras3.onclick = () =>{
    ycords_torre_p_1 -= 3;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_tras4.onclick = () =>{
    ycords_torre_p_1 -= 4;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_tras5.onclick = () =>{
    ycords_torre_p_1 -= 5;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_tras6.onclick = () =>{
    ycords_torre_p_1 -= 6;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_tras7.onclick = () =>{
    ycords_torre_p_1 -= 7;
    torre_p_1.style.top = posicoes_y[ycords_torre_p_1] + "px";
    limpar_torres_p_1();
}


btn_torre_p_1_andar_lado1.onclick = () =>{
    xcords_torre_p_1 += 1;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado2.onclick = () =>{
    xcords_torre_p_1 += 2;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado3.onclick = () =>{
    xcords_torre_p_1 += 3;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado4.onclick = () =>{
    xcords_torre_p_1 += 4;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado5.onclick = () =>{
    xcords_torre_p_1 += 5;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado6.onclick = () =>{
    xcords_torre_p_1 += 6;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado7.onclick = () =>{
    xcords_torre_p_1 += 7;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}


btn_torre_p_1_andar_lado_esquerdo1.onclick = () =>{
    xcords_torre_p_1 -= 1;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado_esquerdo2.onclick = () =>{
    xcords_torre_p_1 -= 2;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado_esquerdo3.onclick = () =>{
    xcords_torre_p_1 -= 3;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado_esquerdo4.onclick = () =>{
    xcords_torre_p_1 -= 4;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado_esquerdo5.onclick = () =>{
    xcords_torre_p_1 -= 5;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado_esquerdo6.onclick = () =>{
    xcords_torre_p_1 -= 6;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}
btn_torre_p_1_andar_lado_esquerdo7.onclick = () =>{
    xcords_torre_p_1 -= 7;
    torre_p_1.style.left = posicoes_x[xcords_torre_p_1] + "px";
    limpar_torres_p_1();
}


// torres pretas configs (2)
btn_torre_p_2.onclick = () =>{
    if(vez == 1){
    torre_p2_mostrar_jogadas();
    }

}
btn_torre_p_2_andar1.onclick = () =>{
    ycords_torre_p_2 += 1;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar2.onclick = () =>{
    ycords_torre_p_2 += 2;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
    
}
btn_torre_p_2_andar3.onclick = () =>{
    ycords_torre_p_2 += 3;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar4.onclick = () =>{
    ycords_torre_p_2 += 4;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar5.onclick = () =>{
    ycords_torre_p_2 += 5;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar6.onclick = () =>{
    ycords_torre_p_2 += 6;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar7.onclick = () =>{
    ycords_torre_p_2 += 7;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}


btn_torre_p_2_andar_tras1.onclick = () =>{
    ycords_torre_p_2 -= 1;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_tras2.onclick = () =>{
    ycords_torre_p_2 -= 2;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_tras3.onclick = () =>{
    ycords_torre_p_2 -= 3;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_tras4.onclick = () =>{
    ycords_torre_p_2 -= 4;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_tras5.onclick = () =>{
    ycords_torre_p_2 -= 5;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_tras6.onclick = () =>{
    ycords_torre_p_2 -= 6;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_tras7.onclick = () =>{
    ycords_torre_p_2 -= 7;
    torre_p_2.style.top = posicoes_y[ycords_torre_p_2] + "px";
    limpar_torres_p_2();
}


btn_torre_p_2_andar_lado1.onclick = () =>{
    xcords_torre_p_2 += 1;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado2.onclick = () =>{
    xcords_torre_p_2 += 2;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado3.onclick = () =>{
    xcords_torre_p_2 += 3;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado4.onclick = () =>{
    xcords_torre_p_2 += 4;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado5.onclick = () =>{
    xcords_torre_p_2 += 5;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado6.onclick = () =>{
    xcords_torre_p_2 += 6;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado7.onclick = () =>{
    xcords_torre_p_2 += 7;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}


btn_torre_p_2_andar_lado_esquerdo1.onclick = () =>{
    xcords_torre_p_2 -= 1;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado_esquerdo2.onclick = () =>{
    xcords_torre_p_2 -= 2;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado_esquerdo3.onclick = () =>{
    xcords_torre_p_2 -= 3;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado_esquerdo4.onclick = () =>{
    xcords_torre_p_2 -= 4;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado_esquerdo5.onclick = () =>{
    xcords_torre_p_2 -= 5;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado_esquerdo6.onclick = () =>{
    xcords_torre_p_2 -= 6;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}
btn_torre_p_2_andar_lado_esquerdo7.onclick = () =>{
    xcords_torre_p_2 -= 7;
    torre_p_2.style.left = posicoes_x[xcords_torre_p_2] + "px";
    limpar_torres_p_2();
}



