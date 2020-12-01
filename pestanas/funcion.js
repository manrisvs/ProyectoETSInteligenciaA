

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

		var texto = "";


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
								texto = "Los síntomas que registró indican un 99% de probabilidad de tener Clamidia";
								document.getElementById("resultados").innerHTML = texto;
								
							}
						}
					}
				}
			}
		}
	}

	
								

//gonorrea;
	if(r14 == "Casi nada"){
		if(document.getElementById('r181').checked){
			if(r19 == "Casi nada"){
				if(r222 == "Demasiado"){
					if(document.getElementById('r241').checked){
						if(r25 == "Mucho"){
							if(r26 == "Poco"){
								texto = "Los síntomas que registró indican un 99% de probabilidad de tener Gonorrea";
								document.getElementById("resultados").innerHTML = texto;
							}
						}
					}
				}
			}
		}
	}

								
//tricomoniasis;
	if(r15 == "Mucho"){
		if(r19 == "Demasiado"){
			if(r222 == "Poco"){
				if(r25== "Poco"){
					texto = "Los síntomas que registró indican un 99% de probabilidad de tener Triacomoniasis";
					document.getElementById("resultados").innerHTML = texto;
				}
			}
		}
	}

	

//vhi;
	if(r1 == "Entre 37.0 y 37.4"){
		if(document.getElementById('r21').checked){
			if(r3 == "Poco"){
				if(r4 == "Casi nada"){
					if(r27 == "Mucho"){
						if(r31 == "Casi nada"){
							texto = "Los síntomas que registró indican un 99% de probabilidad de tener VIH";
					document.getElementById("resultados").innerHTML = texto;
						}
					}					
				}
			}
		}
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
									texto = "Los síntomas que registró indican un 99% de probabilidad de tener Herpes genital";
									document.getElementById("resultados").innerHTML = texto;
								}
							}							
						}
					}					
				}
			}
		}
	}


//vph;    document.getElementById('').checked
	if(r3 == "Mucho"){
		if(r19 == "Mucho"){
			if(r20== "Poco"){
				if(document.getElementById('r231').checked){
					if(r25== "Casi nada"){
						if(r29== "Casi nada"){
							if(document.getElementById('r301').checked){
							texto = "Los síntomas que registró indican un 99% de probabilidad de tener VPH";
							document.getElementById("resultados").innerHTML = texto;	
							}							
						}
					}					
				}
			}
		}
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
										texto = "Los síntomas que registró indican un 99% de probabilidad de tener Hepatitis";
										document.getElementById("resultados").innerHTML = texto;
									}
								}
							}							
						}
					}					
				}
			}
		}
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
												texto = "Los síntomas que registró indican un 99% de probabilidad de tener Sífilis";
											document.getElementById("resultados").innerHTML = texto;
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
	}

	

//Linfoogranuloma;    document.getElementById('').checked
	if(r14 == "Mucho"){
		if(r27 == "Casi nada"){
			if(r28 == "Mucho"){
				if(r31 == "Poco"){
					texto = "Los síntomas que registró indican un 99% de probabilidad de tener Linfogranuloma venéreo";
					document.getElementById("resultados").innerHTML = texto;
				}
			}
		}
	}

	
