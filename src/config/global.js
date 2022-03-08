export default {
  global: {
    componenteFormativo: 'Posproducción <em>Epub</em>',
    descripcionCurso: `Mediante este componente el aprendiz estará más y mejor capacitado en lo 
      relativo a la posproducción <em><b>Epub</b></em>, fase clave de ajustes y correcciones 
      previos a la publicación del producto digital. Asimismo, afianzará su saber y 
      habilidades para el control de calidad de productos hacia el usuario, 
      generación de documentos, validación de archivos <em><b>Epub</b></em>, publicación de
      contenidos, entre otras.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Posproducción',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Generación de documentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Formatos de archivo y aplicabilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Rutinas de comprobación de errores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Visualización y validación de los archivos <em>Epub</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Diagnóstico y corrección de funcionamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Exportación y salida de archivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Publicación de contenido',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Pruebas y actualizaciones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Adell, F. & Casacuberta, D. (2020). Plataformas para la publicación digital editorial. OUC.',
      link:
        'http://disseny.recursos.uoc.edu/materials/prod-digital/es/8-3-plataformas-para-publicar-y-vender-revistas-digitales/',
    },
    {
      referencia:
        'Adobe. (2021). Exportación de contenido a <em>EPUB</em>. Helpxadobe.',
      link:
        'https://helpx.adobe.com/es/indesign/using/export-content-epub-cc.html',
    },
    {
      referencia:
        'Alonso, J. & Cordón, J. (2010). ¿Qué son, para qué sirven y cómo funcionan los DRM? Universoabierto.',
      link:
        'https://universoabierto.org/2016/01/29/que-son-para-que-sirve-y-como-funcionan-los-drm/',
    },
    {
      referencia:
        'Benito, I. (2014). ¿Cómo podemos solucionar los errores de un archivo <em>ePub</em>? Algoentremanos.',
      link:
        'https://algoentremanos.com/como-podemos-solucionar-los-errores-de-un-archivo-epub/',
    },
    {
      referencia:
        'Data 2 Check. (2018.) Documentación data2check - EpubCheck. Data2check.',
      link: 'https://www.data2check.de/es/documentation/epubcheck.html',
    },
    {
      referencia: 'DigitalBe. (2012). ¿Qué es? ¿Para qué sirve? Digitalbe.',
      link: 'https://digitalbe.com/2012/09/27/idpf-que-es-para-que-sirve/',
    },
    {
      referencia:
        'Ediciones eni. (2020.) Modificar el espacio entre caracteres. Ediciones-eni.',
      link:
        'https://www.ediciones-eni.com/open/mediabook.aspx?idR=efeba53cc3003f4b2d3428f3d73cfe34',
    },
    {
      referencia:
        'Gestión MaquetadordeLibros. (2021). Validar archivos <em>EPUB</em>. Maquetadordelibros.',
      link: 'https://maquetadordelibros.es/validar-archivos-epub/',
    },
    {
      referencia:
        'Nousmedis. (2020). Creación de libros electrónicos en formato <em>EPUB</em> con <em>InDesign</em> CS4. Nousmedis.',
      link:
        'https://nousmedis.com/2010/01/creacion-de-libros-electronicos-en-formato-epub-con-indesign-cs4/',
    },
    {
      referencia:
        'Núñez, L. (2019). Qué son las fuentes opentype. Enfoquegaussiano.',
      link: 'https://www.enfoquegaussiano.com/que-son-las-fuentes-opentype/',
    },
    {
      referencia:
        'Reviversoft. (2021). <em>EPUB</em> Extensión del archivo. Reviversoft.',
      link: 'https://www.reviversoft.com/es/file-extensions/epub',
    },
    {
      referencia: 'Sinjania. (2021). El formato <em>epub</em>. Sinjania.',
      link:
        'https://www.sinjania.com/el-formato-epub/#:~:text=Epub%20es%20el%20acr%C3%B3nimo%20de,de%20lectura%20como%20los%20ebooks.',
    },
    {
      referencia:
        'Vazquez, V. (2021). ¿Qué es Calibre? – Crea y distribuye tu libro digital. Digital.editorial.',
      link: 'https://digital-editorial.com/que-es-calibre/',
    },
  ],
  glosario: [
    {
      termino: '<b>Calibre</b>',
      significado:
        'Calibre es un <em>software</em> gratuito para Mac, Windows y Linux que permite hacer todo lo relacionado con <em>eBooks</em>, excepto crearlos. (Vázquez, 2021).',
    },
    {
      termino: '<b>DRM</b>',
      significado:
        'Esta es una tecnología muy utilizada en la industria del libro electrónico, y no muchos autores y usuarios saben cómo funcionan los sistemas de gestión de derechos de autor (Arévalo y Cordón, 2010).',
    },
    {
      termino: '<b><em>Epub Checker</em></b>',
      significado:
        'Es el método más adecuado para probar la validez y conformidad de los documentos en formato <em>EPUB</em>, es una biblioteca Java de fuente abierta (Data2Check, 2018).',
    },
    {
      termino: '<b>IDPF</b>',
      significado:
        'El Foro Internacional de Publicaciones Digitales es la organización que establece estándares y la fuerza impulsora de la industria editorial digital. El objetivo de IDPF es establecer un estándar completo y confiable para la publicación de libros digitales, responsable del estándar llamado <em>Epub</em> (DigitalBe, 2012).',
    },
    {
      termino: '<em><b>Kerning</b></em>',
      significado:
        'Es el proceso de aumentar o disminuir el espacio entre pares de caracteres. La unidad es una milésima de un cuarto e <em>InDesign</em> tiene el valor predeterminado de 20/1000 de un cuarto. <em>InDesign</em> (Mac) o Editar (PC) - Preferencias - Unidades e incrementos. En el área Incremento del teclado, cambie el campo <em>Kerning / Tracking.</em>',
    },
    {
      termino: '<em><b>Open type</b></em>',
      significado:
        'Es la solución a una fuente que contiene las letras, números y diacríticos habituales, además cuenta con un amplio catálogo de trazos especiales, ligaduras, minúsculas e incluso tablas, caracteres diferentes a las habituales letras del latín occidental. (Nuñez, 2019).',
    },
  ],
  complementario: [
    {
      texto:
        'Generación de documentos, formatos de archivo y aplicabilidad, diagnóstico y corrección de funcionamiento, exportación y salida de archivos',
      tipo: 'Artículo',
      link:
        'https://www.accessibletextbooksforall.org/es/historias/epub-herramientas-y-lectores-de-autor%C3%ADa',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
