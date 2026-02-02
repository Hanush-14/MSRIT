
#d={}
def add():
	n=int(input("Enter the Number of friends to be added"))
	for i in range(0,n):
		name=input("Enter the name :")
		phone_no=input("Enter the Mobile number :")
		d[name]=phone_no
	print(d)

d={}

def new_itm():
	name=input("Enter the name to be inserted")
	no=input("Enter the new no :")
	if(name in d[no]):
			no=d[name]
			re=input("Enter the number to be replaced")
			if(re==y):
				d[name]=no
	print(d)
while(1):
	print("1.add 2.new_item")
	ch=input("Enter the choice ")

	if(ch=='1'):
		add()
	elif(ch=='2'):
		new_itm()
