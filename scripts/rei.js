function rei_b1_mostrar_jogadas(){
    if(ycords_rei_b > 0){
    btn_rei_b_1_andar4.style.display = "block";
        if(xcords_rei_b > 0){
        btn_rei_b_1_andar3.style.display = "block";
        } if(xcords_rei_b < 7){
        btn_rei_b_1_andar5.style.display = "block";
        }
    }
    if(ycords_rei_b < 7){
    btn_rei_b_1_andar8.style.display = "block";
        if(xcords_rei_b > 0){
        btn_rei_b_1_andar1.style.display = "block";
        } if(xcords_rei_b < 7){
        btn_rei_b_1_andar7.style.display = "block";
        }
    }
    if(xcords_rei_b > 0){
        btn_rei_b_1_andar2.style.display = "block";
    }
    if(xcords_rei_b < 7){
        btn_rei_b_1_andar6.style.display = "block";
    }
    
        
}


function limpar_reis(){
    casa_atual_b_x = xcords_rei_b;
    casa_atual_b_y = ycords_rei_b;
    btn_rei_b_1_andar1.style.display = "none";
    btn_rei_b_1_andar2.style.display = "none";
    btn_rei_b_1_andar3.style.display = "none";
    btn_rei_b_1_andar4.style.display = "none";
    btn_rei_b_1_andar5.style.display = "none";
    btn_rei_b_1_andar6.style.display = "none";
    btn_rei_b_1_andar7.style.display = "none";
    btn_rei_b_1_andar8.style.display = "none";
}


function rei_p1_mostrar_jogadas(){
    if(ycords_rei_p > 0){
    btn_rei_p_1_andar4.style.display = "block";
        if(xcords_rei_p > 0){
        btn_rei_p_1_andar3.style.display = "block";
        } if(xcords_rei_p < 7){
        btn_rei_p_1_andar5.style.display = "block";
        }
    }
    if(ycords_rei_p < 7){
    btn_rei_p_1_andar8.style.display = "block";
        if(xcords_rei_p > 0){
        btn_rei_p_1_andar1.style.display = "block";
        } if(xcords_rei_p < 7){
        btn_rei_p_1_andar7.style.display = "block";
        }
    }
    if(xcords_rei_p > 0){
        btn_rei_p_1_andar2.style.display = "block";
    }
    if(xcords_rei_p < 7){
        btn_rei_p_1_andar6.style.display = "block";
    }
    
        
}


function limpar_reis_p(){
    casa_atual_p_x = xcords_rei_p;
    casa_atual_p_y = ycords_rei_p;
    btn_rei_p_1_andar1.style.display = "none";
    btn_rei_p_1_andar2.style.display = "none";
    btn_rei_p_1_andar3.style.display = "none";
    btn_rei_p_1_andar4.style.display = "none";
    btn_rei_p_1_andar5.style.display = "none";
    btn_rei_p_1_andar6.style.display = "none";
    btn_rei_p_1_andar7.style.display = "none";
    btn_rei_p_1_andar8.style.display = "none";

    console.log("rei eixo x: ", xcords_rei_p);
    console.log("rei eixo y: ", ycords_rei_p);
}

// reis branc0s configs
btn_rei_b.onclick = () =>{
    if(vez == 0){
    rei_b1_mostrar_jogadas();
    }
}
btn_rei_b_1_andar1.onclick = () =>{
    ycords_rei_b += 1;
    xcords_rei_b -= 1;
    rei_b.style.top = posicoes_y[ycords_rei_b] + "px";
    rei_b.style.left = posicoes_x[xcords_rei_b] + "px";
    limpar_reis();
}
btn_rei_b_1_andar2.onclick = () =>{
    xcords_rei_b -= 1;
    rei_b.style.left = posicoes_x[xcords_rei_b] + "px";
    limpar_reis();
}
btn_rei_b_1_andar3.onclick = () =>{
    ycords_rei_b -= 1;
    xcords_rei_b -= 1;
    rei_b.style.top = posicoes_y[ycords_rei_b] + "px";
    rei_b.style.left = posicoes_x[xcords_rei_b] + "px";
    limpar_reis();
}
btn_rei_b_1_andar4.onclick = () =>{
    ycords_rei_b -= 1;
    rei_b.style.top = posicoes_y[ycords_rei_b] + "px";
    limpar_reis();
}
btn_rei_b_1_andar5.onclick = () =>{
    ycords_rei_b -= 1;
    xcords_rei_b += 1;
    rei_b.style.top = posicoes_y[ycords_rei_b] + "px";
    rei_b.style.left = posicoes_x[xcords_rei_b] + "px";
    limpar_reis();
}
btn_rei_b_1_andar6.onclick = () =>{
    xcords_rei_b += 1;
    rei_b.style.left = posicoes_x[xcords_rei_b] + "px";
    limpar_reis();
}
btn_rei_b_1_andar7.onclick = () =>{
    ycords_rei_b += 1;
    xcords_rei_b += 1;
    rei_b.style.top = posicoes_y[ycords_rei_b] + "px";
    rei_b.style.left = posicoes_x[xcords_rei_b] + "px";
    limpar_reis();
}
btn_rei_b_1_andar8.onclick = () =>{
    ycords_rei_b += 1;
    rei_b.style.top = posicoes_y[ycords_rei_b] + "px";
    limpar_reis();
}



// reis branc0s configs
btn_rei_p.onclick = () =>{
    if(vez == 1){
    rei_p1_mostrar_jogadas();
    }
}
btn_rei_p_1_andar1.onclick = () =>{
    ycords_rei_p += 1;
    xcords_rei_p -= 1;
    rei_p.style.top = posicoes_y[ycords_rei_p] + "px";
    rei_p.style.left = posicoes_x[xcords_rei_p] + "px";
    limpar_reis_p();
}
btn_rei_p_1_andar2.onclick = () =>{
    xcords_rei_p -= 1;
    rei_p.style.left = posicoes_x[xcords_rei_p] + "px";
    limpar_reis_p();
}
btn_rei_p_1_andar3.onclick = () =>{
    ycords_rei_p -= 1;
    xcords_rei_p -= 1;
    rei_p.style.top = posicoes_y[ycords_rei_p] + "px";
    rei_p.style.left = posicoes_x[xcords_rei_p] + "px";
    limpar_reis_p();
}
btn_rei_p_1_andar4.onclick = () =>{
    ycords_rei_p -= 1;
    rei_p.style.top = posicoes_y[ycords_rei_p] + "px";
    limpar_reis_p();
}
btn_rei_p_1_andar5.onclick = () =>{
    ycords_rei_p -= 1;
    xcords_rei_p += 1;
    rei_p.style.top = posicoes_y[ycords_rei_p] + "px";
    rei_p.style.left = posicoes_x[xcords_rei_p] + "px";
    limpar_reis_p();
}
btn_rei_p_1_andar6.onclick = () =>{
    xcords_rei_p += 1;
    rei_p.style.left = posicoes_x[xcords_rei_p] + "px";
    limpar_reis_p();
}
btn_rei_p_1_andar7.onclick = () =>{
    ycords_rei_p += 1;
    xcords_rei_p += 1;
    rei_p.style.top = posicoes_y[ycords_rei_p] + "px";
    rei_p.style.left = posicoes_x[xcords_rei_p] + "px";
    limpar_reis_p();
}
btn_rei_p_1_andar8.onclick = () =>{
    ycords_rei_p += 1;
    rei_p.style.top = posicoes_y[ycords_rei_p] + "px";
    limpar_reis_p();
}



