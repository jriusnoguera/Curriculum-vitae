


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
    document.getElementById("infotel").innerHTML = `El número de dígitos es: ${telContact.length} , demasiado largo` ;
    } else if (telContact.length < 9 ) {
    document.getElementById("infotel").innerHTML = `El número de dígitos es: ${telContact.length} , demasiado corto` ;
    } else {
    document.getElementById("infotel").innerHTML = `El número de dígitos es: ${telContact.length} ,  es correcto`
    }
};


function functemailInput (){
    var mailContact = document.getElementById("email").value;
    var mailComp = document.getElementById("email2").value;
    if (mailContact !=mailComp) {
        document.getElementById("infomail").innerHTML = `El mail no es coincidente` ;
    } else {
        document.getElementById("infomail").innerHTML = `El mail es correcto`;
    }
};

function mouseover() {
    document.getElementById("formacion").innerHTML = `Detalle de mi formación`
   };
function mouseout() {
    document.getElementById("formacion").innerHTML = `Formación`
};   
function mouseover1() {
     document.getElementById("contacto").innerHTML = `Contacta conmigo`
};
function mouseout1() {
    document.getElementById("contacto").innerHTML = `Contacto`;
}
function mouseover2() {
    document.getElementById("proyectos").innerHTML = `Mis proyectos`
};
function mouseout2() {
   document.getElementById("proyectos").innerHTML = `Proyectos`;
}
function mouseover3() {
    document.getElementById("experiencia").innerHTML = `Mi trabajo`
};
function mouseout3() {
   document.getElementById("experiencia").innerHTML = `Experiencia laboral`;
}






  
  
 