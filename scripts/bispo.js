function bispo_b1_mostrar_jogadas(){
    if(xcords_bispo_b_1 < 7 && ycords_bispo_b_1 < 7){
    btn_bispo_b_1_diagonal_cima_direita1.style.display = "block";
    } if(xcords_bispo_b_1 < 6 && ycords_bispo_b_1 < 6){
    btn_bispo_b_1_diagonal_cima_direita2.style.display = "block";
    } if(xcords_bispo_b_1 < 5 && ycords_bispo_b_1 < 5){
    btn_bispo_b_1_diagonal_cima_direita3.style.display = "block";
    } if(xcords_bispo_b_1 < 4 && ycords_bispo_b_1 < 4){
    btn_bispo_b_1_diagonal_cima_direita4.style.display = "block";
    } if(xcords_bispo_b_1 < 3 && ycords_bispo_b_1 < 3){
    btn_bispo_b_1_diagonal_cima_direita5.style.display = "block";
    } if(xcords_bispo_b_1 < 2 && ycords_bispo_b_1 < 2){
    btn_bispo_b_1_diagonal_cima_direita6.style.display = "block";
    }if(xcords_bispo_b_1 < 1 && ycords_bispo_b_1 < 1){
    btn_bispo_b_1_diagonal_cima_direita7.style.display = "block";
    }

    if(xcords_bispo_b_1 > 6 && ycords_bispo_b_1 < 1){
    btn_bispo_b_1_diagonal_cima_esquerda7.style.display = "block";
    } if(xcords_bispo_b_1 > 5 && ycords_bispo_b_1 < 2){
    btn_bispo_b_1_diagonal_cima_esquerda6.style.display = "block";
    } if(xcords_bispo_b_1 > 4 && ycords_bispo_b_1 < 3){
    btn_bispo_b_1_diagonal_cima_esquerda5.style.display = "block";
    } if(xcords_bispo_b_1 > 3 && ycords_bispo_b_1 < 4){
    btn_bispo_b_1_diagonal_cima_esquerda4.style.display = "block";
    } if(xcords_bispo_b_1 > 2 && ycords_bispo_b_1 < 5){
    btn_bispo_b_1_diagonal_cima_esquerda3.style.display = "block";
    } if(xcords_bispo_b_1 > 1 && ycords_bispo_b_1 < 6){
    btn_bispo_b_1_diagonal_cima_esquerda2.style.display = "block";
    } if(xcords_bispo_b_1 > 0 && ycords_bispo_b_1 < 7){
    btn_bispo_b_1_diagonal_cima_esquerda1.style.display = "block";
    }

    if(xcords_bispo_b_1 < 7 && ycords_bispo_b_1 > 0){
    btn_bispo_b_1_diagonal_baixo_direita1.style.display = "block";
    } if(xcords_bispo_b_1 < 6 && ycords_bispo_b_1 > 1){
    btn_bispo_b_1_diagonal_baixo_direita2.style.display = "block";
    } if(xcords_bispo_b_1 < 5 && ycords_bispo_b_1 > 2){
    btn_bispo_b_1_diagonal_baixo_direita3.style.display = "block";
    } if(xcords_bispo_b_1 < 4 && ycords_bispo_b_1 > 3){
    btn_bispo_b_1_diagonal_baixo_direita4.style.display = "block";
    } if(xcords_bispo_b_1 < 3 && ycords_bispo_b_1 > 4){
    btn_bispo_b_1_diagonal_baixo_direita5.style.display = "block";
    } if(xcords_bispo_b_1 < 2 && ycords_bispo_b_1 > 5){
    btn_bispo_b_1_diagonal_baixo_direita6.style.display = "block";
    } if(xcords_bispo_b_1 < 1 && ycords_bispo_b_1 > 6){
    btn_bispo_b_1_diagonal_baixo_direita7.style.display = "block";
    }

    if(xcords_bispo_b_1 > 0 && ycords_bispo_b_1 > 0){
    btn_bispo_b_1_diagonal_baixo_esquerda1.style.display = "block";
    } if(xcords_bispo_b_1 > 1 && ycords_bispo_b_1 > 1){
    btn_bispo_b_1_diagonal_baixo_esquerda2.style.display = "block";
    } if(xcords_bispo_b_1 > 2 && ycords_bispo_b_1 > 2){
    btn_bispo_b_1_diagonal_baixo_esquerda3.style.display = "block";
    } if(xcords_bispo_b_1 > 3 && ycords_bispo_b_1 > 3){
    btn_bispo_b_1_diagonal_baixo_esquerda4.style.display = "block";
    } if(xcords_bispo_b_1 > 4 && ycords_bispo_b_1 > 4){
    btn_bispo_b_1_diagonal_baixo_esquerda5.style.display = "block";
    } if(xcords_bispo_b_1 > 5 && ycords_bispo_b_1 > 5){
    btn_bispo_b_1_diagonal_baixo_esquerda6.style.display = "block";
    } if(xcords_bispo_b_1 > 6 && ycords_bispo_b_1 > 6){
    btn_bispo_b_1_diagonal_baixo_esquerda7.style.display = "block";
    }
    
}


