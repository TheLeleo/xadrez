function cavalo_b1_mostrar_jogadas(){
    
    if (xcords_cavalo_b_1 > 0){
        if(ycords_cavalo_b_1 <6){
        btn_cavalo_b_1_andar1.style.display = "block";
        }
        if(ycords_cavalo_b_1 > 1){
        btn_cavalo_b_1_andar6.style.display = "block";
        }
    }
    if (xcords_cavalo_b_1 > 1){
        btn_cavalo_b_1_andar7.style.display = "block";
        if(ycords_cavalo_b_1 <6){
        btn_cavalo_b_1_andar8.style.display = "block";
        }

    }
    if (xcords_cavalo_b_1 < 7){
        if(ycords_cavalo_b_1 <6){
        btn_cavalo_b_1_andar2.style.display = "block";
        }
        if(ycords_cavalo_b_1 > 1){
        btn_cavalo_b_1_andar5.style.display = "block";
        }
    }
    if (xcords_cavalo_b_1 < 6){
        if(ycords_cavalo_b_1 <6){
        btn_cavalo_b_1_andar3.style.display = "block";
        }
        if(ycords_cavalo_b_1 > 0){
        btn_cavalo_b_1_andar4.style.display = "block";
        }
    
    }
    
}

function cavalo_b2_mostrar_jogadas(){
    
    
    if (xcords_cavalo_b_2 > 0){
        if(ycords_cavalo_b_2 <6){
        btn_cavalo_b_2_andar1.style.display = "block";
        }
        if(ycords_cavalo_b_2 > 1){
        btn_cavalo_b_2_andar6.style.display = "block";
        }
    }
    if (xcords_cavalo_b_2 > 1){
        btn_cavalo_b_2_andar7.style.display = "block";
        if(ycords_cavalo_b_2 <6){
        btn_cavalo_b_2_andar8.style.display = "block";
        }

    }
    if (xcords_cavalo_b_2 < 7){
        if(ycords_cavalo_b_2 <6){
        btn_cavalo_b_2_andar2.style.display = "block";
        }
        if(ycords_cavalo_b_2 > 1){
        btn_cavalo_b_2_andar5.style.display = "block";
        }
    }
    if (xcords_cavalo_b_2 < 6){
        if(ycords_cavalo_b_2 <6){
        btn_cavalo_b_2_andar3.style.display = "block";
        }
        if(ycords_cavalo_b_2 > 0){
        btn_cavalo_b_2_andar4.style.display = "block";
        }
    
    }
    
}


function limpar_cavalos_b_1(){
    casa_atual_b_x = xcords_cavalo_b_1;
    casa_atual_b_y = ycords_cavalo_b_1;

    btn_cavalo_b_1_andar1.style.display = "none";
    btn_cavalo_b_1_andar2.style.display = "none";
    btn_cavalo_b_1_andar3.style.display = "none";
    btn_cavalo_b_1_andar4.style.display = "none";
    btn_cavalo_b_1_andar5.style.display = "none";
    btn_cavalo_b_1_andar6.style.display = "none";
    btn_cavalo_b_1_andar7.style.display = "none";
    btn_cavalo_b_1_andar8.style.display = "none";
}

function limpar_cavalos_b_2(){
    casa_atual_b_x = xcords_cavalo_b_2;
    casa_atual_b_y = ycords_cavalo_b_2;

    btn_cavalo_b_2_andar1.style.display = "none";
    btn_cavalo_b_2_andar2.style.display = "none";
    btn_cavalo_b_2_andar3.style.display = "none";
    btn_cavalo_b_2_andar4.style.display = "none";
    btn_cavalo_b_2_andar5.style.display = "none";
    btn_cavalo_b_2_andar6.style.display = "none";
    btn_cavalo_b_2_andar7.style.display = "none";
    btn_cavalo_b_2_andar8.style.display = "none";
}



