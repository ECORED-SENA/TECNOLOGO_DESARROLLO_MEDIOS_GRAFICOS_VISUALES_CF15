<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Generación de documentos

    .col-12.d-flex.flex-wrap.mb-5
      .col-12.col-md-6.d-flex.flex-wrap
        p El proceso de generación de documentos se puede realizar con algunas herramientas informáticas que brindan varias opciones al usuario; 
          span(style="font-weight: bold; color: #F57C00") un gran aliado son los programas de informática para generación de documentos como Adobe InDesign. 
          | Con este potente programa se pueden generar documentos Epub, así los usuarios podrán ver los archivos con extensión Epub.
        p(style="background-color: #B1F7FD;").d-flex.align-items-center.px-3.py-3.px-md-4 Son varias consideraciones que se deben tener presentes en el momento de generar un documento para posteriormente, convertirlo adecuadamente en un libro electrónico de formato Epub. En Indesing se tiene dispuesta una serie de herramientas que permiten crear e-books con muy poco empeño.
      .col-12.col-md-6
        img(src="@/assets/curso/tema2/img-t_2-1.png").ps-0.ps-md-5.py-2
    
    p.mb-5 Estas son algunas de las particularidades y herramientas más destacadas de Indesing:

    .col-12.mb-4
      .container-card-1
        .card-img-t_2.col-12.col-md-2
          img(src="@/assets/curso/tema2/img-t_2-2.png").w-100
        .card-text.col-12.col-md-10.ms-auto
          .col-12.col-md-10.ms-auto.my-4.px-4
            p.fw-bold.mb-0 1. Composición de cuerpo y páginas
            p.mb-0.col-12.col-md-11.me-auto Es sustancial comprender que el modelo de documento Epub es totalmente diferente a la versión impresa, para controlar la composición del documento en Indesing es recomendable trabajar con un solo marco de texto por cada página y vincular todos los marcos entre ellos, de modo que solo hay una línea de texto.
            br
            .d-flex.flex-wrap
              p.col-12.col-md-11.pe-0.pe-md-4.mb-0 La mayoría de los libros electrónicos actuales permiten al usuario cambiar la fuente, el tamaño, la alineación, el color, la imagen de fondo y los márgenes. Si el texto contiene notas al pie, marcas, imágenes, o elementos similares, se puede formatear para distinguirlos lo suficiente del cuerpo principal del texto. 
              img(src="@/assets/curso/tema2/icon-info.svg" style="max-width: 65px").col-12.col-md-1.mx-auto
    
    .col-12.d-flex.flex-wrap.mb-3
      .col-12.col-md-5.p-4.d-flex.flex-wrap.alig-items-center(style="background-color: #FFF4C6").mb-3.mb-md-0
        .col-12.col-md-10.ms-auto.my-auto
          p.fw-bold.mb-0 2. Ejemplos de páginas de muestras
          p.mb-0 Todo lo que se coloque en la página de inicio, como encabezados, pies de página, número de página, logotipos, etc., se eliminará del archivo EPUB final, porque el documento EPUB no caracteriza la estructura de la página. 
        img(src="@/assets/curso/tema2/icon-info.svg" style="max-width: 65px;").col-12.col-md-2.mt-auto
      .col-12.col-md-3.position-relative.container-img-pt-3.mb-3.mb-md-0
        div.mx-0.mx-md-3.h-100.px-4.text-center(style="background-color: #B1F7FD;")
          img(src="@/assets/curso/tema2/img-t_2-3.png", style="max-width: 229px; position: relative; top: -20%;").mx-auto
          p.fw-bold(style="margin-top: -1.5rem") 3. Trabaja con capítulos y secciones de documento
      .col-12.col-md-4.p-4(style="background-color: #FFF4C6")
        p.fw-bold.mb-0 4. Estilo de texto
        p.mb-0 Los lectores de libros electrónicos, generalmente, permiten al usuario elegir estilo, tamaño de texto y, a veces, ajustar alineación,  espaciado entre líneas, espaciado entre párrafos y color de fondo del texto. En el caso de funciones avanzadas, como capítulo, propósito general o texto de párrafo, es posible que se pierdan. 
    
    .col-12.d-flex.flex-wrap.mb-3
      .col-12.col-md-6.pe-0.pe-md-2.mb-3.mb-md-0
        .col-12.d-flex.flex-wrap(style="background-color: #FFD99D").pt-3.pt-md-5.pb-4.px-4.ps-md-5.pe-md-4
          .col-12.col-md-10
            p.fw-bold.mb-0 5. Línea de carácter
            p Una de las características más notables de la familia de fuentes Open Type es la inclusión de un conjunto de caracteres extendido, que puede contener muchas variaciones del mismo carácter (por ejemplo, cuatro formas de representar la letra Q mayúscula).
          img(src="@/assets/curso/tema2/icon-info.svg" style="max-width: 65px").col-12.col-md-2.mt-auto
      .col-12.col-md-6.ps-0.ps-md-2
        .col-12.h-100.px-4.px-md-5.d-flex(style="background-color: #FFF4C6").pt-3.pt-md-0
          .my-auto  
            p.fw-bold.mb-0 6. Espaciados de línea y saltos de línea
            p.mb-3.mb-md-0 La mayoría de los lectores electrónicos que admiten el formato EPUB eliminan los saltos de párrafo adicionales. Si se desea dejar espacio entre párrafos, debe establecerlo en Estilo de párrafo, utilizando las opciones de espaciado de párrafo 
              span(style="font-weight: bold; color: #F57C00; cursor: pointer; text-decoration: underline;") Antes y Después. 

    .col-12.d-flex.flex-wrap.mb-5
      .col-12.col-md-4.d-flex(style="background-color: #FFF4C6").mb-3.mb-md-0
        .px-4.px-md-5.my-4
          p.fw-bold.mb-0 7. Lista
          p.mb-0 El formato epub, originalmente, admite listas con viñetas pero, para obtener la salida correcta, debe usar la función de lista incorporada de la versión cs4 del programa.
      .col-12.col-md-4.container-imagen-pt-8.mb-3.mb-md-0
        div.mx-0.mx-md-3.h-100(style="background-color: #B1F7FD")
          .px-4.px-md-5.pt-4.position-relative
            p.mb-0.fw-bold 8. Márgenes, hipervínculos y referencias
            img(src="@/assets/curso/tema2/img-t_2-4.png", style="max-width: 224px; top: 50%; right: 5%").position-absolute
      .col-12.col-md-4.d-flex(style="background-color: #FFF4C6")
        .px-4.px-md-5.my-3.my-md-auto
          p.fw-bold.mb-0 9. Imágenes y objetos
          p.mb-0 Las imágenes y los objetos del documento aparecerán colocados aleatoriamente en el archivo EPUB final.

    .col-12.pt-3.pt-md-5
      .container-publicacion-dijital
        .col-12.col-md-2
          img(src="@/assets/curso/tema2/icon-camara.png" style="max-width: 107px; margin-top: -3rem; margin-left: auto;").pe-3
        .col-12.col-md-9.py-3.px-4.px-md-0
          p.mb-0 Para continuar exitosamente el estudio de este componente amplíe conceptos y acciones clave del proceso de producción y publicación de productos digitales (formato Epub), analizando el vídeo 
            span(style="font-weight: bold; cursor: pointer; text-decoration: underline;") Publicación digital.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.container-card-1
  display: flex
  flex-wrap: wrap
  position: relative
  padding-right: 0
  padding-left: 0
  .card-img-t_2
    img
      max-width: 294px
      position: absolute
      left: 3rem
  .card-text
    background-color: #FFD99D
.container-publicacion-dijital
  margin-top: 2rem
  background-color: #FDD835
  display: flex
  flex-wrap: wrap
@media (max-width: 768px)
  .container-card-1
    .card-img-t_2
      img
        position: relative
        left: 0
        margin-left: auto
        margin-right: auto
  .container-img-pt-3
    img
      position: relative
  .container-imagen-pt-8
    img
      position: relative !important
      margin-right: auto
      margin-left: auto
      top: auto
      right: auto
</style>
