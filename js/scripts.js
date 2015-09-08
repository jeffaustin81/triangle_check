var isTriangle = function(side1, side2, side3) {
	if((side1 > (side2 + side3)) || (side2 > (side1 + side3)) || (side3 > (side2 + side1))) {
		return "not a triangle";
	} else {
		if ((side1 === side2) && (side2 === side3)) {
			return "equilateral";
		} else if ((side1 === side2) || (side2 === side3) || (side3 === side1)) {
			return "isosceles";
		} else {
			return "scalene";
		}
	}
};

$(document).ready(function () {
	$("form#triangle-checker").submit(function(event) {
		var side1 = parseFloat($("input#side-1").val());
		var side2 = parseFloat($("input#side-2").val());
		var side3 = parseFloat($("input#side-3").val());
		
		var result = isTriangle(side1, side2, side3);
		
		$(".triangle").text(result);

		
		$("#result").show();
		event.preventDefault();
	});
});