function cavalo_p1_mostrar_jogadas(){
    
    if (xcords_cavalo_p_1 > 0){
        if(ycords_cavalo_p_1 <6){
        btn_cavalo_p_1_andar1.style.display = "block";
        }
        if(ycords_cavalo_p_1 > 1){
        btn_cavalo_p_1_andar6.style.display = "block";
        }
    }
    if (xcords_cavalo_p_1 > 1){
        btn_cavalo_p_1_andar7.style.display = "block";
        if(ycords_cavalo_p_1 <6){
        btn_cavalo_p_1_andar8.style.display = "block";
        }

    }
    if (xcords_cavalo_p_1 < 7){
        if(ycords_cavalo_p_1 <6){
        btn_cavalo_p_1_andar2.style.display = "block";
        }
        if(ycords_cavalo_p_1 > 1){
        btn_cavalo_p_1_andar5.style.display = "block";
        }
    }
    if (xcords_cavalo_p_1 < 6){
        if(ycords_cavalo_p_1 <6){
        btn_cavalo_p_1_andar3.style.display = "block";
        }
        if(ycords_cavalo_p_1 > 0){
        btn_cavalo_p_1_andar4.style.display = "block";
        }
    
    }
    
}

function cavalo_p2_mostrar_jogadas(){
    
    if (xcords_cavalo_p_2 > 0){
        if(ycords_cavalo_p_2 <6){
        btn_cavalo_p_2_andar1.style.display = "block";
        }
        if(ycords_cavalo_p_2 > 1){
        btn_cavalo_p_2_andar6.style.display = "block";
        }
    }
    if (xcords_cavalo_p_2 > 1){
        btn_cavalo_p_2_andar7.style.display = "block";
        if(ycords_cavalo_p_2 <6){
        btn_cavalo_p_2_andar8.style.display = "block";
        }

    }
    if (xcords_cavalo_p_2 < 7){
        if(ycords_cavalo_p_2 <6){
        btn_cavalo_p_2_andar2.style.display = "block";
        }
        if(ycords_cavalo_p_2 > 1){
        btn_cavalo_p_2_andar5.style.display = "block";
        }
    }
    if (xcords_cavalo_p_2 < 6){
        if(ycords_cavalo_p_2 <6){
        btn_cavalo_p_2_andar3.style.display = "block";
        }
        if(ycords_cavalo_p_2 > 0){
        btn_cavalo_p_2_andar4.style.display = "block";
        }
    
    }
    
}


function limpar_cavalos_p_1(){
    casa_atual_p_x = xcords_cavalo_p_1;
    casa_atual_p_y = ycords_cavalo_p_1;

    btn_cavalo_p_1_andar1.style.display = "none";
    btn_cavalo_p_1_andar2.style.display = "none";
    btn_cavalo_p_1_andar3.style.display = "none";
    btn_cavalo_p_1_andar4.style.display = "none";
    btn_cavalo_p_1_andar5.style.display = "none";
    btn_cavalo_p_1_andar6.style.display = "none";
    btn_cavalo_p_1_andar7.style.display = "none";
    btn_cavalo_p_1_andar8.style.display = "none";
}

function limpar_cavalos_p_2(){
    casa_atual_p_x = xcords_cavalo_p_2;
    casa_atual_p_y = ycords_cavalo_p_2;

    btn_cavalo_p_2_andar1.style.display = "none";
    btn_cavalo_p_2_andar2.style.display = "none";
    btn_cavalo_p_2_andar3.style.display = "none";
    btn_cavalo_p_2_andar4.style.display = "none";
    btn_cavalo_p_2_andar5.style.display = "none";
    btn_cavalo_p_2_andar6.style.display = "none";
    btn_cavalo_p_2_andar7.style.display = "none";
    btn_cavalo_p_2_andar8.style.display = "none";
}



