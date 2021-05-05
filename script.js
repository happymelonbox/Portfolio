const pageBody = document.body.style;
pageBody.backgroundColor = 'lightskyblue';
pageBody.textAlign = "center";

const github = document.getElementById('github');
github.style.textDecoration = 'none';
const contact = document.getElementById('contact');
contact.style.textDecoration = 'none';
const me = document.getElementById('me');
me.addEventListener('click', function(){
    me.style.display = 'block'
})

const contactMe = document.getElementById('contactMe');
const innerContact = document.getElementById('innerContact');
const hello = document.getElementById('hello');

contactMe.style.cursor = 'pointer';
hello.style.cursor = 'pointer';


contactMe.addEventListener('click', function(){
    if (innerContact.style.display === 'none'){
    innerContact.style.display = 'block';
    } else {
        innerContact.style.display = 'none';
    }
})

hello.addEventListener('click', function(){
    if (me.style.display === 'none'){
    me.style.display = 'block';
    } else {
        me.style.display = 'none';
    }
})
