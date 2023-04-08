/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = reverseString(String(x)); 
    

    if (y == x){
        return true;
    }
    else {
        return false;
    }
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
};


// Part 2 - without converting to string
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = 0;
let len = x.toString().length;
let y = x;
for(let i = 1; i<=len; i++){
    let p = len - i;
    number = number + (y%10)*(10**p);
    y = Math.floor(y/10);
}
if (number === x){
    return true;
}
else {
    return false;
}
};