// cavalos brancos configs (1)
btn_cavalo_b_1.onclick = () =>{
    if(vez == 0){
    cavalo_b1_mostrar_jogadas();
    }
}
btn_cavalo_b_1_andar1.onclick = () =>{
    ycords_cavalo_b_1 += 2;
    xcords_cavalo_b_1 -= 1;
    cavalo_b_1.style.top = posicoes_y[ycords_cavalo_b_1] + "px";
    cavalo_b_1.style.left = posicoes_x[xcords_cavalo_b_1] + "px";
    limpar_cavalos_b_1();
}
btn_cavalo_b_1_andar2.onclick = () =>{
    ycords_cavalo_b_1 += 2;
    xcords_cavalo_b_1 += 1;
    cavalo_b_1.style.top = posicoes_y[ycords_cavalo_b_1] + "px";
    cavalo_b_1.style.left = posicoes_x[xcords_cavalo_b_1] + "px";
    limpar_cavalos_b_1();
}
btn_cavalo_b_1_andar3.onclick = () =>{
    ycords_cavalo_b_1 += 1;
    xcords_cavalo_b_1 += 2;
    cavalo_b_1.style.top = posicoes_y[ycords_cavalo_b_1] + "px";
    cavalo_b_1.style.left = posicoes_x[xcords_cavalo_b_1] + "px";
    limpar_cavalos_b_1();
}
btn_cavalo_b_1_andar4.onclick = () =>{
    ycords_cavalo_b_1 -= 1;
    xcords_cavalo_b_1 += 2;
    cavalo_b_1.style.top = posicoes_y[ycords_cavalo_b_1] + "px";
    cavalo_b_1.style.left = posicoes_x[xcords_cavalo_b_1] + "px";
    limpar_cavalos_b_1();
}
btn_cavalo_b_1_andar5.onclick = () =>{
    ycords_cavalo_b_1 -= 2;
    xcords_cavalo_b_1 += 1;
    cavalo_b_1.style.top = posicoes_y[ycords_cavalo_b_1] + "px";
    cavalo_b_1.style.left = posicoes_x[xcords_cavalo_b_1] + "px";
    limpar_cavalos_b_1();
}
btn_cavalo_b_1_andar6.onclick = () =>{
    ycords_cavalo_b_1 -= 2;
    xcords_cavalo_b_1 -= 1;
    cavalo_b_1.style.top = posicoes_y[ycords_cavalo_b_1] + "px";
    cavalo_b_1.style.left = posicoes_x[xcords_cavalo_b_1] + "px";
    limpar_cavalos_b_1();
}
btn_cavalo_b_1_andar7.onclick = () =>{
    ycords_cavalo_b_1 -= 1;
    xcords_cavalo_b_1 -= 2;
    cavalo_b_1.style.top = posicoes_y[ycords_cavalo_b_1] + "px";
    cavalo_b_1.style.left = posicoes_x[xcords_cavalo_b_1] + "px";
    limpar_cavalos_b_1();
}
btn_cavalo_b_1_andar8.onclick = () =>{
    ycords_cavalo_b_1 += 1;
    xcords_cavalo_b_1 -= 2;
    cavalo_b_1.style.top = posicoes_y[ycords_cavalo_b_1] + "px";
    cavalo_b_1.style.left = posicoes_x[xcords_cavalo_b_1] + "px";
    limpar_cavalos_b_1();
}






