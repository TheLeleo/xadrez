// casas do tabuleiro

// horizontais
const a1 = document.getElementById('a1').getBoundingClientRect();
const b1 = document.getElementById('b1').getBoundingClientRect();
const c1 = document.getElementById('c1').getBoundingClientRect();
const d1 = document.getElementById('d1').getBoundingClientRect();
const e1 = document.getElementById('e1').getBoundingClientRect();
const f1 = document.getElementById('f1').getBoundingClientRect();
const g1 = document.getElementById('g1').getBoundingClientRect();
const h1 = document.getElementById('h1').getBoundingClientRect();

// verticais
const a2 = document.getElementById('a2').getBoundingClientRect();
const a3 = document.getElementById('a3').getBoundingClientRect();
const a4 = document.getElementById('a4').getBoundingClientRect();
const a5 = document.getElementById('a5').getBoundingClientRect();
const a6 = document.getElementById('a6').getBoundingClientRect();
const a7 = document.getElementById('a7').getBoundingClientRect();
const a8 = document.getElementById('a8').getBoundingClientRect();

// armazenar as posições x e y dentro de um array
var posicoes_x = [a1.x, b1.x, c1.x, d1.x, e1.x, f1.x, g1.x, h1.x];
var posicoes_y = [a1.y, a2.y, a3.y, a4.y, a5.y, a6.y, a7.y, a8.y];

// peças pretas
const rei_p = document.getElementById('rei_p');
const rainha_p = document.getElementById('rainha_p');

const torre_p_1 = document.getElementById('torre_p_1');
const torre_p_2 = document.getElementById('torre_p_2');
const cavalo_p_1 = document.getElementById('cavalo_p_1');
const cavalo_p_2 = document.getElementById('cavalo_p_2');
const bispo_p_1 = document.getElementById('bispo_p_1');
const bispo_p_2 = document.getElementById('bispo_p_2');

const peao_p_1 = document.getElementById('peao_p_1');
const peao_p_2 = document.getElementById('peao_p_2');
const peao_p_3 = document.getElementById('peao_p_3');
const peao_p_4 = document.getElementById('peao_p_4');
const peao_p_5 = document.getElementById('peao_p_5');
const peao_p_6 = document.getElementById('peao_p_6');
const peao_p_7 = document.getElementById('peao_p_7');
const peao_p_8 = document.getElementById('peao_p_8');

// peças brancas
const rei_b = document.getElementById('rei_b');
const rainha_b = document.getElementById('rainha_b');

const torre_b_1 = document.getElementById('torre_b_1');
const torre_b_2 = document.getElementById('torre_b_2');
const cavalo_b_1 = document.getElementById('cavalo_b_1');
const cavalo_b_2 = document.getElementById('cavalo_b_2');
const bispo_b_1 = document.getElementById('bispo_b_1');
const bispo_b_2 = document.getElementById('bispo_b_2');

const peao_b_1 = document.getElementById('peao_b_1');
const peao_b_2 = document.getElementById('peao_b_2');
const peao_b_3 = document.getElementById('peao_b_3');
const peao_b_4 = document.getElementById('peao_b_4');
const peao_b_5 = document.getElementById('peao_b_5');
const peao_b_6 = document.getElementById('peao_b_6');
const peao_b_7 = document.getElementById('peao_b_7');
const peao_b_8 = document.getElementById('peao_b_8');


// entrada do botão reset
const resetar = document.querySelector('#resetar');
const cancelar = document.querySelector('#cancelar');
const turno = document.querySelector('#turno');

// entradas peças pretas
const btn_rei_p = document.getElementById('btn_rei_p');
const btn_rainha_p = document.getElementById('btn_rainha_p');

const btn_torre_p_1 = document.getElementById('btn_torre_p_1');
const btn_torre_p_2 = document.getElementById('btn_torre_p_2');
const btn_cavalo_p_1 = document.getElementById('btn_cavalo_p_1');
const btn_cavalo_p_2 = document.getElementById('btn_cavalo_p_2');
const btn_bispo_p_1 = document.getElementById('btn_bispo_p_1');
const btn_bispo_p_2 = document.getElementById('btn_bispo_p_2');

const btn_peao_p_1 = document.getElementById('btn_peao_p_1');
const btn_peao_p_2 = document.getElementById('btn_peao_p_2');
const btn_peao_p_3 = document.getElementById('btn_peao_p_3');
const btn_peao_p_4 = document.getElementById('btn_peao_p_4');
const btn_peao_p_5 = document.getElementById('btn_peao_p_5');
const btn_peao_p_6 = document.getElementById('btn_peao_p_6');
const btn_peao_p_7 = document.getElementById('btn_peao_p_7');
const btn_peao_p_8 = document.getElementById('btn_peao_p_8');


const btn_peao_p_1_diagonal_baixo_esquerda = document.getElementById('btn_peao_p_1_diagonal_baixo_esquerda1');
const btn_peao_p_2_diagonal_baixo_esquerda = document.getElementById('btn_peao_p_2_diagonal_baixo_esquerda2');
const btn_peao_p_3_diagonal_baixo_esquerda = document.getElementById('btn_peao_p_3_diagonal_baixo_esquerda3');
const btn_peao_p_4_diagonal_baixo_esquerda = document.getElementById('btn_peao_p_4_diagonal_baixo_esquerda4');
const btn_peao_p_5_diagonal_baixo_esquerda = document.getElementById('btn_peao_p_5_diagonal_baixo_esquerda5');
const btn_peao_p_6_diagonal_baixo_esquerda = document.getElementById('btn_peao_p_6_diagonal_baixo_esquerda6');
const btn_peao_p_7_diagonal_baixo_esquerda = document.getElementById('btn_peao_p_7_diagonal_baixo_esquerda7');
const btn_peao_p_8_diagonal_baixo_esquerda = document.getElementById('btn_peao_p_8_diagonal_baixo_esquerda8');

const btn_peao_p_1_diagonal_baixo_direita = document.getElementById('btn_peao_p_1_diagonal_baixo_direita1');
const btn_peao_p_2_diagonal_baixo_direita = document.getElementById('btn_peao_p_2_diagonal_baixo_direita2');
const btn_peao_p_3_diagonal_baixo_direita = document.getElementById('btn_peao_p_3_diagonal_baixo_direita3');
const btn_peao_p_4_diagonal_baixo_direita = document.getElementById('btn_peao_p_4_diagonal_baixo_direita4');
const btn_peao_p_5_diagonal_baixo_direita = document.getElementById('btn_peao_p_5_diagonal_baixo_direita5');
const btn_peao_p_6_diagonal_baixo_direita = document.getElementById('btn_peao_p_6_diagonal_baixo_direita6');
const btn_peao_p_7_diagonal_baixo_direita = document.getElementById('btn_peao_p_7_diagonal_baixo_direita7');
const btn_peao_p_8_diagonal_baixo_direita = document.getElementById('btn_peao_p_8_diagonal_baixo_direita8');


// entradas peças brancas
const btn_rei_b = document.getElementById('btn_rei_b');
const btn_rainha_b = document.getElementById('btn_rainha_b');

const btn_torre_b_1 = document.getElementById('btn_torre_b_1');
const btn_torre_b_2 = document.getElementById('btn_torre_b_2');
const btn_cavalo_b_1 = document.getElementById('btn_cavalo_b_1');
const btn_cavalo_b_2 = document.getElementById('btn_cavalo_b_2');
const btn_bispo_b_1 = document.getElementById('btn_bispo_b_1');
const btn_bispo_b_2 = document.getElementById('btn_bispo_b_2');


const btn_peao_b_1_diagonal_cima_direita = document.getElementById('btn_peao_b_1_diagonal_cima_direita1');
const btn_peao_b_2_diagonal_cima_direita = document.getElementById('btn_peao_b_2_diagonal_cima_direita2');
const btn_peao_b_3_diagonal_cima_direita = document.getElementById('btn_peao_b_3_diagonal_cima_direita3');
const btn_peao_b_4_diagonal_cima_direita = document.getElementById('btn_peao_b_4_diagonal_cima_direita4');
const btn_peao_b_5_diagonal_cima_direita = document.getElementById('btn_peao_b_5_diagonal_cima_direita5');
const btn_peao_b_6_diagonal_cima_direita = document.getElementById('btn_peao_b_6_diagonal_cima_direita6');
const btn_peao_b_7_diagonal_cima_direita = document.getElementById('btn_peao_b_7_diagonal_cima_direita7');
const btn_peao_b_8_diagonal_cima_direita = document.getElementById('btn_peao_b_8_diagonal_cima_direita8');

const btn_peao_b_1_diagonal_cima_esquerda = document.getElementById('btn_peao_b_1_diagonal_cima_esquerda1');
const btn_peao_b_2_diagonal_cima_esquerda = document.getElementById('btn_peao_b_2_diagonal_cima_esquerda2');
const btn_peao_b_3_diagonal_cima_esquerda = document.getElementById('btn_peao_b_3_diagonal_cima_esquerda3');
const btn_peao_b_4_diagonal_cima_esquerda = document.getElementById('btn_peao_b_4_diagonal_cima_esquerda4');
const btn_peao_b_5_diagonal_cima_esquerda = document.getElementById('btn_peao_b_5_diagonal_cima_esquerda5');
const btn_peao_b_6_diagonal_cima_esquerda = document.getElementById('btn_peao_b_6_diagonal_cima_esquerda6');
const btn_peao_b_7_diagonal_cima_esquerda = document.getElementById('btn_peao_b_7_diagonal_cima_esquerda7');
const btn_peao_b_8_diagonal_cima_esquerda = document.getElementById('btn_peao_b_8_diagonal_cima_esquerda8');





               

