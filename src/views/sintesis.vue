<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-1 El Ministerio de Protección Social, desde el año 2006, viene regulando los diferentes procesos productivos del país, centrando su interés en distintos sectores, uno de ellos son los productores de panela de todo el país, por la baja calidad del producto; actualmente se realiza el proceso de producción de panela de modo inadecuado, por no realizar los lineamientos legales, normativos y técnicos requeridos, como lo son las condiciones sanitarias, físicas, de almacenamiento de residuos, de materias primas y tipo finales, así como la limpieza y desinfección de zonas productivas y no productivas, entre otras disposiciones exigidas en la Resolución No 779 del 2006, la cual exige adaptar condiciones adecuadas y sanitarias para los procesos productivos de panela, con el fin de defender la salubridad humana e impactos negativos al entorno. Por lo cual, es precisado hacer el bosquejo de restablecimiento agroindustrial para producción panelera, el cual consiste en la acogida de las disposiciones legales, buenas prácticas de industria y referentes técnicos que permitan identificar las actividades prioritarias para modernizar los procesos productivos que actualmente se vienen desarrollando en las fincas paneleras.
    p.mb-3 Para hacer el plan  de mejora se elabora un estudio de las condiciones actuales de la planta de producción panelera, se realiza el croquis técnico y elaborado de la organización física de las instalaciones, donde se identifica el equipamiento, el terreno y las operaciones del proceso, y como son las interrelaciones entre el personal, el flujo de materiales y el flujo de información que se lleva en la actualidad, además se evalúa el cumplimiento frente a las disposiciones legales, requisitos normativos y técnicos con los cuales cuenta la planta de producción panelera, esto se desarrolló aplicando la metodología PMI, siguiendo los lineamientos del PMBOK.
    p.mb-5 El organizador gráfico que se presenta a continuación, le ayudará a recordar los saberes desarrollados en este componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          .titulo-sexto.color-acento-contenido
            p.mb-0 
              p.mb-1 <b>Figura 7.</b><i> Requerimientos técnicos y normativos</i>
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
