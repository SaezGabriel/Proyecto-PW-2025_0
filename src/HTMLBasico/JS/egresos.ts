const main = () => {
    const form = document.getElementById("formu")
    form?.addEventListener("submit", (event) => {
        event.preventDefault()

        const fecha = document.getElementById("fecha")!
        console.log("Fecha: ", fecha)
        const textoFecha = (fecha as HTMLInputElement).value
        console.log("Texto fecha: ", textoFecha)

        const categoria = document.getElementById("categoriaText")!
        console.log("Categoria: ",categoria)
        const textoCat = (categoria as HTMLInputElement).value
        if(textoCat == null) return
        console.log("Texto Categoria: ", textoCat)

        const descripcion = document.getElementById("descripcionText")!
        console.log("descripcion: ",descripcion)
        const textoDes = (descripcion as HTMLInputElement).value
        if(textoDes == null) return
        console.log("Texto descripcion: ", textoDes)

        const recurrente = document.getElementById("recuBool")!
        console.log("recurrente: ",recurrente)
        let textoRec

        if( (recurrente as HTMLInputElement).checked ) {
            textoRec = "Si"
        }else {
            textoRec = "No"
        }

        console.log("Texto recurrente: ", textoRec)

        const monto = document.getElementById("monto")!
        console.log("Monto: ",monto)
        let textoMon = (monto as HTMLInputElement).value
        if(textoMon == null) return
        textoMon = "S/. " + textoMon
        console.log("Texto monto: ", textoMon)
        
        const tbody = document.getElementById("TBody")

        console.log("TBody 1: ", tbody)

        const tr = document.createElement("tr");

        // Introducir en el mismo orden en que se crea o causara discrepancias visuales
        const tableFecha = document.createElement("td")
        const tableCat = document.createElement("td")
        const tableDes = document.createElement("td")
        const tableRec = document.createElement("td")
        const tableMon = document.createElement("td")
        const tableAcc = document.createElement("td")

        tableFecha.innerText = textoFecha
        tableCat.innerText = textoCat
        tableDes.innerText = textoDes
        tableRec.innerText = textoRec
        tableMon.innerText = textoMon

        const editar = document.createElement("i")
        editar.className = "lapiz"
        editar.innerText = "Editar"
        editar.addEventListener("click", () => {
            const modalEditar = document.getElementById("modalEditar")!
            modalEditar.classList.add("")
        })

        const eliminar = document.createElement("i")
        eliminar.className = "basura"
        eliminar.innerText = "Borrar"
        eliminar.addEventListener("click", () => {
            tbody?.removeChild(tr)
        })

        tableAcc.appendChild(editar)
        tableAcc.appendChild(eliminar)

        console.log("TableFecha: ", tableFecha)
        console.log("TableCat: ", tableCat)
        console.log("tableDes: ", tableDes)
        console.log("tableRec: ", tableRec)
        console.log("tableMon: ", tableMon)
        console.log("TableAcc: ", tableAcc)

        tr.appendChild(tableFecha)
        tr.appendChild(tableCat)
        tr.appendChild(tableDes)
        tr.appendChild(tableRec)
        tr.appendChild(tableMon)
        tr.appendChild(tableAcc)

        console.log("Table Row: ", tr)

        tbody?.appendChild(tr);

        console.log("TBody2 : ", tbody);
        
        (fecha as HTMLInputElement).value = "";
        (categoria as HTMLInputElement).value = "";
        (descripcion as HTMLInputElement).value = "";
        (recurrente as HTMLInputElement).checked = false;
        (monto as HTMLInputElement).value = "";
    })

    // Eliminar para version final, esto solo es para demonstracion
    const ejemplo = document.getElementById("ejemploTabla")!

    const tbody = document.getElementById("TBody")

    console.log("TBody 1: ", tbody)

    const editar = document.createElement("i")
    editar.className = "lapiz"
    editar.innerText = "Editar"
    editar.addEventListener("click", () => {
        const modalEditar = document.getElementById("modalEditar")!
        modalEditar.classList.add("")
    })

    const eliminar = document.createElement("i")
    eliminar.className = "basura"
    eliminar.innerText = "Borrar"
    eliminar.addEventListener("click", () => {
        tbody?.removeChild(ejemplo)
    })

    const tableAcc = document.createElement("td")
    tableAcc.appendChild(editar)
    tableAcc.appendChild(eliminar)

    ejemplo.appendChild(tableAcc)
}

main()