<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Requerimientos técnicos y normativos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mt-4 Los requerimientos técnicos y normativos establecen normas técnicas para los requisitos de higiene. La producción de panela no es ajena a ellos, por lo tanto, su fabricación y comercialización deben cumplir con los requisitos sanitarios que se estipulan para el consumo humano y otras disposiciones.
          br
          br
        p.mt-4 El ministro de la Protección Social debe ejercer las facultades estatutarias, en particular las otorgadas por la Ley N° 09 de 1979, Ley N° 40 de 1990, decretos N° 3075 de 1997 y Decreto N° 205 de 2003 Artículo 2 Inciso 15.

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Buenas prácticas de manufactura

    .row.mb-5
      .col-12.col-lg-7
        p Aplicando buenas prácticas de manufactura, en adelante <b>BPM</b>, se garantiza la calidad y seguridad en beneficio de empresarios y empresas consumidoras que consideran la higiene, aplicada a lo largo de la cadena de producción, incluido el transporte y la comercialización del producto.
        p.mt-4 Para asegurar el cumplimiento de las buenas prácticas de manufactura (BPM) en la elaboración de la panela y por ende su calidad e inocuidad, se requiere la documentación del cumplimiento de los requisitos; es así como, la gestión de documentos ayuda a establecer BPM como la cultura de sus operaciones de producción. Por el contrario, cuando estas prácticas no están documentadas, no hay certeza de que el trabajo se realizará con precisión y coherencia, lo que lleva a la improvisación y la pérdida de control.

      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/curso/temas/T1/img-2.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        .cajon.color-acento-botones.p-4.mb-4.color-lila
          p De esta manera, se podrá dar cumplimiento a uno de los aspectos que demanda el mercado internacional de la panela y que debe atender el sector productivo, este se centra en las características del producto (físicas, químicas, sensoriales) y el manejo del producto, el flujo del proceso (equipos y condiciones de operación), la trazabilidad interna relacionada y otros factores de producción.
      

    p.mb-5 A continuación, se presentan los documentos principales que deben ser considerados en la producción de la panela:


    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-secundario
        .row(titulo="")
          .col-md-5.mb-4.mb-md-0
            h4.mb-3 Procedimiento
            p.mb-3 Un procedimiento es una forma o método de realizar una actividad. Entre ellos, encontramos: procedimiento de control de producción, procedimiento de control de plagas, procedimiento de retiro de productos, procedimiento de validación del programa de saneamiento, procedimiento de control de proveedores, procedimiento de control de productos no conformes.
            p.mb-3 En la tabla 1, podrá identificar la estructura de un procedimiento.
        
          .col-md-7
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Tabla 1.</b><i> Estructura de un procedimiento</i>
              img(src='@/assets/curso/temas/T1/img-3.png', alt='Texto que describa la imagen')


        .row(titulo="")
          .col-md-5.mb-4.mb-md-0
            h4.mb-3 Instrumentos de trabajo
            p.mb-3 Una orden de trabajo es un documento que contiene instrucciones escritas y procedimientos de apoyo para actividades específicas. Entre ellos encontramos: instructivo de limpieza, instructivo de desinfección e instructivo sobre el manejo de desechos.
            p.mb-3 En la tabla 2, podrá identificar la estructura de un instructivo de trabajo. 
        
          .col-md-7
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Tabla 2.</b><i> Estructura de un instructivo de trabajo</i>
              img(src='@/assets/curso/temas/T1/img-4.png', alt='Texto que describa la imagen')


        .row(titulo="")
          .col-md-5.mb-4.mb-md-0
            h4.mb-3 Programas
            p.mb-3 Un programa es un plan ordenado de varias actividades a realizar. Entre ellos, encontramos: programa de saneamiento, programa de limpieza y desinfección, programa de control de plagas, programa de manejo de residuos sólidos y líquidos, programa de mantenimiento de equipos.
            p.mb-3 En las tablas 3, 4 y 5 podrá encontrar algunos ejemplos relacionados con el programa de saneamiento, programa maestro de desinfección y programa de mantenimiento de equipos. 
        
          .col-md-7
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Tabla 3.</b><i> Ejemplo de programa de saneamiento</i>
              img(src='@/assets/curso/temas/T1/img-5.png', alt='Texto que describa la imagen')
              
        .row(titulo="")
          .col-md-3.mb-4.mb-md-0
            h4.mb-3 Programas
        
          .col-md-9
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Tabla 4.</b><i> Ejemplo de programa maestro de desinfección </i>
              img(src='@/assets/curso/temas/T1/img-6.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-3.mb-4.mb-md-0
            h4.mb-3 Programas
        
          .col-md-9
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Tabla 5.</b><i> Ejemplo de programa mantenimiento de equipos</i>
              img(src='@/assets/curso/temas/T1/img-7.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-5.mb-4.mb-md-0
            h4.mb-3 Fichas técnicas
            p.mb-3 Un documento técnico es el que proporciona una descripción detallada y concisa de las características de un producto, material, insumo o materia prima. Por ejemplo:
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Fichas técnicas del producto final (tabla 6, de acuerdo al NTC 1311).
              li 
                i.lista-ul__vineta
                | Fichas técnicas de insumos e ingredientes.
              li 
                i.lista-ul__vineta
                | Fichas técnicas de material de empaque.
              li 
                i.lista-ul__vineta
                | Fichas técnicas de productos de saneamiento.

            p.mb-3 En la Tabla 6. Podrá encontrar un ejemplo de una ficha técnica de producto.
        
          .col-md-7
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Tabla 6.</b><i> Ejemplo de una ficha técnica de producto.</i>
              img(src='@/assets/curso/temas/T1/img-8.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Registro
            p.mb-3 Este es un documento que habla de un evento o evento específico, que requiere verificación oficial permanente. Cada programa requiere un conjunto de formatos que, una vez completados, se convierten en registros con fines de auditoría o trazabilidad.
            p.mb-0 Entre los registros se encuentran:
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Registro de control de proveedores
              li 
                i.lista-ul__vineta
                | Registro de operaciones de proceso
              li 
                i.lista-ul__vineta
                | Registro de control de higiene del personal
            p.mb-3 Las anotaciones realizadas en los registros deben ser legibles y reflejar fielmente las circunstancias que se documentan. Es importante señalar errores y cambios. Si el registro cambia y solo incluye la inspección final que ha sido corregida, se pierde información que puede usarse para mejoras futuras.
            p.mb-3 Por ejemplo, es una buena idea anotar las dimensiones originales, tachar con una línea si se ha modificado y pedirle al revisor que escriba sus iniciales al lado. Cada entrada en el registro debe ser realizada por la persona responsable cuando ocurre el evento. Los registros completos deben ser firmados y fechados por la persona responsable del monitoreo y mantenidos en el sitio de producción de panela para estar disponibles en todo momento.
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-9.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-5.mb-4.mb-md-0
            h4.mb-3 Listado maestro
            p.mb-3 El listado maestro es un formato que vincula todos los documentos existentes y los identifica utilizando una codificación y estructura específicas. 
            p.mb-3 En la tabla 6, se ubica un ejemplo que le permitirá identificar la estructura de un listado maestro. 
        
          .col-md-7
            figure
              .titulo-sexto.color-acento-contenido
                p.mb-0 
                  p.mb-1 <b>Tabla 6.</b><i> Ejemplo formato listado maestro</i>
              img(src='@/assets/curso/temas/T1/img-10.png', alt='Texto que describa la imagen')

        .row(titulo="")
          .col-md-8.mb-4.mb-md-0
            h4.mb-3 Vigilancia sanitaria
            p.mb-3 La autoridad sanitaria responsable, el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (Invima), es el organismo que certifica las buenas prácticas de manufactura. Un Certificado de Cumplimiento BPM es válido por 6 meses a partir de la fecha de emisión.
            p.mb-3 El Invima realiza inspecciones cada semestre para verificar y garantizar la higiene y el cumplimiento de las BPM de las instalaciones de producción de panela. Se crea un registro para cada inspección, registrando lo que detectó el sistema, lo que se inspeccionó y las nociones positivas o negativas según corresponda.
            p.mb-3 Si durante la visita se comprueba que la instalación no cumple con los requisitos sanitarios exigidos por el BPM, se dará un plazo de 30 días para su cumplimiento. Luego de este período, el Invima realizará una visita de reválida y aplicará las medidas de seguridad sanitaria y las sanciones correspondientes en caso de incumplimiento de las BPM. Si su reclamación es satisfecha parcialmente, se le otorgará un nuevo plazo de 30 días.
            p.mb-3 Las medidas de salud y seguridad que pueden imponerse a las plantas de producción de panela incluyen cierres temporales de plantas, confiscación o destrucción de productos y suspensión de ventas.
        
          .col-md-3
            figure
              img(src='@/assets/curso/temas/T1/img-11.png', alt='Texto que describa la imagen')
          
        .row(titulo="")
          .col-md-7.mb-4.mb-md-0
            h4.mb-3 Registro sanitario
            p.mb-3 Un registro sanitario es un documento emitido por la autoridad sanitaria competente, Invima, que autoriza a los establecimientos que elaboran y envasan alimentos para consumo humano. La planta debe tener registro sanitario si se agregan fragancias al proceso de fabricación. Este documento tiene una validez de 10 años a partir de la fecha de emisión y puede prorrogarse por el mismo período.
            p.mb-3 Los establecimientos a los que se otorgue el registro sanitario deberán cumplir con las normas técnicas sanitarias, condiciones de producción y control de calidad exigidos en que se base la concesión. La violación de las normas o condiciones establecidas y las consecuentes afectaciones a la salud de los consumidores son, por tanto, responsabilidad del titular del registro (representante legal del establecimiento).
        
          .col-md-5
            figure
              img(src='@/assets/curso/temas/T1/img-12.png', alt='Texto que describa la imagen')


    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Técnicas de limpieza de la materia prima

    .row.justify-content-around.align-items-center.mt-5
      .col-8 
        .row(titulo="Manejo de jugos")
          .col-md-12.mb-4.mb-md-5
            .tarjeta.color-tarjetas.p-4.mb-4
              p.mb-5 Para la limpieza de la materia prima, se utiliza un equipo llamado pre-limpiador, el cual está soportado por una malla filtrante que utiliza el principio de separación física por densidad. Las partículas pesadas van al fondo del antefiltro y las partículas ligeras se separan por flotación. Debe mantenerse separado del molinillo para evitar la contaminación por otros medios. Por lo tanto, el jugo crudo se envía a través de una tubería de plástico al pre-limpiador. Se recomienda el uso del pre-limpiador cuando el volumen de molienda es inferior a 1 tonelada por hora, (Prada, L., 2002).
        
      .col-2
        figure
          img(data-aos='fade-left')(src='@/assets/curso/temas/T1/img-13.svg')

      p.mb-5 En el video que se presenta a continuación, aprenderá sobre las condiciones de saneamiento, una técnica que siempre debe ser incluida en los procesos de limpieza de la materia prima.
      
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
