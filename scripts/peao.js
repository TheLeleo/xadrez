function limpar_peoes(){
    btn_peao_b_1_andar1.style.display = "none";
    btn_peao_b_1_andar2.style.display = "none";
    btn_peao_b_2_andar1.style.display = "none";
    btn_peao_b_2_andar2.style.display = "none";
    btn_peao_b_3_andar1.style.display = "none";
    btn_peao_b_3_andar2.style.display = "none";
    btn_peao_b_4_andar1.style.display = "none";
    btn_peao_b_4_andar2.style.display = "none";
    btn_peao_b_5_andar1.style.display = "none";
    btn_peao_b_5_andar2.style.display = "none";
    btn_peao_b_6_andar1.style.display = "none";
    btn_peao_b_6_andar2.style.display = "none";
    btn_peao_b_7_andar1.style.display = "none";
    btn_peao_b_7_andar2.style.display = "none";
    btn_peao_b_8_andar1.style.display = "none";
    btn_peao_b_8_andar2.style.display = "none";

    
    btn_peao_b_1_diagonal_cima_esquerda1.style.display = "none";
    btn_peao_b_2_diagonal_cima_esquerda1.style.display = "none";
    btn_peao_b_3_diagonal_cima_esquerda1.style.display = "none";
    btn_peao_b_4_diagonal_cima_esquerda1.style.display = "none";
    btn_peao_b_5_diagonal_cima_esquerda1.style.display = "none";
    btn_peao_b_6_diagonal_cima_esquerda1.style.display = "none";
    btn_peao_b_7_diagonal_cima_esquerda1.style.display = "none";
    btn_peao_b_8_diagonal_cima_esquerda1.style.display = "none";

    btn_peao_b_1_diagonal_cima_direita1.style.display = "none";
    btn_peao_b_2_diagonal_cima_direita1.style.display = "none";
    btn_peao_b_3_diagonal_cima_direita1.style.display = "none";
    btn_peao_b_4_diagonal_cima_direita1.style.display = "none";
    btn_peao_b_5_diagonal_cima_direita1.style.display = "none";
    btn_peao_b_6_diagonal_cima_direita1.style.display = "none";
    btn_peao_b_7_diagonal_cima_direita1.style.display = "none";
    btn_peao_b_8_diagonal_cima_direita1.style.display = "none";



    btn_peao_p_1_andar1.style.display = "none";
    btn_peao_p_1_andar2.style.display = "none";
    btn_peao_p_2_andar1.style.display = "none";
    btn_peao_p_2_andar2.style.display = "none";
    btn_peao_p_3_andar1.style.display = "none";
    btn_peao_p_3_andar2.style.display = "none";
    btn_peao_p_4_andar1.style.display = "none";
    btn_peao_p_4_andar2.style.display = "none";
    btn_peao_p_5_andar1.style.display = "none";
    btn_peao_p_5_andar2.style.display = "none";
    btn_peao_p_6_andar1.style.display = "none";
    btn_peao_p_6_andar2.style.display = "none";
    btn_peao_p_7_andar1.style.display = "none";
    btn_peao_p_7_andar2.style.display = "none";
    btn_peao_p_8_andar1.style.display = "none";
    btn_peao_p_8_andar2.style.display = "none";

    btn_peao_p_1_diagonal_baixo_esquerda1.style.display = "none";
    btn_peao_p_2_diagonal_baixo_esquerda1.style.display = "none";
    btn_peao_p_3_diagonal_baixo_esquerda1.style.display = "none";
    btn_peao_p_4_diagonal_baixo_esquerda1.style.display = "none";
    btn_peao_p_5_diagonal_baixo_esquerda1.style.display = "none";
    btn_peao_p_6_diagonal_baixo_esquerda1.style.display = "none";
    btn_peao_p_7_diagonal_baixo_esquerda1.style.display = "none";
    btn_peao_p_8_diagonal_baixo_esquerda1.style.display = "none";

    btn_peao_p_1_diagonal_baixo_direita1.style.display = "none";
    btn_peao_p_2_diagonal_baixo_direita1.style.display = "none";
    btn_peao_p_3_diagonal_baixo_direita1.style.display = "none";
    btn_peao_p_4_diagonal_baixo_direita1.style.display = "none";
    btn_peao_p_5_diagonal_baixo_direita1.style.display = "none";
    btn_peao_p_6_diagonal_baixo_direita1.style.display = "none";
    btn_peao_p_7_diagonal_baixo_direita1.style.display = "none";
    btn_peao_p_8_diagonal_baixo_direita1.style.display = "none";
}



