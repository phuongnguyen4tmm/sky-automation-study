// Bai 12: nhap so hang va cot bang nhau, kiem tra ma tran co phai tam giac tren hay khong
// tam giac duoi la: tat ca phan tu nam tren duong cheo chinh deu = 0 => hàng i < cột j
// tam giac tren la: tat ca phan tu nam duoi duong cheo chinh deu = 0 => hàng i > cột j

#include <stdio.h>

void nhap(int a[][100], int n, int m){
	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			printf("Nhap gia tri o vi tri [%d][%d]: ", i , j);
			scanf("%d", &a[i][j]);
		}
	}
}

void in(int a[][100], int n, int m){
	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			printf("%5d", a[i][j]);
		}
		printf("\n");
	}
}

void kiemTraTamGiacTren(int a[][100], int n, int m){
	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			if(i > j && a[i][j] != 0){
				printf("Day khong phai tam giac tren \n");
			}
		}
	}
	printf("Day la phai tam giac tren \n");
} 

int main(){
	int a[100][100], n, m;
	printf("Moi nhap n: ");
	scanf("%d", &n);
	printf("Moi nhap m: ");
	scanf("%d", &m);

	if(m != n){
		printf("Khong phai ma tran vuong\n");
		do{
			printf("Moi nhap n: ");
			scanf("%d", &n);
			printf("Moi nhap m: ");
			scanf("%d", &m);
		}while(m != n);
	}
		
	nhap(a, n, m);
	in(a, n, m);
	kiemTraTamGiacTren(a, n , m);
	
}