// inputs jogadas peões pretos
const btn_peao_p_1_andar1 = document.getElementById('btn_peao_p_1_andar1');
const btn_peao_p_1_andar2 = document.getElementById('btn_peao_p_1_andar2');

const btn_peao_p_2_andar1 = document.getElementById('btn_peao_p_2_andar1');
const btn_peao_p_2_andar2 = document.getElementById('btn_peao_p_2_andar2');

const btn_peao_p_3_andar1 = document.getElementById('btn_peao_p_3_andar1');
const btn_peao_p_3_andar2 = document.getElementById('btn_peao_p_3_andar2');

const btn_peao_p_4_andar1 = document.getElementById('btn_peao_p_4_andar1');
const btn_peao_p_4_andar2 = document.getElementById('btn_peao_p_4_andar2');

const btn_peao_p_5_andar1 = document.getElementById('btn_peao_p_5_andar1');
const btn_peao_p_5_andar2 = document.getElementById('btn_peao_p_5_andar2');

const btn_peao_p_6_andar1 = document.getElementById('btn_peao_p_6_andar1');
const btn_peao_p_6_andar2 = document.getElementById('btn_peao_p_6_andar2');

const btn_peao_p_7_andar1 = document.getElementById('btn_peao_p_7_andar1');
const btn_peao_p_7_andar2 = document.getElementById('btn_peao_p_7_andar2');

const btn_peao_p_8_andar1 = document.getElementById('btn_peao_p_8_andar1');
const btn_peao_p_8_andar2 = document.getElementById('btn_peao_p_8_andar2');

// inputs jogadas peões brancos
const btn_peao_b_1_andar1 = document.getElementById('btn_peao_b_1_andar1');
const btn_peao_b_1_andar2 = document.getElementById('btn_peao_b_1_andar2');

const btn_peao_b_2_andar1 = document.getElementById('btn_peao_b_2_andar1');
const btn_peao_b_2_andar2 = document.getElementById('btn_peao_b_2_andar2');

const btn_peao_b_3_andar1 = document.getElementById('btn_peao_b_3_andar1');
const btn_peao_b_3_andar2 = document.getElementById('btn_peao_b_3_andar2');

const btn_peao_b_4_andar1 = document.getElementById('btn_peao_b_4_andar1');
const btn_peao_b_4_andar2 = document.getElementById('btn_peao_b_4_andar2');

const btn_peao_b_5_andar1 = document.getElementById('btn_peao_b_5_andar1');
const btn_peao_b_5_andar2 = document.getElementById('btn_peao_b_5_andar2');

const btn_peao_b_6_andar1 = document.getElementById('btn_peao_b_6_andar1');
const btn_peao_b_6_andar2 = document.getElementById('btn_peao_b_6_andar2');

const btn_peao_b_7_andar1 = document.getElementById('btn_peao_b_7_andar1');
const btn_peao_b_7_andar2 = document.getElementById('btn_peao_b_7_andar2');

const btn_peao_b_8_andar1 = document.getElementById('btn_peao_b_8_andar1');
const btn_peao_b_8_andar2 = document.getElementById('btn_peao_b_8_andar2');

// jogadas torres brancas (1)
const btn_torre_p_1_andar1 = document.getElementById('btn_torre_p_1_andar1');
const btn_torre_p_1_andar2 = document.getElementById('btn_torre_p_1_andar2');
const btn_torre_p_1_andar3 = document.getElementById('btn_torre_p_1_andar3');
const btn_torre_p_1_andar4 = document.getElementById('btn_torre_p_1_andar4');
const btn_torre_p_1_andar5 = document.getElementById('btn_torre_p_1_andar5');
const btn_torre_p_1_andar6 = document.getElementById('btn_torre_p_1_andar6');
const btn_torre_p_1_andar7 = document.getElementById('btn_torre_p_1_andar7');

const btn_torre_p_1_andar_lado1 = document.getElementById('btn_torre_p_1_andar_lado1');
const btn_torre_p_1_andar_lado2 = document.getElementById('btn_torre_p_1_andar_lado2');
const btn_torre_p_1_andar_lado3 = document.getElementById('btn_torre_p_1_andar_lado3');
const btn_torre_p_1_andar_lado4 = document.getElementById('btn_torre_p_1_andar_lado4');
const btn_torre_p_1_andar_lado5 = document.getElementById('btn_torre_p_1_andar_lado5');
const btn_torre_p_1_andar_lado6 = document.getElementById('btn_torre_p_1_andar_lado6');
const btn_torre_p_1_andar_lado7 = document.getElementById('btn_torre_p_1_andar_lado7');

const btn_torre_p_1_andar_lado_esquerdo1 = document.getElementById('btn_torre_p_1_andar_lado_esquerdo1');
const btn_torre_p_1_andar_lado_esquerdo2 = document.getElementById('btn_torre_p_1_andar_lado_esquerdo2');
const btn_torre_p_1_andar_lado_esquerdo3 = document.getElementById('btn_torre_p_1_andar_lado_esquerdo3');
const btn_torre_p_1_andar_lado_esquerdo4 = document.getElementById('btn_torre_p_1_andar_lado_esquerdo4');
const btn_torre_p_1_andar_lado_esquerdo5 = document.getElementById('btn_torre_p_1_andar_lado_esquerdo5');
const btn_torre_p_1_andar_lado_esquerdo6 = document.getElementById('btn_torre_p_1_andar_lado_esquerdo6');
const btn_torre_p_1_andar_lado_esquerdo7 = document.getElementById('btn_torre_p_1_andar_lado_esquerdo7');

const btn_torre_p_1_andar_tras1 = document.getElementById('btn_torre_p_1_andar_tras1');
const btn_torre_p_1_andar_tras2 = document.getElementById('btn_torre_p_1_andar_tras2');
const btn_torre_p_1_andar_tras3 = document.getElementById('btn_torre_p_1_andar_tras3');
const btn_torre_p_1_andar_tras4 = document.getElementById('btn_torre_p_1_andar_tras4');
const btn_torre_p_1_andar_tras5 = document.getElementById('btn_torre_p_1_andar_tras5');
const btn_torre_p_1_andar_tras6 = document.getElementById('btn_torre_p_1_andar_tras6');
const btn_torre_p_1_andar_tras7 = document.getElementById('btn_torre_p_1_andar_tras7');

// jogadas torres brancas (2)
const btn_torre_p_2_andar1 = document.getElementById('btn_torre_p_2_andar1');
const btn_torre_p_2_andar2 = document.getElementById('btn_torre_p_2_andar2');
const btn_torre_p_2_andar3 = document.getElementById('btn_torre_p_2_andar3');
const btn_torre_p_2_andar4 = document.getElementById('btn_torre_p_2_andar4');
const btn_torre_p_2_andar5 = document.getElementById('btn_torre_p_2_andar5');
const btn_torre_p_2_andar6 = document.getElementById('btn_torre_p_2_andar6');
const btn_torre_p_2_andar7 = document.getElementById('btn_torre_p_2_andar7');

const btn_torre_p_2_andar_lado1 = document.getElementById('btn_torre_p_2_andar_lado1');
const btn_torre_p_2_andar_lado2 = document.getElementById('btn_torre_p_2_andar_lado2');
const btn_torre_p_2_andar_lado3 = document.getElementById('btn_torre_p_2_andar_lado3');
const btn_torre_p_2_andar_lado4 = document.getElementById('btn_torre_p_2_andar_lado4');
const btn_torre_p_2_andar_lado5 = document.getElementById('btn_torre_p_2_andar_lado5');
const btn_torre_p_2_andar_lado6 = document.getElementById('btn_torre_p_2_andar_lado6');
const btn_torre_p_2_andar_lado7 = document.getElementById('btn_torre_p_2_andar_lado7');

const btn_torre_p_2_andar_lado_esquerdo1 = document.getElementById('btn_torre_p_2_andar_lado_esquerdo1');
const btn_torre_p_2_andar_lado_esquerdo2 = document.getElementById('btn_torre_p_2_andar_lado_esquerdo2');
const btn_torre_p_2_andar_lado_esquerdo3 = document.getElementById('btn_torre_p_2_andar_lado_esquerdo3');
const btn_torre_p_2_andar_lado_esquerdo4 = document.getElementById('btn_torre_p_2_andar_lado_esquerdo4');
const btn_torre_p_2_andar_lado_esquerdo5 = document.getElementById('btn_torre_p_2_andar_lado_esquerdo5');
const btn_torre_p_2_andar_lado_esquerdo6 = document.getElementById('btn_torre_p_2_andar_lado_esquerdo6');
const btn_torre_p_2_andar_lado_esquerdo7 = document.getElementById('btn_torre_p_2_andar_lado_esquerdo7');

const btn_torre_p_2_andar_tras1 = document.getElementById('btn_torre_p_2_andar_tras1');
const btn_torre_p_2_andar_tras2 = document.getElementById('btn_torre_p_2_andar_tras2');
const btn_torre_p_2_andar_tras3 = document.getElementById('btn_torre_p_2_andar_tras3');
const btn_torre_p_2_andar_tras4 = document.getElementById('btn_torre_p_2_andar_tras4');
const btn_torre_p_2_andar_tras5 = document.getElementById('btn_torre_p_2_andar_tras5');
const btn_torre_p_2_andar_tras6 = document.getElementById('btn_torre_p_2_andar_tras6');
const btn_torre_p_2_andar_tras7 = document.getElementById('btn_torre_p_2_andar_tras7');


