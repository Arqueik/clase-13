let dia = "viernes"

switch(dia){ //switch siempre primero (la variable a verificar)
   case "viernes":
   console.log("buen finde perro loco")
   break
   case "jueves":
   console.log("como estan")
   break
   case "lunes": //case para comprobar la variable 
   console.log("Buen juicio final")
   break //siempre despues de console.log dentro de case
   default:
   console.log("la paz siempre fue una opcion")
}