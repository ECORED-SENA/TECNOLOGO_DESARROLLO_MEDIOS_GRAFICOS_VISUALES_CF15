<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Exportación y salida de archivos
    
    .col-12.d-flex.flex-wrap
      .col-12.col-md-8.pe-0.pe-md-4.mb-4
        p Los documentos se pueden crear como Epub reiniciable. El Epub reiniciable es utilizado por los usuarios de Epub para mejorar el contenido, de acuerdo con sus dispositivos de visualización. El formato reiniciable es más conveniente, si el documento está destinado a dispositivos de tinta electrónica.
      .col-12.col-md-4
        p.fw-bold Se debe usar si se desea facilitar las opciones para cambio de fuente y tamaño del texto en el reproductor.
    
    p.mb-5 Otros aspectos relevantes de este formato son:

    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-acento-botones(@mouseover="indicadorTarjetaSlide = false" style="border-radius: 0")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img_t_7-1.png')})`, 'background-size':'auto', 'background-repeat':'no-repeat', 'background-color':'#FDD835'}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              img(src="@/assets/curso/tema7/img_t_7-1.png", style="max-width: 107px; margin-right: auto; margin-left: auto").mb-3
              p.mb-0 También puede exportar archivos interactivos que incluyen controles como botones de navegación, transiciones de página, animaciones e hipervínculos a formatos de diseño fijo.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false" style="border-radius: 0")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img_t_7-2.png')})`, 'background-size':'auto', 'background-repeat':'no-repeat', 'background-color':'#26CCDA'}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              img(src="@/assets/curso/tema7/img_t_7-2.png", style="max-width: 107px; margin-right: auto; margin-left: auto").mb-3
              p.mb-0 El formato de diseño fijo es el más adecuado para crear documentos con grandes cantidades de contenido de gráficos, audio y video.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-acento-botones(@mouseover="indicadorTarjetaSlide = false" style="border-radius: 0")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/img_t_7-3.png')})`, 'background-size':'auto', 'background-repeat':'no-repeat', 'background-color':'#FDD835'}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              img(src="@/assets/curso/tema7/img_t_7-3.png", style="max-width: 107px; margin-right: auto; margin-left: auto").mb-3
              p.mb-0 Este formato es el más adecuado para libros para niños, libros de cocina, libros de texto y cómics.

    p.mb-5 Conozca algunos aspectos de suma importancia en lo relativo a exportación y salida de archivos; procure llevar registro de lo más destacado en su libreta personal de apuntes.

    SlyderB.mb-5(:datos="datosSlyder")
</template>
<script>
export default {
  name: 'Tema7',
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Never, never assume that what you have achieved is good enough',
        texto: `<p class="ps-3">Crear un documento para exportarlo a un formato de diseño fijo, admite opciones de texto, como:</p>
          <ul style="list-style-type: disc; margin-left: 1.1rem">
            <li>El texto no está categorizado, por lo que el texto interactivo se puede buscar y seleccionar. </li>
            <li>El texto interactivo se puede escalar horizontal y verticalmente. Se pueden incluir caracteres de tabulación.</li>
            <li>Las características del lenguaje están marcadas con signos. Las etiquetas están marcadas con clases CSS. </li>
            <li>Puede utilizar hipervínculos en el texto y referencias cruzadas para URL, texto de anclaje y páginas.</li>
          </ul>
          `,
        imagen: require('@/assets/curso/tema7/img-slider_t_7-1.png'),
      },
      {
        titulo: 'Soporte de hipervínculos',
        texto: `<ul style="list-style-type: disc; margin-left: 1.1rem">
            <li>Enlaces y referencias de texto.</li>
            <li>Hipervínculos basados en objetos.</li>
            <li>Hipervínculos de página para hipervínculos basados en texto y objetos.</li>
          </ul>
          `,
        imagen: require('@/assets/curso/tema7/img-slider_t_7-2.png'),
      },
      {
        titulo: 'Limitaciones para exportación Epub',
        texto: `<ul style="list-style-type: disc; margin-left: 1.1rem">
            <li>El interletraje no se puede usar en un solo glifo y se distribuye como espaciado en todas las letras de la palabra.</li>
            <li>Debido a su baja compatibilidad con dispositivos, no es posible utilizar alternativas a los pictogramas creados con OpenType, incluidas minúsculas, mayúsculas y minúsculas fraccionarias.</li>
            <li>Los marcos de texto de derecha a izquierda no son totalmente compatibles con las escrituras de Oriente Medio.</li>
          </ul>
          `,
        imagen: require('@/assets/curso/tema7/img-slider_t_7-3.png'),
      },
      {
        titulo: 'Compatibilidad de movilidad',
        texto: `<p class="ps-3">La exportación incluye las siguientes opciones de navegación en el archivo epub resultante:</p>
          <ul style="list-style-type: disc; margin-left: 1.1rem">
            <li><b>Señal NAV.</b> Se genera tanto para el formato de diseño fijo como para el reflujo, según el epub (Introducir valores especificados en cuadro de diálogo de opciones de exportación del objeto). Sólo la primera iteración del valor se agregará a la etiqueta.</li>
            <li>Publicación electrónica <br><br>
            <b>Epub 2.</b> Indesing admite la parte 2 de la publicación Epub de los archivos OPF. Indesing detecta automáticamente las opciones de impresión de portadas y la tabla de contenido. Para especificar el tipo de texto, Indesing utiliza el valor Epub: type especificado en el cuadro de diálogo “Opciones de exportación de objetos”.</li>
          </ul>
          `,
        imagen: require('@/assets/curso/tema7/img-slider_t_7-4.png'),
      },
      {
        titulo: 'Generar CSS para un libro',
        texto: `<p class="ps-3">Cuando un libro se exporta a <b>Epub</b>, la exportación genera <b>CSS</b> para cada documento del libro. Cada documento <b>CSS</b> define estilos únicos para el documento. Este proceso también crea una página maestra CSS que incluye estilos comunes a todos los documentos del libro.</p>
          `,
        imagen: require('@/assets/curso/tema7/img-slider_t_7-5.png'),
      },
      {
        titulo: 'Exportar a Epub',
        texto: `<p class="ps-3">Para exportar un documento o libro como un archivo epub o un formato de diseño reiniciable:</p>
          <ul style="list-style-type: disc; margin-left: 1.1rem">
            <li>Abrir el documento y seleccionar Archivo-Exportar. Ak abre un libro y en el menú del panel del libro, seleccionar Exportar libro a epub.</li>
            <li>Luego, nombrar el archivo y determinar su ubicación. En el menú Guardar como texto, seleccionar epub (diseño fijo) o epub (redimensionable), luego clicar en Guardar.</li>
            <li>En el cuadro de diálogo de opciones de exportación de epub, seleccionar las opciones deseadas y clicar en Aceptar.</li>
          </ul>
          `,
        imagen: require('@/assets/curso/tema7/img-slider_t_7-6.png'),
      },
    ],
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
<style lang="sass"></style>