// jogadas torres brancas (1)
const btn_torre_b_1_andar1 = document.getElementById('btn_torre_b_1_andar1');
const btn_torre_b_1_andar2 = document.getElementById('btn_torre_b_1_andar2');
const btn_torre_b_1_andar3 = document.getElementById('btn_torre_b_1_andar3');
const btn_torre_b_1_andar4 = document.getElementById('btn_torre_b_1_andar4');
const btn_torre_b_1_andar5 = document.getElementById('btn_torre_b_1_andar5');
const btn_torre_b_1_andar6 = document.getElementById('btn_torre_b_1_andar6');
const btn_torre_b_1_andar7 = document.getElementById('btn_torre_b_1_andar7');

const btn_torre_b_1_andar_lado1 = document.getElementById('btn_torre_b_1_andar_lado1');
const btn_torre_b_1_andar_lado2 = document.getElementById('btn_torre_b_1_andar_lado2');
const btn_torre_b_1_andar_lado3 = document.getElementById('btn_torre_b_1_andar_lado3');
const btn_torre_b_1_andar_lado4 = document.getElementById('btn_torre_b_1_andar_lado4');
const btn_torre_b_1_andar_lado5 = document.getElementById('btn_torre_b_1_andar_lado5');
const btn_torre_b_1_andar_lado6 = document.getElementById('btn_torre_b_1_andar_lado6');
const btn_torre_b_1_andar_lado7 = document.getElementById('btn_torre_b_1_andar_lado7');

const btn_torre_b_1_andar_lado_esquerdo1 = document.getElementById('btn_torre_b_1_andar_lado_esquerdo1');
const btn_torre_b_1_andar_lado_esquerdo2 = document.getElementById('btn_torre_b_1_andar_lado_esquerdo2');
const btn_torre_b_1_andar_lado_esquerdo3 = document.getElementById('btn_torre_b_1_andar_lado_esquerdo3');
const btn_torre_b_1_andar_lado_esquerdo4 = document.getElementById('btn_torre_b_1_andar_lado_esquerdo4');
const btn_torre_b_1_andar_lado_esquerdo5 = document.getElementById('btn_torre_b_1_andar_lado_esquerdo5');
const btn_torre_b_1_andar_lado_esquerdo6 = document.getElementById('btn_torre_b_1_andar_lado_esquerdo6');
const btn_torre_b_1_andar_lado_esquerdo7 = document.getElementById('btn_torre_b_1_andar_lado_esquerdo7');

const btn_torre_b_1_andar_tras1 = document.getElementById('btn_torre_b_1_andar_tras1');
const btn_torre_b_1_andar_tras2 = document.getElementById('btn_torre_b_1_andar_tras2');
const btn_torre_b_1_andar_tras3 = document.getElementById('btn_torre_b_1_andar_tras3');
const btn_torre_b_1_andar_tras4 = document.getElementById('btn_torre_b_1_andar_tras4');
const btn_torre_b_1_andar_tras5 = document.getElementById('btn_torre_b_1_andar_tras5');
const btn_torre_b_1_andar_tras6 = document.getElementById('btn_torre_b_1_andar_tras6');
const btn_torre_b_1_andar_tras7 = document.getElementById('btn_torre_b_1_andar_tras7');

// jogadas torres brancas (2)
const btn_torre_b_2_andar1 = document.getElementById('btn_torre_b_2_andar1');
const btn_torre_b_2_andar2 = document.getElementById('btn_torre_b_2_andar2');
const btn_torre_b_2_andar3 = document.getElementById('btn_torre_b_2_andar3');
const btn_torre_b_2_andar4 = document.getElementById('btn_torre_b_2_andar4');
const btn_torre_b_2_andar5 = document.getElementById('btn_torre_b_2_andar5');
const btn_torre_b_2_andar6 = document.getElementById('btn_torre_b_2_andar6');
const btn_torre_b_2_andar7 = document.getElementById('btn_torre_b_2_andar7');

const btn_torre_b_2_andar_lado1 = document.getElementById('btn_torre_b_2_andar_lado1');
const btn_torre_b_2_andar_lado2 = document.getElementById('btn_torre_b_2_andar_lado2');
const btn_torre_b_2_andar_lado3 = document.getElementById('btn_torre_b_2_andar_lado3');
const btn_torre_b_2_andar_lado4 = document.getElementById('btn_torre_b_2_andar_lado4');
const btn_torre_b_2_andar_lado5 = document.getElementById('btn_torre_b_2_andar_lado5');
const btn_torre_b_2_andar_lado6 = document.getElementById('btn_torre_b_2_andar_lado6');
const btn_torre_b_2_andar_lado7 = document.getElementById('btn_torre_b_2_andar_lado7');

const btn_torre_b_2_andar_lado_esquerdo1 = document.getElementById('btn_torre_b_2_andar_lado_esquerdo1');
const btn_torre_b_2_andar_lado_esquerdo2 = document.getElementById('btn_torre_b_2_andar_lado_esquerdo2');
const btn_torre_b_2_andar_lado_esquerdo3 = document.getElementById('btn_torre_b_2_andar_lado_esquerdo3');
const btn_torre_b_2_andar_lado_esquerdo4 = document.getElementById('btn_torre_b_2_andar_lado_esquerdo4');
const btn_torre_b_2_andar_lado_esquerdo5 = document.getElementById('btn_torre_b_2_andar_lado_esquerdo5');
const btn_torre_b_2_andar_lado_esquerdo6 = document.getElementById('btn_torre_b_2_andar_lado_esquerdo6');
const btn_torre_b_2_andar_lado_esquerdo7 = document.getElementById('btn_torre_b_2_andar_lado_esquerdo7');

const btn_torre_b_2_andar_tras1 = document.getElementById('btn_torre_b_2_andar_tras1');
const btn_torre_b_2_andar_tras2 = document.getElementById('btn_torre_b_2_andar_tras2');
const btn_torre_b_2_andar_tras3 = document.getElementById('btn_torre_b_2_andar_tras3');
const btn_torre_b_2_andar_tras4 = document.getElementById('btn_torre_b_2_andar_tras4');
const btn_torre_b_2_andar_tras5 = document.getElementById('btn_torre_b_2_andar_tras5');
const btn_torre_b_2_andar_tras6 = document.getElementById('btn_torre_b_2_andar_tras6');
const btn_torre_b_2_andar_tras7 = document.getElementById('btn_torre_b_2_andar_tras7');


// jogadas cavalos brancos (1)
const btn_cavalo_b_1_andar1 = document.getElementById('btn_cavalo_b_1_andar1');
const btn_cavalo_b_1_andar2 = document.getElementById('btn_cavalo_b_1_andar2');
const btn_cavalo_b_1_andar3 = document.getElementById('btn_cavalo_b_1_andar3');
const btn_cavalo_b_1_andar4 = document.getElementById('btn_cavalo_b_1_andar4');
const btn_cavalo_b_1_andar5 = document.getElementById('btn_cavalo_b_1_andar5');
const btn_cavalo_b_1_andar6 = document.getElementById('btn_cavalo_b_1_andar6');
const btn_cavalo_b_1_andar7 = document.getElementById('btn_cavalo_b_1_andar7');
const btn_cavalo_b_1_andar8 = document.getElementById('btn_cavalo_b_1_andar8');

// jogadas cavalos brancos (2)
const btn_cavalo_b_2_andar1 = document.getElementById('btn_cavalo_b_2_andar1');
const btn_cavalo_b_2_andar2 = document.getElementById('btn_cavalo_b_2_andar2');
const btn_cavalo_b_2_andar3 = document.getElementById('btn_cavalo_b_2_andar3');
const btn_cavalo_b_2_andar4 = document.getElementById('btn_cavalo_b_2_andar4');
const btn_cavalo_b_2_andar5 = document.getElementById('btn_cavalo_b_2_andar5');
const btn_cavalo_b_2_andar6 = document.getElementById('btn_cavalo_b_2_andar6');
const btn_cavalo_b_2_andar7 = document.getElementById('btn_cavalo_b_2_andar7');
const btn_cavalo_b_2_andar8 = document.getElementById('btn_cavalo_b_2_andar8');

// jogadas bispos brancos (1)
const btn_bispo_b_1_diagonal_cima_direita1 = document.getElementById('btn_bispo_b_1_diagonal_cima_direita1');
const btn_bispo_b_1_diagonal_cima_direita2 = document.getElementById('btn_bispo_b_1_diagonal_cima_direita2');
const btn_bispo_b_1_diagonal_cima_direita3 = document.getElementById('btn_bispo_b_1_diagonal_cima_direita3');
const btn_bispo_b_1_diagonal_cima_direita4 = document.getElementById('btn_bispo_b_1_diagonal_cima_direita4');
const btn_bispo_b_1_diagonal_cima_direita5 = document.getElementById('btn_bispo_b_1_diagonal_cima_direita5');
const btn_bispo_b_1_diagonal_cima_direita6 = document.getElementById('btn_bispo_b_1_diagonal_cima_direita6');
const btn_bispo_b_1_diagonal_cima_direita7 = document.getElementById('btn_bispo_b_1_diagonal_cima_direita7');

