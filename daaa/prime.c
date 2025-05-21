#include<stdio.h>

void main()
{
	int n,i,flag=0,count=0;
	printf("Enter the number to be checked\n");
	scanf("%d",&n);
	for(i=1;i<=n;i++)
	{
		if(n%i==0)
		{
			count=count+1;
		}
	}
	if(count == 2)
		printf("The given number is prime\n");
	else
		printf("The given number is not a prime\n");

}
