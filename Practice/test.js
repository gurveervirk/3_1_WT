function multiply(a){
    return function(b){
        return function(c){
            return a * b * c;
        }
    }
}

double = multiply(2);
triple = multiply(3);

console.log(triple(double(4)(5))(1));