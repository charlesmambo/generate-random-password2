const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById('gerenate-btn');
const copyPasswords = document.querySelectorAll('.icon');

function getCharacters(){
    let generetedPassword = [];
     for (let i = 0; i < 15; i++){
        generetedPassword[i] = characters[Math.ceil( Math.random()* characters.length )];
    }
    return generetedPassword.join('')
}

function passPassword(){
    document.getElementById('first-pswd').value = getCharacters();
    document.getElementById('sec-pswd').value = getCharacters();
}

function firstTable(){
  // Get the text field
  let copyText = document.getElementById("first-pswd");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 9999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  
  // Alert the copied text
  alert("Copied the text: " + copyText);
  
}



generateBtn.addEventListener('click', passPassword);
