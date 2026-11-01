// tim max cac phan tu nam duoi duong cheo chinh

#include <stdio.h>

void nhap(int a[][100], int n){
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			printf("Moi nhap gia tri o vi tri [%d][%d]: ", i, j);
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

int timMax(int a[][100], int n){
	int max = a[1][0];
	for(int i = 0; i < n; i++){
		for(int j = 0; j < i; j++){
			if(a[i][j] > max){
				max = a[i][j];
			}
		}
	}
	return max;
}


int main(){
	int a[100][100], n;
	printf("Moi nhap n: ");
	scanf("%d", &n);
	
	nhap(a, n);
	in(a, n);
	
	int max = timMax(a, n);
	if(n <= 1){
		printf("khong co phan tu nao duoi duong cheo chinh");
	}else{
		printf("Phan tu lon nhat nam duoi duong cheo chinh la: %d", max);
	}
	
}