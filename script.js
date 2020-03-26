const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=';
//const catPicture = docuemnt.getElementById('catpics')
let images = document.getElementById('catpics');


const displayCat = (e) => {
    e.preventDefault() //Do not refresh the page
    console.log('About to display a cat')
    images.innerHTML = ''; //clears out photo album

    let catNumber = document.getElementById('catnumber').value; //get user input and store value in variable

    fetch(API_URL + catNumber)
    .then((response) => {
        console.log('response received', response)
        return response.json()
    })
    .then((data) => {
        console.log('Success', data)
        //do something with the data
        //I want to display the number of pictures selected
        data.forEach((cat) => {
            let newImage = document.createElement('img'); //creates a blanck img tag
            newImage.src = cat.url; //add src to img tag
            images.appendChild(newImage); //adds image to the photo album
        })
    })
    .catch((err) => {
        console.log('OOPS', err)
    })
}





document.getElementById('catgrab').addEventListener('click', displayCat)