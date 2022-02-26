<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .container-card-introduccion
      img(src="@/assets/curso/introduccion/img-introduccion_2.svg").img-animate
      p El avance de la tecnología en el campo digital hoy en día genera diferentes alternativas en el desarrollo de productos digitales, estas tecnologías o plataformas brindan la posibilidad de crear productos digitales con diferentes características.
      img(src="@/assets/curso/introduccion/img-introduccion_1.svg")
    p.mb-5 Se da la bienvenida al estudio del componente formativo 
      span.span-change “Posproducción Epub”.
      | Para adentrarse con éxito en esta experiencia se recomienda visualizar con atención el recurso que se muestra a continuación:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.container-card-introduccion
  position: relative
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  box-shadow: 0 10px 10px 10px #80808030
  border-radius: 20px
  margin-bottom: 4rem
  p
    padding-left: 4rem
  img
    max-height: 194px
    max-width: 272px
    margin-left: auto
    border-radius: 20px
  .img-animate
    position: absolute
    left: 3rem
    height: 65px
    width: 65px
    bottom: -2rem
    animation: up-down linear 5s infinite
@media (max-width: 991px)
  .container-card-introduccion
    p
      margin-bottom: 4rem
@media (max-width: 768px)
  .container-card-introduccion
    flex-wrap: wrap
    p
      padding: 1rem 2rem
      margin-bottom: 0
    .img-animate
      left: 1rem
@keyframes up-down
  0%
    bottom: 0
  50%
    bottom: -1.2rem
  100%
    bottom: 0
.span-change
  color: #F57C00
  font-weight: bold
</style>
