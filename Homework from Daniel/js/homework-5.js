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

    var $create = document.getElementById('create-task'),
        $text = document.getElementById('task-text'),
        $list = document.getElementById('task-list'),
        $remove = document.getElementById('remove-task');
    
    
    $create.addEventListener('click', function(e) {
        e.preventDefault();
        
        addTask();
    });
    
    $remove.addEventListener('click', function(e) {
        e.preventDefault();
        
        removeTask();
    });
    
    
    function removeTask() {
        
        var $li, arr, counter = 0;
        
        arr = $list.querySelectorAll('input');
        counter = arr.length;
        
        for (var i = arr.length - 1; i >= 0; i--) {
            
            if (arr[i].checked) {
                $list.removeChild($list.querySelectorAll('li')[i]);
                counter--;
            }
            if (!counter) {
                $li = document.createElement('li');
                $li.id = 'holder';
                $li.innerHTML = 'NO TASKS';
                $list.appendChild($li);
            }
            
        }
        
    }
    
    function addTask() {
        var $li, arr;
        
        arr = $list.querySelectorAll('li');
        
        for (var i = 0; i < arr.length; i++) {
            //if (this.classList.contains('holder'))
            if (arr[i].id == 'holder') {
                $list.removeChild($list.querySelector('#holder'));
            }
            
        }
        
        if ($text.value) {
            
            $li = document.createElement('li');
            $li.innerHTML = '<label><input type="checkbox" />'+$text.value+'</label>';
            $list.appendChild($li);
            $text.value = '';
            
        }
        
    }

});