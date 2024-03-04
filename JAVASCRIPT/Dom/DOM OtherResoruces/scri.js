const sections = document.querySelectorAll('section');
for(const section of sections)
{
    section.style.border = '5px solid black';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '20px';
    section.style.backgroundColor = 'silver';
}


// const d = document.getElementById('place-container');
// d.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('place-container');

placesContainer.classList.add('text-center');