// cavalos branc0s configs
btn_cavalo_b_2.onclick = () =>{
    if(vez == 0){
    cavalo_b2_mostrar_jogadas();
    }
}
btn_cavalo_b_2_andar1.onclick = () =>{
    ycords_cavalo_b_2 += 2;
    xcords_cavalo_b_2 -= 1;
    cavalo_b_2.style.top = posicoes_y[ycords_cavalo_b_2] + "px";
    cavalo_b_2.style.left = posicoes_x[xcords_cavalo_b_2] + "px";
    limpar_cavalos_b_2();
}
btn_cavalo_b_2_andar2.onclick = () =>{
    ycords_cavalo_b_2 += 2;
    xcords_cavalo_b_2 += 1;
    cavalo_b_2.style.top = posicoes_y[ycords_cavalo_b_2] + "px";
    cavalo_b_2.style.left = posicoes_x[xcords_cavalo_b_2] + "px";
    limpar_cavalos_b_2();
}
btn_cavalo_b_2_andar3.onclick = () =>{
    ycords_cavalo_b_2 += 1;
    xcords_cavalo_b_2 += 2;
    cavalo_b_2.style.top = posicoes_y[ycords_cavalo_b_2] + "px";
    cavalo_b_2.style.left = posicoes_x[xcords_cavalo_b_2] + "px";
    limpar_cavalos_b_2();
}
btn_cavalo_b_2_andar4.onclick = () =>{
    ycords_cavalo_b_2 -= 1;
    xcords_cavalo_b_2 += 2;
    cavalo_b_2.style.top = posicoes_y[ycords_cavalo_b_2] + "px";
    cavalo_b_2.style.left = posicoes_x[xcords_cavalo_b_2] + "px";
    limpar_cavalos_b_2();
}
btn_cavalo_b_2_andar5.onclick = () =>{
    ycords_cavalo_b_2 -= 2;
    xcords_cavalo_b_2 += 1;
    cavalo_b_2.style.top = posicoes_y[ycords_cavalo_b_2] + "px";
    cavalo_b_2.style.left = posicoes_x[xcords_cavalo_b_2] + "px";
    limpar_cavalos_b_2();
}
btn_cavalo_b_2_andar6.onclick = () =>{
    ycords_cavalo_b_2 -= 2;
    xcords_cavalo_b_2 -= 1;
    cavalo_b_2.style.top = posicoes_y[ycords_cavalo_b_2] + "px";
    cavalo_b_2.style.left = posicoes_x[xcords_cavalo_b_2] + "px";
    limpar_cavalos_b_2();
}
btn_cavalo_b_2_andar7.onclick = () =>{
    ycords_cavalo_b_2 -= 1;
    xcords_cavalo_b_2 -= 2;
    cavalo_b_2.style.top = posicoes_y[ycords_cavalo_b_2] + "px";
    cavalo_b_2.style.left = posicoes_x[xcords_cavalo_b_2] + "px";
    limpar_cavalos_b_2();
}
btn_cavalo_b_2_andar8.onclick = () =>{
    ycords_cavalo_b_2 += 1;
    xcords_cavalo_b_2 -= 2;
    cavalo_b_2.style.top = posicoes_y[ycords_cavalo_b_2] + "px";
    cavalo_b_2.style.left = posicoes_x[xcords_cavalo_b_2] + "px";
    limpar_cavalos_b_2();
}




// cavalos pretos configs (1)
btn_cavalo_p_1.onclick = () =>{
    if(vez == 1){
    cavalo_p1_mostrar_jogadas();
    }
}
btn_cavalo_p_1_andar1.onclick = () =>{
    ycords_cavalo_p_1 += 2;
    xcords_cavalo_p_1 -= 1;
    cavalo_p_1.style.top = posicoes_y[ycords_cavalo_p_1] + "px";
    cavalo_p_1.style.left = posicoes_x[xcords_cavalo_p_1] + "px";
    limpar_cavalos_p_1();
}
btn_cavalo_p_1_andar2.onclick = () =>{
    ycords_cavalo_p_1 += 2;
    xcords_cavalo_p_1 += 1;
    cavalo_p_1.style.top = posicoes_y[ycords_cavalo_p_1] + "px";
    cavalo_p_1.style.left = posicoes_x[xcords_cavalo_p_1] + "px";
    limpar_cavalos_p_1();
}
btn_cavalo_p_1_andar3.onclick = () =>{
    ycords_cavalo_p_1 += 1;
    xcords_cavalo_p_1 += 2;
    cavalo_p_1.style.top = posicoes_y[ycords_cavalo_p_1] + "px";
    cavalo_p_1.style.left = posicoes_x[xcords_cavalo_p_1] + "px";
    limpar_cavalos_p_1();
}
btn_cavalo_p_1_andar4.onclick = () =>{
    ycords_cavalo_p_1 -= 1;
    xcords_cavalo_p_1 += 2;
    cavalo_p_1.style.top = posicoes_y[ycords_cavalo_p_1] + "px";
    cavalo_p_1.style.left = posicoes_x[xcords_cavalo_p_1] + "px";
    limpar_cavalos_p_1();
}
btn_cavalo_p_1_andar5.onclick = () =>{
    ycords_cavalo_p_1 -= 2;
    xcords_cavalo_p_1 += 1;
    cavalo_p_1.style.top = posicoes_y[ycords_cavalo_p_1] + "px";
    cavalo_p_1.style.left = posicoes_x[xcords_cavalo_p_1] + "px";
    limpar_cavalos_p_1();
}
btn_cavalo_p_1_andar6.onclick = () =>{
    ycords_cavalo_p_1 -= 2;
    xcords_cavalo_p_1 -= 1;
    cavalo_p_1.style.top = posicoes_y[ycords_cavalo_p_1] + "px";
    cavalo_p_1.style.left = posicoes_x[xcords_cavalo_p_1] + "px";
    limpar_cavalos_p_1();
}
btn_cavalo_p_1_andar7.onclick = () =>{
    ycords_cavalo_p_1 -= 1;
    xcords_cavalo_p_1 -= 2;
    cavalo_p_1.style.top = posicoes_y[ycords_cavalo_p_1] + "px";
    cavalo_p_1.style.left = posicoes_x[xcords_cavalo_p_1] + "px";
    limpar_cavalos_p_1();
}
btn_cavalo_p_1_andar8.onclick = () =>{
    ycords_cavalo_p_1 += 1;
    xcords_cavalo_p_1 -= 2;
    cavalo_p_1.style.top = posicoes_y[ycords_cavalo_p_1] + "px";
    cavalo_p_1.style.left = posicoes_x[xcords_cavalo_p_1] + "px";
    limpar_cavalos_p_1();
}