const btn_bispo_b_1_diagonal_cima_esquerda1 = document.getElementById('btn_bispo_b_1_diagonal_cima_esquerda1');
const btn_bispo_b_1_diagonal_cima_esquerda2 = document.getElementById('btn_bispo_b_1_diagonal_cima_esquerda2');
const btn_bispo_b_1_diagonal_cima_esquerda3 = document.getElementById('btn_bispo_b_1_diagonal_cima_esquerda3');
const btn_bispo_b_1_diagonal_cima_esquerda4 = document.getElementById('btn_bispo_b_1_diagonal_cima_esquerda4');
const btn_bispo_b_1_diagonal_cima_esquerda5 = document.getElementById('btn_bispo_b_1_diagonal_cima_esquerda5');
const btn_bispo_b_1_diagonal_cima_esquerda6 = document.getElementById('btn_bispo_b_1_diagonal_cima_esquerda6');
const btn_bispo_b_1_diagonal_cima_esquerda7 = document.getElementById('btn_bispo_b_1_diagonal_cima_esquerda7');

const btn_bispo_b_1_diagonal_baixo_direita1 = document.getElementById('btn_bispo_b_1_diagonal_baixo_direita1');
const btn_bispo_b_1_diagonal_baixo_direita2 = document.getElementById('btn_bispo_b_1_diagonal_baixo_direita2');
const btn_bispo_b_1_diagonal_baixo_direita3 = document.getElementById('btn_bispo_b_1_diagonal_baixo_direita3');
const btn_bispo_b_1_diagonal_baixo_direita4 = document.getElementById('btn_bispo_b_1_diagonal_baixo_direita4');
const btn_bispo_b_1_diagonal_baixo_direita5 = document.getElementById('btn_bispo_b_1_diagonal_baixo_direita5');
const btn_bispo_b_1_diagonal_baixo_direita6 = document.getElementById('btn_bispo_b_1_diagonal_baixo_direita6');
const btn_bispo_b_1_diagonal_baixo_direita7 = document.getElementById('btn_bispo_b_1_diagonal_baixo_direita7');

const btn_bispo_b_1_diagonal_baixo_esquerda1 = document.getElementById('btn_bispo_b_1_diagonal_baixo_esquerda1');
const btn_bispo_b_1_diagonal_baixo_esquerda2 = document.getElementById('btn_bispo_b_1_diagonal_baixo_esquerda2');
const btn_bispo_b_1_diagonal_baixo_esquerda3 = document.getElementById('btn_bispo_b_1_diagonal_baixo_esquerda3');
const btn_bispo_b_1_diagonal_baixo_esquerda4 = document.getElementById('btn_bispo_b_1_diagonal_baixo_esquerda4');
const btn_bispo_b_1_diagonal_baixo_esquerda5 = document.getElementById('btn_bispo_b_1_diagonal_baixo_esquerda5');
const btn_bispo_b_1_diagonal_baixo_esquerda6 = document.getElementById('btn_bispo_b_1_diagonal_baixo_esquerda6');
const btn_bispo_b_1_diagonal_baixo_esquerda7 = document.getElementById('btn_bispo_b_1_diagonal_baixo_esquerda7');


// jogadas bispos brancos (2)
const btn_bispo_b_2_diagonal_cima_direita1 = document.getElementById('btn_bispo_b_2_diagonal_cima_direita1');
const btn_bispo_b_2_diagonal_cima_direita2 = document.getElementById('btn_bispo_b_2_diagonal_cima_direita2');
const btn_bispo_b_2_diagonal_cima_direita3 = document.getElementById('btn_bispo_b_2_diagonal_cima_direita3');
const btn_bispo_b_2_diagonal_cima_direita4 = document.getElementById('btn_bispo_b_2_diagonal_cima_direita4');
const btn_bispo_b_2_diagonal_cima_direita5 = document.getElementById('btn_bispo_b_2_diagonal_cima_direita5');
const btn_bispo_b_2_diagonal_cima_direita6 = document.getElementById('btn_bispo_b_2_diagonal_cima_direita6');
const btn_bispo_b_2_diagonal_cima_direita7 = document.getElementById('btn_bispo_b_2_diagonal_cima_direita7');

const btn_bispo_b_2_diagonal_cima_esquerda1 = document.getElementById('btn_bispo_b_2_diagonal_cima_esquerda1');
const btn_bispo_b_2_diagonal_cima_esquerda2 = document.getElementById('btn_bispo_b_2_diagonal_cima_esquerda2');
const btn_bispo_b_2_diagonal_cima_esquerda3 = document.getElementById('btn_bispo_b_2_diagonal_cima_esquerda3');
const btn_bispo_b_2_diagonal_cima_esquerda4 = document.getElementById('btn_bispo_b_2_diagonal_cima_esquerda4');
const btn_bispo_b_2_diagonal_cima_esquerda5 = document.getElementById('btn_bispo_b_2_diagonal_cima_esquerda5');
const btn_bispo_b_2_diagonal_cima_esquerda6 = document.getElementById('btn_bispo_b_2_diagonal_cima_esquerda6');
const btn_bispo_b_2_diagonal_cima_esquerda7 = document.getElementById('btn_bispo_b_2_diagonal_cima_esquerda7');

const btn_bispo_b_2_diagonal_baixo_direita1 = document.getElementById('btn_bispo_b_2_diagonal_baixo_direita1');
const btn_bispo_b_2_diagonal_baixo_direita2 = document.getElementById('btn_bispo_b_2_diagonal_baixo_direita2');
const btn_bispo_b_2_diagonal_baixo_direita3 = document.getElementById('btn_bispo_b_2_diagonal_baixo_direita3');
const btn_bispo_b_2_diagonal_baixo_direita4 = document.getElementById('btn_bispo_b_2_diagonal_baixo_direita4');
const btn_bispo_b_2_diagonal_baixo_direita5 = document.getElementById('btn_bispo_b_2_diagonal_baixo_direita5');
const btn_bispo_b_2_diagonal_baixo_direita6 = document.getElementById('btn_bispo_b_2_diagonal_baixo_direita6');
const btn_bispo_b_2_diagonal_baixo_direita7 = document.getElementById('btn_bispo_b_2_diagonal_baixo_direita7');

const btn_bispo_b_2_diagonal_baixo_esquerda1 = document.getElementById('btn_bispo_b_2_diagonal_baixo_esquerda1');
const btn_bispo_b_2_diagonal_baixo_esquerda2 = document.getElementById('btn_bispo_b_2_diagonal_baixo_esquerda2');
const btn_bispo_b_2_diagonal_baixo_esquerda3 = document.getElementById('btn_bispo_b_2_diagonal_baixo_esquerda3');
const btn_bispo_b_2_diagonal_baixo_esquerda4 = document.getElementById('btn_bispo_b_2_diagonal_baixo_esquerda4');
const btn_bispo_b_2_diagonal_baixo_esquerda5 = document.getElementById('btn_bispo_b_2_diagonal_baixo_esquerda5');
const btn_bispo_b_2_diagonal_baixo_esquerda6 = document.getElementById('btn_bispo_b_2_diagonal_baixo_esquerda6');
const btn_bispo_b_2_diagonal_baixo_esquerda7 = document.getElementById('btn_bispo_b_2_diagonal_baixo_esquerda7');


// jogadas bispos pretos (1)
const btn_bispo_p_1_diagonal_cima_direita1 = document.getElementById('btn_bispo_p_1_diagonal_cima_direita1');
const btn_bispo_p_1_diagonal_cima_direita2 = document.getElementById('btn_bispo_p_1_diagonal_cima_direita2');
const btn_bispo_p_1_diagonal_cima_direita3 = document.getElementById('btn_bispo_p_1_diagonal_cima_direita3');
const btn_bispo_p_1_diagonal_cima_direita4 = document.getElementById('btn_bispo_p_1_diagonal_cima_direita4');
const btn_bispo_p_1_diagonal_cima_direita5 = document.getElementById('btn_bispo_p_1_diagonal_cima_direita5');
const btn_bispo_p_1_diagonal_cima_direita6 = document.getElementById('btn_bispo_p_1_diagonal_cima_direita6');
const btn_bispo_p_1_diagonal_cima_direita7 = document.getElementById('btn_bispo_p_1_diagonal_cima_direita7');

const btn_bispo_p_1_diagonal_cima_esquerda1 = document.getElementById('btn_bispo_p_1_diagonal_cima_esquerda1');
const btn_bispo_p_1_diagonal_cima_esquerda2 = document.getElementById('btn_bispo_p_1_diagonal_cima_esquerda2');
const btn_bispo_p_1_diagonal_cima_esquerda3 = document.getElementById('btn_bispo_p_1_diagonal_cima_esquerda3');
const btn_bispo_p_1_diagonal_cima_esquerda4 = document.getElementById('btn_bispo_p_1_diagonal_cima_esquerda4');
const btn_bispo_p_1_diagonal_cima_esquerda5 = document.getElementById('btn_bispo_p_1_diagonal_cima_esquerda5');
const btn_bispo_p_1_diagonal_cima_esquerda6 = document.getElementById('btn_bispo_p_1_diagonal_cima_esquerda6');
const btn_bispo_p_1_diagonal_cima_esquerda7 = document.getElementById('btn_bispo_p_1_diagonal_cima_esquerda7');

