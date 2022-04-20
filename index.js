// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = "left"
header.style.color = "green"

let dogName = document.querySelector('.dog-name')
dogName.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'scaleY(-1)'
}

let footer = document.querySelector('.footer')
footer.style.color = "Violet"