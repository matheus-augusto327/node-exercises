let fs = require("fs")

// let calc = require("./calc")
// let args = process.argv.slice(2)

// let a = Number(args[1])
// let b = Number(args[2])
// let c = ""

// if(args[0] == "s") {
//     c = calc.soma(a, b)
// } else if(args[0] == "m") {
//     c = calc.mult(a, b)
// } else {
//     c = "Opção inválida"
// }

// console.log(c)



// fs.writeFile("teste.txt", "Hello World", function(error) {

//     if(error) {throw error}

//     console.log("Arquivo criado com sucesso!")

// })

// fs.appendFile("teste.txt", " - Lorem", function(error) {

//     if(error) {throw error}

//     console.log("Arquivo atualizado com sucesso!")

// })

// fs.unlink("teste.txt", function(error) {

//     if(error) {throw error}

//     console.log("Arquivo apagadoS com sucesso!")

// })

// fs.rename("teste.txt", "Novo.txt",function(error) {

//     if(error) {throw error}

//     console.log("Arquivo apagadoS com sucesso!")

// })

// fs.readFile("Novo.txt", "UTF8",function(error, data) {

//     if(error) {throw error}

//     console.log(data)

// })

let args = process.argv.slice(2)

let fileName = args[0]

fs.readFile(fileName, "UTF8", (error, data) => {

    if(error) throw error

    fs.writeFile(fileName + "_uppercase", data.toUpperCase(), (error) => {
        if (error) throw error
    })

    console.log("Arquivo gerado com sucesso!")

})