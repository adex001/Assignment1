const assert = require('chai').assert;
const myApp = require("../src/main.js");

describe("getPrimes", function(){

	describe("handle valid input", function(){

		it("should return an array of [2,3] when 4 is given as input", function(){
			assert.deepEqual(myApp(4), [ 2,3 ]);
		})


		it("should return an array of [2] when 2 is given as input", function(){
			assert.deepEqual(myApp(2), [ 2 ]);
		})


		it("should return an array of [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]", function(){
			assert.deepEqual(myApp(40), [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]);
		})

		it("should return an array of [2, 3, 5, 7, 11, 13, 17, 19] when 20 is inserted as input" , function(){
			assert.deepEqual(myApp(20), [ 2, 3, 5, 7, 11, 13, 17, 19 ]);
		})

		it("should return an array of [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] when an input of 100 is given", function(){
			assert.deepEqual(myApp(100), [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]);
		})


	})

	describe("handle invalid inputs", function(){

		it("should return undefined for getPrimes if a string is inserted.", function(){
			assert.deepEqual(myApp("Andela"), undefined);
		})

		it("should return a string '1 is not a valid prime number' ", function(){
			assert.deepEqual(myApp(1), "1 is not a valid prime number!");
		})

		it("should return a string '-5' is not a valid prime number! ", function(){
			assert.deepEqual(myApp(-5), "-5 is not a valid prime number!");
		})

		it("should return a string '0 is not a valid prime number", function(){
			assert.deepEqual(myApp(0), "0 is not a valid prime number!");
		})

		it("should return undefined for boolean", function(){
			assert.deepEqual(myApp(true), undefined);
		})

	})

})