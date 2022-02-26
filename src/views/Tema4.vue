<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Rutinas de comprobación de errores
    
    .row
      .col-12.col-md-6.col-xxl-5
        p.pe-0.pe-md-5 Una de las comprobaciones de errores existentes consiste, por ejemplo, es identificar errores en el libro electrónico. Para hacer esto hay una herramienta en línea llamada Epub Validator, que proporciona todos los errores del libro. El archivo debe tener menos de 10 MB para que la herramienta funcione. Una vez que descargue el libro electrónico y descubra errores aparecerá la sección de soluciones. 
          br
          br
          span(style="font-weight: bold; color: #F57C00") Para corregir errores en archivos Epub, una de las mejores herramientas se llama Calibre. 
          |Es una herramienta de administración de libros electrónicos que se puede arreglar de una forma muy sencilla: la acción se ejecutará en su biblioteca. Como se aprecia en la imagen, al hacer clic derecho se puede elegir Editar libro, luego se abrirá una ventana como la que muestra la siguiente figura:
      .col-12.col-md-7.ps-0.ps-md-6.col-xxl-7
        .titulo-sexto.color-acento-contenido.ms-0.ms-md-5
          h5 Figura 1, Edición de Epub
          span subtitulo
        img(src="@/assets/curso/tema4/img_t_4-1.png" data-aos="zoom-in-up").my-4.my-md-0
    
    p.mb-5 Se deben tener en cuenta los siguientes pasos para corregir los errores de un elemento Epub:

    SlyderF.mb-5.bg-carousel_t_4(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4.h-100(style="background-color: #B1F7FD60")
        .row.justify-content-center.mb-3
          div
            .lista-ol--cuadro__vineta.mb-3
              span.fw-bold 01
          p Analizar el estado de la publicación Epub. A menudo ocurren los mismos errores que con la herramienta de verificación en línea. Epub podría anunciar automáticamente que el archivo tiene un error. Se recomienda realizar una verificación en línea y detallar los errores obtenidos con el <em>Epub Checker</em>.

      .tarjeta.p-4.h-100(style="background-color: #FFF4C660")
        .row.justify-content-center.mb-3
          div
            .lista-ol--cuadro__vineta.mb-3
              span.fw-bold 02
          p Una vez encontrados los errores, en el cuadro respectivo de corrección se podrán corregir automáticamente. Por lo general, esto es suficiente.
      
      .tarjeta.p-4.h-100(style="background-color: #B1F7FD60")
        .row.justify-content-center.mb-3
          div
            .lista-ol--cuadro__vineta.mb-3
              span.fw-bold 03
          p Nuevamente debe corregir el error manualmente, seleccionando directamente el archivo Epub donde está el error y modificar el código que aparece en la consola central directamente.
      
      .tarjeta.p-4.h-100(style="background-color: #FFF4C660")
        .row.justify-content-center.mb-3
          div
            .lista-ol--cuadro__vineta.mb-3
              span.fw-bold 04
          p Comprobador de Epub siempre proporcionará la información necesaria para localizar errores en un archivo de Epub, e incluso mostrará la línea en el archivo donde está el error.

      .tarjeta.p-4.h-100(style="background-color: #B1F7FD60")
        .row.justify-content-center.mb-3
          div
            .lista-ol--cuadro__vineta.mb-3
              span.fw-bold 05
          p Una vez que se completa la reparación se debe guardar el ejemplo y volver a publicarlo en Google Play Books o según corresponda.

</template>
<script>
export default {
  name: 'Tema4',
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
.bg-carousel_t_4
  .horizontal-scroll
    align-items: stretch !important
</style>
