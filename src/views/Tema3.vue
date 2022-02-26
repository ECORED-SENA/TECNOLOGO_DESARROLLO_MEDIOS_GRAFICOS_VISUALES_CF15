<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Formatos de archivo y aplicabilidad
    
    .col-12.d-flex.flex-wrap
      .col-12.col-md-5
        img(src="@/assets/curso/tema3/img_t_3-1.png")
      .col-12.col-md-6.ms-auto
        p.pt-4 Analizando la publicación de elementos digitales se puede resumir que, para un usuario, será irrelevante el formato en que se encuentre este producto, es decir, pueden estar en formato Epub o el formato Mobi. Si bien es cierto que es diferente leer un libro en formato PDF porque  posee una variedad de ventajas como, por ejemplo, la configuración de tipo de fuentes, su tamaño o también el ajuste del texto en pantalla. 
          br
          br
          | En la etapa de posproducción se pueden definir alternativas de formatos para la publicación de productos electrónicos, analizado su contenido y el objetivo o alcance de la publicación. Tenga presente los siguientes aspectos:

    .container-formato.col-12.col-md-8.mx-auto.mb-5
      .col-12.col-md-6.mb-3.mb-md-0
        .container-card-formato.mx-2(:class="formatSelect == 0 ? 'select-formato' : ''" @click="formatSelect = 0")
          .titulo-principal__numero
            span 01.
          p.mb-0 Elección de formato
      .col-12.col-md-6.mb-3.mb-md-0
        .container-card-formato.mx-2(:class="formatSelect == 1 ? 'select-formato' : ''" @click="formatSelect = 1")
          .titulo-principal__numero
            span 02.
          p.mb-0 Elección de formato
      .col-12(style="background-color: #F3F9FF; border-radius: 10px").mt-3
        p.px-4.px-md-5.py-4.py-md-5(v-if="formatSelect == 0") La elección del formato de una publicación se determina previo a la producción del producto; se debe plantear en el objetivo del proyecto, así se obtendrá una visión clara de lo que se va a realizar. Es una decisión que se toma previamente sobre dónde y cómo se desea distribuir.
        p.px-4.px-md-5.py-4.py-md-5(v-if="formatSelect == 1") En este sentido se definen las variables del proyecto, y se debe tomar la decisión referente al formato de salida la publicación que por supuesto debe ser creativo y exclusivo.
    
    p Estos son 
      span(style="font-weight: bold; color: #F57C00")  los formatos más utilizados comercialmente en las publicaciones digitales 
      | y con ellos se pueden abarcar los mercados existentes con garantías técnicas amplias:
    
    .container-img-infografia
      ImagenInfograficaB.color-primario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/img_t_3-2.png')

        div(x="15%" y="15%" tooltip="tooltip de max 35 caracteres" numero="")
          .container-card-infografia
            img(src="@/assets/curso/tema3/img-card-infografia_t_3-8.png")
            p.ms-auto(style="max-width: 415px") Formato de texto enriquecido. Mensaje. Es el formato de texto sin formato más simple; no admite estilos de texto e imagen.

        div(x="50%" y="0%" tooltip="tooltip de max 35 caracteres" numero="")
          .container-card-infografia
            img(src="@/assets/curso/tema3/img-card-infografia_t_3-3.png")
            p.ms-auto(style="max-width: 415px") Formato de archivo de libro electrónico; usa extensión .epub Compatible con varios lectores de libros electrónicos. Hay software compatible para la diversidad de dispositivos inteligentes, tablets y computadoras. Para una correcta lectura de un producto como e-book en cualquier dispositivo, este formato es el más adecuado. La mayoría de tiendas de e-books exigen que estos estén en el formato epub.

        div(x="85%" y="15%" tooltip="tooltip de max 35 caracteres" numero="")
          .container-card-infografia
            img(src="@/assets/curso/tema3/img-card-infografia_t_3-4.png")
            p.ms-auto(style="max-width: 415px") Formato para archivos de libros electrónicos (ebook) creados por Mobipocket SA. El contenido está etiquetado, pero su formato no está dividido, lo que es adecuado para diferentes tamaños de pantalla de muchos lectores electrónicos del mercado. Este formato se basa en las especificaciones de Open eBook. Admite protección DRM, aunque Mobipocket SA prohíbe que los dispositivos de reproducción dedicados que permiten su sistema DRM admitan cualquier otro sistema DRM. El archivo mobipocket termina con la extensión “.mobi”.

        div(x="100%" y="50%" tooltip="tooltip de max 35 caracteres" numero="")
          .container-card-infografia
            img(src="@/assets/curso/tema3/img-card-infografia_t_3-5.png")
            p.ms-auto(style="max-width: 415px") Se utiliza para cualquier documento digital y también para libros electrónicos. Sus ventajas incluyen la portabilidad y la estandarización ISO. Esta es la forma más utilizada debido a su facilidad de uso. Un inconveniente es que no se puede migrar, como Mobipocket o el EPUB estándar. Los archivos PDF terminan con la extensión “.pdf”.

        div(x="85%" y="85%" tooltip="tooltip de max 35 caracteres" numero="")
          .container-card-infografia
            img(src="@/assets/curso/tema3/img-card-infografia_t_3-2.png")
            p.ms-auto(style="max-width: 415px") Abreviatura de Comic Book Reader. Se usa para cualquier libro cuyo contenido sea principalmente imágenes. Es un contenedor comprimido para imágenes. R significa que es RAR, mientras que Z significa que está comprimido. Los archivos CBR terminan con “.cbr” y los archivos CBZ terminan con “.cbz”.
        
        div(x="50%" y="100%" tooltip="tooltip de max 35 caracteres" numero="")
          .container-card-infografia
            img(src="@/assets/curso/tema3/img-card-infografia_t_3-1.png")
            p.ms-auto(style="max-width: 415px") Formato de libro electrónico desarrollado por Amazon. Compatible con todos los dispositivos Amazon Kindle, teléfonos inteligentes y tabletas Android, iPhone y iPad. Bajo la misma extensión, existen dos versiones diferentes del formato: KF7 y KF8. La extensión AZW se utiliza en archivos de libros electrónicos protegidos por DRM y no protegidos por DRM. Los archivos AZW con DRM sólo se pueden obtener de Amazon, ya que la protección es propietaria y no se ha transferido a otras empresas. 

        div(x="15%" y="85%" tooltip="tooltip de max 35 caracteres" numero="")
          .container-card-infografia
            img(src="@/assets/curso/tema3/img-card-infografia_t_3-6.png")
            p.ms-auto(style="max-width: 415px") <b>FictionBook</b> es un formato de archivo abierto para libros electrónicos creado por un equipo de desarrolladores rusos. Los archivos de formato FictionBook usan la extensión “.fb2”, aunque los archivos FictionBook generalmente se distribuyen en archivos Zip, y la mayoría de los dispositivos y controladores pueden manejar archivos FictionBook comprimidos directamente (“* .fb2.zip”).
        
        div(x="0%" y="50%" tooltip="tooltip de max 35 caracteres" numero="")
          .container-card-infografia
            img(src="@/assets/curso/tema3/img-card-infografia_t_3-7.png")
            p.ms-auto(style="max-width: 415px") Formato de Microsoft Word. El conocido lenguaje de marcas utilizado para crear sitios web también es adecuado para ver libros digitales. Muchos libros sin derechos de autor se han publicado en Internet en este formato.
</template>

<script>
export default {
  name: 'Tema3',
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
.container-img-infografia
  max-width: 820px
  margin-right: auto
  margin-left: auto
  .img-infografica-b__modal
    background-color: #fff
    display: flex
    align-items: center
    padding-right: 0 !important
    padding-left: 0 !important
    .img-infografica-b__modal__btn-cerrar .fas
      color: black !important
  .container-card-infografia
    background-color: #E2F4F6
    display: flex
    align-items: center
    min-height: 291px
    padding-right: 37px
    padding-left: 51px
    border-radius: 10px
    min-width: 820px
    img
      height: 186px
      width: 264px
    p
      color: black !important
  @media (max-width: 991px)
    .container-card-infografia
      min-width: 100%
      padding: 1rem
      p
        padding-right: 0
        padding-left: 1rem
  @media (max-width: 768px)
    .container-card-infografia
      flex-wrap: wrap
      img
        margin-right: auto
        margin-left: auto
      p
        max-width: 100% !important
        margin-top: 2rem
    .img-infografica-b__modal
      padding-top: 0 !important
</style>