//chancroide;    document.getElementById('').checked
	if(r222 == "Casi nada"){alert("1")
		if(r27 == "Demasiado"){alert("2")
			if(r28 == "Casi nada"){alert("3")
				if(r29 == "Mucho"){alert("4")
					if(r31 == "Demasiado"){alert("5")
						texto = "Los síntomas que registró indican un 99% de probabilidad de tener Chancroide";
					document.getElementById("resultados").innerHTML = texto;
					}

				}
			}
		}
	}


	if(r26 == "Mucho"){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga Clamidia de estes contagiado por alguna," + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;

	}else if(document.getElementById('r181').checked ){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga Gonorrea, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;

	}else if( r15 == "Mucho"){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga Triacomoniasis, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;

	}else if(document.getElementById('r21').checked ){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga VIH, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(document.getElementById('r161').checked ){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga Herpes genital, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(document.getElementById('r231').checked){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga VPH, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;

	}else if(document.getElementById('r71').checked){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga Hepatitis, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;

	}else if(document.getElementById('r111').checked){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga Sífilis, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(r14 == "Mucho"){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga Linfogranuloma venéreo, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else if(r29 =="Mucho" ){
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que tenga Chancroide, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}else {
		texto = "Los síntomas que registró no cubren un porcentaje exacto para diagnosticar una ETS, hay probabilidad de que no cuente con alguna, " + "\n\n consulte a su medico";
		document.getElementById("resultados").innerHTML = texto;
	}
}




function comparar(){

	var sclamidia = ["0","1","2","3","4","5","6","7","8","9","10","11","12","o","o","o","16","17","18","o","20","21","o","23","24","o","o","27","28","29","30","31","o","o","34","35"];
	var sgonorrea = ["1","1","2","3","4","5","6","7","8","9","10","11","12","13","o","15","16","17","o","o","20","21","o","23","o","o","o","27","28","29","30","31","o","o","34","35"];
	var stricomoniasis = ["2","1","2","3","4","5","6","7","8","9","10","11","12","13","14","o","16","17","18","o","20","21","o","23","24","o","26","27","28","29","30","31","o","33","o","o"];
	var svhi = ["3","o","o","o","o","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","15","26","o","28","29","30","o","32","33","34","35"];
	var sherpes = ["4","o","2","3","4","5","6","7","8","9","10","11","12","o","14","15","o","o","18","19","o","21","22","23","24","o","26","o","o","29","30","31","32","33","34","35"];
	var svph = ["5","1","2","o","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","o","o","21","22","o","24","o","26","27","28","o","o","31","32","33","34","35"];
	var shepatitis = ["6","o","2","3","o","o","o","o","o","9","10","11","12","o","14","15","16","o","18","19","20","o","22","23","24","25","26","27","28","29","30","31","32","33","34","35"];
	var ssifilis = ["7","o","2","3","o","5","6","7","8","o","o","o","o","o","14","15","16","o","18","19","20","21","22","23","24","25","26","o","28","o","30","o","32","33","34","35"];
	var sLinfoogranuloma = ["8","1","2","3","4","5","6","7","8","9","10","11","12","13","o","15","16","17","18","19","20","21","22","23","24","25","26","o","o","29","30","o","o","o","o","o",];
	var schancroide = ["9","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","o","23","24","25","26","o","o","o","30","o","32","33","34","35"];

	var sintomas = ["","Fiebre",//1
	"Anemia",//2
	"Dolor de garganta",//3
	"Fatiga",//4
	"Nauseas vomito",//5
	"Pérdida de apetito",//6
	"Orinar obscuro",//7
	"Color amarillento en la piel o en la parte baja de los ojos",//8
	"Entumecimiento",//9
	"Parálisis",//10
	"Ceguera",//11
	"Demencia",//12
	"Dolor abdominal parte baja",//13
	"Dolor testicular o Hinchazón",//14
	"Dolor durante relaciones sexuales",//15
	"Dolor en zona y sensibilidad genital",//16
	"Dolor muscular",//17
	"Picazón Anal",//18
	"Comezón o irritación en el pene",//19
	"Comezón alrededor de área genitalglúteos y parte inferior de los muslos",//20
	"Picazón corporal",//21
	"Secreción de pene",//22
	"Sangrado relaciones sexuales",//23
	"Secreción con sangre del pene ",//24
	"Ardor al orinar",//24
	"Dolor al defecar",//26
	"Erupciones en la piel",//27
	"Ulceras o en zonas genitales, anales o áreas cercanas ",//28
	"Verrugas genitales(Hinchazón color carne marrón o rosa en área genital)",//29
	"Verrugas en forma de coliflor",//30
	"Ganglios linfáticos inflamados",//31
	"Flujo vanjinal turbio",//32
	"Sangrado entre periodo",//33
	"Fuerte olor vajinal",//34
	"Picazón o irritación vajinal"]//35

	lista = ["Clamidia","Gonorrea","Triacomoniasis","VIH","Herpes genital","VPH","Hepatitis","Sífilis","Linfogranuloma venéreo","Chancroide"]

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

	var isintomas1="\n";
	var isi1=[];
	var isintomas2="";
	var isi2=[];
	var isintomas3="";
	var isi3=[];
	var isintomas4="";
	var isi4=[];
	var isintomas5="";
	var isi5=[];
	var isintomas6="";
	var isi6=[];
	var isintomas7="";
	var isi7=[];
	var isintomas8="";
	var isi8=[];
	var isintomas9="";
	var isi9=[];
	var isintomas10="";
	var isi10=[]; 
	

	// clamidia 


	if(ce1 == "Clamidia"){
		document.getElementById("e1").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;

	}else if(ce1 == "Gonorrea"){
		document.getElementById("e1").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;

	}else if(ce1 == "Triacomoniasis"){
		document.getElementById("e1").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;

	}else if(ce1 == "VIH"){
		document.getElementById("e1").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;

	}else if(ce1 == "Herpes genital"){
		document.getElementById("e1").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;

	}else if(ce1 == "VPH"){
		document.getElementById("e1").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;
	}else if(ce1 == "Hepatitis"){
		document.getElementById("e1").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;
	}else if(ce1 == "Sífilis"){
		document.getElementById("e1").innerHTML = "Sífilis";

		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;

	}else if(ce1 == "Linfogranuloma venéreo"){
		document.getElementById("e1").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;
	}else if(ce1 == "Chancroide"){
		document.getElementById("e1").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi1 [i] = i;
				isintomas1 =  isintomas1 + "-" + sintomas[i] + "\n";
			}
		}
		document.getElementById("ss1").innerHTML = "Sintomas"
		document.getElementById("s1").innerHTML = isintomas1;
	}
// Comparacion 2___________________________________________________________________________________

if(ce2 == "Clamidia"){
		document.getElementById("e2").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "Gonorrea"){
		document.getElementById("e2").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "Triacomoniasis"){
		document.getElementById("e2").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "VIH"){
		document.getElementById("e2").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "Herpes genital"){
		document.getElementById("e2").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "VPH"){
		document.getElementById("e2").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "Hepatitis"){
		document.getElementById("e2").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "Sífilis"){
		document.getElementById("e2").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "Linfogranuloma venéreo"){
		document.getElementById("e2").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s2").innerHTML = isintomas2;

	}else if(ce2 == "Chancroide"){
		document.getElementById("e2").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi2 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi2 [i] && isi1[i] >= 0){
				isintomas2 =  isintomas2 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss2").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s2").innerHTML = isintomas2;

	}

// Comparacion 3___________________________________________________________________________________

if(ce3 == "Clamidia"){
		document.getElementById("e3").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "Gonorrea"){
		document.getElementById("e3").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "Triacomoniasis"){
		document.getElementById("e3").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "VIH"){
		document.getElementById("e3").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "Herpes genital"){
		document.getElementById("e3").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "VPH"){
		document.getElementById("e3").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "Hepatitis"){
		document.getElementById("e3").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "Sífilis"){
		document.getElementById("e3").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "Linfogranuloma venéreo"){
		document.getElementById("e3").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s3").innerHTML = isintomas3;

	}else if(ce3 == "Chancroide"){
		document.getElementById("e3").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi3 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi3 [i] && isi1[i] >= 0){
				isintomas3 =  isintomas3 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss3").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s3").innerHTML = isintomas3;

	}

