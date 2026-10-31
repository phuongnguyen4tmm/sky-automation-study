// kiem tra ma tran doi xung: la ma tran khi gap doi theo duong cheo chinh => hai nua trung khit nhau
/*
1   7   3
7   4   5
3   5   6

a[0][1] = 7 và a[1][0] = 7
a[0][2] = 3 và a[2][0] = 3
a[1][2] = 5 và a[2][1] = 5
 -> a[i][j] == a[j][i]
*/

#include <stdio.h>

void nhap(int a[][100], int n){
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			printf("Moi nhap vi tri [%d][%d]: ", i , j);
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

//void kiemTraDoiXung(int a[][100], int n){
//	for(int i = 0; i < n; i++){
//		for(int j = 0; j < n; j++){
//			if(a[i][j] != a[j][i]){
//				printf("Khong phai ma tran doi xung\n");
//				return;
//			}
//		}
//	}
//	printf("La ma tran doi xung\n");
//}


// Cach 2: 
void kiemTraDoiXung(int a[][100], int n){
	for(int i = 0; i < n; i++){
		for(int j = i+1; j < n; j++){
			if(a[i][j] != a[j][i]){
				printf("Khong phai ma tran doi xung\n");
				return;
			}
		}
	}
	printf("La ma tran doi xung\n");
}

int main(){
	int a[100][100], n;
	printf("Moi nhap n: ");
	scanf("%d", &n);
	
	nhap(a, n);
	in(a, n);
	kiemTraDoiXung(a, n);
}