// peões pretos configs
btn_peao_p_1.onclick = () =>{
    if(vez == 1 ){
    btn_peao_p_1_andar1.style.display = "block";
    if (jogadas_peao_p_1 < 1){
        btn_peao_p_1_andar2.style.display = "block";
    }
}
}
btn_peao_p_1_andar1.onclick = () =>{
    ycords_peao_p_1 -= 1;
    peao_p_1.style.top = posicoes_y[ycords_peao_p_1] + "px";
    
    casa_atual_p_x = xcords_peao_p_1;
    casa_atual_p_y = ycords_peao_p_1;

    jogadas_peao_p_1 += 1;
    limpar_peoes();
}
btn_peao_p_1_andar2.onclick = () =>{
    ycords_peao_p_1 -= 2;
    peao_p_1.style.top = posicoes_y[ycords_peao_p_1] + "px";
    
    casa_atual_p_x = xcords_peao_p_1;
    casa_atual_p_y = ycords_peao_p_1;

    jogadas_peao_p_1 += 1;
    limpar_peoes();
}


btn_peao_p_2.onclick = () =>{
    if(vez == 1){
    btn_peao_p_2_andar1.style.display = "block";
    if (jogadas_peao_p_2 < 1){
        btn_peao_p_2_andar2.style.display = "block";
    }
}
}
btn_peao_p_2_andar1.onclick = () =>{
    ycords_peao_p_2 -= 1;
    peao_p_2.style.top = posicoes_y[ycords_peao_p_2] + "px";
    
    casa_atual_p_x = xcords_peao_p_2;
    casa_atual_p_y = ycords_peao_p_2;

    jogadas_peao_p_2 += 1;
    limpar_peoes();
}
btn_peao_p_2_andar2.onclick = () =>{
    ycords_peao_p_2 -= 2;
    peao_p_2.style.top = posicoes_y[ycords_peao_p_2] + "px";
    
    casa_atual_p_x = xcords_peao_p_2;
    casa_atual_p_y = ycords_peao_p_2;

    jogadas_peao_p_2 += 1;
    limpar_peoes();
}


btn_peao_p_3.onclick = () =>{
    if(vez == 1){
    btn_peao_p_3_andar1.style.display = "block";
    if (jogadas_peao_p_3 < 1){
        btn_peao_p_3_andar2.style.display = "block";
    }
}
}
btn_peao_p_3_andar1.onclick = () =>{
    ycords_peao_p_3 -= 1;
    peao_p_3.style.top = posicoes_y[ycords_peao_p_3] + "px";
    
    casa_atual_p_x = xcords_peao_p_3;
    casa_atual_p_y = ycords_peao_p_3;

    jogadas_peao_p_3 += 1;
    limpar_peoes();
}
btn_peao_p_3_andar2.onclick = () =>{
    ycords_peao_p_3 -= 2;
    peao_p_3.style.top = posicoes_y[ycords_peao_p_3] + "px";
    
    casa_atual_p_x = xcords_peao_p_3;
    casa_atual_p_y = ycords_peao_p_3;

    jogadas_peao_p_3 += 1;
    limpar_peoes();
}


btn_peao_p_4.onclick = () =>{
    if(vez == 1){
    btn_peao_p_4_andar1.style.display = "block";
    if (jogadas_peao_p_4 < 1){
        btn_peao_p_4_andar2.style.display = "block";
    }
}
}
btn_peao_p_4_andar1.onclick = () =>{
    ycords_peao_p_4 -= 1;
    peao_p_4.style.top = posicoes_y[ycords_peao_p_4] + "px";
    
    casa_atual_p_x = xcords_peao_p_4;
    casa_atual_p_y = ycords_peao_p_4;

    jogadas_peao_p_4 += 1;
    limpar_peoes();
}
btn_peao_p_4_andar2.onclick = () =>{
    ycords_peao_p_4 -= 2;
    peao_p_4.style.top = posicoes_y[ycords_peao_p_4] + "px";
    
    casa_atual_p_x = xcords_peao_p_4;
    casa_atual_p_y = ycords_peao_p_4;

    jogadas_peao_p_4 += 1;
    limpar_peoes();
}


