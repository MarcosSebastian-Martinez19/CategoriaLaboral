let añosExperiencia = parseInt(prompt("Ingresa los años de experiencia que tienes"))
let mensaje

if (añosExperiencia > 0 && añosExperiencia < 2) {
    mensaje = "De acuerdo a tus años de experiencia tu Nivel es Junior"
    alert(mensaje)
} else if (añosExperiencia >= 2 && añosExperiencia < 6) {
    mensaje = "De acuerdo a tus años de experiencia tu Nivel es Semi Senior"
    alert(mensaje)
} else if (añosExperiencia >= 6) {
    mensaje = "De acuerdo a tus años de experiencia tu Nivel es Senior"
    alert(mensaje)
}