// cavalos pretos configs (2)
btn_cavalo_p_2.onclick = () =>{
    if(vez == 1){
    cavalo_p2_mostrar_jogadas();
    }
}
btn_cavalo_p_2_andar1.onclick = () =>{
    ycords_cavalo_p_2 += 2;
    xcords_cavalo_p_2 -= 1;
    cavalo_p_2.style.top = posicoes_y[ycords_cavalo_p_2] + "px";
    cavalo_p_2.style.left = posicoes_x[xcords_cavalo_p_2] + "px";
    limpar_cavalos_p_2();
}
btn_cavalo_p_2_andar2.onclick = () =>{
    ycords_cavalo_p_2 += 2;
    xcords_cavalo_p_2 += 1;
    cavalo_p_2.style.top = posicoes_y[ycords_cavalo_p_2] + "px";
    cavalo_p_2.style.left = posicoes_x[xcords_cavalo_p_2] + "px";
    limpar_cavalos_p_2();
}
btn_cavalo_p_2_andar3.onclick = () =>{
    ycords_cavalo_p_2 += 1;
    xcords_cavalo_p_2 += 2;
    cavalo_p_2.style.top = posicoes_y[ycords_cavalo_p_2] + "px";
    cavalo_p_2.style.left = posicoes_x[xcords_cavalo_p_2] + "px";
    limpar_cavalos_p_2();
}
btn_cavalo_p_2_andar4.onclick = () =>{
    ycords_cavalo_p_2 -= 1;
    xcords_cavalo_p_2 += 2;
    cavalo_p_2.style.top = posicoes_y[ycords_cavalo_p_2] + "px";
    cavalo_p_2.style.left = posicoes_x[xcords_cavalo_p_2] + "px";
    limpar_cavalos_p_2();
}
btn_cavalo_p_2_andar5.onclick = () =>{
    ycords_cavalo_p_2 -= 2;
    xcords_cavalo_p_2 += 1;
    cavalo_p_2.style.top = posicoes_y[ycords_cavalo_p_2] + "px";
    cavalo_p_2.style.left = posicoes_x[xcords_cavalo_p_2] + "px";
    limpar_cavalos_p_2();
}
btn_cavalo_p_2_andar6.onclick = () =>{
    ycords_cavalo_p_2 -= 2;
    xcords_cavalo_p_2 -= 1;
    cavalo_p_2.style.top = posicoes_y[ycords_cavalo_p_2] + "px";
    cavalo_p_2.style.left = posicoes_x[xcords_cavalo_p_2] + "px";
    limpar_cavalos_p_2();
}
btn_cavalo_p_2_andar7.onclick = () =>{
    ycords_cavalo_p_2 -= 1;
    xcords_cavalo_p_2 -= 2;
    cavalo_p_2.style.top = posicoes_y[ycords_cavalo_p_2] + "px";
    cavalo_p_2.style.left = posicoes_x[xcords_cavalo_p_2] + "px";
    limpar_cavalos_p_2();
}
btn_cavalo_p_2_andar8.onclick = () =>{
    ycords_cavalo_p_2 += 1;
    xcords_cavalo_p_2 -= 2;
    cavalo_p_2.style.top = posicoes_y[ycords_cavalo_p_2] + "px";
    cavalo_p_2.style.left = posicoes_x[xcords_cavalo_p_2] + "px";
    limpar_cavalos_p_2();
}


