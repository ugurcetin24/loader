function showLoader(){
    document.getElementById('loader').style.display = 'block';
}
function hideLoader(){
    document.getElementById('loader').style.display = 'none';
}

const button = document.getElementById('myButton');


//API den veri geliyormuş gibi bekletelim
button.addEventListener('click',()=> {
    button.style.display = 'none';
    showLoader();
    
    setTimeout(() => {
        hideLoader();
        document.querySelector('img').style.display = 'block';
    }, 1500); // Simulate a 1.5-second loading time
});