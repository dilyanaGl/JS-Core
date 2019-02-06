function solve() {
    Array.from(document.getElementsByTagName('button')).forEach(p => p.addEventListener('click', doForm));
    
    function doForm(event){
        let button = event.target;
        if(button.textContent == 'Submit'){
            let userInfo = document.getElementsByClassName('user-info')[0].getElementsByTagName('input');
            let username = userInfo[0].value;
            let password = userInfo[1].value;
            let email = userInfo[2].value; 
            
            event.preventDefault();
    let topicsBoxes = Array.from(document.getElementsByClassName('topics')[0].getElementsByTagName('input'));
            let topics = topicsBoxes
            .filter(p => p.checked).map(p => p.value);
    
            let tr = document.createElement('tr');
            let thName = document.createElement('td');
                    thName.textContent = username;
            
    
            let thTopics = document.createElement('td');        
            thTopics.textContent = topics.join(' ');
            
    
            let thEmail = document.createElement('td');
            thEmail.textContent = email;        
    
            tr.appendChild(thName);
            tr.appendChild(thEmail);
            tr.appendChild(thTopics);
    
            document.getElementsByTagName('tbody')[0].appendChild(tr);
            //Array.from(userInfo).forEach(p => p.value = '');
            //topicsBoxes.forEach(p => p.checked = false);  
           
        }else if(button.textContent == 'Search'){
    
    let searchBox = Array.from(document.getElementsByTagName('input'))
    .filter(p => p.placeholder === 'Search...')[0];
    
    let searchContent = searchBox.value;
    
    let rows = document.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    for(let i = 0; i < rows.length; i++){
        
        let allCells = Array.from(rows[i].getElementsByTagName('td'));
    
        let relevantCells = allCells
        .filter(p => p.textContent.indexOf(searchContent) >= 0);
        
    
        if(relevantCells.length == 0){
            
    rows[i].style.visibility = 'hidden';
        }
        else{
            rows[i].style.visibility = 'visible';
        }
    }
        }
    }
    }