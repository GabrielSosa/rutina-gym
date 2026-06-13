import { useState } from "react";

const DAYS = [
  {
    id: "d1",
    label: "D1",
    title: "Pecho & Tríceps",
    sub: "Lunes · Calentamiento 5 min caminadora",
    tip: "Empieza con peso ligero la primera semana — la técnica vale más que el peso.",
    grupos: [
      {
        nombre: "PECHO",
        color: "#ff4d00",
        ejercicios: [
          {
            num: "01", nombre: "Prensa de Pecho en Máquina",
            maquina: "Chest Press Machine",
            series: "3", reps: "12–15", descanso: "60 seg", foco: "Pecho completo",
            ajuste: "Asiento al nivel en que las manijas queden a la altura del pecho medio. Espalda pegada al respaldo. Peso: 10–20 kg.",
            pasos: ["Siéntate con la espalda completamente apoyada. Pies planos en el suelo.", "Agarra las manijas y empuja hacia adelante extendiendo los brazos. No bloquees los codos al final.", "Regresa lento (2–3 seg) hasta sentir el estiramiento en el pecho.", "Repite sin rebotar en el punto de inicio."],
            tip: "Si las últimas 3 reps no cuestan trabajo, sube una placa la próxima semana.",
            video: "N7DjfGB8-xY", videoTitulo: "Press de pecho en máquina — tutorial en español"
          },
          {
            num: "02", nombre: "Mariposa / Pec Deck",
            maquina: "Pec Deck Machine",
            series: "3", reps: "12", descanso: "60 seg", foco: "Pecho interno",
            ajuste: "Codos a la altura de los hombros al apoyar los antebrazos en los cojines. Peso: 10–20 kg.",
            pasos: ["Siéntate y apoya los antebrazos en los cojines laterales.", "Cierra los brazos hacia el centro como aplaudiendo. Aprieta el pecho al juntar 1 seg.", "Abre lentamente hasta sentir el estiramiento. Controla ese regreso."],
            tip: "El límite al abrir es el estiramiento del pecho, no el dolor en el hombro.",
            video: "WtMmRk1SCEM", videoTitulo: "Pec Deck — tutorial en español"
          },
          {
            num: "03", nombre: "Cruce de Cables (Cable Crossover)",
            maquina: "Torre de Cables — Poleas Altas",
            series: "3", reps: "15", descanso: "60 seg", foco: "Definición pecho",
            ajuste: "Poleas en posición alta. Un pie adelantado para equilibrio. Peso: 5–10 kg por lado.",
            pasos: ["Párate en el centro, un pie adelante. Agarra una manija en cada mano, brazos abiertos arriba.", "Con codos ligeramente doblados (fijos), jala los cables hacia abajo y al centro.", "Las manos se juntan frente al abdomen. Aprieta el pecho al juntar.", "Regresa lento abriendo los brazos arriba."],
            tip: "El cuerpo no se mueve. Solo los brazos. Si te inclinas, el peso es mucho.",
            video: "taI4XduLpTk", videoTitulo: "Cruce de cables pecho — tutorial"
          }
        ]
      },
      {
        nombre: "TRÍCEPS",
        color: "#3b82f6",
        ejercicios: [
          {
            num: "04", nombre: "Extensión de Tríceps en Polea (Pushdown)",
            maquina: "Torre de Cables — Polea Alta",
            series: "3", reps: "15", descanso: "60 seg", foco: "Tríceps completo",
            ajuste: "Cuerda larga (rope) en polea alta. Peso: 10–15 kg. Párate a 30–40 cm de la máquina.",
            pasos: ["Agarra la cuerda con ambas manos, palmas enfrentadas. Codos pegados a las costillas.", "Empuja hacia abajo extendiendo los codos. Al final, separa levemente los extremos de la cuerda.", "Sube lento hasta que los antebrazos queden a 90°. Los codos NO se mueven de lugar."],
            tip: "Si los codos se levantan al subir, el peso está muy pesado. 15 reps limpias > 8 reps chapuceras.",
            video: "7Jc4jHxax60", videoTitulo: "Extensión tríceps polea — tutorial en español"
          },
          {
            num: "05", nombre: "Press Francés con Mancuernas",
            maquina: "Banco plano + Mancuernas",
            series: "3", reps: "12", descanso: "60 seg", foco: "Tríceps (cabeza larga)",
            ajuste: "Acostado en banco plano. Mancuernas de 6–10 kg. Brazos extendidos arriba al inicio.",
            pasos: ["Acostado, sostén las mancuernas con los brazos extendidos hacia arriba.", "Dobla SOLO los codos bajando las mancuernas hacia la frente. Los codos apuntan al techo, no se abren.", "Extiende los codos de vuelta arriba. Los codos no se mueven de posición."],
            tip: "Peso ligero. Si los codos se abren hacia afuera, el peso es mucho.",
            video: "Rn6LgSEPsDc", videoTitulo: "Press francés tríceps — tutorial"
          },
          {
            num: "06", nombre: "Fondos en Máquina (Tricep Dip Machine)",
            maquina: "Life Fitness Tricep Dip Machine",
            series: "3", reps: "12–15", descanso: "60 seg", foco: "Tríceps completo",
            ajuste: "Asiento para que los codos queden a la altura de los hombros. Peso: 15–25 kg.",
            pasos: ["Siéntate derecho, agarra las manijas con palmas hacia abajo.", "Empuja hacia abajo extendiendo los codos completamente.", "Sube lento de vuelta. No dejes caer el peso.", "Espalda pegada al respaldo en todo momento."],
            tip: "Si no hay esta máquina en tu gym, repite una serie extra del pushdown de polea.",
            video: "tnYdPDikMw", videoTitulo: "Fondos tríceps en máquina — tutorial"
          }
        ]
      }
    ]
  },
  {
    id: "d2",
    label: "D2",
    title: "Espalda & Bíceps",
    sub: "Martes · Jalón y tirón",
    tip: "Truco mental: imagina que jalas con los codos, no con las manos. Eso activa la espalda y no los brazos.",
    grupos: [
      {
        nombre: "ESPALDA",
        color: "#ff4d00",
        ejercicios: [
          {
            num: "01", nombre: "Jalón al Pecho (Lat Pulldown)",
            maquina: "Life Fitness Lat Pulldown Machine",
            series: "4", reps: "12", descanso: "75 seg", foco: "Espalda ancha (dorsales)",
            ajuste: "Muslos bajo el soporte acolchado. Agarre más ancho que los hombros, palmas hacia adelante. Peso: 25–35 kg.",
            pasos: ["Inclínate levemente hacia atrás (10°), pecho afuera.", "Jala la barra hacia la parte alta del pecho. Imagina que tus codos apuntan al suelo.", "Aprieta la espalda cuando la barra toca el pecho. Mantén 1 seg.", "Sube lento y controlado. NUNCA jales detrás del cuello — siempre al frente."],
            tip: "Jalar detrás del cuello lesiona la columna cervical. Solo al frente, siempre.",
            video: "VUJYixXx5I8", videoTitulo: "Jalón al pecho polea alta — tutorial en español"
          },
          {
            num: "02", nombre: "Remo Sentado en Máquina",
            maquina: "Life Fitness Seated Row Machine",
            series: "3", reps: "12", descanso: "75 seg", foco: "Espalda media",
            ajuste: "Pecho cómodo en el cojín frontal. Agarre neutro (palmas enfrentadas). Peso: 20–30 kg.",
            pasos: ["Pecho contra el cojín. Brazos extendidos agarrando las manijas.", "Jala hacia ti apretando los omóplatos al final. Codos pasan cerca de las costillas.", "Mantén 1 seg apretado. Luego extiende los brazos lentamente."],
            tip: "Al finalizar el jalón, imagina que juntas los omóplatos apretando un lápiz entre ellos.",
            video: "Mf9FHzj1xGo", videoTitulo: "Remo para espalda — tutorial en español"
          },
          {
            num: "03", nombre: "Remo en Polea Baja",
            maquina: "Torre de Cables — Polea Baja",
            series: "3", reps: "12–15", descanso: "60 seg", foco: "Espalda media y baja",
            ajuste: "Agarrador triangular en la polea baja. Sentado con pies en los apoyos. Peso: 20–30 kg.",
            pasos: ["Espalda recta, pecho afuera. Rodillas levemente dobladas.", "Jala el cable hacia el ombligo. Codos pasan cerca de las costillas.", "Aprieta los omóplatos al final. Extiende los brazos lentamente.", "La cintura NO se balancea. Solo brazos y espalda."],
            tip: "El balanceo del torso es trampa — no trabaja nada útil y lesiona la zona lumbar.",
            video: "QLzPrh_8I2U", videoTitulo: "Remo en polea baja — tutorial en español"
          }
        ]
      },
      {
        nombre: "BÍCEPS",
        color: "#3b82f6",
        ejercicios: [
          {
            num: "04", nombre: "Curl de Bíceps en Polea Baja (Barra EZ)",
            maquina: "Torre de Cables — Polea Baja",
            series: "3", reps: "12–15", descanso: "60 seg", foco: "Bíceps completo",
            ajuste: "Barra EZ (la curva en zigzag) en polea BAJA. Párate a 40 cm. Peso: 10–20 kg.",
            pasos: ["Agarra la barra EZ, palmas hacia arriba. Codos pegados al cuerpo.", "Dobla los codos subiendo la barra hacia los hombros. Los codos NO se mueven.", "Aprieta el bíceps arriba 1 seg. Baja muy lento (3 seg) — ahí es donde más se define."],
            tip: "La barra EZ cuida las muñecas mejor que la barra recta. Úsala si sientes molestia.",
            video: "dmupCYjuXHo", videoTitulo: "Curl bíceps en polea — tutorial en español"
          },
          {
            num: "05", nombre: "Curl Martillo con Mancuernas",
            maquina: "Mancuernero del gym",
            series: "3", reps: "12 reps/lado", descanso: "60 seg", foco: "Bíceps + Antebrazo",
            ajuste: "Mancuernas de 8–12 kg. Palmas mirándose entre sí (posición de martillo) durante todo el movimiento.",
            pasos: ["Párate con mancuernas a los lados, palmas mirándose entre sí.", "Sube una mancuerna doblando el codo. La palma mira adentro todo el recorrido — no gires la muñeca.", "Aprieta arriba, baja lento. Alterna brazos."],
            tip: "La diferencia vs curl normal es solo la posición de la mano. Ambos trabajados = mejor definición.",
            video: "j99intoPKGE", videoTitulo: "Curl martillo mancuernas — tutorial en español"
          },
          {
            num: "06", nombre: "Curl en Máquina de Bíceps",
            maquina: "Life Fitness Bicep Curl Machine",
            series: "3", reps: "15", descanso: "60 seg", foco: "Bíceps (pico)",
            ajuste: "Codos apoyados en el cojín a la altura de los hombros. Agarre supino (palmas arriba). Peso: 10–20 kg.",
            pasos: ["Siéntate, codos sobre el cojín. Agarra las manijas con palmas hacia arriba.", "Dobla los codos subiendo hasta casi tocar los hombros. Aprieta el bíceps arriba.", "Baja muy lento (3 seg). No dejes caer el peso — ese descenso controlado define el músculo."],
            tip: "Esta máquina es perfecta para aislar el bíceps porque el cojín evita que los codos se muevan.",
            video: "sQQ7m6I65po", videoTitulo: "Curl en máquina bíceps — tutorial"
          }
        ]
      }
    ]
  },
  {
    id: "d3",
    label: "D3",
    title: "Piernas",
    sub: "Miércoles · El día más duro y el más importante",
    tip: "Las piernas son el 60% de tu masa muscular. No las saltes — son el motor de toda la quema de grasa.",
    grupos: [
      {
        nombre: "CUÁDRICEPS & GLÚTEOS",
        color: "#ff4d00",
        ejercicios: [
          {
            num: "01", nombre: "Prensa de Piernas (Leg Press)",
            maquina: "Life Fitness Leg Press Machine",
            series: "4", reps: "15", descanso: "90 seg", foco: "Cuádriceps + Glúteos",
            ajuste: "Pies al ancho de hombros en la mitad de la plataforma. Rodillas a 90° al bajar. Peso: 30–50 kg. Siempre usa los seguros.",
            pasos: ["Quita los seguros. Dobla las rodillas bajando la plataforma — máximo 90°.", "La espalda baja siempre pegada al respaldo. Si se despega, estás bajando demasiado.", "Empuja desde los talones hasta casi extender. Nunca bloquees las rodillas al final.", "Pon los seguros antes de bajarte. Siempre."],
            tip: "Pies más arriba en la plataforma = más glúteos. Pies más abajo = más cuádriceps.",
            video: "hl-EJUQ2yuc", videoTitulo: "Prensa de piernas — técnica correcta en español"
          },
          {
            num: "02", nombre: "Extensión de Cuádriceps en Máquina",
            maquina: "Life Fitness Leg Extension Machine",
            series: "3", reps: "15", descanso: "60 seg", foco: "Frente del muslo",
            ajuste: "Rodillas justo al borde del asiento. Acolchado sobre los tobillos. Peso: 15–25 kg.",
            pasos: ["Siéntate, acolchado sobre los tobillos. Agarra las manijas laterales.", "Extiende las piernas hacia arriba. No bloquees las rodillas al llegar arriba.", "Aprieta el cuádriceps 1 seg. Baja muy lento (3 seg). No dejes caer el peso."],
            tip: "No uses peso muy alto aquí — las rodillas son delicadas. Técnica siempre primero.",
            video: "bQIcBKwcnlM", videoTitulo: "Extensión de cuádriceps en máquina — tutorial en español"
          },
          {
            num: "03", nombre: "Zancadas / Lunges con Mancuernas",
            maquina: "Mancuernero + Espacio libre",
            series: "3", reps: "10 reps/pierna", descanso: "75 seg", foco: "Glúteos + Cuádriceps",
            ajuste: "Mancuernas de 8–14 kg. Primera semana sin peso — aprende el equilibrio primero.",
            pasos: ["Párate derecho, mancuernas a los lados.", "Da un paso largo adelante con la pierna derecha. El pie queda plano en el suelo.", "Baja la rodilla trasera hacia el suelo sin tocarlo. Torso recto.", "La rodilla delantera no pasa más allá de la punta del pie.", "Empuja desde el talón delantero para volver. Alterna piernas."],
            tip: "Sin equilibrio primero no pongas peso. La forma correcta vale más que el peso.",
            video: "bQIcBKwcnlM", videoTitulo: "Zancadas correctas — tutorial en español"
          }
        ]
      },
      {
        nombre: "ISQUIOTIBIALES & PANTORRILLAS",
        color: "#3b82f6",
        ejercicios: [
          {
            num: "04", nombre: "Curl de Femoral Acostado",
            maquina: "Life Fitness Lying Leg Curl Machine",
            series: "3", reps: "15", descanso: "60 seg", foco: "Parte trasera del muslo",
            ajuste: "Acolchado sobre los talones. Rodillas justo al borde del banco. Peso: 15–25 kg.",
            pasos: ["Acuéstate boca abajo, agarra las manijas laterales.", "Dobla las rodillas jalando los talones hacia los glúteos. Las caderas pegadas al banco.", "Aprieta el femoral arriba 1 seg. Baja muy lento (3–4 seg) — ese descenso es donde más trabaja."],
            tip: "Si las caderas se levantan para ayudar, el peso está muy pesado. Bájalas al banco.",
            video: "EAq2oJn9URk", videoTitulo: "Curl femoral acostado — tutorial en español"
          },
          {
            num: "05", nombre: "Curl de Femoral Sentado",
            maquina: "Life Fitness Seated Leg Curl Machine",
            series: "3", reps: "12", descanso: "60 seg", foco: "Isquiotibiales (ángulo diferente)",
            ajuste: "Espalda contra el respaldo. Acolchado sobre los tobillos. El muslo bien apoyado en el asiento. Peso: 15–25 kg.",
            pasos: ["Siéntate, espalda apoyada. El acolchado descansa sobre los tobillos.", "Jala los pies hacia abajo doblando las rodillas. Aprieta el femoral abajo 1 seg.", "Sube lento y controlado. No dejes caer el peso."],
            tip: "Sentado y acostado trabajan el femoral en ángulos distintos — hacerlos ambos da mejor definición.",
            video: "EAq2oJn9URk", videoTitulo: "Curl femoral sentado — tutorial en español"
          },
          {
            num: "06", nombre: "Elevaciones de Pantorrilla en Máquina",
            maquina: "Life Fitness Calf Raise Machine",
            series: "4", reps: "20", descanso: "45 seg", foco: "Gemelos / Pantorrillas",
            ajuste: "Hombros bajo los acolchados. Puntas de los pies en la plataforma, talones en el aire. Peso: 20–40 kg.",
            pasos: ["Baja los talones lo máximo posible para estirar completamente la pantorrilla.", "Sube en puntas de pie lo más alto posible. Aprieta la pantorrilla arriba 2 seg.", "Baja lento al estiramiento completo. El rango completo es clave."],
            tip: "Las pantorrillas necesitan volumen alto (20 reps) y descanso corto. Sube el peso rápido — son músculos acostumbrados a trabajar todo el día.",
            video: "hl-EJUQ2yuc", videoTitulo: "Elevaciones de pantorrilla — tutorial en español"
          }
        ]
      }
    ]
  },
  {
    id: "d4",
    label: "D4",
    title: "Hombros & Core",
    sub: "Jueves · Técnica sobre peso, siempre",
    tip: "Los hombros son la articulación más inestable del cuerpo. Nunca sacrifiques forma por peso aquí.",
    grupos: [
      {
        nombre: "HOMBROS",
        color: "#ff4d00",
        ejercicios: [
          {
            num: "01", nombre: "Press de Hombros en Máquina",
            maquina: "Life Fitness Shoulder Press Machine",
            series: "4", reps: "12", descanso: "75 seg", foco: "Hombro frontal y lateral",
            ajuste: "Asiento para que las manijas queden a la altura de los hombros (codos 90°). Espalda pegada al respaldo. Peso: 15–25 kg.",
            pasos: ["Espalda completamente apoyada. Agarra las manijas.", "Empuja hacia arriba hasta casi extender. No bloquees los codos.", "Baja lento hasta 90° en el codo. La espalda NO se arquea.", "Solo el hombro trabaja — no uses el cuerpo para ayudar."],
            tip: "Si la espalda se arquea para empujar, el peso es mucho.",
            video: "b6KtNTSHA54", videoTitulo: "Press de hombros — tutorial en español"
          },
          {
            num: "02", nombre: "Elevaciones Laterales con Mancuernas",
            maquina: "Mancuernero del gym",
            series: "3", reps: "15", descanso: "60 seg", foco: "Hombro lateral (anchura)",
            ajuste: "Siempre peso ligero: 4–8 kg. Con 6 kg bien ejecutado se siente más que con 12 kg mal ejecutado.",
            pasos: ["Párate derecho, mancuernas a los lados, codos levemente doblados.", "Levanta los brazos a los lados hasta quedar en T. Los codos lideran el movimiento, no las manos.", "Imagina que vuelcas agua de un vaso al subir — el pulgar queda levemente abajo del meñique.", "Baja lentamente (3 seg). Ese descenso es la mitad del trabajo."],
            tip: "Si los hombros suben hacia las orejas al levantar, el peso está muy pesado.",
            video: "b6KtNTSHA54", videoTitulo: "Elevaciones laterales — tutorial paso a paso en español"
          },
          {
            num: "03", nombre: "Elevación Frontal en Cable",
            maquina: "Torre de Cables — Polea Baja",
            series: "3", reps: "12 reps/lado", descanso: "60 seg", foco: "Hombro frontal",
            ajuste: "Manija simple en polea baja. Peso: 5–10 kg. De espaldas a la máquina, agarra la manija por debajo.",
            pasos: ["Párate de frente a la máquina. Agarra la manija con una mano.", "Levanta el brazo hacia adelante hasta quedar paralelo al suelo (90°). Codo levemente doblado.", "Baja lento y controlado. Completa todas las reps y cambia de lado.", "El cuerpo no se balancea para ayudar — solo el hombro trabaja."],
            tip: "El cable da tensión constante durante todo el recorrido — mejor que mancuerna para definición.",
            video: "b6KtNTSHA54", videoTitulo: "Elevación frontal cable — tutorial en español"
          }
        ]
      },
      {
        nombre: "CORE (ABDOMEN)",
        color: "#3ecf8e",
        ejercicios: [
          {
            num: "04", nombre: "Plancha (Plank)",
            maquina: "Colchoneta / Ab Area",
            series: "3", reps: "30–60 seg", descanso: "60 seg", foco: "Core completo",
            ajuste: "Solo necesitas una colchoneta en el área de abdominales del gym.",
            pasos: ["Codos en el suelo directamente bajo los hombros. Pies juntos atrás.", "Cuerpo recto de cabeza a talones — como una tabla rígida.", "Aprieta el abdomen como si fuera a golpearte. Glúteos apretados también.", "Cadera en línea recta — ni sube ni baja. Respira normal."],
            tip: "Sem 1–2: 30 seg → Sem 3–4: 45 seg → Sem 5+: 60 seg. Progresa gradualmente.",
            video: "pSHjTRCQxIw", videoTitulo: "Plancha perfecta — tutorial en español"
          },
          {
            num: "05", nombre: "Máquina de Abdominales (Ab Crunch)",
            maquina: "Life Fitness Ab Crunch Machine",
            series: "3", reps: "20", descanso: "45 seg", foco: "Abdomen superior",
            ajuste: "Acolchado a la altura del pecho/hombros. Peso: 20–35 kg.",
            pasos: ["El movimiento empieza desde el abdomen, NO desde los brazos.", "Dobla el torso hacia adelante contrayendo el abdomen. Solo 30–40° de movimiento.", "Aprieta el abdomen abajo 1 seg. Regresa lentamente sin dejar caer el peso."],
            tip: "Los abdominales se ven con la dieta. Esta máquina los fortalece — la grasa se elimina con cardio + alimentación.",
            video: "pSHjTRCQxIw", videoTitulo: "Abdominales en máquina — tutorial en español"
          },
          {
            num: "06", nombre: "Mountain Climbers",
            maquina: "Colchoneta / Ab Area",
            series: "3", reps: "30 reps totales", descanso: "60 seg", foco: "Core + Cardio",
            ajuste: "En el suelo. Posición de plancha extendida (brazos rectos). Sin equipo.",
            pasos: ["Posición de lagartija extendida, brazos rectos, cuerpo recto.", "Lleva la rodilla derecha hacia el pecho rápidamente.", "Cambia: extiende la derecha y lleva la izquierda. Cada rodilla = 1 rep.", "Velocidad moderada al inicio, más rápido cuando domines la técnica."],
            tip: "Las caderas no se levantan — mantén la posición de plancha durante todo el movimiento.",
            video: "pSHjTRCQxIw", videoTitulo: "Mountain climbers — tutorial en español"
          }
        ]
      }
    ]
  },
  {
    id: "d5",
    label: "D5",
    title: "Full Body",
    sub: "Viernes · Superseries + Cardio máximo",
    tip: "Último día de la semana. Superseries de máquinas combinadas — más quema en menos tiempo.",
    grupos: [
      {
        nombre: "EMPUJE (Pecho + Hombros)",
        color: "#ff4d00",
        ejercicios: [
          {
            num: "01", nombre: "Chest Press + Shoulder Press (Superserie)",
            maquina: "Chest Press Machine → Shoulder Press Machine",
            series: "3 superseries", reps: "10 reps cada una", descanso: "90 seg entre superseries", foco: "Pecho + Hombros",
            ajuste: "Una superserie = dos ejercicios seguidos SIN descanso entre ellos, luego descansas 90 seg.",
            pasos: ["Chest press machine: 10 reps controladas.", "Sin descanso: ve a la shoulder press machine.", "Shoulder press: 10 reps. Espalda pegada al respaldo.", "AHORA descansa 90 seg. Repite 3 veces."],
            tip: "10 reps en vez de 12–15 porque es el día 5. Baja el peso vs días anteriores y completa las 3 superseries.",
            video: "N7DjfGB8-xY", videoTitulo: "Superserie pecho + hombros"
          },
          {
            num: "02", nombre: "Cruce de Cables + Elevaciones Laterales (Superserie)",
            maquina: "Cable Crossover → Mancuernero",
            series: "3 superseries", reps: "12 reps cada uno", descanso: "75 seg", foco: "Pecho definición + Hombro lateral",
            ajuste: "Peso más ligero que días anteriores — la superserie cansa más.",
            pasos: ["Cruce de cables: 12 reps (poleas altas, manos al centro).", "Sin descanso: toma las mancuernas más ligeras.", "Elevaciones laterales: 12 reps lentas y controladas.", "Descansa 75 seg. Repite 3 veces."],
            tip: "Estas dos combinadas definen el pecho interior y dan anchura a los hombros — el combo visual más efectivo.",
            video: "b6KtNTSHA54", videoTitulo: "Definición pecho y hombros"
          },
          {
            num: "03", nombre: "Extensión Tríceps en Polea",
            maquina: "Torre de Cables — Polea Alta",
            series: "3", reps: "15", descanso: "60 seg", foco: "Tríceps",
            ajuste: "Cuerda en polea alta. Peso igual o menor que Día 1. Codos fijos a las costillas.",
            pasos: ["Agarra la cuerda, codos pegados al cuerpo.", "Extiende hacia abajo completamente. Separa los extremos al final.", "Sube lento. Codos no se mueven."],
            tip: "Este ejercicio cierra todos los músculos de empuje de la semana.",
            video: "7Jc4jHxax60", videoTitulo: "Extensión tríceps polea — tutorial en español"
          }
        ]
      },
      {
        nombre: "JALÓN (Espalda + Bíceps + Piernas)",
        color: "#3b82f6",
        ejercicios: [
          {
            num: "04", nombre: "Jalón + Remo Sentado (Superserie)",
            maquina: "Lat Pulldown → Seated Row Machine",
            series: "3 superseries", reps: "12 reps cada uno", descanso: "90 seg", foco: "Espalda completa",
            ajuste: "Ajusta ambas máquinas con el peso antes de empezar para no perder tiempo entre ejercicios.",
            pasos: ["Jalón lat pulldown: 12 reps, barra al pecho.", "Sin descanso: remo sentado en máquina.", "Remo: 12 reps, aprieta omóplatos al final.", "Descansa 90 seg. Repite 3 veces."],
            tip: "Baja 15–20% el peso vs Día 2. La superserie fatiga más — prioriza completar las 3 series.",
            video: "VUJYixXx5I8", videoTitulo: "Jalón y remo espalda — tutorial en español"
          },
          {
            num: "05", nombre: "Leg Press + Curl Femoral (Superserie)",
            maquina: "Leg Press → Leg Curl Machine",
            series: "3 superseries", reps: "12 reps cada uno", descanso: "90 seg", foco: "Piernas completas",
            ajuste: "80% del peso del Día 3. Las piernas ya trabajaron el miércoles — hoy es recordatorio, no destrucción.",
            pasos: ["Leg press: 12 reps. Seguros puestos al terminar.", "Ve inmediatamente al curl femoral acostado.", "Curl: 12 reps bajando muy lento.", "Descansa 90 seg. Repite 3 veces."],
            tip: "Piernas completas en una superserie — frente y atrás del muslo en el mismo bloque.",
            video: "EAq2oJn9URk", videoTitulo: "Piernas superserie — tutorial en español"
          },
          {
            num: "06", nombre: "Curl de Bíceps en Polea",
            maquina: "Torre de Cables — Polea Baja",
            series: "3", reps: "12–15", descanso: "60 seg", foco: "Bíceps — cierre de semana",
            ajuste: "Barra EZ en polea baja. Mismo peso o menos que Día 2.",
            pasos: ["Agarra la barra EZ, codos pegados al cuerpo.", "Dobla los codos subiendo. Aprieta arriba 1 seg.", "Baja muy lento (3 seg). Esta es la última serie de bíceps de la semana — dale con todo."],
            tip: "El descenso lento en este último ejercicio de la semana maximiza el microdesgarro muscular — que es lo que crea la definición.",
            video: "7Jc4jHxax60", videoTitulo: "Curl bíceps polea — tutorial en español"
          }
        ]
      }
    ]
  }
];

