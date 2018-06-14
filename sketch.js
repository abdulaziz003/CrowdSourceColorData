

let r,g,b;
let database;


function setup() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLfRKk1AtxY7soN4CAbxPUlkx9cY5cl4A",
    authDomain: "color-classification-2f2cc.firebaseapp.com",
    databaseURL: "https://color-classification-2f2cc.firebaseio.com",
    projectId: "color-classification-2f2cc",
    storageBucket: "",
    messagingSenderId: "854346799383"
  };
	firebase.initializeApp(config);
	//creating database object
	database = firebase.database();

	createCanvas(100, 100);

	pickColor();
	

	let buttons = [];
	buttons.push(createButton('red-ish'));
	buttons.push(createButton('green-ish'));
	buttons.push(createButton('blue-ish'));
	buttons.push(createButton('orange-ish'));
	buttons.push(createButton('yellow-ish'));
	buttons.push(createButton('pink-ish'));
	buttons.push(createButton('purple-ish'));
	buttons.push(createButton('brown-ish'));
	buttons.push(createButton('grey-ish'));


	for (i = 0; i < buttons.length; i++){
		buttons[i].mousePressed(sendData);
	}
	
}

function sendData(){
	//send data to the firebase!
	let colorDatabase = database.ref('colors');
	//the object to send it to the firebase database
	let data = {
		r: r,
		g: g,
		b: b,
		lable: this.html()
	}

	console.log("saving data");
	console.log(data);

	let color = colorDatabase.push(data, finished);
	console.log("Firebase generated key: "+ color.key);

	//Reload the data for the page
	function finished(err){
		if(err){
			console.error("oops, something went wrong!");
			console.error(err);
		}else{
			console.log("Data saved successfully");
			pickColor();
		}
	}
}

function pickColor(){
	r = floor(random(255));
	g = floor(random(256));
	b = floor(random(256));
	background(r,g,b);
}
