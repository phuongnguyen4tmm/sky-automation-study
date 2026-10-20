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

// tam giac duoi la tat ca cac phan tu nam o nua tren duong cheo chinh deu bang 0 -> i > j va a[i][j] =0
void kiemTraTamGiacDuoi(int a[][100], int n){
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){ // cach 2: thay vi dung if i<j thi khai bao j = i+1 luon
			if(i < j && a[i][j] != 0){
				printf("Day khong phai tam giac duoi\n");
				return;
			}
		}
	}
	printf("Day la tam giac duoi\n");
}

// tinh tich duong cheo phu
void tichCheoPhu(int a[][100], int n){
	int tich = 1;
	int demAm = 0;
	for(int i = 0; i <n; i++){
		for(int j = 0; j <n; j++){
			if(i + j == n - 1 && a[i][j] < 0){
				demAm++;
				tich *= a[i][j];
			}
		}
	}
	if(demAm == 0){
		printf("Khong co phan tu am nao tren duong cheo phu\n");
	}else{
		printf("Tich ptu am tren dcheo phu la: %d\n", tich);
	}
}

int main(){
	int a[100][100], n;
	printf("Moi nhap n: ");
	scanf("%d", &n);
	
	nhap(a, n);
	in(a, n);
	kiemTraTamGiacDuoi(a, n);
	tichCheoPhu(a, n);
}