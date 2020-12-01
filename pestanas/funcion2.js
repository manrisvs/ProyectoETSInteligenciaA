

function diagnostico(){

	var clamidia = 0;
	var gonorrea = 0;
	var tricomoniasis = 0;
	var vhi = 0;
	var herpes = 0;
	var vph = 0;
	var hepatitis = 0;
	var sifilis = 0;
	var Linfoogranuloma = 0;
	var chancroide = 0;

	var nombre = document.getElementById("nombre").value;
// COMUNES
	var r1 = document.getElementById("r1").value;
	var r21 = document.getElementById("r21").value;
	var r22 = document.getElementById("r22").value;
	var r3 = document.getElementById("r3").value;
	var r4 = document.getElementById("r4").value;
	var r51 = document.getElementById("r51").value;
	var r52 = document.getElementById("r52").value;
	var r61 = document.getElementById("r61").value;
	var r62 = document.getElementById("r62").value;
	var r71 = document.getElementById("r71").value;
	var r72 = document.getElementById("r72").value;
	var r81 = document.getElementById("r81").value;
	var r82 = document.getElementById("r82").value;
	var r91 = document.getElementById("r91").value;
	var r92= document.getElementById("r92").value;
	var r101 = document.getElementById("r101").value;
	var r102 = document.getElementById("r102").value;
	var r111 = document.getElementById("r111").value;
	var r112 = document.getElementById("r112").value;
	var r121 = document.getElementById("r121").value;
	var r122 = document.getElementById("r122").value;
// Dolor
	var r13 = document.getElementById("r13").value;
	var r14 = document.getElementById("r14").value;
	var r15 = document.getElementById("r15").value;
	var r161 = document.getElementById("r161").value;
	var r162 = document.getElementById("r162").value;
	var r17 = document.getElementById("r17").value;
// Comezón
	var r181 = document.getElementById("r181").value;
	var r182 = document.getElementById("r182").value;
	var r19 = document.getElementById("r19").value;
	var r20 = document.getElementById("r20").value;
	var r211 = document.getElementById("r211").value;
	var r212 = document.getElementById("r212").value;
// Fluido
	var r222 = document.getElementById("r222").value;
	var r231= document.getElementById("r231").value;
	var r232 = document.getElementById("r232").value;
	var r241 = document.getElementById("r241").value;
	var r242 = document.getElementById("r242").value;
	var r25 = document.getElementById("r25").value;
	var r26 = document.getElementById("r26").value;
	var r27 = document.getElementById("r27").value;
	var r28 = document.getElementById("r28").value;
// Verrugas
	var r29 = document.getElementById("r29").value;
	var r301= document.getElementById("r301").value;
	var r302= document.getElementById("r302").value;
	var r31 = document.getElementById("r31").value;

	var bandera = false;

// Clamidia segura
	if(r13 == "Casi nada"){
		if(r14 == "Regular"){
			if(r15 == "Poco"){
				if(r19 == "Casi nada"){
					if(r222 == "Mucho"){
						if(r25 == "Demasiado"){
							if(r26 == "Mucho"){
								
							}
						}
					}
				}
			}
		}
	}else{
		bandera = true;
	}

	if(r13 == "Casi nada"){
		clamidia++;
	}
	if(r14 == "Regular"){
		clamidia++;
	}
	if(r15 == "Poco"){
		clamidia++;
	}
	if(r19 == "Casi nada"){
		clamidia++;
	}
	if(r222 == "Mucho"){
		clamidia++;
	}
	if(r25 == "Demasiado"){
		clamidia++;
	}
	if(r26 == "Mucho"){
		clamidia++;
	}
								

//gonorrea;
	if(r14 == "Casi nada"){
		if(document.getElementById('r181').checked){
			if(r19 == "Casi nada"){
				if(r222 == "Demasiado"){
					if(document.getElementById('r241').checked){
						if(r25 == "Mucho"){
							if(r26 == "Poco"){
								alert(nombre + " gonorrea si")
							}
						}
					}
				}
			}
		}
	}else{
		bandera = true;
	}

	if(r14 == "Casi nada"){
		gonorrea++;
	}
	if(document.getElementById('r181').checked){
		gonorrea++;
	}
	if(r19 == "Casi nada"){
		gonorrea++;
	}
	if(r222 == "Demasiado"){
		gonorrea++;
	}
	if(document.getElementById('r241').checked){
		gonorrea++;
	}
	if(r25 == "Mucho"){
		gonorrea++;
	}
	if(r26 == "Poco"){
		gonorrea++;
	}
								
//tricomoniasis;
	if(r15 == "Mucho"){
		if(r19 == "Demasiado"){
			if(r222 == "Poco"){
				if(r25== "Poco"){

				}
			}
		}
	}

	if(r15 == "Mucho"){
		tricomoniasis++;
	}
	if(r19 == "Demasiado"){
		tricomoniasis++;
	}
	if(r222 == "Poco"){
		tricomoniasis++;
	}
	if(r25== "Poco"){
		tricomoniasis++;
	}

//vhi;
	if(r1 == "Entre 37.0 y 37.4"){
		if(document.getElementById('r21').checked){
			if(r3 == "Poco"){
				if(r4 == "Casi nada"){
					if(r27 == "Mucho"){
						if(r31 == "Casi nada"){

						}
					}					
				}
			}
		}
	}else{
		bandera = true;
	}

	if(r1 == "Entre 37.0 y 37.4"){

	}
	if(document.getElementById('r21').checked){
		vhi++;
	}
	if(r3 == "Poco"){
		vhi++;
	}
	if(r4 == "Casi nada"){
		vhi++;
	}
	if(r27 == "Mucho"){
		vhi++;
	}
	if(r31 == "Casi nada"){
		vhi++;
	}

//herpes;      
	if(r1 == "Entre 38.1 y 38.4"){
		if(r3 == "Poco"){
			if(document.getElementById('r161').checked){
				if(r17 == "Casi nada"){
					if(r20 == "Mucho"){
						if(r25 == "Regular"){
							if(r27 == "Poco"){
								if(r28 == "Regular"){

								}
							}							
						}
					}					
				}
			}
		}
	}else{
		bandera = true;
	}

	if(r1 == "Entre 38.1 y 38.4"){
		herpes++;
	}
	if(r3 == "Poco"){
		herpes++;
	}
	if(document.getElementById('r161').checked){
		herpes++;
	}
	if(r17 == "Casi nada"){
		herpes++;
	}
	if(r20 == "Mucho"){
		herpes++;
	}
	if(r25 == "Regular"){
		herpes++;
	}
	if(r27 == "Poco"){
		herpes++;
	}
	if(r28 == "Regular"){
		herpes++;
	}

//vph;    document.getElementById('').checked
	if(r3 == "Mucho"){
		if(r19 == "Mucho"){
			if(r20== "Poco"){
				if(document.getElementById('r231').checked){
					if(r25== "Casi nada"){
						if(r29== "Casi nada"){
							if(document.getElementById('r301').checked){
								
							}							
						}
					}					
				}
			}
		}
	}else{
		bandera = true;
	}

	if(r3 == "Mucho"){
		vph++;
	}
	if(r19 == "Mucho"){
		vph++;
	}
	if(r20== "Poco"){
		vph++;
	}
	if(document.getElementById('r231').checked){
		vph++;
	}
	if(r25== "Casi nada"){
		vph++;
	}
	if(r29== "Casi nada"){
		vph++;
	}
	if(document.getElementById('r301').checked){
		vph++;
	}
								
							
//hepatitis;    document.getElementById('').checked
	if(r1== "Más de 38.5"){
		if(r4== "Regular"){
			if(document.getElementById('r51').checked){
				if(document.getElementById('r61').checked){
					if(document.getElementById('r71').checked){
						if(document.getElementById('r81').checked){
							if(r13== "Demasiado"){
								if(r17== "Regular"){
									if(document.getElementById('r211').checked){

									}
								}
							}							
						}
					}					
				}
			}
		}
	}else{
		bandera = true;
	}

	if(r1== "Más de 38.5"){
		hepatitis++;
	}
	if(r4== "Regular"){
		hepatitis++;
	}
	if(document.getElementById('r51').checked){
		hepatitis++;
	}
	if(document.getElementById('r61').checked){
		hepatitis++;
	}
	if(document.getElementById('r71').checked){
		hepatitis++;
	}
	if(document.getElementById('r81').checked){
		hepatitis++;
	}
	if(r13== "Demasiado"){
		hepatitis++;
	}
	if(r17== "Regular"){
		hepatitis++;
	}
	if(document.getElementById('r211').checked){
		hepatitis++;
	}

//sifilis;  document.getElementById('').checked
	if(r1 == "Entre 37.5 y 38.0"){
		if(r4 == "Mucho"){
			if(document.getElementById('r91').checked){
				if(document.getElementById('r101').checked ){
					if(document.getElementById('r111').checked ){
						if(document.getElementById('r121').checked ){
							if(r13== "Mucho"){
								if(r17 == "Mucho"){
									if(r27 == "Regular"){
										if(r29== "Regular"){
											if(p31 == "Mucho"){

											}
										}
									}
								}
							}							
						}
					}					
				}
			}
		}
	}else{
		bandera = true;
	}

	if(r1 == "Entre 37.5 y 38.0"){
		sifilis++;
	}
	if(r4 == "Mucho"){
		sifilis++;
	}
	if(document.getElementById('r91').checked){
		sifilis++;
	}
	if(document.getElementById('r101').checked ){
		sifilis++;
	}
	if(document.getElementById('r111').checked ){
		sifilis++;
	}
	if(document.getElementById('r121').checked ){
		sifilis++;
	}		
	if(r13== "Mucho"){
		sifilis++;
	}
	if(r17 == "Mucho"){
		sifilis++;
	}
	if(r27 == "Regular"){
		sifilis++;
	}
	if(r29== "Regular"){
		sifilis++;
	}
	if(p31 == "Mucho"){
		sifilis++;
	}

//Linfoogranuloma;    document.getElementById('').checked
	if(r14 == "Mucho"){
		if(r27 == "Casi nada"){
			if(r28 == "Mucho"){
				if(r31 == "Poco"){

				}
			}
		}
	}else{
		bandera = true;
	}

	if(r14 == "Mucho"){
		Linfoogranuloma++;
	}
	if(r27 == "Casi nada"){
		Linfoogranuloma++;
	}
	if(r28 == "Mucho"){
		Linfoogranuloma++;
	}
	if(r31 == "Poco"){
		Linfoogranuloma++;
	}

//chancroide;    document.getElementById('').checked
	if(r222 == "Casi nada"){
		if(r27 == "Demasiado"){
			if(r28 == "Casi nada"){
				if(r29 == "Mucho"){
					if(r31 == "Demasiado"){

					}

				}
			}
		}
	}else{
		bandera = true;
	}

	if(r222 == "Casi nada"){
		chancroide++;
	}
	if(r27 == "Demasiado"){
		chancroide++;
	}
	if(r28 == "Casi nada"){
		chancroide++;
	}
	if(r29 == "Mucho"){
		chancroide++;
	}
	if(r31 == "Demasiado"){
		chancroide++;
	}else{
		bandera = true;
	}

	var pclamidia = (100*clamidia)/7;
	var pgonorrea = (100*gonorrea)/7;
	var ptricomoniasis = (100*tricomoniasis)/4; 
	var pvhi = (100*vhi)/6;
	var pherpes = (100*herpes)/8;
	var pvph = (100*vph)/7;
	var phepatitis = (100*hepatitis)/9; 
	var psifilis = (100*sifilis)/11;
	var pLinfoogranuloma = (100*Linfoogranuloma)/4; 
	var pchancroide = (100*chancroide)/5;

	var max = (pclamidia,pgonorrea,ptricomoniasis,pvhi,pherpes,pvph,phepatitis,psifilis,pLinfoogranuloma,pchancroide);

	var texto = "";

	if (bandera == true) {
		
	if(max == "0"){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de un  "+ pclamidia +"% de estes contagiado por alguna" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == pclamidia){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un  "+ pclamidia +"% de que tenga clamidia" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == pgonorrea){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +  pgonorrea +"% de que tenga Gonorrea" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == ptricomoniasis){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +   ptricomoniasis +"% de que tenga Triacomoniasis" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == pvhi){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +   pvhi +"% de que tenga VIH" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == pherpes){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +  pherpes +"% de que tenga Herpes" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == pvph){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +  pvph +"% de que tenga vph" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == phepatitis){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +   phepatitis +"% de que tenga Hepatitis" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == psifilis){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +   psifilis +"% de que tenga Sífilis" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == pLinfoogranuloma){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +  pLinfoogranuloma +"% de que tenga Linfogranuloma" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(max == pchancroide){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, sin embargo, se acercan más a la probabilidad de un " +  "hay un " + pchancroide +"% de que tenga Chancroide" + "\n\nConsulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}
	}
}



function comparar(){

	var sclamidia = ["0","1","2","3","4","5","6","7","8","9","10","11","12","o","o","o","16","17","18","o","20","21","o","23","24","o","26","27","28","29","30","31","o","o","34","35"];
	var sgonorrea = ["1","1","2","3","4","5","6","7","8","9","10","11","12","13","o","15","16","17","o","o","20","21","o","23","o","o","o","27","28","29","30","31","o","o","34","35"];
	var stricomoniasis = ["2","o","o","o","o","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","o","28","29","30","o","32","33","34","35"];
	var svhi = ["3","o","2","3","4","5","6","7","8","9","10","11","12","o","14","15","o","o","18","19","o","21","22","23","24","o","26","o","o","29","30","31","32","33","34","35"];
	var sherpes = ["4","1","2","o","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","o","o","21","22","o","24","o","26","27","28","o","o","31","32","33","34","35"];
	var svph = ["5","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"];
	var shepatitis = ["6","o","2","3","o","o","o","o","o","9","10","11","12","o","14","15","16","o","18","19","20","o","22","23","24","25","26","27","28","29","30","31","32","33","34","35"];
	var ssifilis = ["7","o","2","3","o","5","6","7","8","o","o","o","o","o","14","15","16","o","18","19","20","21","22","23","24","25","26","o","28","o","30","o","32","33","34","35"];
	var sLinfoogranuloma = ["8","1","2","3","4","5","6","7","8","9","10","11","12","13","o","15","16","17","18","19","20","21","22","23","24","25","26","o","o","29","30","o","o","o","o","o",];
	var schancroide = ["9","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","o","23","24","25","26","o","o","o","30","o","32","33","34","35"];

	var sintomas = ["fiebre",//1
	"anemia",//2
	"dolor de garganta",//3
	"fatiga",//4
	"nauseas vomito",//5
	"pérdida de apetito",//6
	"orinar obscuro",//7
	"color amarillento en la piel o en la parte baja de los ojos",//8
	"entumecimiento",//9
	"parálisis",//10
	"ceguera",//11
	"demencia",//12
	"dolor abdominal parte baja",//13
	"dolor testicular o Hinchazón",//14
	"dolor durante relaciones sexuales",//15
	"dolor en zona y sensibilidad genital",//16
	"dolor muscular",//17
	"picazón Anal",//18
	"comezón o irritación en el pene",//19
	"comezón alrededor de área genitalglúteos y parte inferior de los muslos",//20
	"picazón corporal",//21
	"Secreción de pene",//22
	"Sangrado relaciones sexuales",//23
	"Secreción con sangre del pene ",//24
	"ardor al orinar",//24
	"dolor al defecar",//26
	"erupciones en la piel",//27
	"ulceras o en zonas genitales, anales o áreas cercanas ",//28
	"Verrugas genitales(Hinchazón color carne marrón o rosa en área genital)",//29
	"Verrugas en forma de coliflor",//30
	"Ganglios linfáticos inflamados",//31
	"Flujo vanjinal turbio",//32
	"sangrado entre periodo",//33
	"Fuerte olor vajinal",//34
	"picazón o irritación vajinal"]//35

	lista = ["Clamidia","Gonorrea","Triacomoniasis","VIH","Herpes genital","VPH","Hepatitis","Sífilis","Linfogranuloma venéreo","Chancroide"]

	alert(sintomas.length)

	var ce1 = document.getElementById("ce1").value;
	var ce2 = document.getElementById("ce2").value;
	var ce3 = document.getElementById("ce3").value;
	var ce4 = document.getElementById("ce4").value;
	var ce5 = document.getElementById("ce5").value;
	var ce6 = document.getElementById("ce6").value;
	var ce7 = document.getElementById("ce7").value;
	var ce8 = document.getElementById("ce8").value;
	var ce9 = document.getElementById("ce9").value;
	var ce10 = document.getElementById("ce10").value;

	var isintomas1="";
	var isintomas2="";
	var isintomas3="";
	var isintomas4="";
	var isintomas5="";
	var isintomas6="";
	var isintomas7="";
	var isintomas8="";
	var isintomas9="";
	var isintomas10=""; 

	//var e1 = document.getElementById("e1").value;


	for(var i = 0; i<10; i++){
		if(ce1 == lista[i]){
			document.getElementById("e1").innerHTML = lista[i];
			alert(lista[i])
			if(i == 0){

			}else if(i == 1){


			}else if(i == 2){
				
			}else if(i == 3){
				
			}else if(i == 4){
				
			}else if(i == 5){
				
			}else if(i == 6){
				
			}else if(i == 7){
				
			}else if(i == 8){
				
			}else if(i == 9){
				
			}

		}
	}

	for(var i = 0; i<10; i++){
		if(ce2 == lista[i]){
			document.getElementById("e2").innerHTML = lista[i];

		}
	}

	for(var i = 0; i<10; i++){
		if(ce3 == lista[i]){
			document.getElementById("e3").innerHTML = lista[i];
		}
	}

	for(var i = 0; i<10; i++){
		if(ce4 == lista[i]){
			document.getElementById("e4").innerHTML = lista[i];
		}
	}

	for(var i = 0; i<10; i++){
		if(ce5 == lista[i]){
			document.getElementById("e5").innerHTML = lista[i];
		}
	}

	for(var i = 0; i<10; i++){
		if(ce6 == lista[i]){
			document.getElementById("e6").innerHTML = lista[i];
		}
	}

	for(var i = 0; i<10; i++){
		if(ce7 == lista[i]){
			document.getElementById("e7").innerHTML = lista[i];
		}
	}

	for(var i = 0; i<10; i++){
		if(ce8 == lista[i]){
			document.getElementById("e8").innerHTML = lista[i];
		}
	}

	for(var i = 0; i<10; i++){
		if(ce9 == lista[i]){
			document.getElementById("e9").innerHTML = lista[i];
		}
	}

	for(var i = 0; i<10; i++){
		if(ce10 == lista[i]){
			document.getElementById("e10").innerHTML = lista[i];
		}
	}
			

}