function limpar_bispos(){
    casa_atual_b_x = xcords_bispo_b_1;
    casa_atual_b_y = ycords_bispo_b_1;

    btn_bispo_b_1_diagonal_cima_direita1.style.display = "none";
    btn_bispo_b_1_diagonal_cima_direita2.style.display = "none";
    btn_bispo_b_1_diagonal_cima_direita3.style.display = "none";
    btn_bispo_b_1_diagonal_cima_direita4.style.display = "none";
    btn_bispo_b_1_diagonal_cima_direita5.style.display = "none";
    btn_bispo_b_1_diagonal_cima_direita6.style.display = "none";
    btn_bispo_b_1_diagonal_cima_direita7.style.display = "none";

    btn_bispo_b_1_diagonal_cima_esquerda1.style.display = "none";
    btn_bispo_b_1_diagonal_cima_esquerda2.style.display = "none";
    btn_bispo_b_1_diagonal_cima_esquerda3.style.display = "none";
    btn_bispo_b_1_diagonal_cima_esquerda4.style.display = "none";
    btn_bispo_b_1_diagonal_cima_esquerda5.style.display = "none";
    btn_bispo_b_1_diagonal_cima_esquerda6.style.display = "none";
    btn_bispo_b_1_diagonal_cima_esquerda7.style.display = "none";

    btn_bispo_b_1_diagonal_baixo_direita1.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_direita2.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_direita3.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_direita4.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_direita5.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_direita6.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_direita7.style.display = "none";

    btn_bispo_b_1_diagonal_baixo_esquerda1.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_esquerda2.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_esquerda3.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_esquerda4.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_esquerda5.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_esquerda6.style.display = "none";
    btn_bispo_b_1_diagonal_baixo_esquerda7.style.display = "none";
}


// configs bispos brancos (2)

function bispo_b2_mostrar_jogadas(){
    if(xcords_bispo_b_2 < 7 && ycords_bispo_b_2 < 7){
    btn_bispo_b_2_diagonal_cima_direita1.style.display = "block";
    } if(xcords_bispo_b_2 < 6 && ycords_bispo_b_2 < 6){
    btn_bispo_b_2_diagonal_cima_direita2.style.display = "block";
    } if(xcords_bispo_b_2 < 5 && ycords_bispo_b_2 < 5){
    btn_bispo_b_2_diagonal_cima_direita3.style.display = "block";
    } if(xcords_bispo_b_2 < 4 && ycords_bispo_b_2 < 4){
    btn_bispo_b_2_diagonal_cima_direita4.style.display = "block";
    } if(xcords_bispo_b_2 < 3 && ycords_bispo_b_2 < 3){
    btn_bispo_b_2_diagonal_cima_direita5.style.display = "block";
    } if(xcords_bispo_b_2 < 2 && ycords_bispo_b_2 < 2){
    btn_bispo_b_2_diagonal_cima_direita6.style.display = "block";
    }if(xcords_bispo_b_2 < 1 && ycords_bispo_b_2 < 1){
    btn_bispo_b_2_diagonal_cima_direita7.style.display = "block";
    }

    if(xcords_bispo_b_2 > 6 && ycords_bispo_b_2 < 1){
    btn_bispo_b_2_diagonal_cima_esquerda7.style.display = "block";
    } if(xcords_bispo_b_2 > 5 && ycords_bispo_b_2 < 2){
    btn_bispo_b_2_diagonal_cima_esquerda6.style.display = "block";
    } if(xcords_bispo_b_2 > 4 && ycords_bispo_b_2 < 3){
    btn_bispo_b_2_diagonal_cima_esquerda5.style.display = "block";
    } if(xcords_bispo_b_2 > 3 && ycords_bispo_b_2 < 4){
    btn_bispo_b_2_diagonal_cima_esquerda4.style.display = "block";
    } if(xcords_bispo_b_2 > 2 && ycords_bispo_b_2 < 5){
    btn_bispo_b_2_diagonal_cima_esquerda3.style.display = "block";
    } if(xcords_bispo_b_2 > 1 && ycords_bispo_b_2 < 6){
    btn_bispo_b_2_diagonal_cima_esquerda2.style.display = "block";
    } if(xcords_bispo_b_2 > 0 && ycords_bispo_b_2 < 7){
    btn_bispo_b_2_diagonal_cima_esquerda1.style.display = "block";
    }

    if(xcords_bispo_b_2 < 7 && ycords_bispo_b_2 > 0){
    btn_bispo_b_2_diagonal_baixo_direita1.style.display = "block";
    } if(xcords_bispo_b_2 < 6 && ycords_bispo_b_2 > 1){
    btn_bispo_b_2_diagonal_baixo_direita2.style.display = "block";
    } if(xcords_bispo_b_2 < 5 && ycords_bispo_b_2 > 2){
    btn_bispo_b_2_diagonal_baixo_direita3.style.display = "block";
    } if(xcords_bispo_b_2 < 4 && ycords_bispo_b_2 > 3){
    btn_bispo_b_2_diagonal_baixo_direita4.style.display = "block";
    } if(xcords_bispo_b_2 < 3 && ycords_bispo_b_2 > 4){
    btn_bispo_b_2_diagonal_baixo_direita5.style.display = "block";
    } if(xcords_bispo_b_2 < 2 && ycords_bispo_b_2 > 5){
    btn_bispo_b_2_diagonal_baixo_direita6.style.display = "block";
    } if(xcords_bispo_b_2 < 1 && ycords_bispo_b_2 > 6){
    btn_bispo_b_2_diagonal_baixo_direita7.style.display = "block";
    }

    if(xcords_bispo_b_2 > 0 && ycords_bispo_b_2 > 0){
    btn_bispo_b_2_diagonal_baixo_esquerda1.style.display = "block";
    } if(xcords_bispo_b_2 > 1 && ycords_bispo_b_2 > 1){
    btn_bispo_b_2_diagonal_baixo_esquerda2.style.display = "block";
    } if(xcords_bispo_b_2 > 2 && ycords_bispo_b_2 > 2){
    btn_bispo_b_2_diagonal_baixo_esquerda3.style.display = "block";
    } if(xcords_bispo_b_2 > 3 && ycords_bispo_b_2 > 3){
    btn_bispo_b_2_diagonal_baixo_esquerda4.style.display = "block";
    } if(xcords_bispo_b_2 > 4 && ycords_bispo_b_2 > 4){
    btn_bispo_b_2_diagonal_baixo_esquerda5.style.display = "block";
    } if(xcords_bispo_b_2 > 5 && ycords_bispo_b_2 > 5){
    btn_bispo_b_2_diagonal_baixo_esquerda6.style.display = "block";
    } if(xcords_bispo_b_2 > 6 && ycords_bispo_b_2 > 6){
    btn_bispo_b_2_diagonal_baixo_esquerda7.style.display = "block";
    }
    
}


