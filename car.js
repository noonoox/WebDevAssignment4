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
	
	function drawPolyOff(){
		let args = arguments;
		
		c.fillStyle = args[0];
		
		c.beginPath();
		c.moveTo(args[3] + args[1], args[4] + args[2]);
		
		for(var i = 5; i < args.length; i += 2){
			c.lineTo(args[i] + args[1], args[i + 1] + args[2]);
		}
		
		c.closePath();
		c.fill();
	}
	
	var colors = ["#FE413F", "#E33735", "#97292C", "#781D24", "#171F22", "#6F8590", "#FD8F02", "#FEFFF3", "#B0B6B2", "#A7E3FF", "#63A4CC"];
	
	var body = document.body;
	var canvas = add(create("canvas", "width", 800, "height", 587));
	var c = canvas.getContext("2d");
	
	c.strokeRect(0, 0, 800, 500);
	
	//Top
	function drawVehicle(){
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
	
	//Windshield
	
	drawPoly(colors[9],
		306, 67,
		452, 147,
		401, 290,
		243, 174
	);
	
	//Shading
	
	drawPoly(colors[2],
		300, 64,
		306, 67,
		243, 175,
		234, 177
	);
	
	//Left Light
	
	drawPoly(colors[7],
		25, 292,
		33, 306,
		36, 324,
		35, 334,
		31, 337,
		25, 335,
		19, 320,
		16, 304,
		17, 293
	);
	
	//Right Light
	
	drawPolyOff(colors[7], 90, 110,
		27, 292,
		35, 306,
		38, 324,
		37, 334,
		33, 337,
		25, 335,
		19, 320,
		16, 304,
		17, 293
	);
	
	//License Plate
	
	drawPoly(colors[8],
		43, 312,
		100, 384,
		101, 429,
		97, 430,
		40, 355,
		38.5, 313
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
	
	//Front-seat Window
	
	drawPoly(colors[10],
		589, 120,
		590, 234,
		429, 294,
		482, 149
	);
	
	//Shading
	
	drawPoly(colors[3],
		597, 118,
		598, 239,
		427, 303,
		429, 294,
		590, 234,
		589, 120,
	);
	
	//Back-seat Window
	
	drawPoly(colors[10],
		641, 106,
		642, 217,
		612, 227,
		611, 114
	);
	
	//Shading
	
	drawPoly(colors[3],
		649, 104,
		650.5, 222,
		612.5, 235,
		612, 227,
		642, 217,
		641, 106,
	);
	
	//Front Tire
	
	drawPoly(colors[4],
		335, 411,
		367, 444,
		371, 464,
		366, 493,
		350, 521,
		328, 546,
		301, 562,
		272, 570,
		246, 567,
		228, 552,
		208, 530,
		213, 497,
		231, 464,
		260, 434,
		295, 415
	);
	
	drawPolyOff(colors[5], 0, -10,
		313, 461,
		328, 464,
		338, 474,
		341, 487,
		336, 504,
		327, 519,
		315, 533,
		298, 542,
		281, 548,
		266, 546,
		256, 537,
		251, 524,
		255, 506,
		266, 488,
		281, 474,
		296, 464
	);
	
	//Back Tire
	
	drawPolyOff(colors[4], 367, -151,
		335, 411,
		367, 444,
		371, 464,
		366, 493,
		350, 521,
		328, 546,
		301, 562,
		272, 570,
		246, 567,
		228, 552,
		208, 530,
		213, 497,
		231, 464,
		260, 434,
		295, 415
	);
	
	drawPolyOff(colors[5], 367, -161,
		313, 461,
		328, 464,
		338, 474,
		341, 487,
		336, 504,
		327, 519,
		315, 533,
		298, 542,
		281, 548,
		266, 546,
		256, 537,
		251, 524,
		255, 506,
		266, 488,
		281, 474,
		296, 464
	);
    }
//    var canvas = document.getElementById("myCanvas");
//        var c = canvas.getc("2d");     
        var counter = 0;
        var circles = [];
        
        //Creates Circle object constructor
        function Circle() {
            this.x = 500;
            this.y = 500;
            this.radius = 7;
            this.opacity = 1;
            this.rotation = toRadians(Math.random());
        }
        //Updates new location, size and opacity  of circle object
        Circle.prototype.update = function() {
            this.x++
            if(this.opacity < 0){
                this.opacity = 0;
            }
            if(this.opacity > 0) {
                this.opacity -= 0.005;
                }

            this.radius += .10;
            this.y = this.y + (.2 * Math.cos(this.rotation) - 1);
            c.globalAlpha = this.opacity;
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            c.closePath();
            
            c.fillStyle = "grey";
            c.fill();
        }
        
        //Converts degrees to radians
        function toRadians (angle) {
            return  angle * (Math.PI * 180);
        }        
        
        //Draws all circles on canvas
        function drawCircles() {
                var circle1 = new Circle();
            circles.push(circle1);
            }
            draw();
        
        //Calls draw methos and clears canvas before every frame. Also controls framerate.
        function draw() {
            counter++;
            c.clearRect(0, 0, canvas.width, canvas.height);
            drawVehicle();
            if(this.counter % 1.25 == 0){
            drawCircles();
            }
            for(var i = 0; i < circles.length; i++) {
                
                var newCircle = circles[i] ;
                newCircle.update();
            }
        
        requestAnimationFrame(draw);
        }
        
        c.fillStyle = "GREY";
        c.fill();

    
    
}
