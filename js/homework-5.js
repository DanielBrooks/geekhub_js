/*
 *  Developed by Daniel Synelnikov
 *
 *  Useful things for this homework
 *  
 *  - el.checked - checkbox is checked true/false
 *  - .classList.contains('holder')
 *  - el.id - string/empty string
 *  - remove a dom element can be achieved by .removeChild() only
 *
 */

document.addEventListener('DOMContentLoaded', function() {

    var objCreate = document.getElementById('create-task'),
        objText = document.getElementById('task-text'),
        objList = document.getElementById('task-list'),
        objRemove = document.getElementById('remove-task');
    
    
    objCreate.addEventListener('click', function(e) {
        e.preventDefault();
        
        addTask();
    });
    
    objRemove.addEventListener('click', function(e) {
        e.preventDefault();
        
        removeTask();
    });
    
    
    function removeTask() {
        
        var objLi, arr, counter = 0;
        
        arr = objList.querySelectorAll('input');
        counter = arr.length;
        
        for (var i = arr.length - 1; i >= 0; i--) {
            
            if (arr[i].checked) {
                objList.removeChild(objList.querySelectorAll('li')[i]);
                counter--;
            }
            if (!counter) {
                objLi = document.createElement('li');
                objLi.id = 'holder';
                objLi.textContent = 'NO TASKS';
                objList.appendChild(objLi);
            }
            
        }
        
    }
    
    function addTask() {
        var objLi, arr;
        
        arr = objList.querySelectorAll('li');
        
        for (var i = 0; i < arr.length; i++) {
            //if (this.classList.contains('holder'))
            if (arr[i].id == 'holder') {
                objList.removeChild(arr[i]);
            }
            
        }
        
        if (objText.value) {
            
            objLi = document.createElement('li');
            objLi.innerHTML = '<label><input type="checkbox" />'+objText.value+'</label>';
            objList.appendChild(objLi);
            objText.value = '';
            
        }
        
    }

});