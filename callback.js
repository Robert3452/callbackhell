const usuarios = [
    { name: "Robert", age: 22, email: "romeza1239@gmail.com", phone_number: "935993138", profesion_id: 2 },
    { name: "Alejandra", age: 21, email: "aleja@hotmail.com", phone_number: "95687411", profesion_id: 1 },
    { name: "Freddy", age: 30, email: "freddier123@volcan.com", phone_number: "999666222", profesion_id: 3 },
];

const profesiones = {
    1: "Diseñador/a grafico/a",
    2: "Ingeniero/a de sistemas",
    3: "Reportero/a"
}

//get all users
function getUsers(callback) {
    setTimeout(function () {
        callback(null, usuarios)
    }, 200)
}

//get a user
function getUser(name, callback) {
    setTimeout(function () {
        var user = usuarios.filter(function (usuario) {
            return usuario.name === name
        })
        callback(null, user[0])
    }, 1000)
}
//get profesion
function getProfesion(idProfesion, callback) {
    setTimeout(function () {
        var profesion = profesiones[idProfesion]
        callback(null, profesion)
    })
}

getUsers(function (error, result) {
    if (error) throw console.error(error)
    getUser(result[0].name, function (error, result) {
        if (error) throw console.error(error)
        var name = result.name
        console.log(name)
        getProfesion(result.profesion_id, function (error, result) {
            if (error) throw console.error(error)
            console.log("La profesion de ", name, "es: ", result)
        })
    })
})