function limpar_bispos_b_2(){
    casa_atual_b_x = xcords_bispo_b_2;
    casa_atual_b_y = ycords_bispo_b_2;


    btn_bispo_b_2_diagonal_cima_direita1.style.display = "none";
    btn_bispo_b_2_diagonal_cima_direita2.style.display = "none";
    btn_bispo_b_2_diagonal_cima_direita3.style.display = "none";
    btn_bispo_b_2_diagonal_cima_direita4.style.display = "none";
    btn_bispo_b_2_diagonal_cima_direita5.style.display = "none";
    btn_bispo_b_2_diagonal_cima_direita6.style.display = "none";
    btn_bispo_b_2_diagonal_cima_direita7.style.display = "none";

    btn_bispo_b_2_diagonal_cima_esquerda1.style.display = "none";
    btn_bispo_b_2_diagonal_cima_esquerda2.style.display = "none";
    btn_bispo_b_2_diagonal_cima_esquerda3.style.display = "none";
    btn_bispo_b_2_diagonal_cima_esquerda4.style.display = "none";
    btn_bispo_b_2_diagonal_cima_esquerda5.style.display = "none";
    btn_bispo_b_2_diagonal_cima_esquerda6.style.display = "none";
    btn_bispo_b_2_diagonal_cima_esquerda7.style.display = "none";

    btn_bispo_b_2_diagonal_baixo_direita1.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_direita2.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_direita3.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_direita4.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_direita5.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_direita6.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_direita7.style.display = "none";

    btn_bispo_b_2_diagonal_baixo_esquerda1.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_esquerda2.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_esquerda3.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_esquerda4.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_esquerda5.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_esquerda6.style.display = "none";
    btn_bispo_b_2_diagonal_baixo_esquerda7.style.display = "none";
}

function bispo_p1_mostrar_jogadas(){
    if(xcords_bispo_p_1 < 7 && ycords_bispo_p_1 < 7){
    btn_bispo_p_1_diagonal_cima_direita1.style.display = "block";
    } if(xcords_bispo_p_1 < 6 && ycords_bispo_p_1 < 6){
    btn_bispo_p_1_diagonal_cima_direita2.style.display = "block";
    } if(xcords_bispo_p_1 < 5 && ycords_bispo_p_1 < 5){
    btn_bispo_p_1_diagonal_cima_direita3.style.display = "block";
    } if(xcords_bispo_p_1 < 4 && ycords_bispo_p_1 < 4){
    btn_bispo_p_1_diagonal_cima_direita4.style.display = "block";
    } if(xcords_bispo_p_1 < 3 && ycords_bispo_p_1 < 3){
    btn_bispo_p_1_diagonal_cima_direita5.style.display = "block";
    } if(xcords_bispo_p_1 < 2 && ycords_bispo_p_1 < 2){
    btn_bispo_p_1_diagonal_cima_direita6.style.display = "block";
    }if(xcords_bispo_p_1 < 1 && ycords_bispo_p_1 < 1){
    btn_bispo_p_1_diagonal_cima_direita7.style.display = "block";
    }

    if(xcords_bispo_p_1 > 6 && ycords_bispo_p_1 < 1){
    btn_bispo_p_1_diagonal_cima_esquerda7.style.display = "block";
    } if(xcords_bispo_p_1 > 5 && ycords_bispo_p_1 < 2){
    btn_bispo_p_1_diagonal_cima_esquerda6.style.display = "block";
    } if(xcords_bispo_p_1 > 4 && ycords_bispo_p_1 < 3){
    btn_bispo_p_1_diagonal_cima_esquerda5.style.display = "block";
    } if(xcords_bispo_p_1 > 3 && ycords_bispo_p_1 < 4){
    btn_bispo_p_1_diagonal_cima_esquerda4.style.display = "block";
    } if(xcords_bispo_p_1 > 2 && ycords_bispo_p_1 < 5){
    btn_bispo_p_1_diagonal_cima_esquerda3.style.display = "block";
    } if(xcords_bispo_p_1 > 1 && ycords_bispo_p_1 < 6){
    btn_bispo_p_1_diagonal_cima_esquerda2.style.display = "block";
    } if(xcords_bispo_p_1 > 0 && ycords_bispo_p_1 < 7){
    btn_bispo_p_1_diagonal_cima_esquerda1.style.display = "block";
    }

    if(xcords_bispo_p_1 < 7 && ycords_bispo_p_1 > 0){
    btn_bispo_p_1_diagonal_baixo_direita1.style.display = "block";
    } if(xcords_bispo_p_1 < 6 && ycords_bispo_p_1 > 1){
    btn_bispo_p_1_diagonal_baixo_direita2.style.display = "block";
    } if(xcords_bispo_p_1 < 5 && ycords_bispo_p_1 > 2){
    btn_bispo_p_1_diagonal_baixo_direita3.style.display = "block";
    } if(xcords_bispo_p_1 < 4 && ycords_bispo_p_1 > 3){
    btn_bispo_p_1_diagonal_baixo_direita4.style.display = "block";
    } if(xcords_bispo_p_1 < 3 && ycords_bispo_p_1 > 4){
    btn_bispo_p_1_diagonal_baixo_direita5.style.display = "block";
    } if(xcords_bispo_p_1 < 2 && ycords_bispo_p_1 > 5){
    btn_bispo_p_1_diagonal_baixo_direita6.style.display = "block";
    } if(xcords_bispo_p_1 < 1 && ycords_bispo_p_1 > 6){
    btn_bispo_p_1_diagonal_baixo_direita7.style.display = "block";
    }

    if(xcords_bispo_p_1 > 0 && ycords_bispo_p_1 > 0){
    btn_bispo_p_1_diagonal_baixo_esquerda1.style.display = "block";
    } if(xcords_bispo_p_1 > 1 && ycords_bispo_p_1 > 1){
    btn_bispo_p_1_diagonal_baixo_esquerda2.style.display = "block";
    } if(xcords_bispo_p_1 > 2 && ycords_bispo_p_1 > 2){
    btn_bispo_p_1_diagonal_baixo_esquerda3.style.display = "block";
    } if(xcords_bispo_p_1 > 3 && ycords_bispo_p_1 > 3){
    btn_bispo_p_1_diagonal_baixo_esquerda4.style.display = "block";
    } if(xcords_bispo_p_1 > 4 && ycords_bispo_p_1 > 4){
    btn_bispo_p_1_diagonal_baixo_esquerda5.style.display = "block";
    } if(xcords_bispo_p_1 > 5 && ycords_bispo_p_1 > 5){
    btn_bispo_p_1_diagonal_baixo_esquerda6.style.display = "block";
    } if(xcords_bispo_p_1 > 6 && ycords_bispo_p_1 > 6){
    btn_bispo_p_1_diagonal_baixo_esquerda7.style.display = "block";
    }
    
}


