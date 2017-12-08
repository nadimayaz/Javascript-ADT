
//Map
function Dictionary() {
	this.datastore = new Array();
	this.add       = add;
	this.find      = find;
	this.remove    = remove;
	this.showAll   = showAll;
	this.clear     = clear;
}

function add(key, value) {
	this.datastore[key] = value;
}

function find(key) {
	return this.datastore[key];
}

function remove(key) {
	delete this.datastore[key];
}

function showAll() {
	for each (var key in Object.keys(this.datastore)) {
		print(key + " -> " + this.datastore[key]);
	}
}

function clear() {
	for each (var key in Object.keys(this.datastore)) {
		delete this.datastore[key];
	}
}
