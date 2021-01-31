


//const imputContact = document.getElementsByClassName('contact');

const imputContact = document.querySelector(".contact"); 
// Al quitar el foco del input cambia de color

//console.log(nameContact);

function cambiaColorFoco() {
    imputContact.style.backgroundColor = '#fff666';
  };
  
  
function cambiaColoronBlur() {
    imputContact.style.backgroundColor = '#9999FF';
  };

 
function functOnInput() {
    var telContact = document.getElementById("telContact").value;
    if (telContact.length > 9) {
    document.getElementById("infotel").innerHTML = `El número de dígitos es: ${telContact.length} , el número demasiado largo` ;
    } else if (telContact.length < 9 ) {
    document.getElementById("infotel").innerHTML = `El número de dígitos es: ${telContact.length} , el número demasiado corto` ;
    } else {
    document.getElementById("infotel").innerHTML = `El número de dígitos es: ${telContact.length} , el número es correcto`
    }
};


function functemailInput (){
    var mailContact = document.getElementById("email").value;
    var mailComp = document.getElementById("email2").value;
    if (mailContact !=mailComp) {
        document.getElementById("infomail").innerHTML = `El mail no es coincidente` ;
    } else {
        document.getElementById("infomail").innerHTML = `El mail es correcto`
    }
}

  
 