btn_peao_p_5.onclick = () =>{
    if(vez == 1){
    btn_peao_p_5_andar1.style.display = "block";
    if (jogadas_peao_p_5 < 1){
        btn_peao_p_5_andar2.style.display = "block";
    }
}
}
btn_peao_p_5_andar1.onclick = () =>{
    ycords_peao_p_5 -= 1;
    peao_p_5.style.top = posicoes_y[ycords_peao_p_5] + "px";
   
    casa_atual_p_x = xcords_peao_p_5;
    casa_atual_p_y = ycords_peao_p_5;

    jogadas_peao_p_5 += 1;
    limpar_peoes();
}
btn_peao_p_5_andar2.onclick = () =>{
    ycords_peao_p_5 -= 2;
    peao_p_5.style.top = posicoes_y[ycords_peao_p_5] + "px";
    
    casa_atual_p_x = xcords_peao_p_5;
    casa_atual_p_y = ycords_peao_p_5;

    jogadas_peao_p_5 += 1;
    limpar_peoes();
}


btn_peao_p_6.onclick = () =>{
    if(vez == 1){
    btn_peao_p_6_andar1.style.display = "block";
    if (jogadas_peao_p_6 < 1){
        btn_peao_p_6_andar2.style.display = "block";
    }
}
}
btn_peao_p_6_andar1.onclick = () =>{
    ycords_peao_p_6 -= 1;
    peao_p_6.style.top = posicoes_y[ycords_peao_p_6] + "px";
    
    casa_atual_p_x = xcords_peao_p_6;
    casa_atual_p_y = ycords_peao_p_6;

    jogadas_peao_p_6 += 1;
    limpar_peoes();
}
btn_peao_p_6_andar2.onclick = () =>{
    ycords_peao_p_6 -= 2;
    peao_p_6.style.top = posicoes_y[ycords_peao_p_6] + "px";
    
    casa_atual_p_x = xcords_peao_p_6;
    casa_atual_p_y = ycords_peao_p_6;

    jogadas_peao_p_6 += 1;
    limpar_peoes();
}


btn_peao_p_7.onclick = () =>{
    if(vez == 1){
    btn_peao_p_7_andar1.style.display = "block";
    if (jogadas_peao_p_7 < 1){
        btn_peao_p_7_andar2.style.display = "block";
    }
}
}
btn_peao_p_7_andar1.onclick = () =>{
    ycords_peao_p_7 -= 1;
    peao_p_7.style.top = posicoes_y[ycords_peao_p_7] + "px";
    
    casa_atual_p_x = xcords_peao_p_7;
    casa_atual_p_y = ycords_peao_p_7;

    jogadas_peao_p_7 += 1;
    limpar_peoes();
}
btn_peao_p_7_andar2.onclick = () =>{
    ycords_peao_p_7 -= 2;
    peao_p_7.style.top = posicoes_y[ycords_peao_p_7] + "px";
    
    casa_atual_p_x = xcords_peao_p_7;
    casa_atual_p_y = ycords_peao_p_7;

    jogadas_peao_p_7 += 1;
    limpar_peoes();
}


btn_peao_p_8.onclick = () =>{
    if(vez == 1){
    btn_peao_p_8_andar1.style.display = "block";
    if (jogadas_peao_p_8 < 1){
        btn_peao_p_8_andar2.style.display = "block";
    }
}
}
btn_peao_p_8_andar1.onclick = () =>{
    ycords_peao_p_8 -= 1;
    peao_p_8.style.top = posicoes_y[ycords_peao_p_8] + "px";
        
    casa_atual_p_x = xcords_peao_p_8;
    casa_atual_p_y = ycords_peao_p_8;

    jogadas_peao_p_8 += 1;
    limpar_peoes();
}
btn_peao_p_8_andar2.onclick = () =>{
    ycords_peao_p_8 -= 2;
    peao_p_8.style.top = posicoes_y[ycords_peao_p_8] + "px";
    
    casa_atual_p_x = xcords_peao_p_8;
    casa_atual_p_y = ycords_peao_p_8;

    jogadas_peao_p_8 += 1;
    limpar_peoes();
}





