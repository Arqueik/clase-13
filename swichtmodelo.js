let dia = "viernes"

switch(dia){ //switch siempre primero (la variable a verificar)
   case "viernes":
   console.log("buen finde")
   break
   case "lunes": //case para comprobar la variable 
   console.log("buena semana")
   break //siempre despues de console.log dentro de case
   default:
   console.log("buen dia")
}