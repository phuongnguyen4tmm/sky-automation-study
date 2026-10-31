#include <stdio.h>

// tinh tbc duong cheo phu:
// duong cheo phu: co hang i + cot j = cap ma tran n - 1

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

float tbcDuongCheoPhu(int a[][100], int n){
	int tong = 0;
	int dem = 0;
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			if(i + j == n - 1){
				dem++;
				tong += a[i][j];
			}
		}
	}
	return (float)tong/dem;
}

int main(){
	int a[100][100], n;
	
	printf("Moi nhap n: ");
	scanf("%d", &n);
	
	nhap(a, n);
	in(a, n);
	printf("tbc duong cheo phu la: %.2f", tbcDuongCheoPhu(a, n));
}