const btn_bispo_p_1_diagonal_baixo_direita1 = document.getElementById('btn_bispo_p_1_diagonal_baixo_direita1');
const btn_bispo_p_1_diagonal_baixo_direita2 = document.getElementById('btn_bispo_p_1_diagonal_baixo_direita2');
const btn_bispo_p_1_diagonal_baixo_direita3 = document.getElementById('btn_bispo_p_1_diagonal_baixo_direita3');
const btn_bispo_p_1_diagonal_baixo_direita4 = document.getElementById('btn_bispo_p_1_diagonal_baixo_direita4');
const btn_bispo_p_1_diagonal_baixo_direita5 = document.getElementById('btn_bispo_p_1_diagonal_baixo_direita5');
const btn_bispo_p_1_diagonal_baixo_direita6 = document.getElementById('btn_bispo_p_1_diagonal_baixo_direita6');
const btn_bispo_p_1_diagonal_baixo_direita7 = document.getElementById('btn_bispo_p_1_diagonal_baixo_direita7');

const btn_bispo_p_1_diagonal_baixo_esquerda1 = document.getElementById('btn_bispo_p_1_diagonal_baixo_esquerda1');
const btn_bispo_p_1_diagonal_baixo_esquerda2 = document.getElementById('btn_bispo_p_1_diagonal_baixo_esquerda2');
const btn_bispo_p_1_diagonal_baixo_esquerda3 = document.getElementById('btn_bispo_p_1_diagonal_baixo_esquerda3');
const btn_bispo_p_1_diagonal_baixo_esquerda4 = document.getElementById('btn_bispo_p_1_diagonal_baixo_esquerda4');
const btn_bispo_p_1_diagonal_baixo_esquerda5 = document.getElementById('btn_bispo_p_1_diagonal_baixo_esquerda5');
const btn_bispo_p_1_diagonal_baixo_esquerda6 = document.getElementById('btn_bispo_p_1_diagonal_baixo_esquerda6');
const btn_bispo_p_1_diagonal_baixo_esquerda7 = document.getElementById('btn_bispo_p_1_diagonal_baixo_esquerda7');


// jogadas bispos pretos (2)
const btn_bispo_p_2_diagonal_cima_direita1 = document.getElementById('btn_bispo_p_2_diagonal_cima_direita1');
const btn_bispo_p_2_diagonal_cima_direita2 = document.getElementById('btn_bispo_p_2_diagonal_cima_direita2');
const btn_bispo_p_2_diagonal_cima_direita3 = document.getElementById('btn_bispo_p_2_diagonal_cima_direita3');
const btn_bispo_p_2_diagonal_cima_direita4 = document.getElementById('btn_bispo_p_2_diagonal_cima_direita4');
const btn_bispo_p_2_diagonal_cima_direita5 = document.getElementById('btn_bispo_p_2_diagonal_cima_direita5');
const btn_bispo_p_2_diagonal_cima_direita6 = document.getElementById('btn_bispo_p_2_diagonal_cima_direita6');
const btn_bispo_p_2_diagonal_cima_direita7 = document.getElementById('btn_bispo_p_2_diagonal_cima_direita7');

const btn_bispo_p_2_diagonal_cima_esquerda1 = document.getElementById('btn_bispo_p_2_diagonal_cima_esquerda1');
const btn_bispo_p_2_diagonal_cima_esquerda2 = document.getElementById('btn_bispo_p_2_diagonal_cima_esquerda2');
const btn_bispo_p_2_diagonal_cima_esquerda3 = document.getElementById('btn_bispo_p_2_diagonal_cima_esquerda3');
const btn_bispo_p_2_diagonal_cima_esquerda4 = document.getElementById('btn_bispo_p_2_diagonal_cima_esquerda4');
const btn_bispo_p_2_diagonal_cima_esquerda5 = document.getElementById('btn_bispo_p_2_diagonal_cima_esquerda5');
const btn_bispo_p_2_diagonal_cima_esquerda6 = document.getElementById('btn_bispo_p_2_diagonal_cima_esquerda6');
const btn_bispo_p_2_diagonal_cima_esquerda7 = document.getElementById('btn_bispo_p_2_diagonal_cima_esquerda7');

const btn_bispo_p_2_diagonal_baixo_direita1 = document.getElementById('btn_bispo_p_2_diagonal_baixo_direita1');
const btn_bispo_p_2_diagonal_baixo_direita2 = document.getElementById('btn_bispo_p_2_diagonal_baixo_direita2');
const btn_bispo_p_2_diagonal_baixo_direita3 = document.getElementById('btn_bispo_p_2_diagonal_baixo_direita3');
const btn_bispo_p_2_diagonal_baixo_direita4 = document.getElementById('btn_bispo_p_2_diagonal_baixo_direita4');
const btn_bispo_p_2_diagonal_baixo_direita5 = document.getElementById('btn_bispo_p_2_diagonal_baixo_direita5');
const btn_bispo_p_2_diagonal_baixo_direita6 = document.getElementById('btn_bispo_p_2_diagonal_baixo_direita6');
const btn_bispo_p_2_diagonal_baixo_direita7 = document.getElementById('btn_bispo_p_2_diagonal_baixo_direita7');

const btn_bispo_p_2_diagonal_baixo_esquerda1 = document.getElementById('btn_bispo_p_2_diagonal_baixo_esquerda1');
const btn_bispo_p_2_diagonal_baixo_esquerda2 = document.getElementById('btn_bispo_p_2_diagonal_baixo_esquerda2');
const btn_bispo_p_2_diagonal_baixo_esquerda3 = document.getElementById('btn_bispo_p_2_diagonal_baixo_esquerda3');
const btn_bispo_p_2_diagonal_baixo_esquerda4 = document.getElementById('btn_bispo_p_2_diagonal_baixo_esquerda4');
const btn_bispo_p_2_diagonal_baixo_esquerda5 = document.getElementById('btn_bispo_p_2_diagonal_baixo_esquerda5');
const btn_bispo_p_2_diagonal_baixo_esquerda6 = document.getElementById('btn_bispo_p_2_diagonal_baixo_esquerda6');
const btn_bispo_p_2_diagonal_baixo_esquerda7 = document.getElementById('btn_bispo_p_2_diagonal_baixo_esquerda7');


// jogadas rei branco
const btn_rei_b_1_andar1 = document.getElementById('btn_rei_b_1_andar1');
const btn_rei_b_1_andar2 = document.getElementById('btn_rei_b_1_andar2');
const btn_rei_b_1_andar3 = document.getElementById('btn_rei_b_1_andar3');
const btn_rei_b_1_andar4 = document.getElementById('btn_rei_b_1_andar4');
const btn_rei_b_1_andar5 = document.getElementById('btn_rei_b_1_andar5');
const btn_rei_b_1_andar6 = document.getElementById('btn_rei_b_1_andar6');
const btn_rei_b_1_andar7 = document.getElementById('btn_rei_b_1_andar7');
const btn_rei_b_1_andar8 = document.getElementById('btn_rei_b_1_andar8');

// jogadas rei preto
const btn_rei_p_1_andar1 = document.getElementById('btn_rei_p_1_andar1');
const btn_rei_p_1_andar2 = document.getElementById('btn_rei_p_1_andar2');
const btn_rei_p_1_andar3 = document.getElementById('btn_rei_p_1_andar3');
const btn_rei_p_1_andar4 = document.getElementById('btn_rei_p_1_andar4');
const btn_rei_p_1_andar5 = document.getElementById('btn_rei_p_1_andar5');
const btn_rei_p_1_andar6 = document.getElementById('btn_rei_p_1_andar6');
const btn_rei_p_1_andar7 = document.getElementById('btn_rei_p_1_andar7');
const btn_rei_p_1_andar8 = document.getElementById('btn_rei_p_1_andar8');


// jogadas rainha branca
const btn_rainha_b_1_andar1 = document.getElementById('btn_rainha_b_1_andar1');
const btn_rainha_b_1_andar2 = document.getElementById('btn_rainha_b_1_andar2');
const btn_rainha_b_1_andar3 = document.getElementById('btn_rainha_b_1_andar3');
const btn_rainha_b_1_andar4 = document.getElementById('btn_rainha_b_1_andar4');
const btn_rainha_b_1_andar5 = document.getElementById('btn_rainha_b_1_andar5');
const btn_rainha_b_1_andar6 = document.getElementById('btn_rainha_b_1_andar6');
const btn_rainha_b_1_andar7 = document.getElementById('btn_rainha_b_1_andar7');

const btn_rainha_b_1_andar_lado1 = document.getElementById('btn_rainha_b_1_andar_lado1');
const btn_rainha_b_1_andar_lado2 = document.getElementById('btn_rainha_b_1_andar_lado2');
const btn_rainha_b_1_andar_lado3 = document.getElementById('btn_rainha_b_1_andar_lado3');
const btn_rainha_b_1_andar_lado4 = document.getElementById('btn_rainha_b_1_andar_lado4');
const btn_rainha_b_1_andar_lado5 = document.getElementById('btn_rainha_b_1_andar_lado5');
const btn_rainha_b_1_andar_lado6 = document.getElementById('btn_rainha_b_1_andar_lado6');
const btn_rainha_b_1_andar_lado7 = document.getElementById('btn_rainha_b_1_andar_lado7');

