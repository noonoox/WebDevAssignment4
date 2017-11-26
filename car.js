function drawCar(){
	function create(){
		let args = arguments;
		let element = document.createElement(args[0]);
		let startAt = 1;
		
		if(args.length % 2 == 0){
			element.innerHTML = args[1];
			
			startAt = 2;
		}
		
		for(var i = startAt; i < args.length; i += 2){
			if(args[i] == "class"){
				element.className = args[i + 1];
			}else{
				element.setAttribute(args[i], args[i + 1]);
			}
		}
		
		return element;
	}

	function add(){
		let args = arguments;
		
		if(args.length == 1){
			body.appendChild(arguments[0]);
			
			return args[0];
		}else{
			args[0].appendChild(arguments[1]);
			
			return args[1];
		}
	}

	function get(){
		return document.getElementById(arguments[0]);
	}
	
	function drawPoly(){
		let args = arguments;
		
		c.fillStyle = args[0];
		
		c.beginPath();
		c.moveTo(args[1], args[2]);
		
		for(var i = 3; i < args.length; i += 2){
			c.lineTo(args[i], args[i + 1]);
		}
		
		c.closePath();
		c.fill();
	}
	
	var colors = ["#FE413F", "#E33735", "#97292C", "#781D24", "#171F22", "#6F8590", "#FD8F02", "#FEFFF3", "#F0B6B2", "#A7E3FF", "#63A4CC"];
	
	var body = document.body;
	var canvas = add(create("canvas", "width", 800, "height", 587));
	var c = canvas.getContext("2d");
	
	c.strokeRect(0, 0, 800, 500);
	
	//Top
	
	drawPoly(colors[0],
		492, 4,
		682, 78,
		472, 134,
		409, 308,
		151, 425,
		7, 251,
		225, 172,
		298, 44
	);
	
	drawPoly(colors[0],
		679, 127,
		793, 177,
		716, 203
	);
	
	//Front
	
	drawPoly(colors[1],
		7, 251,
		151, 425,
		150, 554,
		13, 362
	);
	
	//Side
	
	drawPoly(colors[2],
		682, 78,
		716, 203,
		793, 177,
		774, 297,
		150, 554,
		151, 425,
		409, 308,
		472, 134
	);
}