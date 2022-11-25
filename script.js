function changeColorById(){
    const elementId = document.getElementById('education')
    const elementId_2 = document.getElementById('hobbi')
    elementId.style.color = 'blue'
    elementId.style.backgroundColor = 'yellow'
    elementId_2.style.color = 'blue'
    elementId_2.style.backgroundColor = 'yellow'
    
}


function changeColorBySelector(){
    const elementSelector = document.querySelector('#hobbi')
    const elementSelector_2 = document.querySelector('#education')
    elementSelector.style.color = 'yellow'
    elementSelector.style.backgroundColor = 'blue'
    elementSelector_2.style.color = 'yellow'
    elementSelector_2.style.backgroundColor = 'blue'
}

function zoom_in_images(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.width = '660px' 
}

function diminish_images(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.width = '550px' 
}

function deleteImage(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.display = 'none';
}

function addImage(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.display = 'block';
}