const btn_rainha_b_1_andar_lado_esquerdo1 = document.getElementById('btn_rainha_b_1_andar_lado_esquerdo1');
const btn_rainha_b_1_andar_lado_esquerdo2 = document.getElementById('btn_rainha_b_1_andar_lado_esquerdo2');
const btn_rainha_b_1_andar_lado_esquerdo3 = document.getElementById('btn_rainha_b_1_andar_lado_esquerdo3');
const btn_rainha_b_1_andar_lado_esquerdo4 = document.getElementById('btn_rainha_b_1_andar_lado_esquerdo4');
const btn_rainha_b_1_andar_lado_esquerdo5 = document.getElementById('btn_rainha_b_1_andar_lado_esquerdo5');
const btn_rainha_b_1_andar_lado_esquerdo6 = document.getElementById('btn_rainha_b_1_andar_lado_esquerdo6');
const btn_rainha_b_1_andar_lado_esquerdo7 = document.getElementById('btn_rainha_b_1_andar_lado_esquerdo7');

const btn_rainha_b_1_andar_tras1 = document.getElementById('btn_rainha_b_1_andar_tras1');
const btn_rainha_b_1_andar_tras2 = document.getElementById('btn_rainha_b_1_andar_tras2');
const btn_rainha_b_1_andar_tras3 = document.getElementById('btn_rainha_b_1_andar_tras3');
const btn_rainha_b_1_andar_tras4 = document.getElementById('btn_rainha_b_1_andar_tras4');
const btn_rainha_b_1_andar_tras5 = document.getElementById('btn_rainha_b_1_andar_tras5');
const btn_rainha_b_1_andar_tras6 = document.getElementById('btn_rainha_b_1_andar_tras6');
const btn_rainha_b_1_andar_tras7 = document.getElementById('btn_rainha_b_1_andar_tras7');

const btn_rainha_b_1_diagonal_cima_direita1 = document.getElementById('btn_rainha_b_1_diagonal_cima_direita1');
const btn_rainha_b_1_diagonal_cima_direita2 = document.getElementById('btn_rainha_b_1_diagonal_cima_direita2');
const btn_rainha_b_1_diagonal_cima_direita3 = document.getElementById('btn_rainha_b_1_diagonal_cima_direita3');
const btn_rainha_b_1_diagonal_cima_direita4 = document.getElementById('btn_rainha_b_1_diagonal_cima_direita4');
const btn_rainha_b_1_diagonal_cima_direita5 = document.getElementById('btn_rainha_b_1_diagonal_cima_direita5');
const btn_rainha_b_1_diagonal_cima_direita6 = document.getElementById('btn_rainha_b_1_diagonal_cima_direita6');
const btn_rainha_b_1_diagonal_cima_direita7 = document.getElementById('btn_rainha_b_1_diagonal_cima_direita7');

const btn_rainha_b_1_diagonal_cima_esquerda1 = document.getElementById('btn_rainha_b_1_diagonal_cima_esquerda1');
const btn_rainha_b_1_diagonal_cima_esquerda2 = document.getElementById('btn_rainha_b_1_diagonal_cima_esquerda2');
const btn_rainha_b_1_diagonal_cima_esquerda3 = document.getElementById('btn_rainha_b_1_diagonal_cima_esquerda3');
const btn_rainha_b_1_diagonal_cima_esquerda4 = document.getElementById('btn_rainha_b_1_diagonal_cima_esquerda4');
const btn_rainha_b_1_diagonal_cima_esquerda5 = document.getElementById('btn_rainha_b_1_diagonal_cima_esquerda5');
const btn_rainha_b_1_diagonal_cima_esquerda6 = document.getElementById('btn_rainha_b_1_diagonal_cima_esquerda6');
const btn_rainha_b_1_diagonal_cima_esquerda7 = document.getElementById('btn_rainha_b_1_diagonal_cima_esquerda7');

const btn_rainha_b_1_diagonal_baixo_direita1 = document.getElementById('btn_rainha_b_1_diagonal_baixo_direita1');
const btn_rainha_b_1_diagonal_baixo_direita2 = document.getElementById('btn_rainha_b_1_diagonal_baixo_direita2');
const btn_rainha_b_1_diagonal_baixo_direita3 = document.getElementById('btn_rainha_b_1_diagonal_baixo_direita3');
const btn_rainha_b_1_diagonal_baixo_direita4 = document.getElementById('btn_rainha_b_1_diagonal_baixo_direita4');
const btn_rainha_b_1_diagonal_baixo_direita5 = document.getElementById('btn_rainha_b_1_diagonal_baixo_direita5');
const btn_rainha_b_1_diagonal_baixo_direita6 = document.getElementById('btn_rainha_b_1_diagonal_baixo_direita6');
const btn_rainha_b_1_diagonal_baixo_direita7 = document.getElementById('btn_rainha_b_1_diagonal_baixo_direita7');

const btn_rainha_b_1_diagonal_baixo_esquerda1 = document.getElementById('btn_rainha_b_1_diagonal_baixo_esquerda1');
const btn_rainha_b_1_diagonal_baixo_esquerda2 = document.getElementById('btn_rainha_b_1_diagonal_baixo_esquerda2');
const btn_rainha_b_1_diagonal_baixo_esquerda3 = document.getElementById('btn_rainha_b_1_diagonal_baixo_esquerda3');
const btn_rainha_b_1_diagonal_baixo_esquerda4 = document.getElementById('btn_rainha_b_1_diagonal_baixo_esquerda4');
const btn_rainha_b_1_diagonal_baixo_esquerda5 = document.getElementById('btn_rainha_b_1_diagonal_baixo_esquerda5');
const btn_rainha_b_1_diagonal_baixo_esquerda6 = document.getElementById('btn_rainha_b_1_diagonal_baixo_esquerda6');
const btn_rainha_b_1_diagonal_baixo_esquerda7 = document.getElementById('btn_rainha_b_1_diagonal_baixo_esquerda7');

// jogadas rainha preta
const btn_rainha_p_1_andar1 = document.getElementById('btn_rainha_p_1_andar1');
const btn_rainha_p_1_andar2 = document.getElementById('btn_rainha_p_1_andar2');
const btn_rainha_p_1_andar3 = document.getElementById('btn_rainha_p_1_andar3');
const btn_rainha_p_1_andar4 = document.getElementById('btn_rainha_p_1_andar4');
const btn_rainha_p_1_andar5 = document.getElementById('btn_rainha_p_1_andar5');
const btn_rainha_p_1_andar6 = document.getElementById('btn_rainha_p_1_andar6');
const btn_rainha_p_1_andar7 = document.getElementById('btn_rainha_p_1_andar7');

const btn_rainha_p_1_andar_lado1 = document.getElementById('btn_rainha_p_1_andar_lado1');
const btn_rainha_p_1_andar_lado2 = document.getElementById('btn_rainha_p_1_andar_lado2');
const btn_rainha_p_1_andar_lado3 = document.getElementById('btn_rainha_p_1_andar_lado3');
const btn_rainha_p_1_andar_lado4 = document.getElementById('btn_rainha_p_1_andar_lado4');
const btn_rainha_p_1_andar_lado5 = document.getElementById('btn_rainha_p_1_andar_lado5');
const btn_rainha_p_1_andar_lado6 = document.getElementById('btn_rainha_p_1_andar_lado6');
const btn_rainha_p_1_andar_lado7 = document.getElementById('btn_rainha_p_1_andar_lado7');

const btn_rainha_p_1_andar_lado_esquerdo1 = document.getElementById('btn_rainha_p_1_andar_lado_esquerdo1');
const btn_rainha_p_1_andar_lado_esquerdo2 = document.getElementById('btn_rainha_p_1_andar_lado_esquerdo2');
const btn_rainha_p_1_andar_lado_esquerdo3 = document.getElementById('btn_rainha_p_1_andar_lado_esquerdo3');
const btn_rainha_p_1_andar_lado_esquerdo4 = document.getElementById('btn_rainha_p_1_andar_lado_esquerdo4');
const btn_rainha_p_1_andar_lado_esquerdo5 = document.getElementById('btn_rainha_p_1_andar_lado_esquerdo5');
const btn_rainha_p_1_andar_lado_esquerdo6 = document.getElementById('btn_rainha_p_1_andar_lado_esquerdo6');
const btn_rainha_p_1_andar_lado_esquerdo7 = document.getElementById('btn_rainha_p_1_andar_lado_esquerdo7');

const btn_rainha_p_1_andar_tras1 = document.getElementById('btn_rainha_p_1_andar_tras1');
const btn_rainha_p_1_andar_tras2 = document.getElementById('btn_rainha_p_1_andar_tras2');
const btn_rainha_p_1_andar_tras3 = document.getElementById('btn_rainha_p_1_andar_tras3');
const btn_rainha_p_1_andar_tras4 = document.getElementById('btn_rainha_p_1_andar_tras4');
const btn_rainha_p_1_andar_tras5 = document.getElementById('btn_rainha_p_1_andar_tras5');
const btn_rainha_p_1_andar_tras6 = document.getElementById('btn_rainha_p_1_andar_tras6');
const btn_rainha_p_1_andar_tras7 = document.getElementById('btn_rainha_p_1_andar_tras7');

const btn_rainha_p_1_diagonal_cima_direita1 = document.getElementById('btn_rainha_p_1_diagonal_cima_direita1');
const btn_rainha_p_1_diagonal_cima_direita2 = document.getElementById('btn_rainha_p_1_diagonal_cima_direita2');
const btn_rainha_p_1_diagonal_cima_direita3 = document.getElementById('btn_rainha_p_1_diagonal_cima_direita3');
const btn_rainha_p_1_diagonal_cima_direita4 = document.getElementById('btn_rainha_p_1_diagonal_cima_direita4');
const btn_rainha_p_1_diagonal_cima_direita5 = document.getElementById('btn_rainha_p_1_diagonal_cima_direita5');
const btn_rainha_p_1_diagonal_cima_direita6 = document.getElementById('btn_rainha_p_1_diagonal_cima_direita6');
const btn_rainha_p_1_diagonal_cima_direita7 = document.getElementById('btn_rainha_p_1_diagonal_cima_direita7');