function VideoEmbed({ videoId, titulo }) {
  const url = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <div style={{ marginTop: 14 }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block", position: "relative",
          paddingBottom: "56.25%", height: 0,
          borderRadius: 10, overflow: "hidden",
          border: "1px solid #2a2a2a", background: "#000",
          textDecoration: "none"
        }}
      >
        {/* Miniatura de YouTube */}
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={titulo}
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%", objectFit: "cover"
          }}
        />
        {/* Capa oscura */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.35)"
        }} />
        {/* Botón play rojo */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 60, height: 42, borderRadius: 10,
          background: "#ff0000", display: "flex",
          alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 14px rgba(0,0,0,0.5)"
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
        {/* Etiqueta "abre en YouTube" */}
        <div style={{
          position: "absolute", bottom: 8, right: 8,
          background: "rgba(0,0,0,0.75)", color: "#fff",
          fontSize: 9, fontWeight: 600, padding: "3px 7px",
          borderRadius: 4, letterSpacing: 0.3
        }}>▶ Abrir en YouTube</div>
      </a>
      <p style={{ fontSize: 10, color: "#555", marginTop: 5, display: "flex", alignItems: "center", gap: 4 }}>
        <span style={{ color: "#ff4444" }}>▶</span> {titulo}
      </p>
    </div>
  );
}

