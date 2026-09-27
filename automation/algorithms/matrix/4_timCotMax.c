#include <stdio.h>

// tinh tong tung cot va tim cot co tong lon nhat

//ham nhap
void nhapMaTran(int a[][100], int n){
	int i, j;
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			printf("Nhap phan tu o vi tri [%d][%d]: ", i, j);
			scanf("%d", &a[i][j]);
		}
	}
}

// ham in
void inMaTran(int a[][100], int n){
	int i, j;
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			printf("%5d", a[i][j]);
		}
		printf("\n");
	}
}

// ham tinh tong tung cot va tim cot co tong lon nhat
void timMaxTongCot(int a[][100], int n){
	int tong;
	int max;
	
	// Duyet tung cot
	for(int j =0; j<n; j++){
		// tinh tong cot
		tong = 0;
		for(int i=0; i<n; i++){
			tong = tong + a[i][j];
		}
		printf("Tong cot %d = %d \n", j, tong);
		
		// tim tong cot lon nhat
		if( j== 0 || tong > max){
			max = tong;
		}
	}
	
	// in cot co tong = max
	printf("Tong lon nhat la %d thuoc cot: ", max);
		for(int j=0; j<n; j++){
			tong = 0;
			for(int i = 0; i<n; i++){
				tong = tong + a[i][j];
			}
			if(tong == max){
				printf("%d", j);
			}
		}
	printf ("\n");
}


int main(){
	int a[100][100], n, tongCot[100];
	
	printf("Nhap cap ma tran: ");
	scanf("%d", &n);
	
	nhapMaTran(a, n);
	inMaTran(a, n);
	
	timMaxTongCot(a, n);
	
}

