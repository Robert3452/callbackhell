const usuarios = [
    { name: "Robert", age: 22, email: "romeza1239@gmail.com", phone_number: "935993138", profesion_id: 2 },
    { name: "Alejandra", age: 21, email: "aleja@hotmail.com", phone_number: "95687411", profesion_id: 1 },
    { name: "Freddy", age: 30, email: "freddier123@volcan.com", phone_number: "999666222", profesion_id: 3 },
];

const profesiones = {
    1: "Diseñador/a grafico/a",
    2: "Ingeniero/a de sistemas",
    3: "Reportero/"
}

const asyncFunction = new Promise((resolve, reject) => {
    var error = false;
    if (error) {
        reject("algo ocurrió")
    } else {
        setInterval(() => {
            resolve("ha funcionado")
        }, 3000);
    }
})

// asyncFunction.then((result) => {
//     console.log(result);
// })

// console.log("Esto esta despues");


const getUsers = new Promise((resolve, reject) => {
    var error = false;
    setTimeout(() => {
        if (error) {
            reject({
                message: "base de datos desconectada",
                error: "BD-001"
            })
        } else {
            resolve(usuarios)
        }
    }, 1000)
})


const getUser = function (name) {
    return new Promise((resolve, reject) => {

        const usuario = usuarios.find((element) => element.name == name)

        setTimeout(() => {
            if (!usuario) {
                reject({ message: "Algo paso, no se encontró el usuario" })
            } else {
                resolve(usuario)
            }
        }, 1000)
    })
}
const getProfesion = (profesion_id) => {
    return new Promise((resolve, reject) => {
        const profesion = profesiones[profesion_id]
        if (!profesion) {
            reject({ message: "El usuario no tiene profesion" })
        } else {
            resolve(profesion)
        }
    })
}

let usuario;

getUsers
    .then((result) => {
        return getUser(result[0].name)
    })
    .then((result) => {
        usuario = result;
       return getProfesion(result.profesion_id)
    })
    .then((result)=>{
        console.log(`${usuario.name} es: ${result} `);
    })
    .catch((error) => {
        console.log(`error ${JSON.stringify(error)}`);
    })
    .finally(() => {
        console.log("fin");
    })