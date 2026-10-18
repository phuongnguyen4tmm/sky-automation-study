#include <stdio.h>

void nhap(int a[][100], int n){
    int i, j;
    for(int i = 0; i < n; i++){
        for (int j = 0; j < n; j++){
            printf("Nhap phan tu o vi tri [%d][%d]: ", i, j);
            scanf("%d", &a[i][j]);
        }
    }
}

void in(int a[][100], int n){
    int i, j;
    for (int i = 0; i< n; i++){
        for (int j = 0; j < n; j++){
            printf("%5d", a[i][j]);
        }
        printf("\n");
    }
}

// tim max tung hang
void timMaxHang(int a[][100], int n){
    int max;
    for(int i = 0; i < n; i ++){
        max = a[i][0];
        for(int j = 0; j < n; j++){
            if(a[i][j] > max){
                max = a[i][j];
            }
        }
        printf("Max cua hang %d = %d \n", i, max);
    }
}

int main(){
    int a[100][100], n;

    printf("Nhap cap ma tran n: ");
    scanf("%d", &n);
    
    nhap(a, n);
    in(a, n);
    timMaxHang(a, n);
}