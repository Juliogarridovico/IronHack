const datoss =[
    {
        id:1,
        tittle : 'Iron Man',
        year: 2008
    },{
        id:2,
        tittle : 'Iron Man 2',
        year: 2010
    },{
        id:3,
        tittle : 'Iron Man 3',
        year: 2012
    }
]

// Practicando las funciones de flecha

// const getDatos =() =>{
//     return datos;
// }
// para simular una asincronia nos usamos la funciona 
const getDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            resolve(datos)
        },1500 )
    }  )
}
getDatos()
    .then((datos)=>console.log(datos))
    .catch(err => console.log("test")) // pero como se gestiona el error