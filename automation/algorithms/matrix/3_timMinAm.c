#include <stdio.h>

// bai 3: tim min am cua ma tran

// ham nhap ma tran
void nhapMaTran(int a[][100], int n){
	int i, j;
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			printf("Nhap phan tu o vi tri [%d][%d]: ", i, j);
			scanf("%d", &a[i][j]);
		}
	}
}

// ham in ma tran
void inMaTran(int a[][100], int n){
	int i, j;
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			printf("%5d", a[i][j]);
		}
		printf("\n");
	}
}

// tim phan tu am nho nhat
int timMinAm(int a[][100], int n){
	int i, j, minAm;
	int demSoAm = 0;
	
	for(i=0; i<n; i++){
		for(j=0; j<n; j++){
			if(a[i][j] < 0){
				minAm = a[i][j];
				demSoAm =+1;
			} else {
				if(a[i][j] < minAm){
					minAm = a[i][j];
				}
			}
		}
	}
	if(demSoAm <= 0){
		printf("Ma tran khong co phan tu am nao");
	} else{
		printf("Phan tu am cua ma tran la: %d", minAm);
	}
}

int main(){
	int a[100][100], n;
	
	printf("Nhap ma tran cap n: ", n);
	scanf("%d", &n);
	
	nhapMaTran(a, n);
	inMaTran(a, n);
	
	timMinAm(a, n);
	
}


