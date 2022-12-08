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

}


function limpar_casas_laranja(){
    btn_peao_b_1_diagonal_cima_esquerda.style.display = "none";
    btn_peao_b_2_diagonal_cima_esquerda.style.display = "none";
    btn_peao_b_3_diagonal_cima_esquerda.style.display = "none";
    btn_peao_b_4_diagonal_cima_esquerda.style.display = "none";
    btn_peao_b_5_diagonal_cima_esquerda.style.display = "none";
    btn_peao_b_6_diagonal_cima_esquerda.style.display = "none";
    btn_peao_b_7_diagonal_cima_esquerda.style.display = "none";
    btn_peao_b_8_diagonal_cima_esquerda.style.display = "none";

    btn_peao_b_1_diagonal_cima_direita.style.display = "none";
    btn_peao_b_2_diagonal_cima_direita.style.display = "none";
    btn_peao_b_3_diagonal_cima_direita.style.display = "none";
    btn_peao_b_4_diagonal_cima_direita.style.display = "none";
    btn_peao_b_5_diagonal_cima_direita.style.display = "none";
    btn_peao_b_6_diagonal_cima_direita.style.display = "none";
    btn_peao_b_7_diagonal_cima_direita.style.display = "none";
    btn_peao_b_8_diagonal_cima_direita.style.display = "none";


    btn_peao_p_1_diagonal_baixo_esquerda.style.display = "none";
    btn_peao_p_2_diagonal_baixo_esquerda.style.display = "none";
    btn_peao_p_3_diagonal_baixo_esquerda.style.display = "none";
    btn_peao_p_4_diagonal_baixo_esquerda.style.display = "none";
    btn_peao_p_5_diagonal_baixo_esquerda.style.display = "none";
    btn_peao_p_6_diagonal_baixo_esquerda.style.display = "none";
    btn_peao_p_7_diagonal_baixo_esquerda.style.display = "none";
    btn_peao_p_8_diagonal_baixo_esquerda.style.display = "none";

    btn_peao_p_1_diagonal_baixo_direita.style.display = "none";
    btn_peao_p_2_diagonal_baixo_direita.style.display = "none";
    btn_peao_p_3_diagonal_baixo_direita.style.display = "none";
    btn_peao_p_4_diagonal_baixo_direita.style.display = "none";
    btn_peao_p_5_diagonal_baixo_direita.style.display = "none";
    btn_peao_p_6_diagonal_baixo_direita.style.display = "none";
    btn_peao_p_7_diagonal_baixo_direita.style.display = "none";
    btn_peao_p_8_diagonal_baixo_direita.style.display = "none";

}


