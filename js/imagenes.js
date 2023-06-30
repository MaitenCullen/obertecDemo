
const categorias = [
    {
        id:'1',
        nombre:'AGITADORES',
        icon:'./img/iconB.png',
        imagen: './img/galeria/agitadores.png',
        categoria:'AGITADORES',
        seccion:'1'
    },
 
    {
        id:'2',
        nombre:'BAÑOS TERMOSTÁTICOS',
        icon:'./img/iconB.png',
        imagen: './img/galeria/baños1.png',
        categoria:'BAÑOS TERMOSTÁTICOS',
        seccion:'2'
    },
    {
        id:'3',
        nombre:'Producto3',
        icon:'./img/iconB.png',
        imagen: './img/galeria/biologia.png',
        categoria:'BIOLOGÍA MOLECULAR Y GENÉTICA',
        seccion:'3'
    },
    {
        id:'4',
        nombre:'CENTRIFUGAS',
        icon:'./img/iconB.png',
        imagen:  './img/galeria/centrifugas.png',
        categoria:'CENTRIFUGAS',
        seccion:'4'
    },
    {
        id:'5',
        nombre:'ESTUFAS',
        icon:'./img/iconB.png',
        imagen: './img/galeria/estufas.png',
        categoria:'ESTUFAS',
        seccion:'5'
    },
    {
        id:'6',
        nombre:'HOMOGENEIZADORES',
        icon:'./img/iconB.png',
        imagen: './img/galeria/homegenei.png',
        categoria:'HOMOGENEIZADORES',
        seccion:'6'
    },
    {
        id:'7',
        nombre:'MANTOS Y PLANCHAS',
        icon:'./img/iconB.png',
        imagen: './img/galeria/mantos.png',
        categoria:'MANTOS Y PLANCHAS',
        seccion:'7'
    },
    {
        id:'8',
        nombre:'MANEJO DE SUSTANCIAS LIQUIDAS',
        icon:'./img/iconB.png',
        imagen: './img/galeria/manejo.png',
        categoria:'MANEJO DE SUSTANCIAS LIQUIDAS',
        seccion:'8'
    },
    {
        id:'9',
        nombre:'MICROSCOPIA',
        icon:'./img/iconB.png',
        imagen: './img/galeria/microscopia.png',
        categoria:'MICROSCOPIA',
        seccion:'9'
    },
    {
        id:'10',
        nombre:'TERMOCONTROLADORES',
        icon:'./img/iconB.png',
        imagen: './img/galeria/termocont.png',
        categoria:'TERMOCONTROLADORES',
        seccion:'10'
    },
]



let app = document.getElementById('imagenes');
app.innerHTML = categorias.map(imagen => (
    `<div style="background-image:url(${imagen.imagen})" class="imgGaleria">`+
        '<div class="textCategoria">' +
            `<p>${imagen.categoria}</p>`+
            '<div class="divTextCategoria">' +
                `<img src="${imagen.icon}"/>`+
                `<a href=subcategorias.php?subcategoria=${imagen.id}> Ver </a>`+
            '</div>'+ 
       '</div>'+
    '</div>'
    )).join('');



// let section = document.getElementById('section');
// section.innerHTML = categorias.map(imagen => (
//     `<div id=${imagen.seccion}>` +
//        `<img src=${imagen.imagen} />`+
//        `<p>${imagen.nombre}</p>`+
//        `<p> ${imagen.descripcion}</p>` +
//     '</div>'
// ));


