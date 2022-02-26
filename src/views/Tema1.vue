<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Posproducción
    
    .col-12.d-flex.flex-wrap.mb-5
      .col-12.col-md-5
        p.fw-bold En la posproducción como en todo proceso realizado en la etapa de producción deberán suceder una serie de análisis y controles, con el fin de obtener mejores resultados. 
      .col-12.col-md-7
        p La posproducción Epub es 
          span(style="font-weight: bold; color: #F57C00") el primer paso que se debe hacer para asegurar una correcta verificación del producto en las diferentes 
          | plataformas o sistemas operativos, dispositivos digitales de salida y aplicaciones de lectura, entre otros aspectos.
          br
          br
          |Lo anterior implica algunas generalidades importantes como las que se enuncian a continuación:

    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src="@/assets/curso/tema1/icono-card_t_1-1.png").img-card
              p.title-card Dispositivos varios
              p.text-center En esta etapa se debe asegurar el uso de diferentes dispositivos de lectura, con el fin de realizar un análisis del comportamiento del producto en cada uno de los dispositivos como, por ejemplo, tablets, teléfonos inteligentes, lectores de libros electrónicos, computadores de mesa, portátiles, etc. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img-card_t_1-1.png')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.derecha.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img-card_t_1-2.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src="@/assets/curso/tema1/icono-card_t_1-2.png").img-card
              p.title-card Visualización correcta
              p.text-center Es crucial observar que las características de cada dispositivo o sistema no afecten la visualización, ni la estructura del contenido. El usuario debe ver el contenido correctamente independientemente del dispositivo que utilice para su lectura. 

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img-card_t_1-3.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src="@/assets/curso/tema1/icono-card_t_1-3.png").img-card
              p.title-card Análisis de comportamiento
              p.text-center Los dispositivos multifuncionales, no solamente han sido diseñados para leer libros y contenidos textuales. Se debe analizar el comportamiento, en lo posible, en todos los dispositivos digitales, así mismo, en los diferentes sistemas operativos como Android y iOS, ya que en este proceso es la aplicación la que se encarga de dar forma al contenido.

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-slide.derecha.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img-card_t_1-4.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src="@/assets/curso/tema1/icono-card_t_1-4.png").img-card
              p.title-card Variable de formato o parámetro
              p.text-center En síntesis, debe realizarse seguimiento en todas las opciones en que se pueda visualizar el contenido, maximizando también las variables que hay que estudiar, como el contenido horizontal o vertical y toda la información que haga parte del formato o parámetro. 

    .row.mb-5
      .col-sm-6.col-xl-3.mx-auto
        .tarjeta.tarjeta-slide.derecha.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img-card_t_1-5.png')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src="@/assets/curso/tema1/icono-card_t_1-5.png").img-card
              p.title-card Variable de formato o parámetro
              p.text-center  En síntesis, debe realizarse seguimiento en todas las opciones en que se pueda visualizar el contenido, maximizando también las variables que hay que estudiar, como el contenido horizontal o vertical y toda la información que haga parte del formato o parámetro. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
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
.img-card
  max-width: 125px
  margin-right: auto
  margin-left: auto
  margin-bottom: 1rem
.title-card
  font-size: 18px
  font-weight: bold
  margin-bottom: 2rem
  text-align: center
.tarjeta.tarjeta-slide
  cursor: pointer
</style>
