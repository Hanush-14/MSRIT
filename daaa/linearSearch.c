#include<stdio.h>

void main()

{

int ele,flag=0,pos=-1,n;

printf("enter the array size \n");
scanf("%d",&n);

int a[n];
for(int i=0;i<n;i++)
{
scanf("%d",&a[i]);
}

printf("Enter the searching element \n");
scanf("%d",&ele);

for(int i=0;i<n;i++){
	if(ele == a[i])
		{
			//printf("The element found %d \n",a[i]);
			flag=1;
			pos=i;
		}
}

if(flag == 1)
	printf("The elemenet found at %d\n",pos);
else
	printf("The elemenet not found \n");


}
