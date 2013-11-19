/*
 *  Developed by Daniel Synelnikov
 *
 */


//task 4
function longestString(i) {
    
    // i will be an array.
    // return the longest string in the array
    var k,
        c = [''];
    
    for (k = 0; k < i.length; k++) {
        
        if (Array.isArray(i[k])) {
            continue;
        }
        
        if (typeof(i[k]) == 'string' && i[k].length > c[0].length) {
            
            c[0] = i[k];
            
        }
        
    }
    
    return c;
    
}


//task 5
function arraySum(i) {
    
    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.
    
    var sum = 0;
    
    count(i);
    
    function count(i) {
        
        for (var k = 0; k < i.length; k++) {
            
            if (Array.isArray(i[k])) {
                count(i[k]);
            }
            
            if (typeof(i[k]) == 'number') {
                sum = sum + i[k];
            }
            
        }
        
        return sum;
        
    }
    
    return sum;
    
}