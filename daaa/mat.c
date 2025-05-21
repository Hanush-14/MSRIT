#include<stdio.h>
void main()
{

	int i,j,m,n;
	printf("enter the size of 1st matrix\n");
	scanf("%d",&m);
	printf("enter the size of 2nd matrix\n");
        scanf("%d",&n);
	int a[m][n],a1[m][n];
	printf("enter the 1st matrix elemenets\n");
	for(i = 0;i<m;i++)
	{
		for(j = 0;j<n;j++)
		{
			scanf("%d",&a[i][j]);
		}
	}
	printf("enter the 2nd matrix elemenets\n");
	for(i = 0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
			scanf("%d",&a1[i][j]);
		}
	}
	int c[m][n];
	printf("mul of two array elemenets are \n");
	for(i = 0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
			for(int k =0;k<m;k++)
			{
				c[i][j] =a[i][k]*a1[k][j];
			}
		}
	}
	int d[m][n];
        printf("mul of two array elemenets are \n");
        for(i = 0;i<m;i++)
        {
                for(j=0;j<n;j++)
                {
                        for(int k =0;k<n;k++)
                        {
                                d[i][j] =a[i][k]*a1[k][j];
                        }
                }
        }
	int r[m][n];
        printf("result of two array elemenets are \n");
        for(i = 0;i<m;i++)
        {
                for(j=0;j<n;j++)
                {
                                r[i][j] =c[i][j]*d[i][j];
                }
        }



	for(i =0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
			printf("%d\t",r[i][j]);
		}
		printf("\n");
	}
}