const btn_rainha_p_1_diagonal_cima_esquerda1 = document.getElementById('btn_rainha_p_1_diagonal_cima_esquerda1');
const btn_rainha_p_1_diagonal_cima_esquerda2 = document.getElementById('btn_rainha_p_1_diagonal_cima_esquerda2');
const btn_rainha_p_1_diagonal_cima_esquerda3 = document.getElementById('btn_rainha_p_1_diagonal_cima_esquerda3');
const btn_rainha_p_1_diagonal_cima_esquerda4 = document.getElementById('btn_rainha_p_1_diagonal_cima_esquerda4');
const btn_rainha_p_1_diagonal_cima_esquerda5 = document.getElementById('btn_rainha_p_1_diagonal_cima_esquerda5');
const btn_rainha_p_1_diagonal_cima_esquerda6 = document.getElementById('btn_rainha_p_1_diagonal_cima_esquerda6');
const btn_rainha_p_1_diagonal_cima_esquerda7 = document.getElementById('btn_rainha_p_1_diagonal_cima_esquerda7');

const btn_rainha_p_1_diagonal_baixo_direita1 = document.getElementById('btn_rainha_p_1_diagonal_baixo_direita1');
const btn_rainha_p_1_diagonal_baixo_direita2 = document.getElementById('btn_rainha_p_1_diagonal_baixo_direita2');
const btn_rainha_p_1_diagonal_baixo_direita3 = document.getElementById('btn_rainha_p_1_diagonal_baixo_direita3');
const btn_rainha_p_1_diagonal_baixo_direita4 = document.getElementById('btn_rainha_p_1_diagonal_baixo_direita4');
const btn_rainha_p_1_diagonal_baixo_direita5 = document.getElementById('btn_rainha_p_1_diagonal_baixo_direita5');
const btn_rainha_p_1_diagonal_baixo_direita6 = document.getElementById('btn_rainha_p_1_diagonal_baixo_direita6');
const btn_rainha_p_1_diagonal_baixo_direita7 = document.getElementById('btn_rainha_p_1_diagonal_baixo_direita7');

const btn_rainha_p_1_diagonal_baixo_esquerda1 = document.getElementById('btn_rainha_p_1_diagonal_baixo_esquerda1');
const btn_rainha_p_1_diagonal_baixo_esquerda2 = document.getElementById('btn_rainha_p_1_diagonal_baixo_esquerda2');
const btn_rainha_p_1_diagonal_baixo_esquerda3 = document.getElementById('btn_rainha_p_1_diagonal_baixo_esquerda3');
const btn_rainha_p_1_diagonal_baixo_esquerda4 = document.getElementById('btn_rainha_p_1_diagonal_baixo_esquerda4');
const btn_rainha_p_1_diagonal_baixo_esquerda5 = document.getElementById('btn_rainha_p_1_diagonal_baixo_esquerda5');
const btn_rainha_p_1_diagonal_baixo_esquerda6 = document.getElementById('btn_rainha_p_1_diagonal_baixo_esquerda6');
const btn_rainha_p_1_diagonal_baixo_esquerda7 = document.getElementById('btn_rainha_p_1_diagonal_baixo_esquerda7');




resetar.onclick = () =>{


    vida_b = 1;
    vida_p = 1;

    vez = 0;

    // Resetar peças pretas
    torre_p_1.style.left = posicoes_x[0] + "px";
    torre_p_1.style.top = posicoes_y[7] + "px";

    cavalo_p_1.style.left = posicoes_x[1] + "px";
    cavalo_p_1.style.top = posicoes_y[7] + "px";

    bispo_p_1.style.left = posicoes_x[2] + "px";
    bispo_p_1.style.top = posicoes_y[7] + "px";

    rainha_p.style.left = posicoes_x[3] + "px";
    rainha_p.style.top = posicoes_y[7] + "px";

    rei_p.style.left = posicoes_x[4] + "px";
    rei_p.style.top = posicoes_y[7] + "px";

    bispo_p_2.style.left = posicoes_x[5] + "px";
    bispo_p_2.style.top = posicoes_y[7] + "px";

    cavalo_p_2.style.left = posicoes_x[6] + "px";
    cavalo_p_2.style.top = posicoes_y[7] + "px";

    torre_p_2.style.left = posicoes_x[7] + "px";
    torre_p_2.style.top = posicoes_y[7] + "px";

    peao_p_1.style.left = posicoes_x[0] + "px";
    peao_p_1.style.top = posicoes_y[6] + "px";
    peao_p_2.style.left = posicoes_x[1] + "px";
    peao_p_2.style.top = posicoes_y[6] + "px";
    peao_p_3.style.left = posicoes_x[2] + "px";
    peao_p_3.style.top = posicoes_y[6] + "px";
    peao_p_4.style.left = posicoes_x[3] + "px";
    peao_p_4.style.top = posicoes_y[6] + "px";
    peao_p_5.style.left = posicoes_x[4] + "px";
    peao_p_5.style.top = posicoes_y[6] + "px";
    peao_p_6.style.left = posicoes_x[5] + "px";
    peao_p_6.style.top = posicoes_y[6] + "px";
    peao_p_7.style.left = posicoes_x[6] + "px";
    peao_p_7.style.top = posicoes_y[6] + "px";
    peao_p_8.style.left = posicoes_x[7] + "px";
    peao_p_8.style.top = posicoes_y[6] + "px";


    // resetar peças brancas
    torre_b_1.style.left = posicoes_x[0] + "px";
    torre_b_1.style.top = posicoes_y[0] + "px";

    cavalo_b_1.style.left = posicoes_x[1] + "px";
    cavalo_b_1.style.top = posicoes_y[0] + "px";

    bispo_b_1.style.left = posicoes_x[2] + "px";
    bispo_b_1.style.top = posicoes_y[0] + "px";

    rainha_b.style.left = posicoes_x[3] + "px";
    rainha_b.style.top = posicoes_y[0] + "px";

    rei_b.style.left = posicoes_x[4] + "px";
    rei_b.style.top = posicoes_y[0] + "px";

    bispo_b_2.style.left = posicoes_x[5] + "px";
    bispo_b_2.style.top = posicoes_y[0] + "px";

    cavalo_b_2.style.left = posicoes_x[6] + "px";
    cavalo_b_2.style.top = posicoes_y[0] + "px";

    torre_b_2.style.left = posicoes_x[7] + "px";
    torre_b_2.style.top = posicoes_y[0] + "px";

    peao_b_1.style.left = posicoes_x[0] + "px";
    peao_b_1.style.top = posicoes_y[1] + "px";
    peao_b_2.style.left = posicoes_x[1] + "px";
    peao_b_2.style.top = posicoes_y[1] + "px";
    peao_b_3.style.left = posicoes_x[2] + "px";
    peao_b_3.style.top = posicoes_y[1] + "px";
    peao_b_4.style.left = posicoes_x[3] + "px";
    peao_b_4.style.top = posicoes_y[1] + "px";
    peao_b_5.style.left = posicoes_x[4] + "px";
    peao_b_5.style.top = posicoes_y[1] + "px";
    peao_b_6.style.left = posicoes_x[5] + "px";
    peao_b_6.style.top = posicoes_y[1] + "px";
    peao_b_7.style.left = posicoes_x[6] + "px";
    peao_b_7.style.top = posicoes_y[1] + "px";
    peao_b_8.style.left = posicoes_x[7] + "px";
    peao_b_8.style.top = posicoes_y[1] + "px";

    casa_atualx = -1;
    casa_atualy = -1;
    
    ycords_peao_p_1 = 6;
    ycords_peao_p_2 = 6;
    ycords_peao_p_3 = 6;
    ycords_peao_p_4 = 6;
    ycords_peao_p_5 = 6;
    ycords_peao_p_6 = 6;
    ycords_peao_p_7 = 6;
    ycords_peao_p_8 = 6;

    ycords_peao_b_1 = 1;
    ycords_peao_b_2 = 1;
    ycords_peao_b_3 = 1;
    ycords_peao_b_4 = 1;
    ycords_peao_b_5 = 1;
    ycords_peao_b_6 = 1;
    ycords_peao_b_7 = 1;
    ycords_peao_b_8 = 1;

    xcords_peao_b_1 = 0;
    xcords_peao_b_2 = 1;
    xcords_peao_b_3 = 2;
    xcords_peao_b_4 = 3;
    xcords_peao_b_5 = 4;
    xcords_peao_b_6 = 5;
    xcords_peao_b_7 = 6;
    xcords_peao_b_8 = 7;

    xcords_peao_p_1 = 0;
    xcords_peao_p_2 = 1;
    xcords_peao_p_3 = 2;
    xcords_peao_p_4 = 3;
    xcords_peao_p_5 = 4;
    xcords_peao_p_6 = 5;
    xcords_peao_p_7 = 6;
    xcords_peao_p_8 = 7;

    ycords_torre_b_1 = 0;
    xcords_torre_b_1 = 0;

    ycords_torre_b_2 = 0;
    xcords_torre_b_2 = 7;

    ycords_torre_p_1 = 7;
    xcords_torre_p_1 = 0;

    ycords_torre_p_2 = 7;
    xcords_torre_p_2 = 7;

    ycords_cavalo_b_1 = 0;
    xcords_cavalo_b_1 = 1;

    ycords_cavalo_b_2 = 0;
    xcords_cavalo_b_2 = 6;

    ycords_cavalo_p_1 = 7;
    xcords_cavalo_p_1 = 1;

    ycords_cavalo_p_2 = 7;
    xcords_cavalo_p_2 = 6;

    ycords_bispo_b_1 = 0;
    xcords_bispo_b_1 = 2;

    ycords_bispo_b_2 = 0;
    xcords_bispo_b_2 = 5;

    ycords_bispo_p_1 = 7;
    xcords_bispo_p_1 = 2;

    ycords_bispo_p_2 = 7;
    xcords_bispo_p_2 = 5;

    ycords_rainha_b = 0;
    xcords_rainha_b = 3;

    ycords_rainha_p = 7;
    xcords_rainha_p = 3;

    ycords_rei_b = 0;
    xcords_rei_b = 4;

    ycords_rei_p = 7;
    xcords_rei_p = 4;

    


    // contar jogadas do peão preto
    jogadas_peao_p_1 = 0;
    jogadas_peao_p_2 = 0;
    jogadas_peao_p_3= 0;
    jogadas_peao_p_4 = 0;
    jogadas_peao_p_5 = 0;
    jogadas_peao_p_6 = 0;
    jogadas_peao_p_7 = 0;
    jogadas_peao_p_8 = 0;

    // contar jogadas do peão branco
    jogadas_peao_b_1 = 0;
    jogadas_peao_b_2 = 0;
    jogadas_peao_b_3= 0;
    jogadas_peao_b_4 = 0;
    jogadas_peao_b_5 = 0;
    jogadas_peao_b_6 = 0;
    jogadas_peao_b_7 = 0;
    jogadas_peao_b_8 = 0;

    limpar_bispos();
    limpar_bispos_b_2();
    limpar_bispos_p();
    limpar_bispos_p_2();
    limpar_cavalos_b_1();
    limpar_cavalos_b_2();
    limpar_cavalos_p_1();
    limpar_cavalos_p_2();
    limpar_peoes();
    limpar_rainhas_b();
    limpar_rainhas_p();
    limpar_reis();
    limpar_reis_p();
    limpar_torres_b_1();
    limpar_torres_b_2();
    limpar_torres_p_1();
    limpar_torres_p_2();
}

