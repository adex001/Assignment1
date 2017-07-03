

function getPrimes(value){

	//Creates a result array for displaying the results of the addes prime numbers

	var result_list = [];

	// This is to check if the argument entered is not anything apart from a number

	if(typeof(value) != "number"){

		return undefined;
	}
	//If the number is less than 2, It is not a valid prime number
	if(value <= 1){

		return value + " is not a valid prime number!";
	}

	// This computes the prime numbers. Starts from 2

        for(var i = 2; i <= value; i++){

        	//Creates a boolean variable to check if it is prime
            var isItPrime = true;

            //this second loop acts as a step factor.
          
          for(var j = 2; j <= (Math.sqrt(i)); j++){
             
             if(i % j == 0){

                 isItPrime = false;
            } 
        
            }
    		//If it is prime, add the value to the result list.
    		
            if(isItPrime == true){

                result_list.push(i);

                    }
        }

return result_list;

};

module.exports = getPrimes;