// peões brancos configs
btn_peao_b_1.onclick = () =>{
    if(vez == 0){
    btn_peao_b_1_andar1.style.display = "block";
    if (jogadas_peao_b_1 < 1){
        btn_peao_b_1_andar2.style.display = "block";
    }
}
}
btn_peao_b_1_andar1.onclick = () =>{
    ycords_peao_b_1 += 1;
    peao_b_1.style.top = posicoes_y[ycords_peao_b_1] + "px";
    
    casa_atual_b_x = xcords_peao_b_1;
    casa_atual_b_y = ycords_peao_b_1;

    jogadas_peao_b_1 += 1;
    limpar_peoes();
}
btn_peao_b_1_andar2.onclick = () =>{
    ycords_peao_b_1 += 2;
    peao_b_1.style.top = posicoes_y[ycords_peao_b_1] + "px";
        
    casa_atual_b_x = xcords_peao_b_1;
    casa_atual_b_y = ycords_peao_b_1;

    jogadas_peao_b_1 += 1;
    limpar_peoes();
}


btn_peao_b_2.onclick = () =>{
    if(vez == 0){
    btn_peao_b_2_andar1.style.display = "block";
    if (jogadas_peao_b_2 < 1){
        btn_peao_b_2_andar2.style.display = "block";
    }
}
}
btn_peao_b_2_andar1.onclick = () =>{
    ycords_peao_b_2 += 1;
    peao_b_2.style.top = posicoes_y[ycords_peao_b_2] + "px";
        
    casa_atual_b_x = xcords_peao_b_2;
    casa_atual_b_y = ycords_peao_b_2;

    jogadas_peao_b_2 += 1;
    limpar_peoes();
}
btn_peao_b_2_andar2.onclick = () =>{
    ycords_peao_b_2 += 2;
    peao_b_2.style.top = posicoes_y[ycords_peao_b_2] + "px";
        
    casa_atual_b_x = xcords_peao_b_2;
    casa_atual_b_y = ycords_peao_b_2;

    jogadas_peao_b_2 += 1;
    limpar_peoes();
}


btn_peao_b_3.onclick = () =>{
    if(vez == 0){
    btn_peao_b_3_andar1.style.display = "block";
    if (jogadas_peao_b_3 < 1){
        btn_peao_b_3_andar2.style.display = "block";
    }
}
}
btn_peao_b_3_andar1.onclick = () =>{
    ycords_peao_b_3 += 1;
    peao_b_3.style.top = posicoes_y[ycords_peao_b_3] + "px";
        
    casa_atual_b_x = xcords_peao_b_3;
    casa_atual_b_y = ycords_peao_b_3;

    jogadas_peao_b_3 += 1;
    limpar_peoes();
}
btn_peao_b_3_andar2.onclick = () =>{
    ycords_peao_b_3 += 2;
    peao_b_3.style.top = posicoes_y[ycords_peao_b_3] + "px";
        
    casa_atual_b_x = xcords_peao_b_3;
    casa_atual_b_y = ycords_peao_b_3;

    jogadas_peao_b_3 += 1;
    limpar_peoes();
}


btn_peao_b_4.onclick = () =>{
    if(vez == 0){
    btn_peao_b_4_andar1.style.display = "block";
    if (jogadas_peao_b_4 < 1){
        btn_peao_b_4_andar2.style.display = "block";
    }
}
}
btn_peao_b_4_andar1.onclick = () =>{
    ycords_peao_b_4 += 1;
    peao_b_4.style.top = posicoes_y[ycords_peao_b_4] + "px";
            
    casa_atual_b_x = xcords_peao_b_4;
    casa_atual_b_y = ycords_peao_b_4;

    jogadas_peao_b_4 += 1;
    limpar_peoes();
}
btn_peao_b_4_andar2.onclick = () =>{
    ycords_peao_b_4 += 2;
    peao_b_4.style.top = posicoes_y[ycords_peao_b_4] + "px";
            
    casa_atual_b_x = xcords_peao_b_4;
    casa_atual_b_y = ycords_peao_b_4;

    jogadas_peao_b_4 += 1;
    limpar_peoes();
}