function ExCard({ ex, groupColor }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: "#1c1c1c", border: `1px solid ${open ? groupColor + "55" : "#252525"}`,
      borderRadius: 10, marginBottom: 8, overflow: "hidden",
      transition: "border-color 0.2s"
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "13px 14px", cursor: "pointer"
        }}
      >
        <span style={{
          fontFamily: "system-ui", fontWeight: 800, fontSize: 18,
          color: groupColor, minWidth: 26, lineHeight: 1
        }}>{ex.num}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 5 }}>{ex.nombre}</div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
            {[
              { text: `${ex.series} series`, bg: "rgba(62,207,142,0.12)", color: "#3ecf8e" },
              { text: ex.reps, bg: "rgba(255,77,0,0.12)", color: "#ff4d00" },
              { text: ex.descanso, bg: "rgba(255,255,255,0.06)", color: "#666" },
              { text: ex.foco, bg: "rgba(245,200,66,0.1)", color: "#f5c842" },
            ].map((b, i) => (
              <span key={i} style={{
                fontSize: 10, fontWeight: 600, padding: "2px 7px",
                borderRadius: 4, background: b.bg, color: b.color
              }}>{b.text}</span>
            ))}
          </div>
        </div>
        <span style={{
          fontSize: 14, color: "#555",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.25s", flexShrink: 0
        }}>▾</span>
      </div>

      {open && (
        <div style={{
          padding: "0 14px 16px 52px",
          borderTop: "1px solid #252525", paddingTop: 12
        }}>
          {/* Máquina */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 4, padding: "2px 8px", fontSize: 10,
            color: "#3b82f6", fontWeight: 600, marginBottom: 10
          }}>⚙ {ex.maquina}</div>

          {/* Ajuste */}
          <div style={{
            background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: 6, padding: "9px 12px", marginBottom: 10
          }}>
            <div style={{ fontSize: 10, color: "#3b82f6", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 3, opacity: 0.7 }}>⚙ Cómo ajustar</div>
            <div style={{ fontSize: 11, color: "#3b82f6" }}>{ex.ajuste}</div>
          </div>

          {/* Pasos */}
          <ol style={{ listStyle: "none", padding: 0, margin: "0 0 10px" }}>
            {ex.pasos.map((p, i) => (
              <li key={i} style={{ display: "flex", gap: 8, fontSize: 12, marginBottom: 6, color: "#bbb", lineHeight: 1.6 }}>
                <span style={{
                  background: "#2a2a2a", color: groupColor,
                  fontSize: 10, fontWeight: 700,
                  minWidth: 18, height: 18, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: 2
                }}>{i + 1}</span>
                {p}
              </li>
            ))}
          </ol>

          {/* Tip */}
          <div style={{
            padding: "8px 10px", background: "rgba(255,77,0,0.05)",
            borderLeft: `2px solid ${groupColor}`, borderRadius: "0 5px 5px 0",
            fontSize: 11, color: "#777", fontStyle: "italic"
          }}>{ex.tip}</div>

          {/* Video embed */}
          <VideoEmbed videoId={ex.video} titulo={ex.videoTitulo} />
        </div>
      )}
    </div>
  );
}

