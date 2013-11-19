/*
 *  Developed by Daniel Synelnikov
 *
 */


/**
 * This shows some of the basic things we can do with JavaScript
 */
document.addEventListener('DOMContentLoaded', function() {
    
    var name = 'anonymous';
    
    //Add a click handler to the #click element
    document.getElementById('wait').addEventListener('click', function() {
        alert('Take your time');
    });
    
    //Ask for a name on click
    document.getElementById('start').addEventListener('click', function() {
        
        name = prompt('Whats your name?');
        
        document.getElementById('name').innerHTML = 'Your name is: ' + name;
        
    });
    
    //Calculate the difference between two numbers/ages
    document.getElementById('age-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        var yourAge = document.getElementById('your-age').value,
            mateAge = document.getElementById('mate-age').value;
            
        if (yourAge > mateAge) {
            alert('You are older');
        }
        else if (yourAge == mateAge) {
            alert('Hmm, you are even');
        }
        else {
            alert('Your classmate is older... Pity');
        }
        
    });
    
    //Counts how many times the name is gonna be spelled
    document.getElementById('spell').addEventListener('click', function() {
        
        var i,
            counter = 0,
            output = name;
        
        for(i = 0;i < 5;i++) {
            counter++;
            output += ', ' + name;
        }
        
        document.getElementById('spell-output').innerHTML = 'Your name can be spelled ' + counter + ' times, no more. Cause it\'s annoying thing to do. Just look: ' + output;
        
    });
    
    //Requests a name until it matches with the entered earlier one
    document.getElementById('check-name').addEventListener('click', function() {
        var checkName,
            triedNames = document.getElementById('tried-names');
        
        do {
            checkName = prompt('So what is your name?');
            triedNames.innerHTML += checkName + '<br>';
        }
        while(checkName != name);
    });
    
    
    //This button will ask a question
    //document.getElementById('question').addEventListener('click', function() {
    //    var name = prompt('Whats your name?');
    //
    //    document.getElementById('answer').innerText = 'Hi there ' + name;
    //});

    //This form will double any number
    //document.getElementById('maths').addEventListener('submit', function(e) {
    //    e.preventDefault();
    //
    //    var number = document.getElementById('number').value;
    //    var double = number * 2;
    //    alert('Your number doubled is: ' + double);
    //});

    //document.getElementById('if').addEventListener('click', function() {
    //    var cool = prompt('Are you cool?');
    //
    //    if(cool == 'yes') {
    //        alert('Nice!');
    //    }
    //    else {
    //        alert('Ah...');
    //    }
    //});

    //This button will write 'no' a hundred times
    //document.getElementById('loop').addEventListener('click', function() {
    //    var i,
    //        output = '';
    //
    //    for(i = 0;i < 100;i++) {
    //        output += 'No! ';
    //    }
    //
    //    document.getElementById('many').innerText += output;
    //});
    //
    //document.getElementById('stop').addEventListener('click', function() {
    //    var word,
    //        wrongWords = document.getElementById('wrongWords');
    //
    //    do {
    //        word = prompt('Whats the magic word?');
    //        wrongWords.innerHTML += word + '<br>';
    //    }
    //    while(word != 'stop');
    //});
});

