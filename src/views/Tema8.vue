<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Modelos de negocio para publicaciones digitales
    
    .col-12.d-flex.flex-wrap.mb-5
      .col-12.col-md-5
        p.mb-4.mb-md-0 En la actualidad existen varias opciones para la creación de objetos digitales, publicación, elección de producto, formatos o <em>softwares</em> y, desde luego, varias opciones para su comercialización. El proceso de ingeniería específico para crear un producto digital determina las oportunidades de negocio o el trabajo que se debe realizar para alcanzarlas. 
      .col-12.col-md-7
        .p-4.mb-4.h-100.d-flex.align-items-center(style="background-color: #B1F7FD" data-aos="zoom-in-up")
          p.mb-0 Siempre puede se pueden convertir productos a otros formatos de 
            | publicación digital o modificar la arquitectura técnica para que se adapte a los requisitos específicos de las plataformas de 
            span(style="font-weight: bold; color: #F57C00;") publicación digital, 
            | tal como se encuentran en su arquitectura. 
    
    img(src="@/assets/curso/tema8/img_t_8-1.png" data-aos="zoom-in-up").mb-5
    .col-12.pt-3.pt-md-5.mb-5
      .container-publicacion-dijital
        .col-12.col-md-2
          img(src="@/assets/curso/tema6/icon_t_6-1.svg" style="max-width: 107px; margin-top: -1rem; margin-left: auto;").pe-3
        .col-12.col-md-9.py-3.px-4.px-md-0
          h5 ¡Atención! 
          p.mb-0 Si no se tienen en cuenta, desde el principio, las plataformas que se desea utilizar y los formatos que se publican, el proceso puede llevar mucho tiempo, presentar dificultades o, incluso, errores.
    
    p.mb-5 A continuación, se muestran y explican algunos aspectos importantes, relativos a la publicación de contenido. Preste atención a cada uno de ellos:

    .row.mb-5
      .col-12.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-botones.lineaT_t_8
          p.d-flex.flex-wrap.flex-md-nowrap(numero="1" titulo="Características del objeto digital") 
            img(src="@/assets/curso/tema8/img-linea_t_8-1.png" style="max-width: 305px;").pe-0.me-md-4.my-4.my-md-0
            | Cabe decir que las opciones comerciales para la producción digital se centran en las características técnicas de cada objeto digital, su forma y los lenguajes de programación que se deben implementar para crearlo. Hay tantas opciones populares en todo el mundo que se pueden utilizar para publicar y comercializar productos digitales independientemente del formato y el momento de su creación. 

          p.d-flex.flex-wrap.flex-md-nowrap(numero="2" titulo="Actualización permanente de contenidos") 
            img(src="@/assets/curso/tema8/img-linea_t_8-2.png" style="max-width: 305px;").pe-0.me-md-4.my-4.my-md-0
            | Si se desea brindar contenido, constantemente actualizado, para que, por ejemplo, los usuarios descarguen periódicamente nuevas versiones del servidor a medida que estén disponibles, se deberá, entonces, ofrecer contenido en línea y mantenerlo actualizado.
          
          p.d-flex.flex-wrap.flex-md-nowrap(numero="3" titulo="Cuando se hace de forma automática") 
            img(src="@/assets/curso/tema8/img-linea_t_8-3.png" style="max-width: 305px;").pe-0.me-md-4.my-4.my-md-0
            | En este caso, es necesario que el contenido se muestre en la red y, por tanto, utilizar lenguajes para la web o formatos que tomen estos ejemplos como <em>epubs</em>, como referencia.

          p.d-flex.flex-wrap.flex-md-nowrap(numero="4" titulo="Identificación y categorización") 
            img(src="@/assets/curso/tema8/img-linea_t_8-4.png" style="max-width: 305px;").pe-0.me-md-4.my-4.my-md-0
            | Se lleva a cabo en un entorno donde los límites conceptuales se difuminan, lo que da como resultado productos y soluciones híbridos. Es importante trabajar con las características básicas de cada modelo potencial para poder orientar y comprender las posibilidades que surgen en el proceso de publicación de contenidos digitales.

          p.d-flex.flex-wrap.flex-md-nowrap(numero="5" titulo="Publicación digital en línea") 
            img(src="@/assets/curso/tema8/img-linea_t_8-5.png" style="max-width: 305px;").pe-0.me-md-4.my-4.my-md-0
            | Desde los modelos de publicación más populares hasta los más nuevos, se relacionan con la evolución de la tecnología en la web. La publicación digital en línea es una realidad en todas las industrias digitales y, en el proceso, ha surgido un nuevo conjunto de oportunidades para catalogar, indexar, procesar y mostrar el contenido editorial digital.
    
    p.mb-5.fw-bold Modelos de negocio para publicaciones digitales

    .col-12.d-flex.flex-wrap.mb-5
      .col-12.col-md-5
        img(src="@/assets/curso/tema8/img_t_8-2.png").mb-4
      .col-12.col-md-7
        p Suelen categorizarse en dos grupos principales: modelos clásicos y modelos digitales. La venta directa de ejemplares individuales es, sin duda, un modelo para las publicaciones digitales e, incluso con la llegada de nuevos productos como libros y revistas digitales ha conservado muchas características similares al formal, para mantener la validez del modelo.
        br
        p(style="background-color: #B1F7FD").py-4.px-4.px-5 Las ventas directas siguen siendo modelo en lo referente a contenidos de ciertas áreas, pero es muy fácil que evolucione hacia un nuevo medio. Por definición, la mayoría de los géneros literarios necesitan paradigmas para preservar su significancia y, por otro lado, estos paradigmas de acceso a una copia han de evolucionar, como se ve en la tabla.
    
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Modelos clásicos y modelos digitales

    .mb-5(style="overflow-x: auto;")
      table(style="border-collapse: collapse; min-width: 700px;")
        thead
          tr.text-center
            th(style="background-color: #FFA726;") 
              p.d-flex.align-items-center.justify-content-center.mb-0.fw-bold(style="min-height: 30px; font-size: 18px") Modelos clásicos
            th(style="background-color: #FDD835;") 
              p.d-flex.align-items-center.justify-content-center.mb-0.fw-bold(style="min-height: 30px; font-size: 18px") Modelos digitales
        tbody
          tr
            td.p-0
              img(src="@/assets/curso/tema8/img_t_8-3.png")
            td.p-0
              img(src="@/assets/curso/tema8/img_t_8-4.png")
          tr
            td(style="background-color: #FFD99D")
              ul(style="list-style-type: disc; margin-left: 1.1rem").px-4.px-5.py-4
                li Venta directa ejemplares
                li Acceso por suscripción
                li Ingresos por publicidad

            td(style="background-color: #FFF4C6")
              ul(style="list-style-type: disc; margin-left: 1.1rem").px-4.px-5.py-4
                li <em>Freemium/premium</em>
                li Actualización permanente
                li <em>Open Acces / Pay what you want</em>
                li Financiación colectiva
                li Contenidos parciales
                li Contenidos personalizados

    p.mb-5 Visualice el recurso que se presenta a continuación y conozca, con mayor profundidad, las particularidades y aspectos clave de los modelos de negocio para publicaciones digitales:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hwKze4AvJEM" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>
<script>
export default {
  name: 'Tema8',
  data: () => ({}),
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
.lineaT_t_8
  .linea-tiempo-d__item--selected
    .linea-tiempo-d__item__content.tarjeta
      background-color: #B1F7FD
</style>
