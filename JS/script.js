function mostrarInformacionQueja(formulario) {
    var nom = formulario.nombre.value;
    var ape = formulario.apellidos.value;
    var dni = formulario.DNI.value;
    var genero = formulario.gender.value;
    var fecNac = formulario.fechaNacimiento.value;
    var correo = formulario.email.value;
    var motivo = formulario.quejas.value;
    if (nom != "" && ape != "" && validarDNI(dni) && genero != "" && fecNac != "" && email != "" && motivo != "") {
        alert("Datos recolectados: \n" +
            "Nombre: " + nom + "\n" +
            "Apellidos: " + ape + "\n" +
            "Dni: " + dni + "\n" +
            "Género: " + genero + "\n" +
            "Fecha de nacimiento: " + fecNac + "\n" +
            "Email: " + correo + "\n" +
            "Motivo: " + motivo + "\n"
        );
    } else {
        alert("Es posible que haya campos obligatorios sin rellenar.");
    }
}

function mostrarInformacionSugerencia(formulario) {
    var nom = formulario.nombre.value;
    var ape = formulario.apellidos.value;
    var dni = formulario.DNI.value;
    var genero = formulario.gender.value;
    var fecNac = formulario.fechaNacimiento.value;
    var correo = formulario.email.value;
    var motivo = formulario.sugerencias.value;
    if (nom != "" && ape != "" && validarDNI(dni) && genero != "" && fecNac != "" && email != "" && motivo != "") {
        alert("Datos recolectados: \n" +
            "Nombre: " + nom + "\n" +
            "Apellidos: " + ape + "\n" +
            "Dni: " + dni + "\n" +
            "Género: " + genero + "\n" +
            "Fecha de nacimiento: " + fecNac + "\n" +
            "Email: " + correo + "\n" +
            "Motivo: " + motivo + "\n"
        );
    } else {
        alert("Es posible que haya campos obligatorios sin rellenar.");
    }
}

function mostrarInformacionReserva(formulario) {
    var nom = formulario.nombre.value;
    var ape = formulario.apellidos.value;
    var dni = formulario.DNI.value;
    var genero = formulario.gender.value;
    var fecNac = formulario.fechaNacimiento.value;
    var correo = formulario.email.value;
    var motivo = formulario.motivo.value;
    var libro_reservado = formulario.libros.value;
    var dias_reservado = formulario.nDias.value;
    if (nom != "" && ape != "" && validarDNI(dni) && genero != "" && fecNac != "" && email != "" && libro_reservado != "" && dias_reservado != "") {
        alert("Datos recolectados: \n" +
            "Nombre: " + nom + "\n" +
            "Apellidos: " + ape + "\n" +
            "Dni: " + dni + "\n" +
            "Género: " + genero + "\n" +
            "Fecha de nacimiento: " + fecNac + "\n" +
            "Email: " + correo + "\n" +
            "Libro reservado: " + libro_reservado + "\n" +
            "Número de días reservado: " + dias_reservado + "\n" +
            "Motivo: " + motivo + "\n"
        );
    } else {
        alert("Es posible que haya campos obligatorios sin rellenar.");
    }
}

function mostrarInformacionEncuesta(formulario) {
    var nom = formulario.nombre.value;
    var ape = formulario.apellidos.value;
    var dni = formulario.DNI.value;
    var genero = formulario.gender.value;
    var fecNac = formulario.fechaNacimiento.value;
    var correo = formulario.email.value;
    var motivo = formulario.motivo.value;
    var calificacion = formulario.estrellas.value;
    if (nom != "" && ape != "" && validarDNI(dni) && genero != "" && fecNac != "" && email != "" && calificacion != "") {
        alert("Datos recolectados: \n" +
            "Nombre: " + nom + "\n" +
            "Apellidos: " + ape + "\n" +
            "Dni: " + dni + "\n" +
            "Género: " + genero + "\n" +
            "Fecha de nacimiento: " + fecNac + "\n" +
            "Email: " + correo + "\n" +
            "Calificación: " + calificacion + "\n" +
            "Motivo: " + motivo + "\n"
        );
    } else {
        alert("Es posible que haya campos obligatorios sin rellenar.");
    }
}

function validarDNI(dni) {
    parte_numero = dni.substring(0, 8);
    parte_letra = dni.substring(8, 9);
    numero = parte_numero % 23;
    info = 'TRWAGMYFPDXBNJZSQVHLCKET';
    letra = info.substring(numero, numero + 1);
    if (letra != parte_letra.toUpperCase()) {
        alert("DNI incorrecto");
        return false;
    } else {
        return true;
    }
}