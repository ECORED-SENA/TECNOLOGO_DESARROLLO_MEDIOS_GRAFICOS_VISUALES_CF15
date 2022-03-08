<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Diagnóstico y corrección de funcionamiento
    
    p.mb-5 Realizada la revisión mediante la utilización del programa de validación <em>Epub Check</em>, se realiza un diagnóstico del funcionamiento. Se debe continuar con la recolección de información que se ha obtenido en los diferentes dispositivos y variables, con el fin de tomar decisiones y proceder a corregir lo que sea necesario para la corrección de funcionamiento.
    img(src="@/assets/curso/tema6/img_t_6-1.png" data-aos="zoom-in-up").mb-5

    .d-flex.flex-wrap.mb-5
      .col-12
        p Aquí se realizan modificaciones del código y también un proceso de edición de contenidos relacionados con el formato en que se esté trabajando, con el propósito de llevar a cabo los correspondientes cambios en el producto digital para solucionar los problemas detectados en el análisis previamente realizado en los contenidos.

    .container-formato.col-12.col-md-8.mx-auto.mb-5
      .col-12.col-md-6.mb-3.mb-md-0
        .container-card-formato.mx-2(:class="formatSelect == 0 ? 'select-formato' : ''" @click="formatSelect = 0")
          img(src="@/assets/curso/tema6/icon_t_6-1.svg" style="max-height: 107px; max-width: 107px; margin-top: -1.5rem")
          p.mb-0 ¡Atención!
      .col-12.col-md-6.mb-3.mb-md-0
        .container-card-formato.mx-2(:class="formatSelect == 1 ? 'select-formato' : ''" @click="formatSelect = 1")
          img(src="@/assets/curso/tema6/icon_t_6-1.svg" style="max-height: 107px; max-width: 107px; margin-top: -1.5rem")
          p.mb-0 Elección de formato
      .col-12(style="background-color: #F3F9FF; border-radius: 10px").mt-3
        p.px-4.px-md-5.py-4.py-md-5(v-if="formatSelect == 0") En esta etapa, el producto inicial ha pasado por producción y programación, también por revisión de estilo y forma; de este modo será fácil cuando el contenido funciona bien. Por el contrario, será difícil y extensa si se han encontrado muchos errores por corregir en su funcionamiento.
        p.px-4.px-md-5.py-4.py-md-5(v-if="formatSelect == 1") Aplicadas las correcciones necesarias, se debe pasar nuevamente por una etapa de revisión para determinar el buen funcionamiento del producto digital y verificar que se ha solucionado el problema y que estos cambios no hayan generado otros imprevistos en el funcionamiento.
    
    .col-12.pt-3.pt-md-5
      .container-publicacion-dijital
        .col-12.col-md-2
          img(src="@/assets/curso/tema6/icon_t_6-2.svg" style="max-width: 107px; margin-top: -3rem; margin-left: auto;").pe-3
        .col-12.col-md-9.py-3.px-4.px-md-0
          p.mb-0 Este proceso concluirá cuando el producto digital se pueda visualizar adecuadamente en todos los dispositivos y sistemas operativos, propios del formato en el que se está ofreciendo.
</template>
<script>
export default {
  name: 'Tema6',
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
.container-publicacion-dijital
  margin-top: 2rem
  background-color: #FFD99D
  display: flex
  flex-wrap: wrap
.container-formato
  display: flex
  flex-wrap: wrap
  .container-card-formato
      min-height: 103px
      border: 3px solid #E68131
      border-radius: 10px
      display: flex
      align-items: center
      justify-content: center
      cursor: pointer
      .titulo-principal__numero
        background-color: #F57C00
        min-width: 37px
        height: 37px
        width: 37px
        margin-right: .5rem
        span
          font-size: 18px
      p
        font-size: 18px
        font-weight: bold
  .select-formato
    border: 3px solid #FFD99D
    background-color: #FFD99D
    position: relative
    &::after
      content: ''
      position: absolute
      bottom: -50%
      left: 50%
      transform: rotate(45deg) translate(-50%, -50%)
      height: 40px
      width: 40px
      background-color: #FFD99D
  @media (max-width: 768px)
    .select-formato
      &::after
        height: 0
        width: 0
</style>
