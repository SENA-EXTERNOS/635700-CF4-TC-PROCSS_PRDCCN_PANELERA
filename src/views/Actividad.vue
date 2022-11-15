<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="" titulo="")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      span 
        i.fas.fa-puzzle-piece
      h1 Actividad didáctica
    .row.justify-content-center.align-items-center.align-items-lg-stretch 
    .col-12.col-md-8.col-lg-9
      .titulo-segundo.color-acento-contenido.mb-5
        h2 Requerimientos técnicos y normativos 
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/falso-verdadero.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        p.mb-4 A continuación, se presenta una actividad de aprendizaje que está encaminada a validar los aprendizajes que se han podido adquirir con el desarrollo de este componente formativo. Por lo tanto, lo invitamos a disponerse a realizarla; para ello, seleccione la respuesta que, según el enunciado, considere es la correcta.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
