let animado=document.querySelectorAll(".animado");//guardamos en animado todos los elementos con clase animado

let animadoaba=document.querySelectorAll(".animadoaba");//guardamos en animado todos los elementos con clase animadoaba

let animadoizq=document.querySelectorAll(".animadoizq");//guardamos en animado todos los elementos con clase animadoizq

let animadoder=document.querySelectorAll(".animadoder");//guardamos en animado todos los elementos con clase animadoder


function mostrarScroll(){
    let scrollTop_=document.documentElement.scrollTop; //obtenemos la posicion del scroll
   
    for(var i=0; i<animado.length; i++){ //recorremos a cantidad de elemento con clase animado
        let alturaAnimado=animado[i].offsetTop; //obtenemos la altura de cada elemento
        console.log("alturadelelem "+ alturaAnimado);
        if(alturaAnimado - 200 < scrollTop_){ // 
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrarArriba");
            console.log("sdsds");
        }

    }

    for(var i=0; i<animadoaba.length; i++){ //recorremos a cantidad de elemento con clase animado
        let alturaAnimado=animadoaba[i].offsetTop; //obtenemos la altura de cada elemento
        console.log("alturadelelem "+ alturaAnimado);
        if(alturaAnimado - 550 < scrollTop_){ // 
            animadoaba[i].style.opacity=1;
            animadoaba[i].classList.add("mostrarAbajo");
            console.log("abaj");
        }

    }

    for(var i=0; i<animado.length; i++){ //recorremos a cantidad de elemento con clase animado
        let alturaAnimado=animado[i].offsetTop; //obtenemos la altura de cada elemento
        console.log("alturadelelem "+ alturaAnimado);
        if(alturaAnimado - 200 < scrollTop_){ // 
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrarArriba");
            console.log("sdsds");
        }

    }


    for(var i=0; i<animadoizq.length; i++){ //recorremos a cantidad de elemento con clase animadoizq
        let alturaAnimadoIzq=animadoizq[i].offsetTop; //obtenemos la altura de cada elemento
        
        if(alturaAnimadoIzq - 300 < scrollTop_){ // 
            animadoizq[i].style.opacity=1;
            animadoizq[i].classList.add("mostrarIzquierda");
            
        }

    }

    for(var i=0; i<animadoder.length; i++){ //recorremos a cantidad de elemento con clase animadoder
        let alturaAnimadoDer=animadoder[i].offsetTop; //obtenemos la altura de cada elemento
        
        if(alturaAnimadoDer - 700 < scrollTop_){ // 
            animadoder[i].style.opacity=1;
            animadoder[i].classList.add("mostrarDerecha");
            console.log("ut");
            
        }

    }

}

window.addEventListener('scroll',mostrarScroll);