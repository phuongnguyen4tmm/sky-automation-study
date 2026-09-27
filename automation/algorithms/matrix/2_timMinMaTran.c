#include <stdio.h>

// tim Min ma tran

// ham nhap ma tran
void nhapMaTran(int a[][100], int n){
	int i, j;
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			printf("Nhap ma tran o vi tri [%d][%d]: ", i, j);
			scanf("%d", &a[i][j]);
		}
	}
}

// ham xuat ma tran
void inMaTran(int a[][100], int n){
	int i, j;
	printf("Ma tran cap %d: \n", n);
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			printf("%5d", a[i][j]);
		}
		printf("\n");
	}
}

// tim min ma tran
int timMinMaTran(int a[][100], int n){
	int i, j, min;
	min = a[0][0]; // gia su vi tri dau la min
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			if(a[i][j] < min){ // duyet tung phan tu, neu phan tu o vi tri hang i cot j < min -> min = a[i][j]
				min = a[i][j];
			}
		}
	}
	return min;
}


int main(){
	int a[100][100], n;
	
	printf("Nhap cap ma tran n: ");
	scanf("%d", &n);
	
	nhapMaTran(a, n);
	inMaTran(a, n);
	
	printf("\n Min cua ma tran la: %d", timMinMaTran(a, n));
	
}