function limpar_bispos_p(){
    casa_atual_p_x = xcords_bispo_p_1;
    casa_atual_p_y = ycords_bispo_p_1;


    btn_bispo_p_1_diagonal_cima_direita1.style.display = "none";
    btn_bispo_p_1_diagonal_cima_direita2.style.display = "none";
    btn_bispo_p_1_diagonal_cima_direita3.style.display = "none";
    btn_bispo_p_1_diagonal_cima_direita4.style.display = "none";
    btn_bispo_p_1_diagonal_cima_direita5.style.display = "none";
    btn_bispo_p_1_diagonal_cima_direita6.style.display = "none";
    btn_bispo_p_1_diagonal_cima_direita7.style.display = "none";

    btn_bispo_p_1_diagonal_cima_esquerda1.style.display = "none";
    btn_bispo_p_1_diagonal_cima_esquerda2.style.display = "none";
    btn_bispo_p_1_diagonal_cima_esquerda3.style.display = "none";
    btn_bispo_p_1_diagonal_cima_esquerda4.style.display = "none";
    btn_bispo_p_1_diagonal_cima_esquerda5.style.display = "none";
    btn_bispo_p_1_diagonal_cima_esquerda6.style.display = "none";
    btn_bispo_p_1_diagonal_cima_esquerda7.style.display = "none";

    btn_bispo_p_1_diagonal_baixo_direita1.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_direita2.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_direita3.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_direita4.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_direita5.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_direita6.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_direita7.style.display = "none";

    btn_bispo_p_1_diagonal_baixo_esquerda1.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_esquerda2.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_esquerda3.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_esquerda4.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_esquerda5.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_esquerda6.style.display = "none";
    btn_bispo_p_1_diagonal_baixo_esquerda7.style.display = "none";
}


// configs bispos brancos (2)

