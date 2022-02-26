<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Visualización y validación de los archivos Epub
    .row.mb-4.mb-md-0
      .col-12.col-md-6.col-xxl-5
        img(src="@/assets/curso/tema5/img_t_5-1.png" data-aos="zoom-in-up").my-4.my-md-0
      .col-12.col-md-6.col-xxl-6.ms-auto
        p.mb-4.mt-auto En el proceso de validación de un <b>Epub</b> es importante que el archivo no contenga ningún error que pueda generar problemas a la hora de su visualización. El formato <b>Epub</b>, así como el <b>Mobi</b>, son formatos que se adaptan a la pantalla en la que se va a ver, a diferencia de los archivos PDF, que se caracterizan por tener una composición estática y por esto se visualiza igual en todas partes. 
        .d-flex.align-items-center.py-3(style="background-color: #B1F7FD; min-height: 140px")
          img(src="@/assets/curso/tema5/icon_t_5-1.svg" style="max-width: 107px")
          p.ps-4 Una vez se maqueta un archivo en formato Epub es importante realizar la validación de los archivos que lo componen en los diferentes dispositivos digitales. 

    p.mb-5 En el proceso de validación pueden suceder algunos errores. Tenga en cuenta las particularidades que se muestran a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").acordeon_t_5
      
      div(titulo="Ejemplo")
        .d-flex.flex-wrap.flex-md-nowrap.align-items-center.px-4.px-md-5
          img(src="@/assets/curso/tema5/img-acordeon_t_5-1.png" style="max-height: 196px; max-width: 325px").mb-0.mb-md-0
          p.ps-0.ps-md-5 En este ejemplo la línea editorial ha saltado a la siguiente página, en el caso de la imagen de la izquierda porque no cabía en la pantalla, lo que genera algo no deseado.

      div(titulo="Necesidad del proceso")
        .d-flex.flex-wrap.flex-md-nowrap.align-items-center.px-4.px-md-5
            img(src="@/assets/curso/tema5/img-acordeon_t_5-2.png" style="max-height: 212px; max-width: 212px").mb-0.mb-md-0
            p.ps-0.ps-md-5 Lo que se consigue al validar un archivo epub es que esté bien, es decir, que los metadatos sean correctos, que la tabla de contenidos sea correcta, que las imágenes se muestren sin problemas y que no haya enlaces rotos. 

      div(titulo="Utilidad de validación")
        .d-flex.flex-wrap.flex-md-nowrap.align-items-center.px-4.px-md-5
            img(src="@/assets/curso/tema5/img-acordeon_t_5-3.png" style="max-height: 212px; max-width: 212px").mb-0.mb-md-0
            p.ps-0.ps-md-5 La validación sirve para determinar que el archivo no tiene problemas en los diferentes dispositivos de lectura que se vayan a implementar. 

      div(titulo="Programas")
        .d-flex.flex-wrap.flex-md-nowrap.align-items-center.px-4.px-md-5
            img(src="@/assets/curso/tema5/img-acordeon_t_5-4.png" style="max-height: 310px; max-width: 310px").mb-0.mb-md-0
            div.ps-0.ps-md-5
              p Algunos programas que realizan el proceso de validación son:
              <ul style="list-style-type: disc;">
                <li> <b>EpubCheck</b>, este es el oficial de la IDPF</li>
                <li> <b>EpubValidator</b>, es la versión online funciona hasta 10mb.</li>
                <li> <b>Flightcrew</b>, este programa es desarrollado por Google</li>
                <li> <b>Además</b>, varios de los editores de epub, como sigil, tiene esta función</li>
              </ul>

      div(titulo="Primer paso")
        .d-flex.flex-wrap.flex-md-nowrap.align-items-center.px-4.px-md-5
            img(src="@/assets/curso/tema5/img-acordeon_t_5-5.png" style="max-height: 212px; max-width: 212px").mb-0.mb-md-0
            p.ps-0.ps-md-5 El primer paso que se debe realizar cuando se crea el epub, es hacer una validación según los estándares del formato utilizado, con el fin de que cumpla con los requisitos técnicos básicos. Este procedimiento garantiza que el epub sea coherente y la información se pueda visualizar de forma correcta en diferentes dispositivos.

      div(titulo="Segundo paso")
        .d-flex.flex-wrap.flex-md-nowrap.align-items-center.px-4.px-md-5
            img(src="@/assets/curso/tema5/img-acordeon_t_5-6.png" style="max-height: 413px; max-width: 413px").mb-0.mb-md-0
            div.ps-0.ps-md-5
              p.ps-0 El siguiente paso es corregir los archivos tipográficamente en el escritorio del computador como se realiza la compaginación de un libro para impresión. Para realizar esta acción se debe usar un visualizador de contenido como, por ejemplo:
              ul(style="list-style-type: disc;")
                li Adobe digital editions
                li Visor de libros electrónicos como calibre
                li Kindle preview si se trata de un formato Mobi

      div(titulo="Tercer paso")
        .d-flex.flex-wrap.flex-md-nowrap.align-items-center.px-4.px-md-5
            img(src="@/assets/curso/tema5/img-acordeon_t_5-7.png" style="max-height: 212px; max-width: 212px").mb-0.mb-md-0
            p.ps-0.ps-md-5 El primer paso que se debe realizar cuando se crea el epub, es hacer una validación según los estándares del formato utilizado, con el fin de que cumpla con los requisitos técnicos básicos. Este procedimiento garantiza que el epub sea coherente y la información se pueda visualizar de forma correcta en diferentes dispositivos.

      div(titulo="Por último")
        .d-flex.flex-wrap.flex-md-nowrap.align-items-center.px-4.px-md-5
            img(src="@/assets/curso/tema5/img-acordeon_t_5-8.png" style="max-height: 212px; max-width: 212px").mb-0.mb-md-0
            p.ps-0.ps-md-5 Finalmente, es importante depurar el código, incluso cuando se trata de programas como sigil e indesing debido a las etiquetas, ya que automatizan el proceso y, a menudo, producen etiquetas no estándar. El código limpio evita problemas de lectura y facilita seguir trabajando en archivos estáticos.
        
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    formatSelect: 0,
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
.acordeon_t_5
  .tarjeta
    background-color: #B1F7FD60
  .acordion__activo
    background-color: #B1F7FD
</style>
