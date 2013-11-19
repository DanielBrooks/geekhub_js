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
        objRemove = document.getElementById('remove-task'),
        
        objSaveLocaly = document.getElementById('save-localy'),
        objLoadLocaly = document.getElementById('load-localy'),
        
        objSaveServer = document.getElementById('save-server'),
        objLoadServer = document.getElementById('load-server');
    
    
    objCreate.addEventListener('click', function(e) {
        e.preventDefault();
        
        addTask();
    });
    
    objRemove.addEventListener('click', function(e) {
        e.preventDefault();
        
        removeTask();
    });
    
    
    objSaveLocaly.addEventListener('click', function(e) {
        e.preventDefault();
        
        saveLocaly();
    });
    
    objLoadLocaly.addEventListener('click', function(e) {
        e.preventDefault();
        
        loadLocaly();
    });
    
    
    objSaveServer.addEventListener('click', function(e) {
        e.preventDefault();
        
        saveServer();
    });
    
    objLoadServer.addEventListener('click', function(e) {
        e.preventDefault();
        
        loadServer();
    });
    
    
    function saveServer() {
        
        var request = new XMLHttpRequest(),
            arr,
            arrLi = [];
        
        
        arr = objList.querySelectorAll('li');
        
        if (arr[0].id != 'holder') {
            
            for (var i = 0; i < arr.length; i++) {
                
                arrLi[i] = arr[i].querySelector('label').textContent;
            }
            
            if (arrLi[0]) {
                request.open('POST', 'http://localhost:1337/');
                request.send(JSON.stringify(arrLi));
            }
            
        }
        
    }
    
    function loadServer() {
        
        var request = new XMLHttpRequest(),
            loadedList;
        
        
        objList.innerHTML = '';
        
        request.addEventListener('load', function() {
            
            loadedList = JSON.parse(this.responseText);
            
            for (var i = 0; i < loadedList.length; i++) {
                
                addTask(loadedList[i]);
                
            }
            
        });
        
        request.open('GET', 'http://localhost:1337/');
        request.send();
        
    }
    
    
    function saveLocaly() {
        
        var arr,
            arrLi = [];
        
        arr = objList.querySelectorAll('li');
        
        if (arr[0].id != 'holder') {
            
            for (var i = 0; i < arr.length; i++) {
                
                arrLi[i] = arr[i].querySelector('label').textContent;
            }
            
            if (arrLi[0]) {
                localStorage.list = JSON.stringify(arrLi);
            }
            
        }
        
    }
    
    function loadLocaly() {
        
        var loadedList;
        
        
        objList.innerHTML = '';
        
        loadedList = JSON.parse(localStorage.list);
        
        for (var i = 0; i < loadedList.length; i++) {
            
            addTask(loadedList[i]);
            
        }
        
    }
    
    
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
    
    function addTask(loaded) {
        
        var objLi, arr, text;
        
        arr = objList.querySelectorAll('li');
        
        text = loaded || objText.value;
        
        if (objText.value) {
            
            for (var i = 0; i < arr.length; i++) {
                //if (this.classList.contains('holder'))
                if (arr[i].id == 'holder') {
                    objList.removeChild(arr[i]);
                }
                
            }
        }
        
        if (text) {
            
            objLi = document.createElement('li');
            objLi.innerHTML = '<label><input type="checkbox" />'+text+'</label>';
            objList.appendChild(objLi);
            objText.value = '';
            
        }
        
    }

});