function bispo_p2_mostrar_jogadas(){
    if(xcords_bispo_p_2 < 7 && ycords_bispo_p_2 < 7){
    btn_bispo_p_2_diagonal_cima_direita1.style.display = "block";
    } if(xcords_bispo_p_2 < 6 && ycords_bispo_p_2 < 6){
    btn_bispo_p_2_diagonal_cima_direita2.style.display = "block";
    } if(xcords_bispo_p_2 < 5 && ycords_bispo_p_2 < 5){
    btn_bispo_p_2_diagonal_cima_direita3.style.display = "block";
    } if(xcords_bispo_p_2 < 4 && ycords_bispo_p_2 < 4){
    btn_bispo_p_2_diagonal_cima_direita4.style.display = "block";
    } if(xcords_bispo_p_2 < 3 && ycords_bispo_p_2 < 3){
    btn_bispo_p_2_diagonal_cima_direita5.style.display = "block";
    } if(xcords_bispo_p_2 < 2 && ycords_bispo_p_2 < 2){
    btn_bispo_p_2_diagonal_cima_direita6.style.display = "block";
    }if(xcords_bispo_p_2 < 1 && ycords_bispo_p_2 < 1){
    btn_bispo_p_2_diagonal_cima_direita7.style.display = "block";
    }

    if(xcords_bispo_p_2 > 6 && ycords_bispo_p_2 < 1){
    btn_bispo_p_2_diagonal_cima_esquerda7.style.display = "block";
    } if(xcords_bispo_p_2 > 5 && ycords_bispo_p_2 < 2){
    btn_bispo_p_2_diagonal_cima_esquerda6.style.display = "block";
    } if(xcords_bispo_p_2 > 4 && ycords_bispo_p_2 < 3){
    btn_bispo_p_2_diagonal_cima_esquerda5.style.display = "block";
    } if(xcords_bispo_p_2 > 3 && ycords_bispo_p_2 < 4){
    btn_bispo_p_2_diagonal_cima_esquerda4.style.display = "block";
    } if(xcords_bispo_p_2 > 2 && ycords_bispo_p_2 < 5){
    btn_bispo_p_2_diagonal_cima_esquerda3.style.display = "block";
    } if(xcords_bispo_p_2 > 1 && ycords_bispo_p_2 < 6){
    btn_bispo_p_2_diagonal_cima_esquerda2.style.display = "block";
    } if(xcords_bispo_p_2 > 0 && ycords_bispo_p_2 < 7){
    btn_bispo_p_2_diagonal_cima_esquerda1.style.display = "block";
    }

    if(xcords_bispo_p_2 < 7 && ycords_bispo_p_2 > 0){
    btn_bispo_p_2_diagonal_baixo_direita1.style.display = "block";
    } if(xcords_bispo_p_2 < 6 && ycords_bispo_p_2 > 1){
    btn_bispo_p_2_diagonal_baixo_direita2.style.display = "block";
    } if(xcords_bispo_p_2 < 5 && ycords_bispo_p_2 > 2){
    btn_bispo_p_2_diagonal_baixo_direita3.style.display = "block";
    } if(xcords_bispo_p_2 < 4 && ycords_bispo_p_2 > 3){
    btn_bispo_p_2_diagonal_baixo_direita4.style.display = "block";
    } if(xcords_bispo_p_2 < 3 && ycords_bispo_p_2 > 4){
    btn_bispo_p_2_diagonal_baixo_direita5.style.display = "block";
    } if(xcords_bispo_p_2 < 2 && ycords_bispo_p_2 > 5){
    btn_bispo_p_2_diagonal_baixo_direita6.style.display = "block";
    } if(xcords_bispo_p_2 < 1 && ycords_bispo_p_2 > 6){
    btn_bispo_p_2_diagonal_baixo_direita7.style.display = "block";
    }

    if(xcords_bispo_p_2 > 0 && ycords_bispo_p_2 > 0){
    btn_bispo_p_2_diagonal_baixo_esquerda1.style.display = "block";
    } if(xcords_bispo_p_2 > 1 && ycords_bispo_p_2 > 1){
    btn_bispo_p_2_diagonal_baixo_esquerda2.style.display = "block";
    } if(xcords_bispo_p_2 > 2 && ycords_bispo_p_2 > 2){
    btn_bispo_p_2_diagonal_baixo_esquerda3.style.display = "block";
    } if(xcords_bispo_p_2 > 3 && ycords_bispo_p_2 > 3){
    btn_bispo_p_2_diagonal_baixo_esquerda4.style.display = "block";
    } if(xcords_bispo_p_2 > 4 && ycords_bispo_p_2 > 4){
    btn_bispo_p_2_diagonal_baixo_esquerda5.style.display = "block";
    } if(xcords_bispo_p_2 > 5 && ycords_bispo_p_2 > 5){
    btn_bispo_p_2_diagonal_baixo_esquerda6.style.display = "block";
    } if(xcords_bispo_p_2 > 6 && ycords_bispo_p_2 > 6){
    btn_bispo_p_2_diagonal_baixo_esquerda7.style.display = "block";
    }
    
}


function limpar_bispos_p_2(){
    casa_atual_p_x = xcords_bispo_p_2;
    casa_atual_p_y = ycords_bispo_p_2;

  
    btn_bispo_p_2_diagonal_cima_direita1.style.display = "none";
    btn_bispo_p_2_diagonal_cima_direita2.style.display = "none";
    btn_bispo_p_2_diagonal_cima_direita3.style.display = "none";
    btn_bispo_p_2_diagonal_cima_direita4.style.display = "none";
    btn_bispo_p_2_diagonal_cima_direita5.style.display = "none";
    btn_bispo_p_2_diagonal_cima_direita6.style.display = "none";
    btn_bispo_p_2_diagonal_cima_direita7.style.display = "none";

    btn_bispo_p_2_diagonal_cima_esquerda1.style.display = "none";
    btn_bispo_p_2_diagonal_cima_esquerda2.style.display = "none";
    btn_bispo_p_2_diagonal_cima_esquerda3.style.display = "none";
    btn_bispo_p_2_diagonal_cima_esquerda4.style.display = "none";
    btn_bispo_p_2_diagonal_cima_esquerda5.style.display = "none";
    btn_bispo_p_2_diagonal_cima_esquerda6.style.display = "none";
    btn_bispo_p_2_diagonal_cima_esquerda7.style.display = "none";

    btn_bispo_p_2_diagonal_baixo_direita1.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_direita2.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_direita3.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_direita4.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_direita5.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_direita6.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_direita7.style.display = "none";

    btn_bispo_p_2_diagonal_baixo_esquerda1.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_esquerda2.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_esquerda3.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_esquerda4.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_esquerda5.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_esquerda6.style.display = "none";
    btn_bispo_p_2_diagonal_baixo_esquerda7.style.display = "none";
}


