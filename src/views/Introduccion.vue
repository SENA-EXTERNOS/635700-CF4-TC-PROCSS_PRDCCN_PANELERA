<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-12.col-lg-7
        p Apreciado aprendiz, bienvenido a este componente formativo orientado al conocimiento de la preparación de la materia prima y de los insumos para la producción panelera. En un primer momento, identificará los equipos e instrumentos indispensables para dicha preparación, y aprenderá aspectos importantes que deben ser considerados para el mantenimiento de tales instrumentos; en un segundo momento, aprenderá sobre el proceso del trasiego de mieles, el papel que juega la temperatura en la concentración de los jugos de la caña y su manipulación.


      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/curso/introduccion/img-1.png', alt='Texto que describa la imagen')
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BPxOWz7uS_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
