"use client"

import { createContext, useContext } from "react"

export const languages = {
  es: "Español",
} as const

export type Language = keyof typeof languages

export const defaultLanguage: Language = "es"

export const blogPosts = {
  es: [
    {
      id: 1,
      slug: "primera-consulta-ortodoncia",
      title: "¿Qué esperar en tu primera consulta de ortodoncia?",
      excerpt: "Te contamos paso a paso cómo es la primera visita para que llegues preparado y sin dudas.",
      content: `
        <p>La primera consulta de ortodoncia es un momento clave. Es donde evaluamos tu situación clínica, te explicamos qué encontramos y te presentamos las opciones de tratamiento más adecuadas para vos.</p>

        <h2>¿Cómo es la primera consulta?</h2>

        <p>En la consulta inicial realizamos:</p>

        <ul>
          <li>Evaluación clínica completa de dientes, mordida y maxilares</li>
          <li>Análisis de la posición dental y relación entre maxilares</li>
          <li>Conversación sobre tus expectativas y preocupaciones</li>
          <li>Explicación clara del problema y posibles soluciones</li>
          <li>Orientación sobre los próximos pasos</li>
        </ul>

        <h2>¿Necesito traer estudios?</h2>

        <p>No es necesario traer estudios a la primera consulta. Si luego del examen clínico consideramos que es necesario profundizar el diagnóstico, te indicaremos qué estudios realizar (radiografías, cefalometría, etc.) para la segunda visita.</p>

        <h2>¿Cuánto dura?</h2>

        <p>La consulta tiene una duración de aproximadamente 40 minutos, tiempo suficiente para hacer una evaluación completa y responder todas tus preguntas.</p>
      `,
      category: "Ortodoncia",
      date: "2025-03-15",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop&q=60",
      author: {
        name: "Dra. Raquel Rodríguez",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60",
        bio: "Especialista en Ortodoncia y Ortopedia Facial de los Maxilares con más de 15 años de experiencia.",
      },
    },
    {
      id: 2,
      slug: "alineadores-invisibles-guia-completa",
      title: "Alineadores invisibles: todo lo que necesitás saber antes de empezar",
      excerpt: "Te explicamos cómo funcionan, para qué casos sirven y qué podés esperar del tratamiento con alineadores transparentes.",
      content: `
        <p>Los alineadores invisibles son una de las opciones más buscadas por pacientes adultos y adolescentes que desean corregir su sonrisa de forma discreta. Pero no todos los casos son iguales, y es importante entender bien cómo funciona este tratamiento antes de decidir.</p>

        <h2>¿Qué son los alineadores invisibles?</h2>

        <p>Son placas transparentes removibles, fabricadas a medida con tecnología 3D, que se cambian cada 7 a 14 días para ir moviendo los dientes de forma progresiva y controlada.</p>

        <h2>¿Para qué casos sirven?</h2>

        <p>Los alineadores son ideales para:</p>

        <ul>
          <li>Apiñamiento leve a moderado</li>
          <li>Espacios entre dientes (diastemas)</li>
          <li>Algunas mordidas abiertas o cruzadas leves</li>
          <li>Recidivas después de tratamientos previos</li>
        </ul>

        <p>Sin embargo, no todos los casos pueden resolverse con alineadores. En la consulta evaluamos si es la mejor opción o si conviene otra alternativa.</p>

        <h2>Ventajas del tratamiento</h2>

        <ul>
          <li>Prácticamente invisibles: ideales para quienes buscan estética</li>
          <li>Removibles: se retiran para comer y cepillarse</li>
          <li>Planificación digital: podés ver una simulación del resultado antes de empezar</li>
          <li>Menos urgencias: al no tener brackets, hay menos molestias</li>
        </ul>

        <h2>¿Cuánto dura el tratamiento?</h2>

        <p>Depende de la complejidad del caso. En general, los tratamientos con alineadores duran entre 6 y 18 meses. Durante la consulta de diagnóstico te damos un estimado preciso para tu caso.</p>

        <h2>Marcas con las que trabajamos</h2>

        <p>En nuestro consultorio trabajamos con Invisalign, ASIRI y Keep Smiling, eligiendo la mejor opción según las necesidades de cada paciente.</p>
      `,
      category: "Alineadores",
      date: "2025-05-10",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&auto=format&fit=crop&q=60",
      author: {
        name: "Dra. Raquel Rodríguez",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60",
        bio: "Especialista en Ortodoncia y Ortopedia Facial de los Maxilares con más de 15 años de experiencia.",
      },
    },
    {
      id: 3,
      slug: "ortodoncia-infantil-cuando-consultar",
      title: "Ortodoncia en niños: ¿cuándo es el momento ideal para la primera consulta?",
      excerpt: "Detectar problemas de mordida y crecimiento a tiempo puede simplificar el tratamiento futuro de tu hijo.",
      content: `
        <p>Muchos padres se preguntan cuándo es el momento adecuado para llevar a su hijo al ortodoncista. La respuesta es más temprana de lo que la mayoría imagina: entre los 6 y 7 años es la edad ideal para una primera evaluación.</p>

        <h2>¿Por qué tan temprano?</h2>

        <p>A esa edad comienzan a aparecer los primeros dientes permanentes y ya es posible detectar:</p>

        <ul>
          <li>Problemas de crecimiento de los maxilares</li>
          <li>Mordida cruzada, abierta o invertida</li>
          <li>Hábitos como respiración bucal, deglución atípica o succión del pulgar</li>
          <li>Falta de espacio para los dientes que están por salir</li>
        </ul>

        <h2>¿Qué es la ortopedia facial?</h2>

        <p>La ortopedia facial de los maxilares es una especialidad que trabaja sobre el crecimiento óseo. A diferencia de la ortodoncia (que mueve dientes), la ortopedia guía el desarrollo de los huesos maxilares durante la etapa de crecimiento del niño.</p>

        <p>Intervenir a tiempo permite:</p>

        <ul>
          <li>Corregir alteraciones de crecimiento de forma más sencilla</li>
          <li>Reducir la complejidad de un tratamiento futuro con brackets</li>
          <li>Mejorar la respiración y la función masticatoria</li>
          <li>Prevenir problemas que se agravan con el tiempo</li>
        </ul>

        <h2>¿Todos los niños necesitan tratamiento?</h2>

        <p>No necesariamente. En muchos casos, la primera consulta sirve para controlar y hacer seguimiento del crecimiento sin necesidad de intervenir. Lo importante es evaluar a tiempo para no perder la ventana de oportunidad.</p>

        <h2>¿Cómo es la consulta para niños?</h2>

        <p>La consulta es amigable y no invasiva. Evaluamos la boca, la mordida y el crecimiento facial. Si es necesario, indicamos estudios complementarios y explicamos a los padres con claridad qué encontramos y cuáles son las opciones.</p>
      `,
      category: "Ortopedia",
      date: "2025-06-20",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=60",
      author: {
        name: "Dra. Raquel Rodríguez",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=60",
        bio: "Especialista en Ortodoncia y Ortopedia Facial de los Maxilares con más de 15 años de experiencia.",
      },
    },
  ],
}

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Tratamientos",
      about: "Sobre Mí",
      contact: "Contacto",
      patients: "Pacientes",
    },
    hero: {
      schedule: "AGENDA DE",
      open: "ABIERTA",
      title: "Ortodoncia y ortopedia facial para todas las edades.",
      subtitle: "Diagnóstico preciso, planificación individual y seguimiento profesional para mejorar tu sonrisa, función y salud bucal.",
      cta: "Reservar primera consulta",
      ctaPatients: "Ya estoy en tratamiento",
    },
    about: {
      title: "Especialista en ortodoncia y ortopedia facial de los maxilares",
      description:
        "Somos un equipo especializado en Ortodoncia y Ortopedia facial de los maxilares, enfocado en mejorar no solo la estética de la sonrisa, sino también la función y la salud de nuestros pacientes. Trabajamos con niños, adolescentes y adultos, diseñando tratamientos adaptados a cada etapa de crecimiento y a las necesidades individuales de cada paciente.",
      stats: {
        years: "Años de Experiencia",
        cases: "Pacientes Atendidos",
      },
      features: {
        diagnosis: "Diagnóstico Individualizado",
        planning: "Planificación Precisa",
        certified: "Formación Continua",
        followup: "Seguimiento Cercano",
      },
    },
    services: {
      title: "Tratamientos de ortodoncia y ortopedia para cada necesidad",
      description:
        "Integramos ortodoncia convencional, ortopedia funcional y alineadores transparentes, combinando tecnología, planificación y criterio clínico.",
      items: {
        ortopedia: {
          title: "Ortopedia Facial",
          description: "Guiamos el crecimiento y desarrollo de los maxilares en niños para corregir alteraciones a tiempo.",
        },
        ortodoncia: {
          title: "Ortodoncia",
          description: "Corregimos la posición dentaria y la mordida para mejorar estética, función y estabilidad.",
        },
        alineadores: {
          title: "Alineadores Invisibles",
          description: "Tratamientos cómodos, estéticos y planificados digitalmente para casos seleccionados.",
        },
        ninos: {
          title: "Tratamientos para Niños",
          description: "Interceptamos problemas de crecimiento y mordida en etapas tempranas.",
        },
        adultos: {
          title: "Tratamientos para Adultos",
          description: "Opciones adaptadas a necesidades funcionales, estéticas y tiempos de cada paciente.",
        },
        diagnostico: {
          title: "Diagnóstico y Planificación",
          description: "Evaluación completa con tecnología 3D, radiografías y cefalometría para un plan preciso.",
        },
      },
    },
    forWhom: {
      title: "¿Para quién es?",
      items: [
        "Niños con problemas de mordida o crecimiento",
        "Adolescentes que necesitan corregir posición dental",
        "Adultos que buscan mejorar sonrisa, función y estética",
        "Pacientes que desean tratamiento con alineadores o aparatología convencional",
      ],
    },
    firstVisit: {
      title: "Cómo es la primera consulta",
      steps: [
        { title: "Evaluación clínica", description: "Examen completo de dientes, mordida y maxilares." },
        { title: "Estudios complementarios", description: "Fotografías y estudios si son necesarios." },
        { title: "Diagnóstico personalizado", description: "Análisis detallado de tu situación particular." },
        { title: "Explicación clara", description: "Te explicamos el problema y las opciones de tratamiento." },
        { title: "Plan y presupuesto", description: "Plan propuesto adaptado a tus necesidades y presupuesto." },
      ],
    },
    contact: {
      title: "Contacto",
      description:
        "Agendá tu consulta y recibí una evaluación personalizada. Comenzá tu tratamiento con un plan claro y adaptado a vos.",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo Electrónico",
        phone: "Tu Teléfono",
        message: "Tu Mensaje",
        submit: "Enviar Mensaje",
      },
      info: {
        title: "Información de Contacto",
      },
    },
    footer: {
      company: "Navegación",
      resources: "Recursos",
      about: "Sobre mí",
      services: "Tratamientos",
      blog: "Blog",
      contact: "Contacto",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
      rights: "Todos los derechos reservados.",
      description: "Dra. Raquel Rodríguez — Especialista en Ortodoncia y Ortopedia Facial de los Maxilares. San Salvador de Jujuy.",
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "¿Tenés otra consulta?",
      contact: "Escribinos",
      age: {
        question: "¿A qué edad conviene la primera consulta de ortodoncia?",
        answer:
          "Se recomienda una primera evaluación a partir de los 6-7 años, cuando aparecen los primeros dientes permanentes. Esto permite detectar problemas de crecimiento o mordida a tiempo e intervenir de manera temprana si es necesario.",
      },
      adults: {
        question: "¿Los adultos pueden hacer ortodoncia?",
        answer:
          "Sí, la ortodoncia no tiene límite de edad. Contamos con opciones adaptadas a las necesidades de pacientes adultos, tanto con brackets como con alineadores invisibles.",
      },
      difference: {
        question: "¿Qué diferencia hay entre ortodoncia y ortopedia?",
        answer:
          "La ortopedia se enfoca en guiar el crecimiento de los maxilares, principalmente en niños. La ortodoncia corrige la posición de los dientes. En muchos casos se complementan para lograr el mejor resultado.",
      },
      aligners: {
        question: "¿Los alineadores sirven para todos los casos?",
        answer:
          "Los alineadores son una excelente opción para muchos casos, pero no para todos. En la consulta evaluamos cuál es la mejor alternativa para cada paciente según la complejidad del caso.",
      },
      duration: {
        question: "¿Cuánto dura un tratamiento de ortodoncia?",
        answer:
          "La duración varía según la complejidad del caso. En general, los tratamientos duran entre 12 y 30 meses. En la consulta de diagnóstico te daremos un tiempo estimado para tu caso particular.",
      },
      firstVisit: {
        question: "¿La primera consulta incluye diagnóstico?",
        answer:
          "La primera consulta incluye una evaluación clínica completa. Para el diagnóstico definitivo necesitamos estudios complementarios (radiografías, fotos, escaneo 3D) que se realizan en una segunda visita. El diagnóstico y plan de tratamiento se entregan en una tercera cita.",
      },
    },
    common: {
      learnMore: "Saber más",
    },
    whyChooseUs: {
      title: "Por qué elegirnos",
      slides: {
        diagnosis: {
          title: "Diagnóstico Individualizado",
          description: "Cada paciente es único. Realizamos un diagnóstico preciso con tecnología actual para diseñar el plan más adecuado.",
        },
        planning: {
          title: "Planificación Precisa",
          description: "Utilizamos herramientas digitales y análisis cefalométrico para planificar cada movimiento con exactitud.",
        },
        experience: {
          title: "Más de 15 Años de Experiencia",
          description: "Formación continua y participación en congresos internacionales para incorporar las técnicas más actualizadas.",
        },
        results: {
          title: "Resultados Comprobados",
          description:
            "La confianza de nuestros pacientes y sus resultados reflejan nuestro compromiso con la excelencia clínica.",
        },
      },
    },
    servicesPage: {
      hero: {
        title: "Tratamientos de Ortodoncia y Ortopedia",
        subtitle:
          "Ofrecemos una gama completa de tratamientos adaptados a cada etapa de crecimiento y a las necesidades individuales de cada paciente.",
      },
      services: [
        {
          title: "Ortodoncia Convencional",
          description:
            "Brackets metálicos (ligado activo y autoligado) y brackets de zafiro para corregir la posición dentaria y la mordida con precisión y eficacia.",
          features: [
            "Brackets metálicos de última generación",
            "Brackets de zafiro estéticos",
            "Planificación digital del tratamiento",
            "Seguimiento profesional cercano",
          ],
        },
        {
          title: "Alineadores Invisibles",
          description:
            "Trabajamos con Invisalign, ASIRI y Keep Smiling. Tratamientos cómodos, estéticos y planificados digitalmente para casos seleccionados.",
          features: [
            "Invisalign, ASIRI y Keep Smiling",
            "Escaneo 3D para planificación digital",
            "Removibles y prácticamente invisibles",
            "Ideales para pacientes adultos",
          ],
        },
        {
          title: "Ortopedia Facial de los Maxilares",
          description:
            "Guiamos el crecimiento y desarrollo de los maxilares en niños para corregir alteraciones funcionales y estructurales a tiempo.",
          features: [
            "Tratamiento interceptivo temprano",
            "Corrección de alteraciones de crecimiento",
            "Aparatología funcional específica",
            "Seguimiento del desarrollo facial",
          ],
        },
      ],
      benefits: {
        title: "¿Por qué elegir nuestros tratamientos?",
        subtitle: "Combinamos experiencia clínica, tecnología y un trato cercano para lograr los mejores resultados.",
        items: [
          {
            title: "Diagnóstico Individualizado",
            description: "Evaluación completa con radiografías, cefalometría y escaneo 3D.",
          },
          {
            title: "Planificación Precisa",
            description: "Cada tratamiento se diseña a medida según las necesidades del paciente.",
          },
          {
            title: "Explicaciones Claras",
            description: "Te explicamos cada paso del proceso para que tomes decisiones informadas.",
          },
          {
            title: "Seguimiento Profesional",
            description: "Acompañamiento cercano en cada etapa del tratamiento.",
          },
        ],
      },
      testimonials: {
        title: "Lo que dicen nuestros pacientes",
        subtitle: "La satisfacción de nuestros pacientes es nuestro mejor respaldo.",
        items: [
          {
            name: "María L.",
            role: "Paciente de Ortodoncia",
            content:
              "Excelente profesional. Me explicó todo con claridad desde la primera consulta. Estoy muy contenta con los resultados.",
          },
          {
            name: "Carolina R.",
            role: "Mamá de paciente",
            content:
              "Llevé a mi hijo por problemas de mordida y el tratamiento fue impecable. La Dra. Raquel es muy dedicada y profesional.",
          },
          {
            name: "Pablo M.",
            role: "Paciente de Alineadores",
            content:
              "Elegí alineadores invisibles y fue la mejor decisión. El seguimiento es constante y los resultados se ven desde el inicio.",
          },
        ],
      },
      cta: {
        title: "¿Querés comenzar tu tratamiento?",
        subtitle: "Agendá tu primera consulta y recibí un diagnóstico personalizado.",
      },
    },
    aboutPage: {
      hero: {
        title: "Dra. Raquel Rodríguez",
        subtitle: "Especialista en Ortodoncia y Ortopedia Facial de los Maxilares",
      },
      mission: {
        title: "Mi Enfoque",
        description:
          "Nuestro enfoque se basa en un principio clave: cada paciente es único y requiere un diagnóstico preciso y un plan de tratamiento personalizado. Integramos ortodoncia convencional, ortopedia funcional y alineadores transparentes, combinando tecnología, planificación y criterio clínico. Atención centrada en el diagnóstico, la biomecánica y el seguimiento continuo del tratamiento.",
      },
      team: {
        title: "Formación y Trayectoria",
        description:
          "Con más de 15 años de experiencia específicos en el área, contamos con una trayectoria consolidada en el diagnóstico y tratamiento de alteraciones dentarias y del crecimiento maxilofacial. Nuestra práctica se sustenta en la formación continua, con participación en cursos y congresos internacionales.",
      },
      values: {
        title: "Valores",
        items: [
          {
            title: "Excelencia Clínica",
            description:
              "Nos esforzamos por los más altos estándares en cada diagnóstico, planificación y tratamiento.",
          },
          {
            title: "Trato Humano",
            description:
              "Cada paciente recibe una atención cercana, con explicaciones claras y acompañamiento en cada etapa.",
          },
          {
            title: "Planificación Individualizada",
            description:
              "No hay tratamientos genéricos. Cada plan se diseña a medida según las necesidades de cada caso.",
          },
          {
            title: "Actualización Constante",
            description:
              "Formación continua y participación en congresos internacionales para incorporar técnicas actualizadas.",
          },
        ],
      },
      stats: {
        title: "Trayectoria",
        items: [
          { value: "15+", label: "Años de Experiencia" },
          { value: "5★", label: "Calificación en Google" },
          { value: "100%", label: "Compromiso con cada paciente" },
          { value: "3", label: "Marcas de Alineadores" },
        ],
      },
      cta: {
        title: "¿Querés conocernos?",
        subtitle: "Agendá tu consulta y recibí una evaluación personalizada.",
      },
    },
    patients: {
      hero: {
        title: "Guía para pacientes en tratamiento",
        subtitle: "Todo lo que necesitás durante tu tratamiento: indicaciones, cuidados y resolución de dudas frecuentes.",
        cta: "Contactar por WhatsApp",
        emergency: "Tengo una urgencia",
      },
      quickAccess: {
        title: "Accesos rápidos",
        items: [
          { title: "Cuidados con brackets", anchor: "brackets" },
          { title: "Cuidados con alineadores", anchor: "alineadores" },
          { title: "Qué hacer si siento dolor", anchor: "dolor" },
          { title: "Qué hacer si se despega algo", anchor: "urgencias" },
          { title: "Recomendaciones de higiene", anchor: "higiene" },
          { title: "Urgencias frecuentes", anchor: "urgencias" },
        ],
      },
      brackets: {
        title: "Indicaciones para Brackets",
        items: [
          { title: "Alimentos a evitar", description: "Evitá alimentos duros (caramelos, nueces, hielo), pegajosos (chicles, caramelos masticables) y morder con los dientes delanteros (manzana entera, choclo). Cortá los alimentos en trozos pequeños." },
          { title: "Higiene", description: "Cepillá después de cada comida con cepillo suave. Usá cepillos interdentales para limpiar alrededor de los brackets. El hilo dental con enhebrador es fundamental." },
          { title: "Molestias iniciales", description: "Es normal sentir presión y sensibilidad los primeros 3-5 días después de cada ajuste. Podés usar cera de ortodoncia en los brackets que molesten." },
          { title: "Si se despega un bracket", description: "No te alarmes. Si no molesta, podés esperar hasta tu próximo turno. Si pincha o molesta, cubrí con cera y contactanos." },
          { title: "Si pincha el arco", description: "Usá cera para cubrir la zona. Si la molestia es importante, contactanos para resolverlo lo antes posible." },
        ],
      },
      alineadores: {
        title: "Indicaciones para Alineadores",
        items: [
          { title: "Horas de uso", description: "Usá los alineadores entre 20 y 22 horas por día. Solo retiralos para comer, tomar bebidas calientes o con color, y para la higiene." },
          { title: "Cómo colocarlos y retirarlos", description: "Colocá presionando con los dedos, nunca mordiendo. Para retirar, empezá por la parte posterior de ambos lados." },
          { title: "Limpieza", description: "Lavá los alineadores con cepillo suave y jabón neutro cada vez que los retires. No uses agua caliente ya que pueden deformarse." },
          { title: "Si se rompe uno", description: "Contactanos inmediatamente. Mientras tanto, podés usar el alineador anterior hasta que te indiquemos qué hacer." },
          { title: "Cuándo pasar al siguiente", description: "Cambiá de alineador según las indicaciones que te dimos. No te adelantes ni te atrases sin consultarnos." },
          { title: "Uso de elásticos/ataches", description: "Si te indicamos el uso de elásticos, es fundamental cumplir con las horas indicadas para que el tratamiento avance correctamente." },
        ],
      },
      ortopedia: {
        title: "Indicaciones para Ortopedia",
        items: [
          { title: "Horas de uso", description: "Cumplí con las horas de uso indicadas. La constancia es clave para que el aparato funcione correctamente." },
          { title: "Adaptación", description: "Los primeros días puede generar molestias leves y aumento de salivación. Esto es normal y mejora rápidamente." },
          { title: "Limpieza", description: "Limpiá el aparato diariamente con cepillo y jabón neutro. Guardalo siempre en su estuche cuando no lo uses." },
          { title: "Controles", description: "No faltes a los controles programados. Son fundamentales para ajustar el aparato y evaluar los avances." },
          { title: "Constancia", description: "La constancia en el uso es lo que determina el éxito del tratamiento. Usá el aparato la cantidad de horas indicadas cada día." },
        ],
      },
      normalVsConsult: {
        title: "¿Es normal o debo consultar?",
        normal: {
          title: "Es normal",
          items: [
            "Presión los primeros días después del control",
            "Leve sensibilidad al masticar",
            "Pequeñas molestias luego del ajuste",
            "Aumento de salivación con aparato nuevo",
          ],
        },
        consult: {
          title: "Consultanos si",
          items: [
            "Hay dolor intenso que no cede con analgésicos",
            "Se rompió el aparato",
            "No podés usar el alineador",
            "Hay lastimaduras importantes",
            "Se perdió una parte del aparato",
          ],
        },
      },
      hygiene: {
        title: "Higiene y Cuidados",
        items: [
          { title: "Cepillado", description: "Cepillá después de cada comida, dedicando al menos 3 minutos. Usá cepillo de cerdas suaves." },
          { title: "Hilo dental", description: "Usá hilo dental al menos una vez al día. Con brackets, usá enhebrador de hilo dental." },
          { title: "Cepillos interdentales", description: "Son fundamentales para limpiar entre los brackets y alrededor de los arcos." },
          { title: "Limpieza de alineadores", description: "Lavá con cepillo suave y jabón neutro. Evitá agua caliente y productos abrasivos." },
          { title: "Enjuague bucal", description: "Podés complementar con enjuague bucal sin alcohol para mantener una buena salud bucal." },
        ],
      },
      emergencies: {
        title: "Urgencias Frecuentes",
        items: [
          { title: "Se despegó un bracket", description: "Cubrí con cera si molesta. Si no genera molestia, podés esperar hasta tu próximo turno. Contactanos para que evaluemos si es necesario adelantar la cita." },
          { title: "Pincha el arco", description: "Cubrí la zona con cera de ortodoncia. Si la molestia persiste, contactanos para resolverlo lo antes posible." },
          { title: "Perdí un alineador", description: "Usá el alineador anterior hasta que nos contactes. Te indicaremos si pasar al siguiente o reponer el perdido." },
          { title: "El alineador no adapta", description: "No fuerces la colocación. Contactanos para evaluar si es necesario un ajuste." },
          { title: "Se rompió el aparato removible", description: "No intentes repararlo. Guardá las partes y contactanos para evaluar la situación." },
          { title: "Olvidé usar el aparato varios días", description: "Retomá el uso lo antes posible y contactanos para evaluar si es necesario ajustar el plan de tratamiento." },
          { title: "Molestia en microimplante", description: "Si hay inflamación o molestia persistente, contactanos. Mantené la zona limpia con cepillado suave." },
        ],
      },
      adherence: {
        title: "La constancia es clave",
        description: "La constancia en el uso del aparato y la asistencia a los controles es fundamental para que el tratamiento avance correctamente. Seguir las indicaciones mejora la predictibilidad y evita retrasos.",
      },
    },
    blog: {
      title: "Blog y Recursos",
      subtitle: "Artículos sobre ortodoncia, ortopedia facial y salud bucal.",
      categories: {
        all: "Todos",
        ortodoncia: "Ortodoncia",
        ortopedia: "Ortopedia",
        alineadores: "Alineadores",
        cuidados: "Cuidados",
      },
      readMore: "Leer más",
      backToBlog: "Volver al blog",
      share: "Compartir artículo",
      notFound: {
        title: "Post no encontrado",
        description: "El artículo que buscás no existe o ha sido movido.",
      },
      shareSuccess: "¡Enlace copiado al portapapeles!",
      shareError: "No se pudo compartir el artículo",
    },
  },
}

export type TranslationKey = keyof typeof translations.es

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => any
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useTranslations() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslations must be used within a LanguageProvider")
  }
  return context
}

export function getTranslation(language: Language, key: string): any {
  const keys = key.split(".")
  let value: any = translations[language]

  for (const k of keys) {
    if (value === undefined) return key
    value = value[k]
  }

  return value || key
}