// Comparacion 4___________________________________________________________________________________

if(ce4 == "Clamidia"){
		document.getElementById("e4").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "Gonorrea"){
		document.getElementById("e4").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "Triacomoniasis"){
		document.getElementById("e4").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "VIH"){
		document.getElementById("e4").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "Herpes genital"){
		document.getElementById("e4").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "VPH"){
		document.getElementById("e4").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "Hepatitis"){
		document.getElementById("e4").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "Sífilis"){
		document.getElementById("e4").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "Linfogranuloma venéreo"){
		document.getElementById("e4").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s4").innerHTML = isintomas4;

	}else if(ce4 == "Chancroide"){
		document.getElementById("e4").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi4 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi4 [i] && isi1[i] >= 0){
				isintomas4 =  isintomas4 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss4").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s4").innerHTML = isintomas4;

	}


// Comparacion 5___________________________________________________________________________________

if(ce5 == "Clamidia"){
		document.getElementById("e5").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "Gonorrea"){
		document.getElementById("e5").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "Triacomoniasis"){
		document.getElementById("e5").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "VIH"){
		document.getElementById("e5").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "Herpes genital"){
		document.getElementById("e5").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "VPH"){
		document.getElementById("e5").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "Hepatitis"){
		document.getElementById("e5").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "Sífilis"){
		document.getElementById("e5").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "Linfogranuloma venéreo"){
		document.getElementById("e5").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s5").innerHTML = isintomas5;

	}else if(ce5 == "Chancroide"){
		document.getElementById("e5").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi5 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi5 [i] && isi1[i] >= 0){
				isintomas5 =  isintomas5 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss5").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s5").innerHTML = isintomas5;

	}

// Comparacion 6___________________________________________________________________________________

if(ce6 == "Clamidia"){
		document.getElementById("e6").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "Gonorrea"){
		document.getElementById("e6").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "Triacomoniasis"){
		document.getElementById("e6").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "VIH"){
		document.getElementById("e6").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "Herpes genital"){
		document.getElementById("e6").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "VPH"){
		document.getElementById("e6").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "Hepatitis"){
		document.getElementById("e6").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "Sífilis"){
		document.getElementById("e6").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "Linfogranuloma venéreo"){
		document.getElementById("e6").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s6").innerHTML = isintomas6;

	}else if(ce6 == "Chancroide"){
		document.getElementById("e6").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi6 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi6 [i] && isi1[i] >= 0){
				isintomas6 =  isintomas6 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss6").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s6").innerHTML = isintomas6;

	}

// Comparacion 7___________________________________________________________________________________