// bispos brancos configs (1)
btn_bispo_b_1.onclick = () =>{
    if(vez == 0){
    bispo_b1_mostrar_jogadas();
    }
}
btn_bispo_b_1_diagonal_cima_direita1.onclick = () =>{
    ycords_bispo_b_1 += 1;
    xcords_bispo_b_1 += 1;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_direita2.onclick = () =>{
    ycords_bispo_b_1 += 2;
    xcords_bispo_b_1 += 2;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_direita3.onclick = () =>{
    ycords_bispo_b_1 += 3;
    xcords_bispo_b_1 += 3;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_direita4.onclick = () =>{
    ycords_bispo_b_1 += 4;
    xcords_bispo_b_1 += 4;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_direita5.onclick = () =>{
    ycords_bispo_b_1 += 5;
    xcords_bispo_b_1 += 5;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_direita6.onclick = () =>{
    ycords_bispo_b_1 += 6;
    xcords_bispo_b_1 += 6;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_direita7.onclick = () =>{
    ycords_bispo_b_1 += 7;
    xcords_bispo_b_1 += 7;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}


btn_bispo_b_1_diagonal_cima_esquerda1.onclick = () =>{
    ycords_bispo_b_1 += 1;
    xcords_bispo_b_1 -= 1;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_esquerda2.onclick = () =>{
    ycords_bispo_b_1 += 2;
    xcords_bispo_b_1 -= 2;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_esquerda3.onclick = () =>{
    ycords_bispo_b_1 += 3;
    xcords_bispo_b_1 -= 3;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_esquerda4.onclick = () =>{
    ycords_bispo_b_1 += 4;
    xcords_bispo_b_1 -= 4;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_esquerda5.onclick = () =>{
    ycords_bispo_b_1 += 5;
    xcords_bispo_b_1 -= 5;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_esquerda6.onclick = () =>{
    ycords_bispo_b_1 += 6;
    xcords_bispo_b_1 -= 6;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_cima_esquerda7.onclick = () =>{
    ycords_bispo_b_1 += 7;
    xcords_bispo_b_1 -= 7;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}


btn_bispo_b_1_diagonal_baixo_direita1.onclick = () =>{
    ycords_bispo_b_1 -= 1;
    xcords_bispo_b_1 += 1;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_direita2.onclick = () =>{
    ycords_bispo_b_1 -= 2;
    xcords_bispo_b_1 += 2;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_direita3.onclick = () =>{
    ycords_bispo_b_1 -= 3;
    xcords_bispo_b_1 += 3;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_direita4.onclick = () =>{
    ycords_bispo_b_1 -= 4;
    xcords_bispo_b_1 += 4;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_direita5.onclick = () =>{
    ycords_bispo_b_1 -= 5;
    xcords_bispo_b_1 += 5;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_direita6.onclick = () =>{
    ycords_bispo_b_1 -= 6;
    xcords_bispo_b_1 += 6;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_direita7.onclick = () =>{
    ycords_bispo_b_1 -= 7;
    xcords_bispo_b_1 += 7;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}


btn_bispo_b_1_diagonal_baixo_esquerda1.onclick = () =>{
    ycords_bispo_b_1 -= 1;
    xcords_bispo_b_1 -= 1;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_esquerda2.onclick = () =>{
    ycords_bispo_b_1 -= 2;
    xcords_bispo_b_1 -= 2;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_esquerda3.onclick = () =>{
    ycords_bispo_b_1 -= 3;
    xcords_bispo_b_1 -= 3;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_esquerda4.onclick = () =>{
    ycords_bispo_b_1 -= 4;
    xcords_bispo_b_1 -= 4;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_esquerda5.onclick = () =>{
    ycords_bispo_b_1 -= 5;
    xcords_bispo_b_1 -= 5;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_esquerda6.onclick = () =>{
    ycords_bispo_b_1 -= 6;
    xcords_bispo_b_1 -= 6;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}
btn_bispo_b_1_diagonal_baixo_esquerda7.onclick = () =>{
    ycords_bispo_b_1 -= 7;
    xcords_bispo_b_1 -= 7;
    bispo_b_1.style.top = posicoes_y[ycords_bispo_b_1] + "px";
    bispo_b_1.style.left = posicoes_x[xcords_bispo_b_1] + "px";
    limpar_bispos();
}




// bispos brancos configs (2)
btn_bispo_b_2.onclick = () =>{
    if(vez == 0){
    bispo_b2_mostrar_jogadas();
    }
}
btn_bispo_b_2_diagonal_cima_direita1.onclick = () =>{
    ycords_bispo_b_2 += 1;
    xcords_bispo_b_2 += 1;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_direita2.onclick = () =>{
    ycords_bispo_b_2 += 2;
    xcords_bispo_b_2 += 2;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_direita3.onclick = () =>{
    ycords_bispo_b_2 += 3;
    xcords_bispo_b_2 += 3;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_direita4.onclick = () =>{
    ycords_bispo_b_2 += 4;
    xcords_bispo_b_2 += 4;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_direita5.onclick = () =>{
    ycords_bispo_b_2 += 5;
    xcords_bispo_b_2 += 5;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_direita6.onclick = () =>{
    ycords_bispo_b_2 += 6;
    xcords_bispo_b_2 += 6;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_direita7.onclick = () =>{
    ycords_bispo_b_2 += 7;
    xcords_bispo_b_2 += 7;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}


btn_bispo_b_2_diagonal_cima_esquerda1.onclick = () =>{
    ycords_bispo_b_2 += 1;
    xcords_bispo_b_2 -= 1;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_esquerda2.onclick = () =>{
    ycords_bispo_b_2 += 2;
    xcords_bispo_b_2 -= 2;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_esquerda3.onclick = () =>{
    ycords_bispo_b_2 += 3;
    xcords_bispo_b_2 -= 3;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_esquerda4.onclick = () =>{
    ycords_bispo_b_2 += 4;
    xcords_bispo_b_2 -= 4;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_esquerda5.onclick = () =>{
    ycords_bispo_b_2 += 5;
    xcords_bispo_b_2 -= 5;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_esquerda6.onclick = () =>{
    ycords_bispo_b_2 += 6;
    xcords_bispo_b_2 -= 6;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_cima_esquerda7.onclick = () =>{
    ycords_bispo_b_2 += 7;
    xcords_bispo_b_2 -= 7;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}


btn_bispo_b_2_diagonal_baixo_direita1.onclick = () =>{
    ycords_bispo_b_2 -= 1;
    xcords_bispo_b_2 += 1;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_direita2.onclick = () =>{
    ycords_bispo_b_2 -= 2;
    xcords_bispo_b_2 += 2;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_direita3.onclick = () =>{
    ycords_bispo_b_2 -= 3;
    xcords_bispo_b_2 += 3;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_direita4.onclick = () =>{
    ycords_bispo_b_2 -= 4;
    xcords_bispo_b_2 += 4;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_direita5.onclick = () =>{
    ycords_bispo_b_2 -= 5;
    xcords_bispo_b_2 += 5;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_direita6.onclick = () =>{
    ycords_bispo_b_2 -= 6;
    xcords_bispo_b_2 += 6;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_direita7.onclick = () =>{
    ycords_bispo_b_2 -= 7;
    xcords_bispo_b_2 += 7;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}


btn_bispo_b_2_diagonal_baixo_esquerda1.onclick = () =>{
    ycords_bispo_b_2 -= 1;
    xcords_bispo_b_2 -= 1;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_esquerda2.onclick = () =>{
    ycords_bispo_b_2 -= 2;
    xcords_bispo_b_2 -= 2;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_esquerda3.onclick = () =>{
    ycords_bispo_b_2 -= 3;
    xcords_bispo_b_2 -= 3;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_esquerda4.onclick = () =>{
    ycords_bispo_b_2 -= 4;
    xcords_bispo_b_2 -= 4;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_esquerda5.onclick = () =>{
    ycords_bispo_b_2 -= 5;
    xcords_bispo_b_2 -= 5;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_esquerda6.onclick = () =>{
    ycords_bispo_b_2 -= 6;
    xcords_bispo_b_2 -= 6;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}
btn_bispo_b_2_diagonal_baixo_esquerda7.onclick = () =>{
    ycords_bispo_b_2 -= 7;
    xcords_bispo_b_2 -= 7;
    bispo_b_2.style.top = posicoes_y[ycords_bispo_b_2] + "px";
    bispo_b_2.style.left = posicoes_x[xcords_bispo_b_2] + "px";
    limpar_bispos_b_2();
}




// bispos brancos configs (1)
btn_bispo_p_1.onclick = () =>{
    if(vez ==  1){
    bispo_p1_mostrar_jogadas();
    }
}
btn_bispo_p_1_diagonal_cima_direita1.onclick = () =>{
    ycords_bispo_p_1 += 1;
    xcords_bispo_p_1 += 1;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_direita2.onclick = () =>{
    ycords_bispo_p_1 += 2;
    xcords_bispo_p_1 += 2;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_direita3.onclick = () =>{
    ycords_bispo_p_1 += 3;
    xcords_bispo_p_1 += 3;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_direita4.onclick = () =>{
    ycords_bispo_p_1 += 4;
    xcords_bispo_p_1 += 4;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_direita5.onclick = () =>{
    ycords_bispo_p_1 += 5;
    xcords_bispo_p_1 += 5;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_direita6.onclick = () =>{
    ycords_bispo_p_1 += 6;
    xcords_bispo_p_1 += 6;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_direita7.onclick = () =>{
    ycords_bispo_p_1 += 7;
    xcords_bispo_p_1 += 7;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}


btn_bispo_p_1_diagonal_cima_esquerda1.onclick = () =>{
    ycords_bispo_p_1 += 1;
    xcords_bispo_p_1 -= 1;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_esquerda2.onclick = () =>{
    ycords_bispo_p_1 += 2;
    xcords_bispo_p_1 -= 2;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_esquerda3.onclick = () =>{
    ycords_bispo_p_1 += 3;
    xcords_bispo_p_1 -= 3;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_esquerda4.onclick = () =>{
    ycords_bispo_p_1 += 4;
    xcords_bispo_p_1 -= 4;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_esquerda5.onclick = () =>{
    ycords_bispo_p_1 += 5;
    xcords_bispo_p_1 -= 5;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_esquerda6.onclick = () =>{
    ycords_bispo_p_1 += 6;
    xcords_bispo_p_1 -= 6;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_cima_esquerda7.onclick = () =>{
    ycords_bispo_p_1 += 7;
    xcords_bispo_p_1 -= 7;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}


btn_bispo_p_1_diagonal_baixo_direita1.onclick = () =>{
    ycords_bispo_p_1 -= 1;
    xcords_bispo_p_1 += 1;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_direita2.onclick = () =>{
    ycords_bispo_p_1 -= 2;
    xcords_bispo_p_1 += 2;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_direita3.onclick = () =>{
    ycords_bispo_p_1 -= 3;
    xcords_bispo_p_1 += 3;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_direita4.onclick = () =>{
    ycords_bispo_p_1 -= 4;
    xcords_bispo_p_1 += 4;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_direita5.onclick = () =>{
    ycords_bispo_p_1 -= 5;
    xcords_bispo_p_1 += 5;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_direita6.onclick = () =>{
    ycords_bispo_p_1 -= 6;
    xcords_bispo_p_1 += 6;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_direita7.onclick = () =>{
    ycords_bispo_p_1 -= 7;
    xcords_bispo_p_1 += 7;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}


btn_bispo_p_1_diagonal_baixo_esquerda1.onclick = () =>{
    ycords_bispo_p_1 -= 1;
    xcords_bispo_p_1 -= 1;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_esquerda2.onclick = () =>{
    ycords_bispo_p_1 -= 2;
    xcords_bispo_p_1 -= 2;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_esquerda3.onclick = () =>{
    ycords_bispo_p_1 -= 3;
    xcords_bispo_p_1 -= 3;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_esquerda4.onclick = () =>{
    ycords_bispo_p_1 -= 4;
    xcords_bispo_p_1 -= 4;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_esquerda5.onclick = () =>{
    ycords_bispo_p_1 -= 5;
    xcords_bispo_p_1 -= 5;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_esquerda6.onclick = () =>{
    ycords_bispo_p_1 -= 6;
    xcords_bispo_p_1 -= 6;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}
btn_bispo_p_1_diagonal_baixo_esquerda7.onclick = () =>{
    ycords_bispo_p_1 -= 7;
    xcords_bispo_p_1 -= 7;
    bispo_p_1.style.top = posicoes_y[ycords_bispo_p_1] + "px";
    bispo_p_1.style.left = posicoes_x[xcords_bispo_p_1] + "px";
    limpar_bispos_p();
}




// bispos brancos configs (2)
btn_bispo_p_2.onclick = () =>{
    if(vez == 1){
    bispo_p2_mostrar_jogadas();
    }
}
btn_bispo_p_2_diagonal_cima_direita1.onclick = () =>{
    ycords_bispo_p_2 += 1;
    xcords_bispo_p_2 += 1;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_direita2.onclick = () =>{
    ycords_bispo_p_2 += 2;
    xcords_bispo_p_2 += 2;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_direita3.onclick = () =>{
    ycords_bispo_p_2 += 3;
    xcords_bispo_p_2 += 3;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_direita4.onclick = () =>{
    ycords_bispo_p_2 += 4;
    xcords_bispo_p_2 += 4;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_direita5.onclick = () =>{
    ycords_bispo_p_2 += 5;
    xcords_bispo_p_2 += 5;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_direita6.onclick = () =>{
    ycords_bispo_p_2 += 6;
    xcords_bispo_p_2 += 6;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_direita7.onclick = () =>{
    ycords_bispo_p_2 += 7;
    xcords_bispo_p_2 += 7;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}


btn_bispo_p_2_diagonal_cima_esquerda1.onclick = () =>{
    ycords_bispo_p_2 += 1;
    xcords_bispo_p_2 -= 1;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_esquerda2.onclick = () =>{
    ycords_bispo_p_2 += 2;
    xcords_bispo_p_2 -= 2;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_esquerda3.onclick = () =>{
    ycords_bispo_p_2 += 3;
    xcords_bispo_p_2 -= 3;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_esquerda4.onclick = () =>{
    ycords_bispo_p_2 += 4;
    xcords_bispo_p_2 -= 4;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_esquerda5.onclick = () =>{
    ycords_bispo_p_2 += 5;
    xcords_bispo_p_2 -= 5;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_esquerda6.onclick = () =>{
    ycords_bispo_p_2 += 6;
    xcords_bispo_p_2 -= 6;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_cima_esquerda7.onclick = () =>{
    ycords_bispo_p_2 += 7;
    xcords_bispo_p_2 -= 7;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}


btn_bispo_p_2_diagonal_baixo_direita1.onclick = () =>{
    ycords_bispo_p_2 -= 1;
    xcords_bispo_p_2 += 1;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_direita2.onclick = () =>{
    ycords_bispo_p_2 -= 2;
    xcords_bispo_p_2 += 2;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_direita3.onclick = () =>{
    ycords_bispo_p_2 -= 3;
    xcords_bispo_p_2 += 3;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_direita4.onclick = () =>{
    ycords_bispo_p_2 -= 4;
    xcords_bispo_p_2 += 4;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_direita5.onclick = () =>{
    ycords_bispo_p_2 -= 5;
    xcords_bispo_p_2 += 5;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_direita6.onclick = () =>{
    ycords_bispo_p_2 -= 6;
    xcords_bispo_p_2 += 6;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_direita7.onclick = () =>{
    ycords_bispo_p_2 -= 7;
    xcords_bispo_p_2 += 7;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}


btn_bispo_p_2_diagonal_baixo_esquerda1.onclick = () =>{
    ycords_bispo_p_2 -= 1;
    xcords_bispo_p_2 -= 1;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_esquerda2.onclick = () =>{
    ycords_bispo_p_2 -= 2;
    xcords_bispo_p_2 -= 2;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_esquerda3.onclick = () =>{
    ycords_bispo_p_2 -= 3;
    xcords_bispo_p_2 -= 3;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_esquerda4.onclick = () =>{
    ycords_bispo_p_2 -= 4;
    xcords_bispo_p_2 -= 4;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_esquerda5.onclick = () =>{
    ycords_bispo_p_2 -= 5;
    xcords_bispo_p_2 -= 5;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_esquerda6.onclick = () =>{
    ycords_bispo_p_2 -= 6;
    xcords_bispo_p_2 -= 6;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}
btn_bispo_p_2_diagonal_baixo_esquerda7.onclick = () =>{
    ycords_bispo_p_2 -= 7;
    xcords_bispo_p_2 -= 7;
    bispo_p_2.style.top = posicoes_y[ycords_bispo_p_2] + "px";
    bispo_p_2.style.left = posicoes_x[xcords_bispo_p_2] + "px";
    limpar_bispos_p_2();
}