cancelar.onclick = () =>{
    limpar_bispos();
    limpar_bispos_b_2();
    limpar_bispos_p();
    limpar_bispos_p_2();
    limpar_cavalos_b_1();
    limpar_cavalos_b_2();
    limpar_cavalos_p_1();
    limpar_cavalos_p_2();
    limpar_peoes();
    limpar_rainhas_b();
    limpar_rainhas_p();
    limpar_reis();
    limpar_reis_p();
    limpar_torres_b_1();
    limpar_torres_b_2();
    limpar_torres_p_1();
    limpar_torres_p_2();
}


function vitoria(){
    if(vida_p == 0){
        console.log("time branco venceu!");
        fetch("http://localhost:3008/vencedor", {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(
                    {
                        vencedor: 0
                })
        })

    } if(vida_b == 0){
        console.log("time preto venceu!");
        console.log("time branco venceu!");
        fetch("http://localhost:3008/vencedor", {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(
                    {
                        vencedor: 1
                })
        })
    }


}

function myFunction() {
    
    var checkBox = document.getElementById("myCheck");
    
    var texto1 = document.getElementById("texto1");
    var texto2 = document.getElementById("texto2");

    
    if (checkBox.checked == false){
        vez = 0;
        texto1.style.display = "block";
        texto2.style.display = "none";
    } else {
        vez = 1;
        texto1.style.display = "none";
        texto2.style.display = "block";
    }

    if (vez == 1){
        if(casa_atual_b_x == xcords_torre_p_1 && casa_atual_b_y == ycords_torre_p_1){
            torre_p_1.style.display = "none";
        }
        if(casa_atual_b_x == xcords_torre_p_2 && casa_atual_b_y == ycords_torre_p_2){
            torre_p_2.style.display = "none";
        }
        if(casa_atual_b_x == xcords_cavalo_p_1 && casa_atual_b_y == ycords_cavalo_p_1){
            cavalo_p_1.style.display = "none";
        }
        if(casa_atual_b_x == xcords_cavalo_p_2 && casa_atual_b_y == ycords_cavalo_p_2){
            cavalo_p_2.style.display = "none";
        }
        if(casa_atual_b_x == xcords_bispo_p_1 && casa_atual_b_y == ycords_bispo_p_1){
            bispo_p_1.style.display = "none";
        }
        if(casa_atual_b_x == xcords_bispo_p_2 && casa_atual_b_y == ycords_bispo_p_2){
            bispo_p_2.style.display = "none";
        }
        if(casa_atual_b_x == xcords_rainha_p && casa_atual_b_y == ycords_rainha_p){
            rainha_p.style.display = "none";
        }
        if(casa_atual_b_x == xcords_rei_p && casa_atual_b_y == ycords_rei_p){
            rei_p.style.display = "none";
            vida_p = 0;
            vitoria();
        }
    
        if(casa_atual_b_x == xcords_peao_p_1 && casa_atual_b_y == ycords_peao_p_1){
            peao_p_1.style.display = "none";
        }
        if(casa_atual_b_x == xcords_peao_p_2 && casa_atual_b_y == ycords_peao_p_2){
            peao_p_2.style.display = "none";
            xcords_peao_b_2 = -1;
        }
        if(casa_atual_b_x == xcords_peao_p_3 && casa_atual_b_y == ycords_peao_p_3){
            peao_p_3.style.display = "none";
        }
        if(casa_atual_b_x == xcords_peao_p_4 && casa_atual_b_y == ycords_peao_p_4){
            peao_p_4.style.display = "none";
        }
        if(casa_atual_b_x == xcords_peao_p_5 && casa_atual_b_y == ycords_peao_p_5){
            peao_p_5.style.display = "none";
        }
        if(casa_atual_b_x == xcords_peao_p_6 && casa_atual_b_y == ycords_peao_p_6){
            peao_p_6.style.display = "none";
        }
        if(casa_atual_b_x == xcords_peao_p_7 && casa_atual_b_y == ycords_peao_p_7){
            peao_p_7.style.display = "none";
        }
        if(casa_atual_b_x == xcords_peao_p_8 && casa_atual_b_y == ycords_peao_p_8){
            peao_p_8.style.display = "none";
        }
    

    } if (vez == 0) {
        
        if(casa_atual_p_x == xcords_torre_b_1 && casa_atual_p_y == ycords_torre_b_1){
            torre_b_1.style.display = "none";
        }
        if(casa_atual_p_x == xcords_torre_b_2 && casa_atual_p_y == ycords_torre_b_2){
            torre_b_2.style.display = "none";
        }
        if(casa_atual_p_x == xcords_cavalo_b_1 && casa_atual_p_y == ycords_cavalo_b_1){
            cavalo_b_1.style.display = "none";
        }
        if(casa_atual_p_x == xcords_cavalo_b_2 && casa_atual_p_y == ycords_cavalo_b_2){
            cavalo_b_2.style.display = "none";
        }
        if(casa_atual_p_x == xcords_bispo_b_1 && casa_atual_p_y == ycords_bispo_b_1){
            bispo_b_1.style.display = "none";
        }
        if(casa_atual_p_x == xcords_bispo_b_2 && casa_atual_p_y == ycords_bispo_b_2){
            bispo_b_2.style.display = "none";
        }
        if(casa_atual_p_x == xcords_rainha_b && casa_atual_p_y == ycords_rainha_b){
            rainha_b.style.display = "none";
        }
        if(casa_atual_p_x == xcords_rei_b && casa_atual_p_y == ycords_rei_b){
            rei_b.style.display = "none";
            vida_b = 0;
            vitoria();
        }
    
        if(casa_atual_p_x == xcords_peao_b_1 && casa_atual_p_y == ycords_peao_b_1){
            peao_b_1.style.display = "none";
        }
        if(casa_atual_p_x == xcords_peao_b_2 && casa_atual_p_y == ycords_peao_b_2){
            peao_b_2.style.display = "none";
        }
        if(casa_atual_p_x == xcords_peao_b_3 && casa_atual_p_y == ycords_peao_b_3){
            peao_b_3.style.display = "none";
        }
        if(casa_atual_p_x == xcords_peao_b_4 && casa_atual_p_y == ycords_peao_b_4){
            peao_b_4.style.display = "none";
        }
        if(casa_atual_p_x == xcords_peao_b_5 && casa_atual_p_y == ycords_peao_b_5){
            peao_b_5.style.display = "none";
        }
        if(casa_atual_p_x == xcords_peao_b_6 && casa_atual_p_y == ycords_peao_b_6){
            peao_b_6.style.display = "none";
        }
        if(casa_atual_p_x == xcords_peao_b_7 && casa_atual_p_y == ycords_peao_b_7){
            peao_b_7.style.display = "none";
        }
        if(casa_atual_p_x == xcords_peao_b_8 && casa_atual_p_y == ycords_peao_b_8){
            peao_b_8.style.display = "none";
        }
    }  
    console.log(vez);
  }