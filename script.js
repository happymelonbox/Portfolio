const pageBody = document.body.style;
const github = document.getElementById('github');
const contact = document.getElementById('contact');
const me = document.getElementById('me');
const contactMe = document.getElementById('contactMe');
const innerContact = document.getElementById('innerContact');
const hello = document.getElementById('hello');
const footer = document.getElementById('footer');
const ack = document.getElementById('acknowledge')
const ralph = document.getElementById('ralph');

contact.style.textDecoration = 'none';
github.style.textDecoration = 'none';
pageBody.backgroundColor = 'lightskyblue';
pageBody.textAlign = "center";
contactMe.style.cursor = 'pointer';
hello.style.cursor = 'pointer';


helloTog();
function helloTog(){
    if (me.style.display === 'none'){
    me.style.display = 'block';
    footer.style.display = 'none'
    ralph.style.display = 'none';
    } else {
        me.style.display = 'none';
        footer.style.display = 'block';
        ralph.style.display = 'block';
        innerContact.style.display = 'none';
    }
}
hello.addEventListener('click', helloTog)

contactTog();
function contactTog(){
    if (innerContact.style.display === 'none'){
    innerContact.style.display = 'block';
    ralph.style.display = 'none';
    } else {
        innerContact.style.display = 'none';
        ralph.style.display = 'block';
    }
}
contactMe.addEventListener('click', contactTog)


