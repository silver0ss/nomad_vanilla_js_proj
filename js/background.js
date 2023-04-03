const random_num = Math.floor(Math.random() * 3);
const img_url = `https://raw.githubusercontent.com/nomadcoders/javascript-for-beginners/master/img/${random_num}.jpeg`;
document.body.style.backgroundImage = "url('" + img_url + "')";
