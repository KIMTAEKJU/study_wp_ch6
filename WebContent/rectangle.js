/**
 * Rectangle Class (생성함수)
 */

var rect1 = {
		x1 : 100,
		y1 : 100,
		x2 : 200,
		y2 : 200,
		backgroundColor : "#00f",
		show : function() {
			document.write("<div style='position: absolute; " + "left:"
					+ this.x1 + "px; " + "top:" + this.y1 + "px; " + "width:"
					+ (this.x2 - this.x1) + "px; " + "height:"
					+ (this.y2 - this.y1) + "px; " + "background-color:"
					+ this.backgroundColor + "'></div>");
		}
	}

	var rect2 = {
		x1 : 250,
		y1 : 300,
		x2 : 400,
		y2 : 350,
		backgroundColor : "#f00",
		show : function() {
			document.write("<div style='position: absolute; " + "left:"
					+ this.x1 + "px; " + "top:" + this.y1 + "px; " + "width:"
					+ (this.x2 - this.x1) + "px; " + "height:"
					+ (this.y2 - this.y1) + "px; " + "background-color:"
					+ this.backgroundColor + "'></div>");
		}
	}

	window.onload = function() {
		//rect1.show();
		//rect2.show();
		var r1 = new Rectangle(100, 100, 200, 300, "#00f");
		var r2 = new Rectangle(250, 250, 400, 400, "#f00");

		r1.show();
		r2.show();
	}

	var Rectangle = function(x1, y1, x2, y2, backgroundColor) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.backgroundColor = backgroundColor;
	}

	Rectangle.prototype.show = function() {
		document.write("<div style='position: absolute; " + "left:" + this.x1
				+ "px; " + "top:" + this.y1 + "px; " + "width:"
				+ (this.x2 - this.x1) + "px; " + "height:"
				+ (this.y2 - this.y1) + "px; " + "background-color:"
				+ this.backgroundColor + "'></div>")
	};