function DayPanel({ day }) {
  return (
    <div style={{ paddingTop: 24 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 18 }}>
        <span style={{
          background: "#ff4d00", color: "#fff",
          fontWeight: 800, fontSize: 11, letterSpacing: 1,
          padding: "3px 9px", borderRadius: 4, flexShrink: 0, marginTop: 4
        }}>{day.label}</span>
        <div>
          <div style={{ fontWeight: 800, fontSize: 26, color: "#fff", lineHeight: 1, marginBottom: 3 }}>{day.title}</div>
          <div style={{ fontSize: 11, color: "#666" }}>{day.sub}</div>
        </div>
      </div>

      {/* Tip banner */}
      <div style={{
        background: "rgba(245,200,66,0.06)", border: "1px solid rgba(245,200,66,0.18)",
        borderRadius: 8, padding: "10px 14px", marginBottom: 20,
        fontSize: 12, color: "#f5c842", display: "flex", gap: 8
      }}>
        <span>💡</span><span>{day.tip}</span>
      </div>

      {/* Grupos */}
      {day.grupos.map((grupo, gi) => (
        <div key={gi} style={{ marginBottom: 24 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 12
          }}>
            <div style={{ flex: 1, height: 1, background: "#252525" }} />
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 2,
              color: grupo.color, textTransform: "uppercase"
            }}>{grupo.nombre}</span>
            <div style={{ flex: 1, height: 1, background: "#252525" }} />
          </div>
          {grupo.ejercicios.map((ex, ei) => (
            <ExCard key={ei} ex={ex} groupColor={grupo.color} />
          ))}
        </div>
      ))}

      {/* Cardio */}
      <div style={{
        background: "rgba(62,207,142,0.04)", border: "1px solid rgba(62,207,142,0.2)",
        borderRadius: 10, padding: "14px 16px"
      }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: "#3ecf8e", marginBottom: 6 }}>
          🔥 {day.id === "d3" ? "Cardio — 10 min (hoy menos)" : day.id === "d5" ? "Cardio Final — 20 min (el más largo)" : "Cardio Final — 15 min"}
        </div>
        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
          {day.id === "d3" && "Solo 10 min suave en bicicleta o caminadora. Las piernas ya hicieron su trabajo."}
          {day.id === "d5" && "HIIT en caminadora: 1 min a 9 km/h + 1 min a 5.5 km/h, repite 10 veces. O elíptica a resistencia alta 20 min. Objetivo: 130–150 ppm. Cierra la semana con todo."}
          {!["d3","d5"].includes(day.id) && <>Caminadora a 6–7 km/h con inclinación 3–5%, o elíptica a ritmo moderado. Frecuencia cardíaca objetivo: <strong style={{ color: "#3ecf8e" }}>120–140 ppm</strong>. El cardio post-pesas maximiza la quema de grasa.</>}
        </div>
      </div>
    </div>
  );
}

