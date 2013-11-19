Lesson 1

isNaN(NaN) = true

4 || 6 = 4

Number('56') = 56
String(45) = '45'
typeof(45)






Lesson 2


add();
you can do as well
add.call(null, 2, 2);
or
add.apply(null, [2, 2]);



This is same
for(i = 0; i < a.lenght; i++) {
    console.log(i);
}
as this one
[0,1,2].forEach(funciton(i) {
    console.log(i);
});



Lesson 3

for(var key in [1,2,3])


139 shout.apply(spot);



147 a.apply(this); - 'this' is the current 'this' on the moment of call
    a(); - will not work
    

138 .bind(this);


147 .addevent('click', spot.walk.bind(spot));




Lesson 4

.reduce is used for arrays only



Questions:
->L3:
    - line 66. what is this?
    - lines 141 - 147. why do we need such structure? is it because 'this' needs to be passed into each nested function?
    
->L4:
    - line 41. 'animal' - is it an array of objects?
    - line




Lesson 5


document.querySelector
ps = document.querySelectorAll('p'); - returns a NodeList

Array.prototype.forEach.call(ps, function(p) { console.log(p); });
[].forEach.call(ps, function(p){
    console.log(p);
});



NodeList.prototype.forEach = Array.prototype.forEach



document.querySelector('h1').innerText = 'hello' --> better for the security
.innerText += 'world'
.innerHTML


xss = cross side scripting area ?


- h = document.querySelector('h1')

.setAttribute('class', 'red')
.getAttribute
.removeAttribute

.classList.add('go')
.classList.remove('go')
.classList.add('go,here,one')
.classList.add('go', 'here')

.style.background = 'red'
.style.background

window.getComputedStyle(h) or .getComputedStyle(h)

document.createElement - useful when we are creating an element before inserting it into the DOM (sortof preparing)

.parentNode
.childNodes
.lastChild
.firstChild

.appendChild
.removeChild
.replaceChild


when clicking on an element in chrome it is available in the console by saying $0

.addEventListener('click', function() {})
.stopPropagation() --> prevent propagation of the invoked event on the parent elements

.addEventListener('DOMContentLoaded', function() {})




Lesson 6

localStorage.hi = 'Dan'

localStorage.clear();

localStorage.val = {hi: 'fred')}
localStorage.val


localStorage.val = JSON.stringify({hi: 'fred'})

JSON.parse(localStorage.val);

->JSON cannot contain functions. it can contain either json or strings only

sessionStorage



> check this out:

JSONP
CORS

forIn