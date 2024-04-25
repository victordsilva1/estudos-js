//Nesse artiguinho vou ensinar um pouco sobre o && And e o || OU 
/*
T && T = T 
T && F = F
F && T = F 
F && F = F

T || T = T
T || F = T 
F || T = T 
F || F = F
*/

//Logicos ! (negacao) , && , ||
//Ternário ? (if) : (else)
var o1 = 10
var o2 = 100
var o3 = 5

o3 > o1 && o2 > o3 //FALSE WHY? De fato o2(100) > o3(5), mas não basta só isso. Porque o3>o1 é FALSE
o3 > o1 || o2 > o3 //True why? Porque basta um deles ser verdade e o2 > o3.

//Agora vou fazer com mais contas 
n = 4
b = 6
a = 8
var result = n + 100 < b + 8 || a % 2 == 0 
/*
Bem nesse caso se trata de ou ||, b=6 e 6+8=14 e 14 não é maior que n+100=104
entao a primeira condicao é false,por se tratar de ou aindfa devo olhar a outra
a=8 8/2 = 4 tem resto % == 0 ou seja TRUE 
COmo basta uma ser TRUE resultado = TRUE
*/
//EXEMPLO COM ! (NESSE CASO != é diferente)
o1 != o2 
//tRUE

//PRESEDENCIA: 1-Operadores Arit(*,/,+,-) 2-OP RElacionais(>,>,==,===,>=,<=), 3-Op Logi (!=,&&,||)

//Ternário : ? ou :

var messi = 10
var cr7 = 7

var goat = messi > cr7 ?'Messi é melhor' :'Cristiano é melhor'
//?Se for true exibi o ? , e caso contrario o: 
var goat = cr7 != messi ?'Gênios' :'Palmeiras tem Mundial'
 //cr7 = 7 , messi = 10 , 7 é diferente de 10 ou seja True , entao retorna o valor de ? 'Genios'
//Tambem é possivel fazer com numeros 

//Fim espero que tenha entendido

