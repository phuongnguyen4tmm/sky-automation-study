#include <stdio.h>

void nhap(int a[][100], int n){
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			printf("Moi nhap vi tri [%d][%d]: ", i, j);
			scanf("%d", &a[i][j]);
		}
	}
}

void in(int a[][100], int n){
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			printf("%5d", a[i][j]);
		}
		printf("\n");
	}
}

float tbc(int a[][100], int n){
	int dem = 0;
	int tong = 0;
	float tbc;
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			if(a[i][j] > 10){
				dem++;
				tong += a[i][j];
			}
		}
	}
	if(dem == 0){
		return 0;
	}
	return tbc = (float)tong/dem;
}

int main(){
	int a[100][100], n;
	printf("Nhap n: ");
	scanf("%d", &n);
	
	nhap(a, n);
	in(a, n);
	
	float kq = tbc(a, n);
	if( kq == 0){
		printf("khong co phan tu lon hon 10");
	}else{
		printf("Tbc cua cac phan tu lon hon 10 trong ma tran la: %.2f", kq);
	}

}