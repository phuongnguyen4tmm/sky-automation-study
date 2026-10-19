#include <stdio.h>

void nhap(int a[][100], int n){
    int i, j;
    for(i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            printf("Nhap phan tu o vi tri [%d][%d]: ", i , j);
            scanf("%d", &a[i][j]);
        }
    }
}

void in(int a[][100], int n){
    int i, j;
    for(i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            printf("%5d", a[i][j]);
        }
        printf("%d", a[i][j]);
    }
    printf("\n");
}

int demPhanTu(int a[][100], n){
    int dem = 0;
    for(int i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            if(a[i][j] > 10){
                dem++;
            }
        }
    }
    return dem;
}

int main(){
    int a[100][100], n;
    printf("Moi nhap cap ma tran n: ");
    scanf("%d", &n);

    nhap(a, n);
    in(a, n);

    printf("So phan tu lon hon 10 la: %d", demPhanTu(a, n));
}