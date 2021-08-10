function sumar (valor) {
    const campo=document.getElementById("txt_campo_1");
    let total = 0;
    let textoError="la suma permitida es hasta 50";	  
    total = document.getElementById('spTotal').innerHTML;
    /**/
    valor = parseInt(valor); // Convertir el valor a un entero (número).    
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    total = (total == null || total == undefined || total == "") ? 0 : total;
    /* Esta es la suma. */
    total = (parseInt(total) + parseInt(valor));
    if(eval(total)>50){        
        campo.disabled=true;
        mostrar.innerHTML = textoError;
        /* document.getElementById('conteo').innerHTML = num.length; */
    }
    
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('spTotal').innerHTML = total;
   
}