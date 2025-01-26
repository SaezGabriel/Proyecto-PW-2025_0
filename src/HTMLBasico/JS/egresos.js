var main = function () {
    var form = document.getElementById("formu");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
        event.preventDefault();
        var fecha = document.getElementById("fecha");
        console.log("Fecha: ", fecha);
        var textoFecha = fecha.value;
        console.log("Texto fecha: ", textoFecha);
        var categoria = document.getElementById("categoriaText");
        console.log("Categoria: ", categoria);
        var textoCat = categoria.value;
        if (textoCat == null)
            return;
        console.log("Texto Categoria: ", textoCat);
        var descripcion = document.getElementById("descripcionText");
        console.log("descripcion: ", descripcion);
        var textoDes = descripcion.value;
        if (textoDes == null)
            return;
        console.log("Texto descripcion: ", textoDes);
        var recurrente = document.getElementById("recuBool");
        console.log("recurrente: ", recurrente);
        var textoRec;
        
        if (recurrente.checked) {
            textoRec = "Si";
        }else{
            textoRec = "No";
        }

        console.log("Texto recurrente: ", textoRec);
        var monto = document.getElementById("monto");
        console.log("Monto: ", monto);
        var textoMon = monto.value;
        if (textoMon == null)
            return;
        textoMon = "S/. " + textoMon;
        console.log("Texto monto: ", textoMon);
        var tbody = document.getElementById("TBody");
        console.log("TBody 1: ", tbody);
        var tr = document.createElement("tr");
        // Introducir en el mismo orden en que se crea o causara errores visuales
        var tableFecha = document.createElement("td");
        var tableCat = document.createElement("td");
        var tableDes = document.createElement("td");
        var tableRec = document.createElement("td");
        var tableMon = document.createElement("td");
        var tableAcc = document.createElement("td");
        tableFecha.innerText = textoFecha;
        tableCat.innerText = textoCat;
        tableDes.innerText = textoDes;
        tableRec.innerText = textoRec;
        tableMon.innerText = textoMon;
        tableAcc.innerHTML = "<i class=\"lapiz\">Editar</i> <i class=\"basura\">Borrar</i>";
        console.log("TableFecha: ", tableFecha);
        console.log("TableCat: ", tableCat);
        console.log("tableDes: ", tableDes);
        console.log("tableRec: ", tableRec);
        console.log("tableMon: ", tableMon);
        console.log("TableAcc: ", tableAcc);
        tr.appendChild(tableFecha);
        tr.appendChild(tableCat);
        tr.appendChild(tableDes);
        tr.appendChild(tableRec);
        tr.appendChild(tableMon);
        tr.appendChild(tableAcc);
        console.log("Table Row: ", tr);
        tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(tr);
        console.log("TBody2 : ", tbody);
        fecha.value = "";
        categoria.value = "";
        descripcion.value = "";
        recurrente.checked = false;
        monto.value = "";
    });
};
main();
