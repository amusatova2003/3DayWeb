let images = document.getElementById("footer-menu-list");

for (let image of images.children)
{
    image.onclick = () =>
    {

        for(let _image of images.children)
        {
            _image.classList.remove('enlarged');
        }

        image.classList.add('enlarged');
    }; 
}