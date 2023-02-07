export default {
  global: {
    componenteFormativo: 'Requerimientos técnicos y normativos',
    descripcionCurso:
      'La panela es un derivado de la caña de azúcar, considerado más saludable que otros azúcares refinados. En Colombia se busca que los trapiches se rijan conforme al decreto N° 3075 de 1997 donde se establecen las buenas prácticas de manufactura, y mediante la resolución 779 que establece los requisitos de higiene que se deben tener para la elaboración y comercialización de la panela.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Requerimientos técnicos y normativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Buenas prácticas de manufactura',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de limpieza de la materia prima',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normativa ambiental',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Proceso de generación de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Recolección de caña panelera',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Descripción de los residuos',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Requerimientos técnicos y normativos',
      referencia:
        'Regino Vergara, J., Vásquez García, O. R., Barbosa Castillo, S. M., Torres González, N. C., Cardona Vaquero, W., Rivera Vargas, G. M. & Tinoco Sánchez, B. A. (2019).<i> Buenas prácticas de manufactura y su contribución al sector panelero. </i>Corporación Universitaria Minuto de Dios.',
      tipo: 'Libro ',
      link: 'https://repository.uniminuto.edu/handle/10656/7870 ',
    },
    {
      tema: 'Proceso de generación de residuos',
      referencia:
        'Quintero Trujillo, A. M. & Marín Ospina, C. A. (2020) <i>Estrategias para el manejo de subproductos derivados de la producción de panela bajo un enfoque de producción más limpia en la vereda Aguacatal municipio Neira Caldas. </i>UNAD.',
      tipo: 'Artículo',
      link: 'https://repository.unad.edu.co/handle/10596/36819 ',
    },
    {
      tema: 'Proceso de generación de residuos',
      referencia:
        'Beltrán Martínez, C. (2021).<i> Evaluación de técnicas para gestión de los residuos de la producción panelera(cachaza) en la vereda Nacederos municipio de Quebradanegra-Cundinamarca.</i> UDEC.',
      tipo: 'Artículo',
      link:
        'https://repositorio.ucundinamarca.edu.co/handle/20.500.12558/3431 ',
    },
    {
      tema: 'Requerimientos técnicos y normativos',
      referencia:
        'Quizanga Zambrano, V. C. (2009).<i> Diseño del plan y documentación para la implementación de buenas prácticas de manufactura para la elaboración de panela granulada en la planta Ingapi</i> (Bachelors thesis, QUITO/EPN/2009).',
      tipo: 'Artículo',
      link: 'https://bibdigital.epn.edu.ec/bitstream/15000/1683/1/CD-2014.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agua miel',
      significado:
        'producto resultado de la limpieza de todos los equipos utilizados en el proceso, se conocen como las aguas residuales de la transformación de la caña.',
    },
    {
      termino: 'Aseguramiento de la calidad',
      significado:
        'conjunto de actividades planificadas y sistemáticas, aplicadas en un sistema de buenas prácticas de manufactura (bpm), para que los requisitos de calidad de un alimento sean satisfechos.',
    },
    {
      termino: 'Bagacillo',
      significado:
        'fibra muy fina de la caña producto del proceso donde el jugo de la caña pasa por el tanque pre-limpiador; está compuesto por tierra, raíces, hojas y otras impurezas que llegan con la planta al molino.',
    },
    {
      termino: 'BPM',
      significado: 'Buenas Prácticas de Manufactura. ',
    },
    {
      termino: 'Higienizar',
      significado:
        'limpiar o asear un lugar u elemento, conforme a las normas básicas para conservar la salud o prevenir enfermedades.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que un alimento no causará daño al consumidor cuando sea preparado o ingerido, de acuerdo con el uso al que se destine. Se refiere a las condiciones y prácticas que preservan la calidad de los alimentos para prevenir la contaminación y las enfermedades transmitidas por su consumo. Es uno de los cuatro grupos básicos de características que, junto con las nutricionales, las organolépticas y las comerciales, componen la calidad de los alimentos.',
    },
    {
      termino: 'Medidas de prevención',
      significado:
        'actividades que se pueden llevar a cabo para prevenir o eliminar un peligro que amenaza la inocuidad de los alimentos o para reducirlo a un nivel aceptable. ',
    },
    {
      termino: 'Peligro',
      significado:
        'agente biológico, químico o físico, presente en el alimento, o bien en la condición en la que se encuentra, que puede causar un efecto adverso para la salud.',
    },
    {
      termino: 'Orden de trabajo',
      significado:
        'documento que contiene instrucciones escritas y procedimientos de apoyo para actividades específicas. Algunos de ellos son: instructivo de limpieza, Instructivo de desinfección.',
    },
    {
      termino: 'Residuos',
      significado:
        '“Aquello que resulta de la descomposición o destrucción de algo” (Real Academia Española, 2014).',
    },
    {
      termino: 'Saneamiento',
      significado:
        'conjunto de medidas encaminadas a establecer, mejorar o mantener las condiciones sanitarias de un lugar o una población.',
    },
    {
      termino: 'Validación',
      significado:
        'constatación de que los programas implementados son efectivos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ariza Ariza, C., Hidalgo González, N. F. & Caballero Colorado, F. D. (2013).<i> Análisis de pre inversión para el mejoramiento y modernización de la planta de producción de panela de la finca San Luis Villeta Cundinamarca.</i> Universidad Militar Nueva Granada.',
      link: 'http://repository.unimilitar.edu.co/handle/10654/7046 ',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. 2009. <i>Norma técnica colombiana ntc 1311.</i> Productos Agrícolas. Panela. Bogotá: Icontec.',
      link: '',
    },
    {
      referencia:
        'Mendieta Menjura, O. A., García Muñoz, M. C., Peña Holguín, A. C. & Rodríguez Cortina, J. (2016). </i>Las buenas prácticas de manufactura en la producción de panela. Corporación Colombiana de Investigación Agropecuaria </i>- CORPOICA.',
      link: 'https://repository.agrosavia.co/handle/20.500.12324/34303 ',
    },
    {
      referencia:
        'Osorio Arias, M. C. & Rodríguez Castillo, M. (2020).<i> Efecto de la adición de residuos del proceso de producción de panela sobre los cultivos de caña.</i> ',
      link:
        'https://repositorio.ucm.edu.co/bitstream/10839/2933/1/TRABAJO%20DE%20GRADO%20FINAL.pdf ',
    },
    {
      referencia:
        'Ospina, C. A. (2019). <i>Residuos producidos durante el proceso de recolección, transformación y empaque de la panela.</i> (M. C. Arias, & M. R. Castillo, Entrevistadores).',
      link: '',
    },
    {
      referencia:
        'Resolución 000779 de 2006. [Ministerio de Protección Social]. Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para consumo humano y se dictan otras disposiciones. Marzo 17 de 2006.',
      link: '',
    },
    {
      referencia:
        'Silva Cardoza, K. (2013). <i>Propuesta de norma técnica para la panela granulada y proceso para su elaboración y aprobación.</i> Repositorio Institucional PIRHUA. ',
      link: 'https://pirhua.udep.edu.pe/handle/11042/1741 ',
    },
    {
      referencia:
        'Prada Forero, L. E., García Bernal, H. R. & Chaves Guerrero, A. (2015). Efecto de las variables de evaporación: presión y flujo calórico en la calidad de la panela.<i> Ciencia y Tecnología Agropecuaria,</i> 16(1), p. 7-23.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
