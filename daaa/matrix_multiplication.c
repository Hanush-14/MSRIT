#include<stdio.h>

void main()
{
        int n,m,i,j;
        printf("enter the size of the matrix \n");
        scanf("%d%d",&m,&n);

        int a[m][n],a1[m][n];
        printf("enter the 1st matrix elemenets\n");
        for(i = 0;i< m;i++)
        {
                for(j = 0;j <n;j++)
                {
                        scanf("%d",&a[i][j]);
                }
        }
        printf("enter the 2nd matrix elemenets\n");
        for(i = 0;i< m;i++)
        {
                for(j=0;j<n;j++)
                {
                        scanf("%d",&a1[i][j]);
                }
        }
        int c[m][n];
        printf("addition of two array elemenets are \n");
        for(i = 0;i<m;i++)
        {
                for(j=0;j<n;j++)
                {
			for (int k=0;k<=j;k++)
			{
                        	c[i][j] =a[i][k]*a1[k][j];
                	}
        	}
	}
	for(i = 0;i< m;i++)
        {
                for(j = 0;j <n;j++)
                {
                        printf("%d",c[i][j]);
                }
		printf("\n");
        }

}
