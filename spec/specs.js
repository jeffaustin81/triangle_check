describe('isTriangle', function() {
	it("is equilateral because all sides are equal", function() {
		expect(isTriangle(2, 2, 2)).to.equal("equilateral");	
	});
	
	it("is isosceles because two sides are equal", function() {
		expect(isTriangle(2, 2, 3)).to.equal("isosceles");	
	});
	
	it("is scalene because no sides are equal", function() {
		expect(isTriangle(2, 3, 4)).to.equal("scalene");	
	});
	
	it("is not a triangle", function() {
		expect(isTriangle(2, 2, 8)).to.equal("not a triangle");	
	});
});