btn_peao_b_5.onclick = () =>{
    if(vez == 0){
    btn_peao_b_5_andar1.style.display = "block";
    if (jogadas_peao_b_5 < 1){
        btn_peao_b_5_andar2.style.display = "block";
    }
}
}
btn_peao_b_5_andar1.onclick = () =>{
    ycords_peao_b_5 += 1;
    peao_b_5.style.top = posicoes_y[ycords_peao_b_5] + "px";
           
    casa_atual_b_x = xcords_peao_b_5;
    casa_atual_b_y = ycords_peao_b_5;

    jogadas_peao_b_5 += 1;
    limpar_peoes();
}
btn_peao_b_5_andar2.onclick = () =>{
    ycords_peao_b_5 += 2;
    peao_b_5.style.top = posicoes_y[ycords_peao_b_5] + "px";
            
    casa_atual_b_x = xcords_peao_b_5;
    casa_atual_b_y = ycords_peao_b_5;

    jogadas_peao_b_5 += 1;
    limpar_peoes();
}


btn_peao_b_6.onclick = () =>{
    if(vez == 0){
    btn_peao_b_6_andar1.style.display = "block";
    if (jogadas_peao_b_6 < 1){
        btn_peao_b_6_andar2.style.display = "block";
    }
}
}
btn_peao_b_6_andar1.onclick = () =>{
    ycords_peao_b_6 += 1;
    peao_b_6.style.top = posicoes_y[ycords_peao_b_6] + "px";
            
    casa_atual_b_x = xcords_peao_b_6;
    casa_atual_b_y = ycords_peao_b_6;

    jogadas_peao_b_6 += 1;
    limpar_peoes();
}
btn_peao_b_6_andar2.onclick = () =>{
    ycords_peao_b_6 += 2;
    peao_b_6.style.top = posicoes_y[ycords_peao_b_6] + "px";
    
            
    casa_atual_b_x = xcords_peao_b_6;
    casa_atual_b_y = ycords_peao_b_6;

    jogadas_peao_b_6 += 1;
    limpar_peoes();
}


btn_peao_b_7.onclick = () =>{
    if(vez == 0){
    btn_peao_b_7_andar1.style.display = "block";
    if (jogadas_peao_b_7 < 1){
        btn_peao_b_7_andar2.style.display = "block";
    }
}
}
btn_peao_b_7_andar1.onclick = () =>{
    ycords_peao_b_7 += 1;
    peao_b_7.style.top = posicoes_y[ycords_peao_b_7] + "px";
    
            
    casa_atual_b_x = xcords_peao_b_7;
    casa_atual_b_y = ycords_peao_b_7;

    jogadas_peao_b_7 += 1;
    limpar_peoes();
}
btn_peao_b_7_andar2.onclick = () =>{
    ycords_peao_b_7 += 2;
    peao_b_7.style.top = posicoes_y[ycords_peao_b_7] + "px";
            
    casa_atual_b_x = xcords_peao_b_7;
    casa_atual_b_y = ycords_peao_b_7;

    jogadas_peao_b_7 += 1;
    limpar_peoes();
}


btn_peao_b_8.onclick = () =>{
    if(vez == 0){
    btn_peao_b_8_andar1.style.display = "block";
    if (jogadas_peao_b_8 < 1){
        btn_peao_b_8_andar2.style.display = "block";
    }
}
}
btn_peao_b_8_andar1.onclick = () =>{
    ycords_peao_b_8 += 1;
    peao_b_8.style.top = posicoes_y[ycords_peao_b_8] + "px";
    
            
    casa_atual_b_x = xcords_peao_b_8;
    casa_atual_b_y = ycords_peao_b_8;

    jogadas_peao_b_8 += 1;
    limpar_peoes();
}
btn_peao_b_8_andar2.onclick = () =>{
    ycords_peao_b_8 += 2;
    peao_b_8.style.top = posicoes_y[ycords_peao_b_8] + "px";
            
    casa_atual_b_x = xcords_peao_b_8;
    casa_atual_b_y = ycords_peao_b_8;

    jogadas_peao_b_8 += 1;
    limpar_peoes();
}