const TABS = [...DAYS.map(d => ({ id: d.id, label: d.label, short: d.title.split("&")[0].trim() })), { id: "plan", label: "📋", short: "Plan" }];

export default function App() {
  const [activeTab, setActiveTab] = useState("d1");

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#e8e8e8", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* HERO */}
      <div style={{
        background: "#141414", borderBottom: "1px solid #1e1e1e",
        padding: "36px 20px 28px", textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,77,0,0.12) 0%, transparent 65%)",
          pointerEvents: "none"
        }} />
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#ff4d00", marginBottom: 10 }}>
          Plan de Definición — Principiantes
        </div>
        <div style={{ fontWeight: 900, fontSize: "clamp(40px,9vw,72px)", lineHeight: 0.9, color: "#fff", marginBottom: 12, letterSpacing: 1 }}>
          CUERPO <span style={{ color: "#ff4d00" }}>DEFINIDO</span> 3 MESES
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)",
          borderRadius: 20, padding: "5px 14px", fontSize: 11, color: "#3b82f6", fontWeight: 600, marginBottom: 20
        }}>⚙ Life Fitness &amp; Planet Fitness · 6 ejercicios por día · Videos en español</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
          {[["5","Días/sem"],["6","Ejerc/día"],["60","Min/sesión"],["12","Semanas"]].map(([n,l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 900, fontSize: 30, color: "#f5c842", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 10, color: "#555", letterSpacing: 1, textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TABS */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#141414", borderBottom: "1px solid #1e1e1e",
        display: "flex", overflowX: "auto", scrollbarWidth: "none", padding: "0 12px"
      }}>
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              flexShrink: 0, padding: "12px 14px",
              border: "none", background: "transparent",
              color: activeTab === t.id ? "#ff4d00" : "#555",
              fontFamily: "inherit", fontSize: 12, fontWeight: 600,
              cursor: "pointer", whiteSpace: "nowrap",
              borderBottom: activeTab === t.id ? "2px solid #ff4d00" : "2px solid transparent",
              transition: "color 0.2s"
            }}
          >
            <span style={{
              background: activeTab === t.id ? "rgba(255,77,0,0.15)" : "#1c1c1c",
              color: activeTab === t.id ? "#ff4d00" : "#555",
              borderRadius: 3, padding: "1px 5px", fontSize: 10, marginRight: 5
            }}>{t.label}</span>
            {t.short}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 14px 80px" }}>
        {DAYS.map(d => activeTab === d.id && <DayPanel key={d.id} day={d} />)}
        {activeTab === "plan" && <PlanPanel />}
      </div>
    </div>
  );
}

