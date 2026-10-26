#include <stdio.h>

void nhap(int a[][100], int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("Moi nhap vi tri [%d][%d]: ", i, j);
            scanf("%d", &a[i][j]);
        }
    }
}

void in(int a[][100], int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("%5d", a[i][j]);
        }
        printf("\n");
    }
}

int tinhTongMotHang(int a[][100], int n, int i)
{
    int tong = 0;
    for (int j = 0; j < n; j++)
    {
        tong += a[i][j];
    }
    return tong;
}

void timMaxTongHang(int a[][100], int n)
{
    int max;

    for (int i = 0; i < n; i++)
    {
        int tong = tinhTongMotHang(a, n, i);
        printf("Tong hang %d = %d \n", i, tong);

        if (i == 0 || tong > max)
        {
            max = tong;
        }
    }

    printf("Tong hang lon nhat = %d thuoc hang: ", max);
    for (int i = 0; i < n; i++)
    {
        if (tinhTongMotHang(a, n, i) == max)
        {
            printf("%d", i);
        }
    }
}

int main()
{
    int a[100][100], n;
    printf("Moi nhap n: ");
    scanf("%d", &n);

    nhap(a, n);
    in(a, n);
    timMaxTongHang(a, n);
}