const photos = document.querySelectorAll('.photo');
const container = document.querySelector('.container');
const button = document.querySelector('.switch');

button.addEventListener('click', () => {
    container.classList.toggle('vertical')
    
})

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        removeActiveClasses()
        photo.classList.add('active')
    })
})

function removeActiveClasses() {
    photos.forEach(photo => {
        photo.classList.remove('active')
    })
    
}