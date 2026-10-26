#include <stdio.h>

void nhap(int a[][100], int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("nhap vi tri thu [%d][%d]: ", i, j);
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

int demPhanTuTrongDoan(int a[][100], int n)
{
    int dem = 0;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (a[i][j] >= 5 && a[i][j] <= 30)
            {
                dem++;
            }
        }
    }
    return dem;
}

int main()
{
    int a[100][100], n;
    printf("Moi nhap n: ");
    scanf("%d", &n);

    nhap(a, n);
    in(a, n);

    int result = demPhanTuTrongDoan(a, n);
    if (result != 0)
    {
        printf("Co %d phan tu thuoc doan 5-30", result);
    }
    else
    {
        printf("Khong co phan tu nao thuoc doan 5-30");
    }
}