
function account(amount){
	this.balance=amount;
}

function deposit(amount){
	this.balance+=amount;
}

function withdraw(amount){
	if(this.balance < amount){
		print("Insufficient balance");
	}
	else{
		this.balance-=amount;
	}
}

function enquiry(){
	print(this.balance);
}

var nadim=new account(100);
account.prototype.deposit=deposit;
account.prototype.withdraw=withdraw;
account.prototype.enquiry=enquiry;

nadim.deposit(200);
nadim.enquiry();
nadim.withdraw(180);
nadim.enquiry();

var ayaz=new account(10);
ayaz.deposit(20);
ayaz.enquiry();
ayaz.withdraw(18);
ayaz.enquiry();
