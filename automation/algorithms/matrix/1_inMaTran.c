#include <stdio.h>

// nhap ma tran
void nhapMaTran(int a[][100], int n){
	int i, j;
	for(i=0; i < n; i++){
		for(j=0; j< n; j++){
			printf("Nhap ma tran vi tri: a[%d][%d] = ", i, j);
			scanf("%d", &a[i][j]);
		}
	}
}

// ham in ma tran
void inMaTran(int a[][100], int n){
	int i, j;
	printf("Ma tran cap %d: \n", n);
	for(int i=0; i < n; i++){
		for(j=0; j<n; j++){
			printf("%5d", a[i][j]);
		}
		printf("\n");
	}
}

int main(){
	int a[100][100], n;
	
	printf("Nhap ma tran cap n: ");
	scanf("%d", &n);
	
	nhapMaTran(a, n);
	inMaTran(a, n);
}