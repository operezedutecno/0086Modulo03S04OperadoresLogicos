$(document).ready(function() {

    var deportistas = []
    $("#formulario").submit(function(even) {
        even.preventDefault();
        $("#msg-n1, #msg-n2").html("")

        var n1 = $("#txt-n1").val();
        var n2 = $("#txt-n2").val();

        if(n1 == "") {
            return $("#msg-n1").html("Ingresar primer número")
        }

        if(n2 == "") {
            return $("#msg-n2").html("Ingresar segundo número")
        }

        // var mostrar
        // if(n1 > 0 || n2 > 0) {
        //     mostrar = "Si"
        // } else {
        //     mostrar = "No"
        // }


        var exito = (n1 > 0 || n2 > 0) ? "Si" : "No"


        if(exito == "Si") {
            $("#result").removeClass("alert-danger").addClass("alert-success")
            $("#result").html(`Proceso exitoso los números ingresados fueron ${n1} y ${n2}`)
        } else {
            $("#result").removeClass("alert-success").addClass("alert-danger")
            $("#result").html(`Proceso fallido`)
        }
    })

    $("#formulario-40").submit(function(even) {
        even.preventDefault();
        $("#msg-rut, #msg-edad, #msg-estatura, #msg-peso").html("")

        var rut = $("#txt-rut").val();
        var edad = $("#txt-edad").val();
        var estatura = $("#txt-estatura").val();
        var peso = $("#txt-peso").val();

        if(rut == "") {
            return $("#msg-rut").html("Ingresar el RUT")
        }

        if(edad == "") {
            return $("#msg-edad").html("Ingresar la edad")
        }

        if(estatura == "") {
            return $("#msg-estatura").html("Ingresar la estatura")
        }

        if(peso == "") {
            return $("#msg-peso").html("Ingresar el peso")
        }

        var deportista = {
            rut: rut,
            edad: edad,
            estatura: estatura,
            peso: peso,
            admitido: (edad <= 18 && estatura >= 180 && peso <= 80)
        }

        deportistas.push(deportista)
        $("#txt-rut, #txt-edad, #txt-estatura, #txt-peso").val("")
        listarDeportistas(deportistas)
    })

    function listarDeportistas(deportistas) {
        $("#listado-deportistas tbody").html("");
        for (const deportista of deportistas) {
            $("#listado-deportistas tbody").append(`
                <tr>
                    <td>${deportista.rut}</td>
                    <td>${deportista.edad}</td>
                    <td>${deportista.estatura}</td>
                    <td>${deportista.peso}</td>
                    <td class="${deportista.admitido ? "bg-success-subtle" : "bg-danger-subtle"}">
                        ${deportista.admitido ? "Admitido" : "No Admitido"}
                    </td>
                </tr>
            `)
        }
    }
})