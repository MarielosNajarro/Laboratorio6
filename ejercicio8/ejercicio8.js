var mat1 = [[5,6,3],[4,2,0],[6,1,3]], mat2 = [[50,16,36],[45,12,8],[6,10,3]],  matrizSuma = new Array(3);

for(var i = 0; i<3 ; i++)
	matrizSuma[i] =  new Array(3);

	for(var x = 0; x<3; x++){
		for(var y = 0 ; y< 3 ; y++){
			matrizSuma[x][y] = mat1[x][y] + mat2[x][y];
		}
	}
	for(var x = 0; x<3;x++){
		for(var y = 0; y<3 ; y++){
			console.log(matrizSuma[x][y]);
		}
	}
