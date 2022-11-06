<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso y generación de residuos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mt-4 En la naturaleza como en los procesos de producción de panela, existen componentes que son susceptibles de ser aprovechados por el ser humano para la satisfacción de sus necesidades y que tengan un valor actual o potencial, tales como el paisaje natural, las aguas superficiales y subterráneas, el suelo, el subsuelo y las tierras, la biodiversidad, la geodiversidad, los recursos genéticos y los ecosistemas que dan soporte a la vida. En este apartado, se presentan detalladamente cómo es el proceso y generación de los residuos de la producción de panela.
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Recolección de la caña panelera
    
    p.mb-3 La recolección de la caña es muy particular de acuerdo con la zona donde se produce. En Colombia, se han adoptado dos sistemas de poda: la poda uniforme y la poda por aclareo.
    p.mb-5 <b>Veamos en qué consiste cada uno:</b>

    .row(titulo="")
      .col-md-8.mb-4.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fac")
          .row(titulo="Poda uniforme")
            .col-md-10.mb-4.mb-md-0
              p.mb-1 Consiste en extraer todas las plantas del lote sin selección previa por madurez. Esta poda es generalizada en las regiones del Valle del Cauca, Cundinamarca, Boyacá y Santander, donde los productores retiran la caña de sus parcelas cada 18 meses.
              

          .row(titulo="Poda por aclareo")
            .col-md-10.mb-4.mb-md-0
              p.mb-1 Es un tratamiento selectivo que se da a cada tallo de la planta, es decir, cortando solo los tallos con la madurez óptima y extrayendo las cañas del lote cada tres meses. Los cortes de óxido se utilizan en las regiones de Antioquia, Caldas y Risaralda, lo que resulta en un producto final de mayor calidad, pero con un costo final más alto.

          .row(titulo="Residuos de la poda")
            .col-md-10.mb-4.mb-md-0
              p.mb-1 Los residuos de la poda dentro del cultivo son palmitos que producen 7 toneladas por hectárea al año, estos residuos, típicamente quedan en el área de cultivo de la caña de azúcar panela luego de realizadas las operaciones de poda, se utilizan para cubiertas vegetales. En algunas zonas de Colombia, como Santander y Boyacá, los corazones y restos de palmeras son recolectados y utilizados como alimento para animales, (Ospina, 2019).

      .col-md-4
        figure
          img(src='@/assets/curso/temas/T2/img-2.png', alt='Texto que describa la imagen')

    ol.lista-ol--cuadro.mb-4
      li
        .lista-ol--cuadro__vineta.faa
          span 
        p <b>Procesos de transformación</b>
      
    p.mb-3 Durante el proceso de producción de panela, la materia prima pasa por diferentes momentos que permiten la obtención del producto final, cada uno de estos procesos tiene unas características especiales.
    p.mb-5 A continuación, se presentan cada uno de los procesos de transformación:


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.fad.p-0
        img(src='@/assets/curso/temas/T2/img-3.png' alt='AvatarTop')
        h2.text-center Planta
        p.text-center La planta de producción de panela cuenta con un molinillo que extrae el jugo de la caña de azúcar que pasa por un tanque de prelavado. Aquí es donde nace el bagacillo y se compone de tierra, raíces, hojas y otras impurezas que llegan a la fábrica con la planta, (Ospina, 2019).

      .tarjeta.fad.p-0
        img(src='@/assets/curso/temas/T2/img-4.png' alt='AvatarTop')
        h2.text-center Sobrantes
        p.text-center Los sobrantes de fibra vegetal (bagazo) producidos en la fábrica son suministrados a la bagacera donde se almacenan para uso como combustible de horno, (Ospina, 2019).

      .tarjeta.fad.p-0
        img(src='@/assets/curso/temas/T2/img-5.png' alt='AvatarTop')
        h2.text-center Jugo
        p.text-center El jugo pre purificado ya extraído se lleva a un pozo donde se almacena el producto y finalmente a un horno utilizado para la concentración y evaporación de la miel. Se añade un coagulante durante este último proceso, (Ospina, 2019).

      .tarjeta.fad.p-0
        img(src='@/assets/curso/temas/T2/img-6.png' alt='AvatarTop')
        h2.text-center Coagulante
        p.text-center El proceso de obtención del coagulante comienza con la extracción de fibras del árbol (balso o cadillo). Las fibras se maceran y se disuelven en agua hasta obtener una sustancia viscosa y se agrega al jugo de la caña a una temperatura de 50 °C en el horno, (Ospina, 2019).

      .tarjeta.fad.p-0
        img(src='@/assets/curso/temas/T2/img-7.png' alt='AvatarTop')
        h2.text-center Efecto coagulante
        p.text-center El efecto coagulante, a diferencia de la miel, es flocular las impurezas o sólidos contenidos en el jugo. Las impurezas, llamadas cachaza, son removidas y depositadas en la cachacera. Este producto tiene un alto valor nutricional para los animales (mulas o cerdos), (Ospina, 2019).

      .tarjeta.fad.p-0
        img(src='@/assets/curso/temas/T2/img-8.png' alt='AvatarTop')
        h2.text-center Tanque clarificador
        p.text-center El producto que sale del horno pasa al tanque clarificador, en donde se retiran las últimas impurezas que posee el producto, y son llevadas a la cachacera. El producto final es llevado al proceso de concentración de mieles, (Ospina, 2019).

      .tarjeta.fad.p-0
        img(src='@/assets/curso/temas/T2/img-9.png' alt='AvatarTop')
        h2.text-center Combustión
        p.text-center Después del proceso de combustión en el horno, se generan las cenizas, las cuales son un producto rico en calcio, fósforo y otros compuestos que, ayuda al suelo en la corrección del pH. Son muy pocos los productores que utilizan las cenizas y es usual encontrar en la planta de producción la acumulación de estas, (Ospina, 2019).

    ol.lista-ol--cuadro.mb-4
      li
        .lista-ol--cuadro__vineta.faa
          span 
        p <b>Procesos de empaque y bodega</b>

    .row.mb-5
      .col-md-6.mb-4.mb-md-0
        .row.mb-2
          .col-12
            .cajon.color-acento-botones.p-4.mb-4.color-lila
              p Hace 15 años, la industria panelera reciclaba bolsas de papel para el empaque; en el año 2006, el Ministerio de la Protección Social crea la resolución 779, “por la cual se establece el reglamento técnico sobre los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para consumo humano y se dictan otras disposiciones” (Ministerio de la Protección Social, 2006). 
        p.mb-3 En el capítulo V (Envase, embalaje, rotulado, reenvase, almacenamiento, distribución, transporte y comercialización), el artículo 12 dice:
        p.mb-3 <b>Esquemas II:</b> Cantidades generadas por una molienda en el trapiche La Unión 30 “A partir de la entrada en vigencia del reglamento técnico que se establece mediante la presente resolución, las panelas a granel se deben embalar en material sanitario de primer uso, teniendo en cuenta las siguientes condiciones:
        

      .col-md-6
        figure
          img(src='@/assets/curso/temas/T2/img-10.png', alt='Texto que describa la imagen')

    .row.justify-content-center
      ol.lista-ol--cuadro
        li 
          .lista-ol--cuadro__vineta
            span a
          | Se prohíbe el embalaje de panelas en materiales como costales o material no sanitario.
        li 
          .lista-ol--cuadro__vineta
            span b
          | El embalaje se debe conservar en buenas condiciones durante toda la cadena de comercialización.
        li 
          .lista-ol--cuadro__vineta
            span c
          | Sólo se permite el reenvase de panelas en establecimientos autorizados por la Entidad Territorial de Salud procedentes de trapiches que cumplan con los requisitos sanitarios establecidos en el reglamento técnico que se establece a través de la presente resolución” (Ministerio de la Protección Social, 2006).

    ol.lista-ol--cuadro.mb-4
      li
        .lista-ol--cuadro__vineta.faa
          span 
        p <b>Cenizas y emisiones</b> 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mt-4 En el proceso de producción, el horno es tan viejo que es muy ineficiente energéticamente, en condiciones normales la ceniza debería ser solo bagazo, pero como no es eficiente, el fabricante creó una mezcla de bagazo y leña. En casos más graves, la industria utiliza mezclas de bagazo, leña y llantas para la incineración, afectando la composición química de las cenizas. (Ospina, 2019). 
          br
          br
        p.mt-4 Diez años atrás, el sector panelero era el principal reciclador de llantas usadas en Colombia y en Caldas, el mayor consumidor de llantas es Filadelfia; esta práctica se ha pretendido evitar a partir de los conversatorios y asistencias por parte de FedePanela para sus asociados, las recomendaciones para que la eficiencia energética funcione y evitar el uso de las llantas, es principalmente realizar modificaciones al horno donde se realiza la concentración de miel, (Ospina, 2019).
        
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Recolección de la caña panelera

    .row.mb-5
      .col-2
        figure
          img(src='@/assets/curso/temas/T2/img-12.png', alt='Texto que describa la imagen')
        
      .col-md-9
        p.mb-3 El principal residuo sólido producido en la industria de la caña de azúcar, después de triturar se llama bagazo;su uso principal es como combustible para estufas, pero tiene mucha humedad y debe secarse antes de su uso. Para ello, son llevados a un lugar llamado Bagasela. Allí se crea un nicho propicio para la colonización de moscas, abejas, avispas y roedores que pueden contaminar el producto final.
        
    .titulo-sexto.color-acento-contenido
      p.mb-0 
        p.mb-1 <b>Figura 4.</b><i>Residuos de la caña</i>

    figure.mb-5
      img(src='@/assets/curso/temas/T2/img-13.png', alt='Texto que describa la imagen')


    .row.tarjeta.mt-5.p-5.fae.mt-5
      .col-5.d-none.d-lg-flex.position-relative
        figure.position-absolute(style="top:-75%;")
          img(src='@/assets/curso/temas/T2/img-14.png', alt='Texto que describa la imagen')

      .col-7.col-lg-5
        p <b>¡Muy bien!</b> ha finalizado el estudio de este componente formativo a través del cual ha aprendido sobre los requerimientos técnicos y normativos. Ahora lo invitamos a estudiar la síntesis donde podrá recordar de forma general los saberes que se han desarrollado, a realizar la actividad de aprendizaje donde podrá colocar a prueba lo aprendido, a consultar el material complementario que le servirá como refuerzo y profundización y estudiar el glosario.  
      


</template>

<script>
export default {
  name: 'Tema2',
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
