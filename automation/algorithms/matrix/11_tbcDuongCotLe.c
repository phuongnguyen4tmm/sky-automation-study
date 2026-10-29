// Bài 11: tính tbc các ph?n t? duong thu?c c?t l?

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

float tbcDuongCotLe(int a[][100], int n){
    int tong = 0;
    int dem = 0;

    for(int i = 0; i < n; i++){
        for(int j = 1; j < n; j += 2){
        	if(a[i][j] > 0){
        		tong += a[i][j];
            	dem++;
			}
        }
    }
    
    if(dem == 0){
    	return 0;
	}else{
		return (float)tong/dem;
	}
}

int main(){
    int a[100][100], n;
    printf("Moi nhap n: ");
    scanf("%d", &n);

    nhap(a, n);
    in(a, n);
    
    float kq = tbcDuongCotLe(a, n);
    if(kq == 0){
    	printf("Khong co phan tu duong trong cot le");
	}else{
		printf("Tbc cac phan tu duong thuoc cot le trong day: %.2f", kq);
	}
    
}