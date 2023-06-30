const subcategorias = [
    {
        id:'1',
        categoriaID:'1',
        categoria:'AGITADORES',
        nombre:'MAGNETICOS',
        imagen:'./img/laboratorioIMG/HS-12.jpg',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'2',
        categoriaID:'1',
        nombre:'VORTEX',
        categoria:'AGITADORES',
        imagen:'./img/laboratorioIMG/VM300S.jpg',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'3',
        categoriaID:'2',
        nombre:'BAÑOS CON AROS CONCENTRICOS',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'./img/laboratorioIMG/WB100-2F.jpg',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'4',
        categoriaID:'2',
        nombre:'BAÑO DE BLOQUE SECO',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'./img/proximamente1.png',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'5',
        categoriaID:'2',
        nombre:'BAÑO CON CIRCULACION',
        categoria:'BAÑOS TERMOSTÁTICOS',
        imagen:'./img/laboratorioIMG/TC-800B.jpg',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'6',
        categoriaID:'3',
        nombre:'CUBAS DE ELECTROFORESIS',
        categoria:'BIOLOGIA MOLECULAR Y GENETICA',
        imagen:'./img/proximamente1.png',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'7',
        categoriaID:'3',
        nombre:'FUENTES DE PODER',
        categoria:'BIOLOGIA MOLECULAR Y GENETICA',
        imagen:'./img/proximamente1.png', 
        icon:'./img/iconAzul1.png',   
    },
    {
        id:'8',
        categoriaID:'4',
        nombre:'MACRO CENTRIFUGAS',
        categoria:'CENTRIFUGAS',
        imagen:'./img/laboratorioIMG/TDL80-2Ba.jpg',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'9',
        categoriaID:'4',
        nombre:'DE ALTA VELOCIDAD ',
        categoria:'CENTRIFUGAS',
        imagen:'./img/laboratorioIMG/LC-12S.jpg', 
        icon:'./img/iconAzul1.png',
    },
    {
        id:'10',
        categoriaID:'4',
        nombre:'MINI CENTRIFUGAS',
        categoria:'CENTRIFUGAS',
        imagen:'./img/laboratorioIMG/MC-7PRO.jpg', 
        icon:'./img/iconAzul1.png',
    },
    {
        id:'11',
        categoriaID:'5',
        nombre:'ESTUFAS DE CULTIVO',
        categoria:'ESTUFAS',
        imagen:'./img/laboratorioIMG/estufaCultivoFaeta.jpg', 
        icon:'./img/iconAzul1.png',
    },
    {
        id:'12',
        categoriaID:'6',
        nombre:'CIRCULAR',
        categoria:'HOMOGENEIZADORES',
        imagen:'./img/laboratorioIMG/RMO-80.jpg', 
        icon:'./img/iconAzul1.png',
    },
    {
        id:'13',
        categoriaID:'7',
        nombre:'MANTO CALEFACTOR',
        categoria:'MANTOS Y PLANCHAS',
        imagen:'./img/laboratorioIMG/HM1.jpg',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'14',
        categoriaID:'7',
        nombre:'PLANCHA CALEFACTORA',
        categoria:'MANTOS Y PLANCHAS',
        imagen:'./img/proximamente1.png',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'15',
        categoriaID:'8',
        nombre:'MICROPIPETAS AUTOMATICAS',
        categoria:'MANEJO DE SUSTANCIAS LIQUIDAS',
        imagen:'./img/laboratorioIMG/PIPETA3.png',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'16',
        categoriaID:'9',
        nombre:'MICROSCOPIOS BINOCULARES',
        categoria:'MICROSCOPIA',
        imagen:'./img/laboratorioIMG/XSZ107BN2.jpg', 
        icon:'./img/iconAzul1.png',
    },
    {
        id:'17',
        categoriaID:'9',
        nombre:'LUPAS BINOCULARES',
        categoria:'MICROSCOPIA',
        imagen:'./img/laboratorioIMG/LUPAST302L.jpg',
        icon:'./img/iconAzul1.png',
    },
    {
        id:'18',
        categoriaID:'10',
        nombre:'CABEZALES TERMOCONTROLADORES',
        categoria:'TERMOCONTROLADORES',
        imagen:'./img/laboratorioIMG/TC-800Ba2.jpg',
        icon:'./img/iconAzul1.png',
    },
  
]


const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('subcategoria');
	

    let bannerSeleccion = document.getElementById('seleccionado');

    let subcategoriasFiltro = subcategorias.filter(sub => sub.categoriaID == myParam)

    bannerSeleccion.innerText = subcategoriasFiltro[0].categoria
    
    
    
      
    let subSection = document.getElementById('subcategorias');
  if(subSection){
    subSection.innerHTML = subcategoriasFiltro.map( subID => (
        `<div class="imgSubcategoria">` +
        `<img src=${subID.imagen} class="resizeImage divImgIlu"/>` + 
           `<h3>${subID.nombre}</h3>` +
           `<div  class="iconDivisionLab">` +
           `<img src="${subID.icon}" />`+
           `<a href=productosLaboratorio.php?productos=${subID.id}&categoria=${encodeURIComponent(subID.categoria)}&nombre=${encodeURIComponent(subID.nombre)}> Ver </a>` +
           `</div>`+
        '</div>'
    )).join('');
  }
    
  window.addEventListener('load', function() {
    resizeImages();
  });
  
  function resizeImages() {
    let container = document.getElementsByClassName('subcategoriasDIV')[0];
    let containerHeight = container.offsetHeight;
    
    let images = document.getElementsByClassName('resizeImage');
    
    // Obtén el ancho máximo entre todas las imágenes
    let maxWidth = 0;
    for (var i = 0; i < images.length; i++) {
      maxWidth = Math.max(maxWidth, images[i].width);
    }
    
    let halfHeight = containerHeight / 2;

    // Establece el ancho máximo y la altura igual a la mitad del alto del contenedor para todas las imágenes
    for (var i = 0; i < images.length; i++) {
      images[i].style.width = maxWidth + 'px';
      images[i].style.height = halfHeight + 'px';
    }
  }
  
  
  
  
  
  
  
  