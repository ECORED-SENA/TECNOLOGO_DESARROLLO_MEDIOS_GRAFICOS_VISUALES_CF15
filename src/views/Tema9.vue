<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Modelos de negocio para publicaciones digitales
    
    .col-12.d-flex.flex-wrap.mb-5
      .col-12.col-md-4
        p Para las pruebas y actualizaciones Epub existen varias herramientas.
      .col-12.col-md-7.ms-auto
        p Con ellas y con su apropiada aplicación se favorece el proceso de calidad de los productos digitales finales. A continuación, se describen tres herramientas muy comunes para el proceso de actualización Epub:
    
    .col-812.col-md-8.ms-auto
      .titulo-sexto.color-acento-contenido
        h5 Pruebas y actualizaciones

    .col-12.col-md-10.mx-auto.mb-5.pb-0.pb-md-5.img-modal_t_9
      ImagenInfograficaB.color-primario.mb-0.mb-md-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema9/img_t_9-1.png', alt='')

        div(x="53%" y="13%" tooltip="tooltip de max 35 caracteres" numero="").d-flex.flex-wrap.flex-md-nowrap.align-items-center
          img(src='@/assets/curso/tema9/img-modal_t_9-1.png' style="max-width: 364px")
          p.ps-0.ps-md-4(style="color: black !important") Los libros publicados en Amazon aparecen en la biblioteca de KDP con un estado en línea. Pasando el cursor sobre las elipses en Acciones de libros electrónicos en Kindle, un menú que le permite elegir editar los detalles del libro electrónico, editar el contenido del libro electrónico y editar el estante de libros electrónicos. Cada una de estas opciones conduce a tres secciones principales en el formulario de publicación. Es posible navegar allí independientemente de la sección que se decida editar. En una cuenta de cliente de Amazon, pueden aparecer notas de actualización para algunos títulos en administración de su contenido y dispositivos (notifican instrucciones).

        div(x="4%" y="33%" tooltip="tooltip de max 35 caracteres" numero="").d-flex.flex-wrap.flex-md-nowrap.align-items-center
          img(src='@/assets/curso/tema9/img-modal_t_9-2.png' style="max-width: 131px")
          p.ps-0.ps-md-4(style="color: black !important") Apple Books ofrece cuatro formas de actualizar libros electrónicos. El primero, de iTunes Producer, permite editar todo: metadatos, precios, portadas, libros electrónicos completos, muestras de clips y capturas de pantalla. Este último permite resaltar el contenido y los elementos estéticos del libro. El segundo método utiliza la plataforma Books for Authors de Apple y se puede acceder desde Windows.

        div(x="38%" y="70%" tooltip="tooltip de max 35 caracteres" numero="").d-flex.flex-wrap.flex-md-nowrap.align-items-center
          img(src='@/assets/curso/tema9/img-modal_t_9-3.png' style="max-width: 106px")
          p.ps-0.ps-md-4(style="color: black !important") En tercer lugar, a través de iTunes Connect, que solo proporciona actualizaciones de precios y metadatos, pero está disponible para todos los sistemas operativos. 
            br
            br
            | La cuarta parte es para aquellos que han creado sus libros electrónicos con Pages y usan la misma aplicación para mantenerse al día con lo que se ha publicado.

        div(x="63%" y="70%" tooltip="tooltip de max 35 caracteres" numero="").d-flex.flex-wrap.flex-md-nowrap.align-items-center
          img(src='@/assets/curso/tema9/img-modal_t_9-4.png' style="max-width: 133px")
          p.ps-0.ps-md-4(style="color: black !important") La nueva versión de la plataforma de publicación digital de Apple Books para los autores. La interfaz es muy limpia y el procedimiento para modificar la descripción del archivo y el libro no es difícil a primera vista, pero el formulario no admite etiquetas HTML y no hay opción para actualizar la captura de pantalla. Cuando se publica un libro nuevo, la descripción muestra las etiquetas &#60;i&#62; y &#60;br&#62; como texto y todo en negrita.
        
        div(x="89%" y="70%" tooltip="tooltip de max 35 caracteres" numero="").d-flex.flex-wrap.flex-md-nowrap.align-items-center
          img(src='@/assets/curso/tema9/img-modal_t_9-5.png' style="max-width: 364px")
          p.ps-0.ps-md-4(style="color: black !important")  En iTunes Producer, donde el cuadro de búsqueda no seleccionaba la plataforma por título o nombre del autor. La ventana que se abre a continuación no muestra ninguna imagen de portada ni capturas de pantalla. Se sabe que permanece allí porque el nombre del archivo se lee cuando pasa el cursor sobre él. Se pueden eliminar las celdas vacías que coinciden con las instantáneas anteriores y se pueden revisar las nuevas celdas.

        div(x="25%" y="87%" tooltip="tooltip de max 35 caracteres" numero="").d-flex.flex-wrap.flex-md-nowrap.align-items-center
          img(src='@/assets/curso/tema9/img-modal_t_9-6.png' style="max-width: 103px")
          p.ps-0.ps-md-4(style="color: black !important") Google Play Forms ha cambiado mucho desde que se lanzó la primera plataforma. Ahora se necesita ubicar el libro en el catálogo. Se puede acceder a las diferentes secciones editables desde el resumen o desde el menú lateral. El procesamiento de contenido nuevo lleva algo de tiempo, pero está disponible en cuestión de horas.
    
    .col-12.py-5
      img(src="@/assets/curso/tema9/img_t_9-2.png")

</template>
<script>
export default {
  name: 'Tema9',
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
.img-modal_t_9
  .img-infografica-b__modal
    background-color: #F3F9FF !important
  .img-infografica-b__modal__btn-cerrar
    .fas
      color: black !important
</style>