function comer_pecas_b(){
    if (ycords_peao_atual_b + 1 == ycords_peao_p_1){

        if(xcords_peao_atual_b + 1 == xcords_peao_p_1){
            if (atual == 1){
            btn_peao_b_1_diagonal_cima_direita.style.display = "block";
            } if (atual == 2){
            btn_peao_b_2_diagonal_cima_direita.style.display = "block";
            } if (atual == 3){
            btn_peao_b_3_diagonal_cima_direita.style.display = "block";
            } if (atual == 4){
            btn_peao_b_4_diagonal_cima_direita.style.display = "block";
            } if (atual == 5){
            btn_peao_b_5_diagonal_cima_direita.style.display = "block";
            } if (atual == 6){
            btn_peao_b_6_diagonal_cima_direita.style.display = "block";
            } if (atual == 7){
            btn_peao_b_7_diagonal_cima_direita.style.display = "block";
            } if (atual == 8){
            btn_peao_b_8_diagonal_cima_direita.style.display = "block";
            }
        }

        
        if(xcords_peao_atual_b - 1 == xcords_peao_p_1){
             if (atual == 1){
            btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 2){
            btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 3){
            btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 4){
            btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 5){
            btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 6){
            btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 7){
            btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 8){
            btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }
    
    
    
    if (ycords_peao_atual_b + 1 == ycords_peao_p_2){
        if(xcords_peao_atual_b + 1 == xcords_peao_p_2){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_peao_p_2){
         if (atual == 1){
            btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 2){
            btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 3){
            btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 4){
            btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 5){
            btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 6){
            btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 7){
            btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
            } if (atual == 8){
            btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
        }
    }
}

    if (ycords_peao_atual_b + 1 == ycords_peao_p_3){
        if(xcords_peao_atual_b + 1 == xcords_peao_p_3){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_peao_p_3){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_peao_p_4){
        if(xcords_peao_atual_b + 1 == xcords_peao_p_4){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_peao_p_4){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }
    
    if (ycords_peao_atual_b + 1 == ycords_peao_p_5){
        if(xcords_peao_atual_b + 1 == xcords_peao_p_5){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_peao_p_5){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_peao_p_6){
        if(xcords_peao_atual_b + 1 == xcords_peao_p_6){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_peao_p_6){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_peao_p_7){
        if(xcords_peao_atual_b + 1 == xcords_peao_p_7){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_peao_p_7){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_peao_p_8){
        if(xcords_peao_atual_b + 1 == xcords_peao_p_8){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_peao_p_8){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_torre_p_1){
        if(xcords_peao_atual_b + 1 == xcords_torre_p_1){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_torre_p_1){
            btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
            btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
            btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
            btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
            btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
            btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
            btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
            btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
        }
    }
    
    if (ycords_peao_atual_b + 1 == ycords_torre_p_2){
        if(xcords_peao_atual_b + 1 == xcords_torre_p_2){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_torre_p_2){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_cavalo_p_1){
        if(xcords_peao_atual_b + 1 == xcords_cavalo_p_1){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_cavalo_p_1){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_cavalo_p_2){
        if(xcords_peao_atual_b + 1 == xcords_cavalo_p_2){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_cavalo_p_2){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }
    
    if (ycords_peao_atual_b + 1 == ycords_bispo_p_1){
        if(xcords_peao_atual_b + 1 == xcords_bispo_p_1){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_bispo_p_1){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_bispo_p_2){
        if(xcords_peao_atual_b + 1 == xcords_bispo_p_2){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }
        if(xcords_peao_atual_b - 1 == xcords_bispo_p_2){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_rainha_p){
        if(xcords_peao_atual_b + 1 == xcords_rainha_p){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
            }

        if(xcords_peao_atual_b - 1 == xcords_rainha_p){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }

    if (ycords_peao_atual_b + 1 == ycords_rei_p){
        if(xcords_peao_atual_b + 1 == xcords_rei_p){
                if (atual == 1){
                btn_peao_b_1_diagonal_cima_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_direita.style.display = "block";
                }
        }
        if(xcords_peao_atual_b - 1 == xcords_rei_p){
            if (atual == 1){
                btn_peao_b_1_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_b_2_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_b_3_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_b_4_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_b_5_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_b_6_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_b_7_diagonal_cima_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_b_8_diagonal_cima_esquerda.style.display = "block";
            }
        }
    }
}


function comer_pecas_p(){
    if (ycords_peao_atual_p - 1 == ycords_peao_b_1){
        if(xcords_peao_atual_p + 1 == xcords_peao_b_1){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita2.style.display = "block";
                } if (atual == 3){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_peao_b_1){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }
    
    if (ycords_peao_atual_p - 1 == ycords_peao_b_2){
        if(xcords_peao_atual_p + 1 == xcords_peao_b_2){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita2.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_peao_b_2){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_peao_b_3){
        if(xcords_peao_atual_p + 1 == xcords_peao_b_3){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_peao_b_3){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_peao_b_4){
        if(xcords_peao_atual_p + 1 == xcords_peao_b_4){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_peao_b_4){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }
    
    if (ycords_peao_atual_p - 1 == ycords_peao_b_5){
        if(xcords_peao_atual_p + 1 == xcords_peao_b_5){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_peao_b_5){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_peao_b_6){
        if(xcords_peao_atual_p + 1 == xcords_peao_b_6){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_peao_b_6){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_peao_b_7){
        if(xcords_peao_atual_p + 1 == xcords_peao_b_7){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_peao_b_7){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_peao_b_8){
        if(xcords_peao_atual_p + 1 == xcords_peao_b_8){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_peao_b_8){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_torre_b_1){
        if(xcords_peao_atual_p + 1 == xcords_torre_b_1){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_torre_b_1){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }
    
    if (ycords_peao_atual_p - 1 == ycords_torre_b_2){
        if(xcords_peao_atual_p + 1 == xcords_torre_b_2){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_torre_b_2){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_cavalo_b_1){
        if(xcords_peao_atual_p + 1 == xcords_cavalo_b_1){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_cavalo_b_1){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_cavalo_b_2){
        if(xcords_peao_atual_p + 1 == xcords_cavalo_b_2){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_cavalo_b_2){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }
    
    if (ycords_peao_atual_p - 1 == ycords_bispo_b_1){
        if(xcords_peao_atual_p + 1 == xcords_bispo_b_1){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_bispo_b_1){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_bispo_b_2){
        if(xcords_peao_atual_p + 1 == xcords_bispo_b_2){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_bispo_b_2){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_rainha_b){
        if(xcords_peao_atual_p + 1 == xcords_rainha_b){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_rainha_b){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }

    if (ycords_peao_atual_p - 1 == ycords_rei_b){
        if(xcords_peao_atual_p + 1 == xcords_rei_b){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_direita.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_direita.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_direita.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_direita.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_direita.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_direita.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_direita.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_direita.style.display = "block";
                }
        }if(xcords_peao_atual_p - 1 == xcords_rei_b){
            if (atual == 1){
                btn_peao_p_1_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 2){
                btn_peao_p_2_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 3){
                btn_peao_p_3_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 4){
                btn_peao_p_4_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 5){
                btn_peao_p_5_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 6){
                btn_peao_p_6_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 7){
                btn_peao_p_7_diagonal_baixo_esquerda.style.display = "block";
                } if (atual == 8){
                btn_peao_p_8_diagonal_baixo_esquerda.style.display = "block";
                }
        }
    }
}




// peões pretos configs
btn_peao_p_1.onclick = () =>{
    atual = 1;

    ycords_peao_atual_p = ycords_peao_p_1;
    xcords_peao_atual_p = xcords_peao_p_1;

    if(vez == 1){
    btn_peao_p_1_andar1.style.display = "block";
    if (jogadas_peao_p_1 < 1){
        btn_peao_p_1_andar2.style.display = "block";
    }
    comer_pecas_p();
}

}
btn_peao_p_1_andar1.onclick = () =>{
    ycords_peao_p_1 -= 1;

    peao_p_1.style.top = posicoes_y[ycords_peao_p_1] + "px";
    
    casa_atual_p_x = xcords_peao_p_2;
    casa_atual_p_y = ycords_peao_p_2;

    jogadas_peao_p_1 += 1;
    limpar_peoes();
}
btn_peao_p_1_andar2.onclick = () =>{
    ycords_peao_p_1 -= 2;
    peao_p_1.style.top = posicoes_y[ycords_peao_p_1] + "px";
    
    casa_atual_p_x = xcords_peao_p_3;
    casa_atual_p_y = ycords_peao_p_3;

    jogadas_peao_p_1 += 1;
    limpar_peoes();
}
btn_peao_p_1_diagonal_baixo_direita.onclick = () =>{
    ycords_peao_p_1 -= 1;
    xcords_peao_p_1 += 1;
    peao_p_1.style.top = posicoes_y[ycords_peao_p_1] + "px";
    peao_p_1.style.left = posicoes_x[xcords_peao_p_1] + "px";
    
    casa_atual_p_x = xcords_peao_b_1;
    casa_atual_p_y = ycords_peao_b_1;

    jogadas_peao_b_1 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}
btn_peao_p_1_diagonal_baixo_esquerda.onclick = () =>{
    ycords_peao_p_1 -= 1;
    xcords_peao_p_1 -= 1;
    peao_p_1.style.top = posicoes_y[ycords_peao_p_1] + "px";
    peao_p_1.style.left = posicoes_x[xcords_peao_p_1] + "px";
    
    casa_atual_p_x = xcords_peao_b_1;
    casa_atual_p_y = ycords_peao_b_1;

    jogadas_peao_b_1 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}




btn_peao_p_2.onclick = () =>{
    atual = 2;

    ycords_peao_atual_p = ycords_peao_p_2;
    xcords_peao_atual_p = xcords_peao_p_2;

    if(vez == 1){
    btn_peao_p_2_andar1.style.display = "block";
    if (jogadas_peao_p_2 < 1){
        btn_peao_p_2_andar2.style.display = "block";
    }
    comer_pecas_p();
}
}
btn_peao_p_2_andar1.onclick = () =>{
    ycords_peao_p_2 -= 2;
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
btn_peao_p_2_diagonal_baixo_direita.onclick = () =>{
    ycords_peao_p_2 -= 1;
    xcords_peao_p_2 += 1;
    peao_p_2.style.top = posicoes_y[ycords_peao_p_2] + "px";
    peao_p_2.style.left = posicoes_x[xcords_peao_p_2] + "px";
    
    casa_atual_p_x = xcords_peao_b_2;
    casa_atual_p_y = ycords_peao_b_2;

    jogadas_peao_b_1 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}
btn_peao_p_2_diagonal_baixo_esquerda.onclick = () =>{
    ycords_peao_p_2 -= 1;
    xcords_peao_p_2 -= 1;
    peao_p_2.style.top = posicoes_y[ycords_peao_p_2] + "px";
    peao_p_2.style.left = posicoes_x[xcords_peao_p_2] + "px";
    
    casa_atual_p_x = xcords_peao_b_2;
    casa_atual_p_y = ycords_peao_b_2;

    jogadas_peao_b_2 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}


btn_peao_p_3.onclick = () =>{
    atual = 3;

    ycords_peao_atual_p = ycords_peao_p_3;
    xcords_peao_atual_p = xcords_peao_p_3;

    if(vez == 1){
    btn_peao_p_3_andar1.style.display = "block";
    if (jogadas_peao_p_3 < 1){
        btn_peao_p_3_andar2.style.display = "block";
    }
    comer_pecas_p();
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
btn_peao_p_3_diagonal_baixo_direita.onclick = () =>{
    ycords_peao_p_3 -= 1;
    xcords_peao_p_3 += 1;
    peao_p_3.style.top = posicoes_y[ycords_peao_p_3] + "px";
    peao_p_3.style.left = posicoes_x[xcords_peao_p_3] + "px";
    
    casa_atual_p_x = xcords_peao_b_3;
    casa_atual_p_y = ycords_peao_b_3;

    jogadas_peao_b_3 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}
btn_peao_p_3_diagonal_baixo_esquerda.onclick = () =>{
    ycords_peao_p_3 -= 1;
    xcords_peao_p_3 -= 1;
    peao_p_3.style.top = posicoes_y[ycords_peao_p_3] + "px";
    peao_p_3.style.left = posicoes_x[xcords_peao_p_3] + "px";
    
    casa_atual_p_x = xcords_peao_b_3;
    casa_atual_p_y = ycords_peao_b_3;

    jogadas_peao_b_3 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}


btn_peao_p_4.onclick = () =>{
    atual = 4;

    ycords_peao_atual_p = ycords_peao_p_4;
    xcords_peao_atual_p = xcords_peao_p_4;

    if(vez == 1){
    btn_peao_p_4_andar1.style.display = "block";
    if (jogadas_peao_p_4 < 1){
        btn_peao_p_4_andar2.style.display = "block";
    }
    comer_pecas_p();
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
btn_peao_p_4_diagonal_baixo_direita.onclick = () =>{
    ycords_peao_p_4 -= 1;
    xcords_peao_p_4 += 1;
    peao_p_4.style.top = posicoes_y[ycords_peao_p_4] + "px";
    peao_p_4.style.left = posicoes_x[xcords_peao_p_4] + "px";
    
    casa_atual_p_x = xcords_peao_b_4;
    casa_atual_p_y = ycords_peao_b_4;

    jogadas_peao_b_4 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}
btn_peao_p_4_diagonal_baixo_esquerda.onclick = () =>{
    ycords_peao_p_4 -= 1;
    xcords_peao_p_4 -= 1;
    peao_p_4.style.top = posicoes_y[ycords_peao_p_4] + "px";
    peao_p_4.style.left = posicoes_x[xcords_peao_p_4] + "px";
    
    casa_atual_p_x = xcords_peao_b_4;
    casa_atual_p_y = ycords_peao_b_4;

    jogadas_peao_b_4 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}



btn_peao_p_5.onclick = () =>{
    atual = 5;

    ycords_peao_atual_p = ycords_peao_p_5;
    xcords_peao_atual_p = xcords_peao_p_5;

    if(vez == 1){
    btn_peao_p_5_andar1.style.display = "block";
    if (jogadas_peao_p_5 < 1){
        btn_peao_p_5_andar2.style.display = "block";
    }
    comer_pecas_p();
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
btn_peao_p_5_diagonal_baixo_direita.onclick = () =>{
    ycords_peao_p_5 -= 1;
    xcords_peao_p_5 += 1;
    peao_p_5.style.top = posicoes_y[ycords_peao_p_5] + "px";
    peao_p_5.style.left = posicoes_x[xcords_peao_p_5] + "px";
    
    casa_atual_p_x = xcords_peao_b_5;
    casa_atual_p_y = ycords_peao_b_5;

    jogadas_peao_b_5 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}
btn_peao_p_5_diagonal_baixo_esquerda.onclick = () =>{
    ycords_peao_p_5 -= 1;
    xcords_peao_p_5 -= 1;
    peao_p_5.style.top = posicoes_y[ycords_peao_p_5] + "px";
    peao_p_5.style.left = posicoes_x[xcords_peao_p_5] + "px";
    
    casa_atual_p_x = xcords_peao_b_5;
    casa_atual_p_y = ycords_peao_b_5;

    jogadas_peao_b_5 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}



btn_peao_p_6.onclick = () =>{
    atual = 6;

    ycords_peao_atual_p = ycords_peao_p_6;
    xcords_peao_atual_p = xcords_peao_p_6;

    if(vez == 1){
    btn_peao_p_6_andar1.style.display = "block";
    if (jogadas_peao_p_6 < 1){
        btn_peao_p_6_andar2.style.display = "block";
    }
    comer_pecas_p();
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
btn_peao_p_6_diagonal_baixo_direita.onclick = () =>{
    ycords_peao_p_6 -= 1;
    xcords_peao_p_6 += 1;
    peao_p_6.style.top = posicoes_y[ycords_peao_p_6] + "px";
    peao_p_6.style.left = posicoes_x[xcords_peao_p_6] + "px";
    
    casa_atual_p_x = xcords_peao_b_6;
    casa_atual_p_y = ycords_peao_b_6;

    jogadas_peao_b_6 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}
btn_peao_p_6_diagonal_baixo_esquerda.onclick = () =>{
    ycords_peao_p_6 -= 1;
    xcords_peao_p_6 -= 1;
    peao_p_6.style.top = posicoes_y[ycords_peao_p_6] + "px";
    peao_p_6.style.left = posicoes_x[xcords_peao_p_6] + "px";
    
    casa_atual_p_x = xcords_peao_b_6;
    casa_atual_p_y = ycords_peao_b_6;

    jogadas_peao_b_6 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}


btn_peao_p_7.onclick = () =>{
    atual = 7;

    ycords_peao_atual_p = ycords_peao_p_7;
    xcords_peao_atual_p = xcords_peao_p_7;

    if(vez == 1){
    btn_peao_p_7_andar1.style.display = "block";
    if (jogadas_peao_p_7 < 1){
        btn_peao_p_7_andar2.style.display = "block";
    }
    comer_pecas_p();
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
btn_peao_p_7_diagonal_baixo_direita.onclick = () =>{
    ycords_peao_p_7 -= 1;
    xcords_peao_p_7 += 1;
    peao_p_7.style.top = posicoes_y[ycords_peao_p_7] + "px";
    peao_p_7.style.left = posicoes_x[xcords_peao_p_7] + "px";
    
    casa_atual_p_x = xcords_peao_b_7;
    casa_atual_p_y = ycords_peao_b_7;

    jogadas_peao_b_7 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}
btn_peao_p_7_diagonal_baixo_esquerda.onclick = () =>{
    ycords_peao_p_7 -= 1;
    xcords_peao_p_7 -= 1;
    peao_p_7.style.top = posicoes_y[ycords_peao_p_7] + "px";
    peao_p_7.style.left = posicoes_x[xcords_peao_p_7] + "px";
    
    casa_atual_p_x = xcords_peao_b_7;
    casa_atual_p_y = ycords_peao_b_7;

    jogadas_peao_b_7 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}


btn_peao_p_8.onclick = () =>{
    atual = 8;

    ycords_peao_atual_p = ycords_peao_p_8;
    xcords_peao_atual_p = xcords_peao_p_8;

    if(vez == 1){
    btn_peao_p_8_andar1.style.display = "block";
    if (jogadas_peao_p_8 < 1){
        btn_peao_p_8_andar2.style.display = "block";
    }
    comer_pecas_p();
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

btn_peao_p_8_diagonal_baixo_direita.onclick = () =>{
    ycords_peao_p_8 -= 1;
    xcords_peao_p_8 += 1;
    peao_p_8.style.top = posicoes_y[ycords_peao_p_8] + "px";
    peao_p_8.style.left = posicoes_x[xcords_peao_p_8] + "px";
    
    casa_atual_p_x = xcords_peao_b_8;
    casa_atual_p_y = ycords_peao_b_8;

    jogadas_peao_b_8 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}
btn_peao_p_8_diagonal_baixo_esquerda.onclick = () =>{
    ycords_peao_p_8 -= 1;
    xcords_peao_p_8 -= 1;
    peao_p_8.style.top = posicoes_y[ycords_peao_p_8] + "px";
    peao_p_8.style.left = posicoes_x[xcords_peao_p_8] + "px";
    
    casa_atual_p_x = xcords_peao_b_8;
    casa_atual_p_y = ycords_peao_b_8;

    jogadas_peao_b_8 += 1;
    limpar_peoes();
    limpar_casas_laranja();
}






// peões brancos configs
btn_peao_b_1.onclick = () =>{

    atual = 1;

    ycords_peao_atual_b = ycords_peao_b_1;
    xcords_peao_atual_b = xcords_peao_b_1;

    if(vez == 0){
    btn_peao_b_1_andar1.style.display = "block";
    if (jogadas_peao_b_1 < 1){
        btn_peao_b_1_andar2.style.display = "block";
    }
    comer_pecas_b();
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
btn_peao_b_1_diagonal_cima_direita.onclick = () =>{
    ycords_peao_b_1 += 1;
    xcords_peao_b_1 += 1;
    peao_b_1.style.top = posicoes_y[ycords_peao_b_1] + "px";
    peao_b_1.style.left = posicoes_x[xcords_peao_b_1] + "px";
    
    casa_atual_b_x = xcords_peao_b_1;
    casa_atual_b_y = ycords_peao_b_1;

    jogadas_peao_b_1 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}
btn_peao_b_1_diagonal_cima_esquerda.onclick = () =>{
    ycords_peao_b_1 += 1;
    xcords_peao_b_1 -= 1;
    peao_b_1.style.top = posicoes_y[ycords_peao_b_1] + "px";
    peao_b_1.style.left = posicoes_x[xcords_peao_b_1] + "px";
    
    casa_atual_b_x = xcords_peao_b_1;
    casa_atual_b_y = ycords_peao_b_1;

    jogadas_peao_b_1 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}



btn_peao_b_2.onclick = () =>{
    atual = 2;

    ycords_peao_atual_b = ycords_peao_b_2;
    xcords_peao_atual_b = xcords_peao_b_2;

    if(vez == 0){
    btn_peao_b_2_andar1.style.display = "block";
    if (jogadas_peao_b_2 < 1){
        btn_peao_b_2_andar2.style.display = "block";
    }
    comer_pecas_b();
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
btn_peao_b_2_diagonal_cima_direita.onclick = () =>{
    ycords_peao_b_2 += 1;
    xcords_peao_b_2 += 1;
    peao_b_2.style.top = posicoes_y[ycords_peao_b_2] + "px";
    peao_b_2.style.left = posicoes_x[xcords_peao_b_2] + "px";
    
    casa_atual_b_x = xcords_peao_b_2;
    casa_atual_b_y = ycords_peao_b_2;

    jogadas_peao_b_2 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}
btn_peao_b_2_diagonal_cima_esquerda.onclick = () =>{
    ycords_peao_b_2 += 1;
    xcords_peao_b_2 -= 1;
    peao_b_2.style.top = posicoes_y[ycords_peao_b_2] + "px";
    peao_b_2.style.left = posicoes_x[xcords_peao_b_2] + "px";
    
    casa_atual_b_x = xcords_peao_b_2;
    casa_atual_b_y = ycords_peao_b_2;

    jogadas_peao_b_2 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}

btn_peao_b_3.onclick = () =>{
    atual = 3;

    ycords_peao_atual_b = ycords_peao_b_3;
    xcords_peao_atual_b = xcords_peao_b_3;

    if(vez == 0){
    btn_peao_b_3_andar1.style.display = "block";
    if (jogadas_peao_b_3 < 1){
        btn_peao_b_3_andar2.style.display = "block";
    }
    comer_pecas_b();
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
btn_peao_b_3_diagonal_cima_direita.onclick = () =>{
    ycords_peao_b_3 += 1;
    xcords_peao_b_3 += 1;
    peao_b_3.style.top = posicoes_y[ycords_peao_b_3] + "px";
    peao_b_3.style.left = posicoes_x[xcords_peao_b_3] + "px";
    
    casa_atual_b_x = xcords_peao_b_3;
    casa_atual_b_y = ycords_peao_b_3;

    jogadas_peao_b_3 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}
btn_peao_b_3_diagonal_cima_esquerda.onclick = () =>{
    ycords_peao_b_3 += 1;
    xcords_peao_b_3 -= 1;
    peao_b_3.style.top = posicoes_y[ycords_peao_b_3] + "px";
    peao_b_3.style.left = posicoes_x[xcords_peao_b_3] + "px";
    
    casa_atual_b_x = xcords_peao_b_3;
    casa_atual_b_y = ycords_peao_b_3;

    jogadas_peao_b_3 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}

btn_peao_b_4.onclick = () =>{
    atual = 4;

    ycords_peao_atual_b = ycords_peao_b_4;
    xcords_peao_atual_b = xcords_peao_b_4;

    if(vez == 0){
    btn_peao_b_4_andar1.style.display = "block";
    if (jogadas_peao_b_4 < 1){
        btn_peao_b_4_andar2.style.display = "block";
    }
    comer_pecas_b();
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
btn_peao_b_4_diagonal_cima_direita.onclick = () =>{
    ycords_peao_b_4 += 1;
    xcords_peao_b_4 += 1;
    peao_b_4.style.top = posicoes_y[ycords_peao_b_4] + "px";
    peao_b_4.style.left = posicoes_x[xcords_peao_b_4] + "px";
    
    casa_atual_b_x = xcords_peao_b_4;
    casa_atual_b_y = ycords_peao_b_4;

    jogadas_peao_b_4 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}
btn_peao_b_4_diagonal_cima_esquerda.onclick = () =>{
    ycords_peao_b_4 += 1;
    xcords_peao_b_4 -= 1;
    peao_b_4.style.top = posicoes_y[ycords_peao_b_4] + "px";
    peao_b_4.style.left = posicoes_x[xcords_peao_b_4] + "px";
    
    casa_atual_b_x = xcords_peao_b_4;
    casa_atual_b_y = ycords_peao_b_4;

    jogadas_peao_b_4 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}


btn_peao_b_5.onclick = () =>{
    atual = 5;

    ycords_peao_atual_b = ycords_peao_b_5;
    xcords_peao_atual_b = xcords_peao_b_5;

    if(vez == 0){
    btn_peao_b_5_andar1.style.display = "block";
    if (jogadas_peao_b_5 < 1){
        btn_peao_b_5_andar2.style.display = "block";
    }
    comer_pecas_b();
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
btn_peao_b_5_diagonal_cima_direita.onclick = () =>{
    ycords_peao_b_5 += 1;
    xcords_peao_b_5 += 1;
    peao_b_5.style.top = posicoes_y[ycords_peao_b_5] + "px";
    peao_b_5.style.left = posicoes_x[xcords_peao_b_5] + "px";
    
    casa_atual_b_x = xcords_peao_b_5;
    casa_atual_b_y = ycords_peao_b_5;

    jogadas_peao_b_5 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}
btn_peao_b_5_diagonal_cima_esquerda.onclick = () =>{
    ycords_peao_b_5 += 1;
    xcords_peao_b_5 -= 1;
    peao_b_5.style.top = posicoes_y[ycords_peao_b_5] + "px";
    peao_b_5.style.left = posicoes_x[xcords_peao_b_5] + "px";
    
    casa_atual_b_x = xcords_peao_b_5;
    casa_atual_b_y = ycords_peao_b_5;

    jogadas_peao_b_5 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}


btn_peao_b_6.onclick = () =>{
    atual = 6;

    ycords_peao_atual_b = ycords_peao_b_6;
    xcords_peao_atual_b = xcords_peao_b_6;

    if(vez == 0){
    btn_peao_b_6_andar1.style.display = "block";
    if (jogadas_peao_b_6 < 1){
        btn_peao_b_6_andar2.style.display = "block";
    }
    comer_pecas_b();
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
btn_peao_b_6_diagonal_cima_direita.onclick = () =>{
    ycords_peao_b_6 += 1;
    xcords_peao_b_6 += 1;
    peao_b_6.style.top = posicoes_y[ycords_peao_b_6] + "px";
    peao_b_6.style.left = posicoes_x[xcords_peao_b_6] + "px";
    
    casa_atual_b_x = xcords_peao_b_6;
    casa_atual_b_y = ycords_peao_b_6;

    jogadas_peao_b_6 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}
btn_peao_b_6_diagonal_cima_esquerda.onclick = () =>{
    ycords_peao_b_6 += 1;
    xcords_peao_b_6 -= 1;
    peao_b_6.style.top = posicoes_y[ycords_peao_b_6] + "px";
    peao_b_6.style.left = posicoes_x[xcords_peao_b_6] + "px";
    
    casa_atual_b_x = xcords_peao_b_6;
    casa_atual_b_y = ycords_peao_b_6;

    jogadas_peao_b_6 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}


btn_peao_b_7.onclick = () =>{
    atual = 7;

    ycords_peao_atual_b = ycords_peao_b_7;
    xcords_peao_atual_b = xcords_peao_b_7;

    if(vez == 0){
    btn_peao_b_7_andar1.style.display = "block";
    if (jogadas_peao_b_7 < 1){
        btn_peao_b_7_andar2.style.display = "block";
    }
    comer_pecas_b();
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
btn_peao_b_7_diagonal_cima_direita.onclick = () =>{
    ycords_peao_b_7 += 1;
    xcords_peao_b_7 += 1;
    peao_b_7.style.top = posicoes_y[ycords_peao_b_7] + "px";
    peao_b_7.style.left = posicoes_x[xcords_peao_b_7] + "px";
    
    casa_atual_b_x = xcords_peao_b_7;
    casa_atual_b_y = ycords_peao_b_7;

    jogadas_peao_b_7 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}
btn_peao_b_7_diagonal_cima_esquerda.onclick = () =>{
    ycords_peao_b_7 += 1;
    xcords_peao_b_7 -= 1;
    peao_b_7.style.top = posicoes_y[ycords_peao_b_7] + "px";
    peao_b_7.style.left = posicoes_x[xcords_peao_b_7] + "px";
    
    casa_atual_b_x = xcords_peao_b_7;
    casa_atual_b_y = ycords_peao_b_7;

    jogadas_peao_b_7 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}


btn_peao_b_8.onclick = () =>{
    atual = 8;

    ycords_peao_atual_b = ycords_peao_b_8;
    xcords_peao_atual_b = xcords_peao_b_8;

    if(vez == 0){
    btn_peao_b_8_andar1.style.display = "block";
    if (jogadas_peao_b_8 < 1){
        btn_peao_b_8_andar2.style.display = "block";
    }
    comer_pecas_b();
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
btn_peao_b_8_diagonal_cima_direita.onclick = () =>{
    ycords_peao_b_8 += 1;
    xcords_peao_b_8 += 1;
    peao_b_8.style.top = posicoes_y[ycords_peao_b_8] + "px";
    peao_b_8.style.left = posicoes_x[xcords_peao_b_8] + "px";
    
    casa_atual_b_x = xcords_peao_b_8;
    casa_atual_b_y = ycords_peao_b_8;

    jogadas_peao_b_8 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}
btn_peao_b_8_diagonal_cima_esquerda.onclick = () =>{
    ycords_peao_b_8 += 1;
    xcords_peao_b_8 -= 1;
    peao_b_8.style.top = posicoes_y[ycords_peao_b_8] + "px";
    peao_b_8.style.left = posicoes_x[xcords_peao_b_8] + "px";
    
    casa_atual_b_x = xcords_peao_b_8;
    casa_atual_b_y = ycords_peao_b_8;

    jogadas_peao_b_8 += 1;
    limpar_casas_laranja();
    limpar_peoes();
}

