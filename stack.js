function Stack() {
	this.dataStore = [];
	this.top	= 0;
	this.push	= push;
	this.pop	= pop;
	this.peek	= peek;
	this.clear	= clear;
	this.length 	= length;
	this.show 	=show;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top-1];
}

function clear() {
	delete this.dataStore;
	this.dataStore=[];
	this.top = 0;
}

function length() {
	return this.top;
}

function show(){
	for(var i=0 ; i<this.top; ++i){
		print(this.dataStore[i]);
	}	
}

