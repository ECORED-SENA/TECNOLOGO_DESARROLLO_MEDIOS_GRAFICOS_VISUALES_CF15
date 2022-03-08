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
          span(style="font-weight: bold; color: #F57C00;") un gran aliado son los programas de informática para generación de documentos como <em>Adobe InDesign</em>. 
          | Con este potente programa se pueden generar documentos <em>Epub</em>, así los usuarios podrán ver los archivos con extensión <em>Epub</em>.
        p(style="background-color: #B1F7FD;").px-3.px-md-5.py-3.py-md-4.mb-auto Son varias consideraciones que se deben tener presentes en el momento de generar un documento para posteriormente, convertirlo adecuadamente en un libro electrónico de formato <em>Epub</em>. En <em>Indesing</em> se tiene dispuesta una serie de herramientas que permiten crear <em>e-books</em> con muy poco empeño.
      .col-12.col-md-6
        img(src="@/assets/curso/tema2/img-t_2-1.png" data-aos="zoom-in-up").ps-0.ps-md-5.py-2
    
    p.mb-5 Estas son algunas de las particularidades y herramientas más destacadas de <em>Indesing</em>:

    .col-12.mb-4
      .container-card-1
        .card-img-t_2.col-12.col-md-2
          img(src="@/assets/curso/tema2/img-t_2-2.png").w-100
        .card-text.col-12.col-md-10.ms-auto
          .col-12.col-md-10.ms-auto.my-4.px-4
            p.fw-bold.mb-0 1. Composición de texto y páginas
            .indicador--click(v-if="indicadort1" style="left: 69%; top: 25%")
            p.mb-0.col-12.col-md-11.me-auto Es sustancial comprender que el modelo de documento <em>Epub</em> es totalmente diferente a la versión impresa, para controlar la composición del documento en               
              em(@click="modal1 = true" style="font-weight: bold; text-decoration: underline; cursor: pointer;" @mouseover="indicadort1 = false") InDesign 
              | es recomendable trabajar con un solo marco de texto por cada página y vincular todos los marcos entre ellos, de modo que solo hay una línea de texto.
            br
            .d-flex.flex-wrap.indicador__container(@mouseover="indicadort2 = false")
              .indicador--click(v-if="indicadort2" style="left: 95%; top: 50%")
              p.col-12.col-md-11.pe-0.pe-md-4.mb-0 La mayoría de los libros electrónicos actuales permiten al usuario cambiar la fuente, el tamaño, la alineación, el color, la imagen de fondo y los márgenes. Si el texto contiene notas al pie, marcas, imágenes, o elementos similares, se puede formatear para distinguirlos lo suficiente del cuerpo principal del texto. 
              img(src="@/assets/curso/tema2/icon-info.svg" style="max-width: 65px; cursor: pointer" @click="modal2 = true").col-12.col-md-1.mx-auto
    
    .col-12.d-flex.flex-wrap.mb-3
      .col-12.col-md-5.p-4.d-flex.flex-wrap.alig-items-center.indicador__container(style="background-color: #FFF4C6" @mouseover="indicadort3 = false").mb-3.mb-md-0
        .col-12.col-md-10.ms-auto.my-auto
          p.fw-bold.mb-0 2. Ejemplos de páginas de muestras
          p.mb-0 Todo lo que se coloque en la página de inicio, como encabezados, pies de página, número de página, logotipos, etc., se eliminará del archivo <em>EPUB</em> final, porque el documento <em>EPUB</em> no caracteriza la estructura de la página. 
        img(src="@/assets/curso/tema2/icon-info.svg" style="max-width: 65px; cursor: pointer" @click="modal3 = true").col-12.col-md-2.mt-auto
        .indicador--click(v-if="indicadort3" style="left: 88%; top: 75%")
      .col-12.col-md-3.position-relative.container-img-pt-3.mb-3.mb-md-0
        div.mx-0.mx-md-3.h-100.px-4.text-center.indicador__container(style="background-color: #B1F7FD;" @mouseover="indicadort4 = false")
          .indicador--click(v-if="indicadort4" style="left: 50%; top: 50%")
          img(src="@/assets/curso/tema2/img-t_2-3.png" style="max-width: 229px; position: relative; top: -20%; cursor: pointer;" @click="modal4 = true").mx-auto
          p.fw-bold(style="margin-top: -1.5rem") 3. Trabaja con capítulos y secciones de documento
      .col-12.col-md-4.p-4.indicador__container(style="background-color: #FFF4C6; cursor: pointer" @click="modal5 = true" @mouseover="indicadort5 = false")
        .indicador--click(v-if="indicadort5" style="left: 50%; top: 50%")
        p.fw-bold.mb-0 4. Estilo de texto
        p.mb-0 Los lectores de libros electrónicos, generalmente, permiten al usuario elegir estilo, tamaño de texto y, a veces, ajustar alineación,  espaciado entre líneas, espaciado entre párrafos y color de fondo del texto. En el caso de funciones avanzadas, como capítulo, propósito general o texto de párrafo, es posible que se pierdan. 
    
    .col-12.d-flex.flex-wrap.mb-3
      .col-12.col-md-6.pe-0.pe-md-2.mb-3.mb-md-0
        .col-12.d-flex.flex-wrap.pt-3.pt-md-5.pb-4.px-4.ps-md-5.pe-md-4.indicador__container(style="background-color: #FFD99D" @mouseover="indicadort6 = false")
          .col-12.col-md-10
            p.fw-bold.mb-0 5. Línea de carácter
            p Una de las características más notables de la familia de fuentes Open Type es la inclusión de un conjunto de caracteres extendido, que puede contener muchas variaciones del mismo carácter (por ejemplo, cuatro formas de representar la letra Q mayúscula).
          img(src="@/assets/curso/tema2/icon-info.svg" style="max-width: 65px; cursor: pointer" @click="modal6 = true").col-12.col-md-2.mt-auto
          .indicador--click(v-if="indicadort6" style="left: 86%; top: 75%")
      .col-12.col-md-6.ps-0.ps-md-2
        .col-12.h-100.px-4.px-md-5.d-flex(style="background-color: #FFF4C6").pt-3.pt-md-0
          .my-auto
            p.fw-bold.mb-0 6. Espaciados de línea y saltos de línea
            p.mb-3.mb-md-0 La mayoría de los lectores electrónicos que admiten el formato EPUB eliminan los saltos de párrafo adicionales. Si se desea dejar espacio entre párrafos, debe establecerlo en Estilo de párrafo, utilizando las opciones de espaciado de párrafo 
              span.indicador__container(style="font-weight: bold; color: #F57C00; cursor: pointer; text-decoration: underline;" @click="modal7 = true" @mouseover="indicadort7 = false") Antes y Después. 
                .indicador--click(v-if="indicadort7" style="left: 50%; top: 50%")

    .col-12.d-flex.flex-wrap.mb-5
      .col-12.col-md-4.d-flex(style="background-color: #FFF4C6").mb-3.mb-md-0
        .px-4.px-md-5.my-4
          p.fw-bold.mb-0 7. Lista
          p.mb-0 El formato <em>Epub</em>, originalmente, admite listas con viñetas pero, para obtener la salida correcta, debe usar la función de lista incorporada de la versión cs4 del programa.
      .col-12.col-md-4.container-imagen-pt-8.mb-3.mb-md-0
        div.mx-0.mx-md-3.h-100.indicador__container(style="background-color: #B1F7FD; cursor: pointer;" @click="modal8 = true" @mouseover="indicadort8 = false")
          .indicador--click(v-if="indicadort8" style="left: 50%; top: 50%")
          .px-4.px-md-5.pt-4.position-relative
            p.mb-0.fw-bold 8. Márgenes, hipervínculos y referencias
            img(src="@/assets/curso/tema2/img-t_2-4.png", style="max-width: 224px; top: 50%; right: 5%").position-absolute
      .col-12.col-md-4.d-flex(style="background-color: #FFF4C6; cursor: pointer;" @click="modal9 = true")
        .px-4.px-md-5.my-3.my-md-auto.indicador__container(@mouseover="indicadort9 = false")
          .indicador--click(v-if="indicadort9" style="left: 50%; top: 50%")
          p.fw-bold.mb-0 9. Imágenes y objetos
          p.mb-0 Las imágenes y los objetos del documento aparecerán colocados aleatoriamente en el archivo <em>EPUB</em> final.

    .col-12.pt-3.pt-md-5
      .container-publicacion-dijital
        .col-12.col-md-2
          img(src="@/assets/curso/tema2/icon-camara.png" style="max-width: 107px; margin-top: -3rem; margin-left: auto;").pe-3
        .col-12.col-md-9.py-3.px-4.px-md-0.d-flex.flex-wrap.flex-md-nowrap
          p.mb-4 Para continuar exitosamente el estudio de este componente amplíe conceptos y acciones clave del proceso de producción y publicación de productos digitales (formato Epub), analizando el vídeo 
            span(style="font-weight: bold; text-decoration: underline;") Publicación digital.
          a.boton.my-auto.color-acento-contenido.indicador__container(style="min-width: 96px; max-height: 44px" @click="modal10 = true" @mouseover="indicadort10 = false")
            span Ver video
            .indicador--click(v-if="indicadort10")

    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto
          img(src="@/assets/curso/tema2/img-modal_t_2-1.png" style="max-width: 384px;").mb-4.mx-auto
          p.ps-0.ps-md-4 En esta imagen puede ver que todo el texto, imágenes y leyendas de este libro, pertenecen a un único flujo de texto.

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto.d-flex.flex-wrap.flex-md-nowrap
          img(src="@/assets/curso/tema2/img-modal_t_2-2.png" style="max-width: 107px; max-height: 107px").mb-4
          p.ps-0.ps-md-4 Un ejemplo de esto sería hacer que el título de un capítulo sea más grande que el principal del texto; negrita, centro y espacio después del párrafo dos veces más que el principio. 
            br
            br
            | Si el último documento es muy importante es aconsejable trabajar en dos versiones del mismo documento, una para exportar el formato PDF y una diferente para generar el libro en <em>Epub</em>.
    
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto.d-flex.flex-wrap.flex-md-nowrap
          img(src="@/assets/curso/tema2/img-modal_t_2-3.png" style="max-width: 107px; max-height: 107px").mb-4
          p.ps-0.ps-md-4 El documento final mostrará los elementos clave de forma arbitraria a lo largo del libro, por lo tanto se puede usar una página de inicio, completamente en blanco, y elegir usar ciertos elementos en ella. 
            span(style="font-weight: bold; color: #F57C00;") Recuerde que su única función es indicar cuándo se trabaja con documentos de InDesign.

    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto.d-flex.flex-wrap.flex-md-nowrap
          img(src="@/assets/curso/tema2/img-modal_t_2-4.png" style="max-width: 322px; max-height: 194px").mb-4
          p.ps-0.ps-md-4 Dado que el formato EPUB no define la estructura de la página, las columnas, páginas y saltos de sección ingresados en InDesign se perderán. Así, el archivo <em>EPUB</em> final debe dividirse en capítulos o partes (si es un documento largo, esto es muy recomendable, como manuales o novelas), cree tantos documentos de InDesign independientes como tantas partes haya en el archivo <em>EPUB</em> final: portada, créditos, índice, cada uno de los capítulos y contraportada. En el ejemplo de la imagen siguiente, hay un panel de libro que contiene varios documentos de <em>Indesing</em>: portada, índice y cuatro capítulos.
    
    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto.d-flex.flex-wrap.flex-md-nowrap
          img(src="@/assets/curso/tema2/img-modal_t_2-5.png" style="max-width: 107px").mb-4
          p.ps-0.ps-md-4 El formato Epub se desarrolla y mejora constantemente y su compatibilidad varía entre los lectores, por lo que el último aspecto del documento debe considerarse en, al menos, dos dispositivos.

    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto.d-flex.flex-wrap.flex-md-nowrap
          img(src="@/assets/curso/tema2/img-modal_t_2-6.png" style="max-width: 291px").mb-4
          p.ps-0.ps-md-4 Al exportar libros en formato <em>EPUB</em>: si no hay fuentes incrustadas en un lector digital que admita estos caracteres, aparecerán en su lugar otros caracteres alternativos o cuadros blancos.
    
    ModalA(:abrir-modal.sync="modal7")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto
          img(src="@/assets/curso/tema2/img-modal_t_2-7.png" style="max-width: 291px").mb-4.mx-auto
          p.ps-0.ps-md-4 Los saltos de línea forzados (Texto&#62; Insertar salto de carácter&#62; Salto de línea forzado) se conservan en los documentos <em>EPUB</em>. Dado que el flujo de texto se adaptará al ancho de la pantalla del lector digital, los saltos requeridos probablemente se traducirán en una interrupción en el flujo de texto. Por lo tanto, es mejor deshacerse de él. Utilice el cuadro de diálogo Buscar / Modificar para reemplazar las comas requeridas con un espacio antes de exportar el documento.
    
    ModalA(:abrir-modal.sync="modal8")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto
          img(src="@/assets/curso/tema2/img-modal_t_2-8.png" style="max-width: 291px").mb-4.mx-auto
          p.ps-0.ps-md-4 Las notas al pie se exportan correctamente en formato <em>epub</em>, debido a que la estructura de la página original no se guarda, se convierten automáticamente en notas al pie al final del documento. La siguiente imagen muestra cómo se ven sus anotaciones de <em>Indesing</em> cuando se exportan a un <em>epub</em>.

    ModalA(:abrir-modal.sync="modal9")
      .row.align-items-center
        .col-md-8.mb-4.mb-md-0.mx-auto
          img(src="@/assets/curso/tema2/img-modal_t_2-9.png" style="max-width: 291px").mb-4.mx-auto
          p.ps-0.ps-md-4 Si bien es probable que las imágenes se procesen manualmente después de la exportación, el proceso de acoplamiento ahorra tiempo al colocarlas exactamente dónde están en el libro. Dado que InDesign solo puede usar un tipo de objeto por lienzo estático, no será posible colocar la imagen y la anotación en el mismo lugar.
            br
            br
            | Además, el orden del contenido en el documento no coincidirá exactamente con el orden en el que aparece en el archivo <em>EPUB</em>, por lo que el formato del documento final deberá cambiarse manualmente.

    ModalA(:abrir-modal.sync="modal10")
      .row.align-items-center
        h4.titulo-cuarto Video
        figure.mb-5(v-if="modal10")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ndUhhq0b5uM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    indicadort1: true,
    modal2: false,
    indicadort2: true,
    modal3: false,
    indicadort3: true,
    modal4: false,
    indicadort4: true,
    modal5: false,
    indicadort5: true,
    modal6: false,
    indicadort6: true,
    modal7: false,
    indicadort7: true,
    modal8: false,
    indicadort8: true,
    modal9: false,
    indicadort9: true,
    modal10: false,
    indicadort10: true,
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