if(ce7 == "Clamidia"){
		document.getElementById("e7").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "Gonorrea"){
		document.getElementById("e7").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "Triacomoniasis"){
		document.getElementById("e7").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "VIH"){
		document.getElementById("e7").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "Herpes genital"){
		document.getElementById("e7").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "VPH"){
		document.getElementById("e7").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "Hepatitis"){
		document.getElementById("e7").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "Sífilis"){
		document.getElementById("e7").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "Linfogranuloma venéreo"){
		document.getElementById("e7").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s7").innerHTML = isintomas7;

	}else if(ce7 == "Chancroide"){
		document.getElementById("e7").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi7 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi7 [i] && isi1[i] >= 0){
				isintomas7 =  isintomas7 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss7").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s7").innerHTML = isintomas7;

	}

// Comparacion 8___________________________________________________________________________________

if(ce8 == "Clamidia"){
		document.getElementById("e8").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "Gonorrea"){
		document.getElementById("e8").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "Triacomoniasis"){
		document.getElementById("e8").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "VIH"){
		document.getElementById("e8").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "Herpes genital"){
		document.getElementById("e8").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "VPH"){
		document.getElementById("e8").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "Hepatitis"){
		document.getElementById("e8").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "Sífilis"){
		document.getElementById("e8").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "Linfogranuloma venéreo"){
		document.getElementById("e8").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s8").innerHTML = isintomas8;

	}else if(ce8 == "Chancroide"){
		document.getElementById("e8").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi8 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi8 [i] && isi1[i] >= 0){
				isintomas8 =  isintomas8 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss8").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s8").innerHTML = isintomas8;

	}

// Comparacion 9___________________________________________________________________________________

if(ce9 == "Clamidia"){
		document.getElementById("e9").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "Gonorrea"){
		document.getElementById("e9").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "Triacomoniasis"){
		document.getElementById("e9").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "VIH"){
		document.getElementById("e9").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "Herpes genital"){
		document.getElementById("e9").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "VPH"){
		document.getElementById("e9").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "Hepatitis"){
		document.getElementById("e9").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "Sífilis"){
		document.getElementById("e9").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "Linfogranuloma venéreo"){
		document.getElementById("e9").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s9").innerHTML = isintomas9;

	}else if(ce9 == "Chancroide"){
		document.getElementById("e9").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi9 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi9 [i] && isi1[i] >= 0){
				isintomas9 =  isintomas9 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss9").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s9").innerHTML = isintomas9;

	}

// Comparacion 10___________________________________________________________________________________

if(ce10 == "Clamidia"){
		document.getElementById("e10").innerHTML = "Clamidia";
		for(var i = 0; i < 36; i++){
			if(sclamidia [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con Clamidia "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "Gonorrea"){
		document.getElementById("e10").innerHTML = "Gonorrea";
		for(var i = 0; i < 36; i++){
			if(sgonorrea [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con Gonorrea "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "Triacomoniasis"){
		document.getElementById("e10").innerHTML = "Triacomoniasis";
		for(var i = 0; i < 36; i++){
			if(stricomoniasis [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con Triacomoniasis "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "VIH"){
		document.getElementById("e10").innerHTML = "VIH";
		for(var i = 0; i < 36; i++){
			if(svhi [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con VIH "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "Herpes genital"){
		document.getElementById("e10").innerHTML = "Herpes genital";
		for(var i = 0; i < 36; i++){
			if(sherpes [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con Herpes genital "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "VPH"){
		document.getElementById("e10").innerHTML = "VPH";
		for(var i = 0; i < 36; i++){
			if(svph [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con VPH "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "Hepatitis"){
		document.getElementById("e10").innerHTML = "Hepatitis";
		for(var i = 0; i < 36; i++){
			if(shepatitis [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con Hepatitis "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "Sífilis"){
		document.getElementById("e10").innerHTML = "Sífilis";
		for(var i = 0; i < 36; i++){
			if(ssifilis [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con Sífilis "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "Linfogranuloma venéreo"){
		document.getElementById("e10").innerHTML = "Linfogranuloma venéreo";
		for(var i = 0; i < 36; i++){
			if(sLinfoogranuloma [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con Linfogranuloma venéreo "
		document.getElementById("s10").innerHTML = isintomas10;

	}else if(ce10 == "Chancroide"){
		document.getElementById("e10").innerHTML = "Chancroide";
		for(var i = 0; i < 36; i++){
			if(schancroide [i] == "o"){
				isi10 [i] = i;

			}
		}
		for(var i =0; i<36; i++){
			if(isi1[i] == isi10 [i] && isi1[i] >= 0){
				isintomas10 =  isintomas10 + "-" + sintomas[i] + "\n";	
			}
		}
		document.getElementById("ss10").innerHTML = "Sintomas en común con Chancroide "
		document.getElementById("s10").innerHTML = isintomas10;

	}

}