function PlanPanel() {
  const dias = [
    { d: "Lun", t: "Pecho", i: "🏋️", w: true },
    { d: "Mar", t: "Espalda", i: "🏋️", w: true },
    { d: "Mié", t: "Piernas", i: "🦵", w: true },
    { d: "Jue", t: "Hombros", i: "💪", w: true },
    { d: "Vie", t: "Full Body", i: "⚡", w: true },
    { d: "Sáb", t: "Descanso", i: "😴", w: false },
    { d: "Dom", t: "Descanso", i: "😴", w: false },
  ];
  const cards = [
    { title: "📈 Progresión 3 meses", items: ["Mes 1: Aprende la técnica en cada máquina. Ve los videos antes de usarla.", "Mes 2: Sube 5–10% el peso cuando termines todas las reps sin esfuerzo real.", "Mes 3: Introduce más superseries y reduce los descansos a 45 seg.", "Toma fotos cada 2 semanas — el espejo miente por acostumbramiento."] },
    { title: "🥗 Nutrición básica", items: ["Proteína en cada comida: pollo, huevo, atún, carne, requesón.", "Carbohidratos antes de entrenar: avena, arroz, pan integral.", "Come proteína en los 45 min post-entreno.", "2.5 litros de agua al día mínimo.", "Elimina azúcar procesada de lunes a viernes."] },
    { title: "😴 Descanso y recuperación", items: ["7–8 horas de sueño. Sin sueño no hay recuperación muscular.", "Sábado y domingo son sagrados — no entrenes.", "Si un músculo aún duele mucho, dale un día más.", "Estira 5–10 min al terminar cada sesión.", "El músculo crece descansando, no entrenando."] },
    { title: "⚠️ Errores a evitar", items: ["No saltes el calentamiento de 5 min en caminadora.", "No uses peso de más por ego — la técnica define, el peso lesiona.", "No saltes el día de piernas — el más importante para quemar grasa.", "Ve el video de cada ejercicio antes de tocar la máquina.", "No esperes resultados antes de 6–8 semanas. La consistencia gana."] },
  ];

  return (
    <div style={{ paddingTop: 24 }}>
      <div style={{ fontWeight: 900, fontSize: 26, color: "#fff", marginBottom: 4 }}>ESTRATEGIA COMPLETA</div>
      <div style={{ fontSize: 11, color: "#555", marginBottom: 18 }}>Semana tipo · Nutrición · 3 meses de progresión</div>

      {/* Week grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, marginBottom: 24 }}>
        {dias.map((d, i) => (
          <div key={i} style={{
            background: "#1c1c1c",
            border: `1px solid ${d.w ? "rgba(255,77,0,0.35)" : "#1e1e1e"}`,
            borderRadius: 8, padding: "10px 4px", textAlign: "center",
            opacity: d.w ? 1 : 0.4
          }}>
            <div style={{ fontSize: 18, marginBottom: 3 }}>{d.i}</div>
            <div style={{ fontSize: 9, fontWeight: 700, color: "#555", textTransform: "uppercase", marginBottom: 3 }}>{d.d}</div>
            <div style={{ fontSize: 10, fontWeight: 600, color: d.w ? "#ff4d00" : "#fff" }}>{d.t}</div>
          </div>
        ))}
      </div>

      {/* Info cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 10, marginBottom: 20 }}>
        {cards.map((c, ci) => (
          <div key={ci} style={{ background: "#1c1c1c", border: "1px solid #252525", borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#ff4d00", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>{c.title}</div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {c.items.map((item, ii) => (
                <li key={ii} style={{ display: "flex", gap: 7, fontSize: 11, color: "#666", padding: "4px 0", borderBottom: ii < c.items.length - 1 ? "1px solid #252525" : "none", lineHeight: 1.5 }}>
                  <span style={{ color: "#ff4d00", flexShrink: 0, marginTop: 2, fontSize: 10 }}>→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Meta card */}
      <div style={{ background: "rgba(245,200,66,0.05)", border: "1px solid rgba(245,200,66,0.2)", borderRadius: 10, padding: "16px 18px" }}>
        <div style={{ fontWeight: 800, fontSize: 16, color: "#f5c842", marginBottom: 8 }}>🎯 Qué esperar en 3 meses siendo consistente</div>
        <div style={{ fontSize: 12, color: "#666", lineHeight: 1.8 }}>
          Con 5 días/semana y dieta razonable: <strong style={{ color: "#fff" }}>3–6 kg de grasa eliminada</strong>, definición visible en brazos, hombros y piernas, y fuerza duplicada desde el inicio. La clave no es la perfección — es la consistencia. <strong style={{ color: "#fff" }}>Quien entrena 4 de 5 días por 12 semanas le gana a quien entrena perfecto 3 semanas y para.</strong>
        </div>
      </div>
    </div>
  );
}
