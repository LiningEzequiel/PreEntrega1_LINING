const productos=[
    {
      id: "1",
      title: "Acerca de la Arquitectura",
      autor: "Alejandro Lapunzina",
      description: "Lorem impsum",
      category: "arte",
      imgUrl: "/images/AcercaDeLaArquitectura-AlejandroLapunzina.jpg",
      price: 13800,
      stock: 20
    },
    {
      id: "2",
      title: "Armonía Aplicada",
      autor: "Vico Castro",
      description: "Lorem impsum",
      category: "arte",
      imgUrl: "/images/ArmoniaAplicada-VicoCastro.jpg",
      price: 12500,
      stock: 35
    },
    {
      id: "3",
      title: "Dibujos",
      autor: "Franz Kafka",
      description: "Lorem impsum",
      category: "arte",
      imgUrl: "/images/Dibujos-FranzKafka.jpg",
      price: 9600,
      stock: 25
    },
    {
      id: "4",
      title: "La Imagen",
      autor: "Jacques Aumont",
      description: "Lorem impsum",
      category: "arte",
      imgUrl: "/images/LaImagen-JacquesAumont.jpg",
      price: 16200,
      stock: 15
    },
    {
      id: "5",
      title: "Calculus",
      autor: "Saturnino Salas",
      description: "Lorem impsum",
      category: "educativos",
      imgUrl: "/images/Calculus-SaturninoSalas.jpg",
      price: 15800,
      stock: 18
    },
    {
      id: "6",
      title: "La tierra se mueve",
      autor: "Dan Hofstadter",
      description: "Lorem impsum",
      category: "educativos",
      imgUrl: "/images/LaTierraSeMueve-DanHofstadter.jpg",
      price: 8900,
      stock: 39
    },
    {
      id: "7",
      title: "Un paseo por las estrellas",
      autor: "Milton Heifetz",
      description: "Lorem impsum",
      category: "aeducativos",
      imgUrl: "/images/UnPaseoPorLasEstrellas-MiltonHeifetz.jpg",
      price: 7500,
      stock: 22
    },
    {
      id: "8",
      title: "Variable Compleja",
      autor: "Juan Carlos Angulo",
      description: "Lorem impsum",
      category: "educativos",
      imgUrl: "/images/VariableCompleja-JuanCarlosAngulo.jpg",
      price: 10100,
      stock: 26
    },
    {
      id: "9",
      title: "Holly",
      autor: "Stephen King",
      description: "Lorem impsum",
      category: "ficción",
      imgUrl: "/images/Holly-SthephenKing.jpg",
      price: 7200,
      stock: 14
    },
    {
      id: "10",
      title: "La armadura de la luz",
      autor: "Ken Follet",
      description: "Lorem impsum",
      category: "ficción",
      imgUrl: "/images/LaArmaduraDeLaLuz-KenFollet.jpg",
      price: 8400,
      stock: 17
    },
    {
      id: "11",
      title: "La casa de los suicidios",
      autor: "Charlie Donlea",
      description: "Lorem impsum",
      category: "ficción",
      imgUrl: "/images/LaCasaDeLosSuicidios-CharlieDonlea.jpg",
      price: 9200,
      stock: 11
    },
    {
      id: "12",
      title: "Tarzán",
      autor: "Edgar Burroughs",
      description: "Lorem impsum",
      category: "ficción",
      imgUrl: "/images/Tarzan-EdgarBurroughs.jpg",
      price: 6400,
      stock: 19
    }
  
  ]
  
  
  export const mFetch = (id) => new Promise ((res, rej) => {
    setTimeout(()=>{
      res( id ? productos.find(producto => producto.id == id) : productos)
    }, 1000)
  })