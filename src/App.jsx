import { useState } from "react";
import "./App.css";

const sections = [
  {
    id: "workouts",
    title: "Benefits of Quick Workouts",
    subtitle: "10/02",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    description: "Discover how short workouts can boost your health and energy."
  },
  {
    id: "meals",
    title: "Meal Prep Ideas",
    subtitle: "09/28",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    description: "Healthy and easy meal prep ideas for your fitness journey."
  },
  {
    id: "hydration",
    title: "Hydration Tips",
    subtitle: "09/25",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    description: "Learn how proper hydration can improve your workouts and recovery."
  },
  {
    id: "rest",
    title: "Rest & Recovery",
    subtitle: "09/22",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Why rest days are essential for progress and injury prevention."
  }
];

function App() {
  const [activeSection, setActiveSection] = useState(null);
      const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-dark text-light min-vh-100">
      <nav className="navbar navbar-dark bg-dark border-bottom mb-5">
        <div className="container-fluid">
          <div className="display-3 fw-bold w-100 text-center mb-2" style={{letterSpacing: '0.03em'}}>
            EL ARTE DE MINISTRAR CANTANDO
          </div>
        </div>
      </nav>

          {/* Toggle button for sidebar menu */}
      {/* Elimina el botón sandwich extra, solo el de la navbar permanece */}

          {/* Sidebar menu overlay */}
          {showMenu && (
            <div className="sidebar-menu bg-dark text-light position-fixed h-100" style={{width: '260px', top: 0, left: 0, zIndex: 1200, borderRight: '1px solid #222', boxShadow: '2px 0 16px rgba(0,0,0,0.2)'}}>
              <div className="p-4 border-bottom d-flex justify-content-between align-items-center">
                <h5 className="sidebar-title mb-0">Lecciones</h5>
                <button className="btn btn-sm btn-outline-light ms-2" onClick={() => setShowMenu(false)}>&times;</button>
              </div>
              <div className="p-2">
                <ul className="list-group list-group-flush">
                  {sections.map(section => (
                    <li key={section.id} className={`list-group-item list-group-item-action bg-dark text-light duolingo-font`} style={{cursor: 'pointer'}} onClick={() => { setActiveSection(section.id); setShowMenu(false); }}>
                      <span className="fw-bold">{section.title}</span>
                      <br />
                      <span className="small text-info">{section.subtitle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

  <main className="container">
    {/* DÍA 1 – CANTANDO */}
    <section className="mb-5">
  <h2 className="display-5 fw-bold text-center mb-5 duolingo-font text-info">📅 DÍA 1 – CANTANDO</h2>
  <div className="row g-4 justify-content-center mt-3">
        {/* Tarjetas de Día 1 */}
        {[
          {
            title: 'Devocional Día 1 – Canta con Enfoque',
            items: [
              'Texto clave: 1 Corintios 14:15',
              'El apóstol Pablo nos recuerda que cantar debe unir espíritu y entendimiento.',
              'Con el espíritu significa abrirse al mover del Espíritu Santo y dejar que Él guíe cada palabra y cada nota (Juan 4:24).',
              'Con el entendimiento implica prepararse, conocer la letra, cuidar la técnica y expresar el mensaje con claridad (Colosenses 3:16).',
              'Un adorador que canta con el espíritu tiene sensibilidad para percibir lo que Dios quiere hacer en ese momento de la congregación.',
              'Un adorador que canta con entendimiento honra a Dios al cuidar su voz, el mensaje y la excelencia del ministerio.',
              'Ejemplo: una canción de gozo debe reflejar alegría en el rostro, mientras que una de rendición requiere reverencia y humildad.',
              'Cantar con enfoque evita caer en dos extremos: la improvisación emocional sin dirección o la frialdad mecánica sin vida.',
              'El ministro equilibrado combina pasión y preparación: ensaya, ora, estudia, pero llega al culto abierto a los cambios que el Espíritu pueda indicar.',
              'Aplicación: Ora antes de servir pidiendo sensibilidad (Salmo 19:14).',
              'Revisa las canciones, entiende su contenido bíblico y define qué verdad quieres que la iglesia reciba.',
              'Pregunta clave: “¿Qué semilla quiero dejar en los corazones con este canto?”.'
            ]
          },
          {
            title: 'Fundamentos de la Técnica Vocal',
            items: [
              'Postura y Relajación',
              'Posición corporal',
              'Liberar tensión',
              'Respiración Correcta',
              'Mum*',
              'Haha*',
              'Mee May Mah*',
              'Mee May Mah Moh Moo*',
              'He He*',
              'Nu Yah*',
              'He Yah*',
              'Mum Mum*',
              'Calentamiento Vocal',
              'Hum Hoo Ha*',
              'Ah*',
              'Bah Bah*',
              'Bee Yah*',
              'Mee Ee Yah*',
              'Ha*',
              'Hm Mee hoo Yah Hum*',
              'Ha Ha  E-L*',
              'Expansión del Rango Vocal',
              'Atrapa tu Lengua*',
              'Habla-Canta*',
              'Sirena*',
              'Mah Mah Mah Mah*',
              'Mah Bah Pah*',
              'Trino de Labios*',
              'Bostezo*'
            ]
          },
          {
            title: 'Rango vocal',
            items: [
              '¿Qué es un rango vocal?',
              'El rango vocal es el conjunto de notas (desde la más grave hasta la más aguda) que una persona puede cantar cómodamente y con buena calidad de sonido. Descubrir tu rango vocal te ayuda a escoger canciones adecuadas, evitar forzar la voz y potenciar tu capacidad como adorador.',
              '🔎 ¿Cómo descubrir tu rango vocal?',
              'Haz un calentamiento vocal previo (5–10 minutos).',
              'Empieza cantando una nota grave cómoda (ejemplo: DO2 para hombres, LA3 para mujeres) e intenta bajar lo más que puedas sin forzar.',
              'Luego sube progresivamente con una vocal abierta (“ah”) hasta llegar a tu nota más aguda posible sin gritar.',
              'Anota la nota más grave y la más aguda alcanzadas.',
              'Ese intervalo entre ambas es tu rango vocal.',
              '🎤 Rangos vocales principales',
              'Bajo: E2 – E4*',
              'Renuevame - Marcos Witt',
              'Barítono: A2 – A4*',
              'Que Seas mi Universo - Jesús Adrian Romero',
              'Tenor: C3 – B4 (a veces hasta C5)*',
              'La Única Razón - Danilo Montero',
              'Contralto (Alto femenino): F3 – F5*',
              'Supe que me Amabas - Marcela Gándara',
              'Mezzosoprano: A3 – A5*',
              'Al Final - Lilly Goodman',
              'Soprano: C4 – C6*',
              'Como Dijiste - Christine D’Clario'
            ]
          },
          {
            title: 'Técnica y Terminología Vocal',
            items: [
              'Tipos de Voz (Registros):',
              'Voz de pecho*',
              'Potente, lleno, usado al hablar y cantar grave.',
              'Voz de cabeza*',
              'Ligero, resonante, usado para notas agudas y falsetto.',
              'Falsetto*',
              'Ligero, aireado, usado para notas muy agudas.',
              'Vocal Fry*',
              'Voz grave áspera*',
              'Voz de Silbido*',
              'Ligero, muy agudo, usado en notas extremas.',
              'Voz mixta (mezclada)*',
              'Combinación de voz de pecho y voz de cabeza.',
              'Conexiones entre registros:',
              'Puente o “break”*',
              'Transición entre voz de pecho y cabeza.',
              'Desconexión o “yodeling”*',
              'Cambio abrupto entre registros.',
              'Puente y mezcla de registros*',
              'Transición suave y combinación de registros.',
              'Recursos técnicos expresivos:',
              'Vibrato*',
              'Pequeña oscilación en la nota para dar riqueza y emoción.',
              'Staccato*',
              'Notas cortas y separadas.',
              'Legato*',
              'Conexión suave entre notas.',
              'Delineación*',
              'Definición clara de las notas.',
              'Melisma*',
              'Variación rápida entre notas en una sola sílaba.'
            ]
          },
          {
            title: 'Vocalización Práctica',
            items: [
              'Escalas Ascendentes con Ataque Glotal – Hombres*',
              'Escalas Ascendentes con Ataque Glotal – Mujeres*',
              'Escalas Descendentes con Ataque Glotal – Hombres*',
              'Escalas Descendentes con Ataque Glotal – Mujeres*',
              'Romper el Hábito de Usar la Lengua – Hombres*',
              'Romper el Hábito de Usar la Lengua – Mujeres*',
              'Máscara y Puente – Hombres*',
              'Mascara y Puente – Mujeres*',
              'Cambiando la Vocal – Hombres*',
              'Cambiando la Vocal – Mujeres*',
              'Uso de Deslizamiento 1 – Hombres y Mujeres*',
              'Uso de Deslizamiento 2 – Hombres y Mujeres*',
              'Descendiendo y Ascendiendo – Hombres*',
              'Descendiendo y Ascendiendo – Mujeres*'
            ]
          },
          {
            title: 'Dicción y Pronunciación',
            items: [
                '1. Lectura en voz alta',
                'Leer un pasaje bíblico despacio y luego a velocidad normal, articulando bien cada palabra.',
                '2. Vocales abiertas y cerradas',
                'Cantar escalas con a – e – i – o – u y combinaciones como “ma – me – mi – mo – mu”.',
                '3. Trabalenguas',
                'Ejercicios como “Tres tristes tigres” o “Pablito clavó un clavito”, primero lento y luego rápido.',
                '4. Respiración y pausas',
                'Recitar un versículo con pausas naturales, evitando unir palabras incorrectamente.',
                '5. Consonantes marcadas',
                'Cantar un coro exagerando las consonantes, por ejemplo: “Grande es el Señor”.',
                '6. Sílabas rápidas',
                'Practicar secuencias pa-pe-pi-po-pu o fra-fre-fri-fro-fru, aumentando la velocidad sin perder claridad.',
                '7. Espejo',
                'Cantar frente a un espejo, observando la apertura de la boca y corrigiendo vicios de pronunciación.'
            ]
          },
          {
            title: 'Musicalidad – Entrenamiento Auditivo',
            items: [
              'Afinación (ERVC: Escuchar – Retener – Vocalizar – Confirmar):',
              'Intervalos:',
              'Segunda mayor*',
              'Tercera mayor*',
              'Cuarta mayor*',
              'Quinta mayor*',
              'Sexta mayor*',
              'Séptima mayor*',
              'Tercera menor*',
              'Sexta menor*',
              'Triada mayor*',
              'Triada menor*',
              'Tempo y compases:',
              '2/4*',
              '3/4*',
              '4/4*',
              '6/8*',
              '12/8*',
              'Estilos y recursos musicales:',
              'Trinos*',
              'Pasajes*',
              'Scoop*',
              'Doblado de nota*',
              'Doblado de vocal*',
              'Falsetto1*',
              'Géneros musicales:',
              'Clásico*',
              'Teatro Musical*',
              'Pop*',
              'Country*',
              'Jazz*',
              'Gospel/Blues*',
              'R&B*',
              'Worship*',
              'Praise*'
            ]
          },
          {
            title: 'Cuidado de la Voz',
            items: [
              '1. Antes de cantar',
                'Hidratación: Bebe agua natural a temperatura ambiente para mantener las cuerdas vocales flexibles.',
                'Alimentación: Evita lácteos, frituras y comidas pesadas; prefiere alimentos ligeros y frutas como la manzana verde.',
                'Calentamiento vocal: Dedica 5–10 minutos a vocalizaciones suaves (humming, trinos de labios, escalas).',
                'Oración: Presenta tu voz a Dios, reconociendo que cantar es ministerio y servicio (Colosenses 3:17).',
                '2. Durante el canto',
                'Postura: Espalda recta, hombros relajados y pies firmes para facilitar respiración y proyección.',
                'Respiración: Usa el diafragma para sostener frases largas y evitar fatiga.',
                'Proyección: Canta con apoyo de aire, nunca gritando ni forzando.',
                'Adaptación: Si la canción es muy alta, busca armonías o pide bajar la tonalidad.',
                '3. Después de cantar',
                'Enfriamiento vocal: Haz vocalizaciones descendentes con “mmm” o “ng” para relajar las cuerdas.',
                'Descanso: Evita hablar fuerte o susurrar si notas cansancio o ronquera.',
                'Silencio reparador: En ocasiones, lo mejor es dar reposo absoluto a la voz.',
                'Agradecimiento: Termina orando y reconociendo que cantar es un privilegio (Salmo 103:1).'
            ]
          },
          {
            title: 'Evaluación del Curso del día, Asignación de Tareas y Cierre',
            items: [
              'Evaluación grupal de la clase.',
              'Observaciones personalizadas.',
              'Asignación para la siguiente clase: Traer una pista cristiana de canción de alabanza y adoración para cantarla en la próxima clase y realizar una evaluación y retroalimentación usando la ficha de evaluación.',
              'Oración final.'
            ]
          }
        ].map((card, idx) => (
          <div className="col-md-6 col-lg-4" key={card.title + idx}>
            <div className="card bg-secondary text-light shadow duolingo-card h-100">
              <div className="card-body duolingo-card-body">
                <h5 className="card-title fs-4 fw-bold duolingo-font mb-3">{idx + 1}. {card.title}</h5>
                <ul className="list-unstyled">
                  {card.items.map((item, i) => {
                    // Si el item termina en *, es un enlace a mp3
                    const mp3Match = item.match(/(.+?)\*/);
                    if (mp3Match) {
                      // Genera nombre de archivo mp3
                      const clean = mp3Match[1].replace(/[^\w\d]/g, "_").replace(/_+/g, "_").replace(/^_+|_+$/g, "");
                      const mp3File = `/assets/${clean}.mp3`;
                      return (
                        <li key={i} className="mb-2">
                          <span className="me-2">&#9733;</span>
                          <a href={mp3File} className="link-info text-decoration-none" target="_blank" rel="noopener noreferrer">
                            {item.replace('*', '')}
                          </a>
                        </li>
                      );
                    }
                    return <li key={i} className="mb-2">{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Separador visual entre Día 1 y Día 2 */}
    <div className="container mb-5">
      <hr className="border-info" style={{borderWidth: '2px'}} />
    </div>

    {/* DÍA 2 – MINISTRANDO */}
    <section className="mb-5">
  <h2 className="display-5 fw-bold text-center mb-5 duolingo-font text-info">📅 DÍA 2 – MINISTRANDO</h2>
  <div className="row g-5 justify-content-center mt-3">
        {/* Tarjetas de Día 2 */}
  {[
          {
            title: 'Devocional Día 2 – Hacedlo Bien',
            items: [
              'Texto clave: “Cantad a Jehová cántico nuevo; hacedlo bien, tañendo con júbilo.” – Salmo 33:3',
              'El salmista nos recuerda que la alabanza no debe hacerse de cualquier manera, sino con excelencia y alegría. Dios es digno de lo mejor, y eso incluye la disposición de nuestro corazón y la preparación de nuestro canto.',
              '“Hacedlo bien” implica cuidar tanto lo espiritual como lo técnico. Espiritualmente, cantar con un corazón limpio, sincero y lleno de gratitud. Técnicamente, afinar, vocalizar, ensayar y dar lo mejor de nuestro instrumento. Ambas dimensiones se complementan: la excelencia técnica sin un corazón rendido se vuelve espectáculo; la pasión sin preparación puede ser un tropiezo.',
              'Ejemplo práctico: un adorador que llega puntual, ora, calienta su voz y se conecta con la congregación está aplicando este principio. Otro que canta una canción alegre debe reflejar gozo en su rostro y energía en su expresión, pues la Biblia dice que debemos hacerlo con júbilo.',
              'El equilibrio está en entender que la excelencia en la alabanza no es para lucirse, sino para guiar al pueblo de Dios a adorar con libertad y claridad.',
              'Aplicación: Antes de cada servicio, revisa tu actitud y tu preparación. Pregúntate: “¿Estoy ofreciendo lo mejor de mí al Señor?”.',
              'Frase inspiradora:',
              '“La excelencia en la alabanza no es perfección humana, sino ofrecerle a Dios lo mejor de nuestro corazón y de nuestro esfuerzo.”'
            ]
          },
          {
            title: 'Preparación del Ministro de Alabanza',
            items: [
              'Puntualidad y disciplina: llegar a tiempo para coordinar, orar y calentar.',
              'Oración personal durante la semana: mantener devocionalidad constante (Efesios 5:19).',
              'Humildad y apertura a la corrección: aceptar sugerencias y críticas constructivas.',
              'Actitud del corazón: cantar para Dios y guiar a la congregación, no para lucirse.'
            ]
          },
          {
            title: 'Interpretación y Expresión',
            items: [
              'Comunicación no verbal: contacto visual, expresiones faciales, lenguaje corporal.',
              'Cantar con intención: alegría en canciones alegres, reverencia en canciones solemnes.',
              'Conexión con la congregación: guiar con seguridad y enfoque.',
              'Dominio del escenario: vencer miedo y distracciones técnicas.'
            ]
          },
          {
            title: 'Técnica Escénica y Práctica Integral',
            items: [
              'Uso correcto del micrófono: distancia, ángulo, evitar golpes de aire.',
              'Postura frente al escenario: seguridad, apertura y confianza.',
              'Manejo de la pista musical: no atrasarse, seguir el tempo y estructura.',
              'Selección de canciones: adecuarlas al tema del servicio, no solo a gustos personales.',
              'Manejo de errores: cómo reaccionar ante fallas del equipo o coros sin perder liderazgo.'
            ]
          },
          {
            title: 'Trabajo con el Coro y la Banda',
            items: [
              'Dirigir al coro en lugar de dejarse llevar por él.',
              'Coordinar entradas y salidas con claridad.',
              'Escuchar la mezcla musical sin depender excesivamente del retorno visual.',
              'Mantener unidad y equilibrio en la armonía grupal.'
            ]
          },
          {
            title: 'Dinámicas y Ejercicios Grupales',
            items: [
              'Ensayo práctico con pista en grupo.',
              'Ejercicio de dirección: cada alumno dirige una estrofa y recibe feedback.',
              'Simulación de escenario con distracciones (micrófono bajo, pista cortada, etc.).'
            ]
          },
          {
            title: 'Buenas Prácticas',
            items: [
              'Los ministerios de alabanza con mayor impacto destacan por unir técnica, vida espiritual, testimonio e influencia social.',
              'Técnico: Ensayan constantemente, cuidan afinación, armonización y preparan bien sus canciones (ej. Hillsong Worship).',
              'Espiritual: Mantienen oración y devocional, entendiendo que ministrar es servir a Dios (ej. Miel San Marcos).',
              'Testimonio: Viven con integridad y coherencia dentro y fuera del escenario (ej. Christine D’Clario).',
              'Social: Apoyan causas misioneras y proyectos comunitarios (ej. Planetshakers).'
            ]
          },
          {
            title: 'Sirviendo en Santidad',
            items: [
              'Dios es santo y pide santidad en quienes le sirven (1 Pedro 1:15-16). Un ministro de alabanza debe cuidar su corazón, evitando orgullo o rencor; su mente, llenándola de la Palabra (Filipenses 4:8); y su testimonio, viviendo lo que canta.',
              'Antes de ministrar, si hay pecado o conflicto, es necesario arreglar cuentas con Dios y con los hermanos (Mateo 5:23-24). La técnica y el cuidado vocal son importantes, pero deben estar acompañados de oración, consagración y obediencia.',
              '“Señor, ¿quién habitará en tu tabernáculo? ¿Quién morará en tu monte santo?” (Salmo 15:1).'
            ]
          },
          {
            title: 'Evaluación Final y Retroalimentación',
            items: [
              'Cada alumno dirige una canción completa aplicando lo aprendido.',
              'Feedback grupal y personal del instructor.',
              'Compromisos individuales para seguir creciendo.',
              'Oración final de consagración.'
            ]
          }
  ].map((card, idx) => (
          <div className="col-md-6 col-lg-4" key={card.title + idx}>
            <div className="card bg-secondary text-light shadow duolingo-card h-100">
              <div className="card-body duolingo-card-body">
                <h5 className="card-title fs-4 fw-bold duolingo-font mb-3">{idx + 1}. {card.title}</h5>
                <ul className="list-unstyled">
                  {card.items.map((item, i) => {
                    // Si el item termina en *, es un enlace a mp3
                    const mp3Match = item.match(/(.+?)\*/);
                    if (mp3Match) {
                      // Genera nombre de archivo mp3
                      const clean = mp3Match[1].replace(/[^\w\d]/g, "_").replace(/_+/g, "_").replace(/^_+|_+$/g, "");
                      const mp3File = `/assets/${clean}.mp3`;
                      return (
                        <li key={i} className="mb-2">
                          <span className="me-2">&#9733;</span>
                          <a href={mp3File} className="link-info text-decoration-none" target="_blank" rel="noopener noreferrer">
                            {item.replace('*', '')}
                          </a>
                        </li>
                      );
                    }
                    return <li key={i} className="mb-2">{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
    </div>
  );
}

function SectionDetail({ section, onBack }) {
  return (
    <div className="mt-4">
      <button className="btn btn-outline-light mb-4" onClick={onBack}>← Back</button>
      <h2 className="fs-1 fw-bold mb-3">{section.title}</h2>
      <h4 className="fs-4 text-muted mb-4">{section.subtitle}</h4>
      <div className="mb-4">
        <img src={section.img} alt={section.title} className="img-fluid rounded shadow" />
      </div>
      <p className="lead mb-4">{section.description}</p>
      <div className="mb-4">
        <label className="form-label">Your thoughts:</label>
        <textarea className="form-control" rows={3} placeholder="Write something..." />
      </div>
      <div className="mb-4">
        <label className="form-label">Listen:</label>
        <audio controls className="w-100">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
        </audio>
      </div>
      <div className="mb-4">
        <label className="form-label">Watch:</label>
        <video controls className="w-100 rounded">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;

