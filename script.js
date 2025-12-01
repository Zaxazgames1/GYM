 // ============================================
// BASE DE DATOS DE ENTRENAMIENTOS COMPLETA
// ============================================
const workouts = {
    lunes: {
        title: "PUSH A - Pecho, Hombros, Tríceps",
        focus: "Fuerza con Volumen",
        duration: "65-75 min",
        phases: [
            {
                title: "🔥 CALENTAMIENTO (10-12 min)",
                exercises: [
                    {
                        name: "Bicicleta estática o elíptica",
                        details: "5 minutos a ritmo muy suave (nivel 3-4/10)",
                        explanation: "Eleva temperatura corporal sin fatigarte. Tu objetivo es preparar, no cansarte."
                    },
                    {
                        name: "Movilidad Dinámica",
                        details: "5 minutos: Círculos de brazos (20 reps) • Rotaciones de hombros (20 reps) • Gatos-perros (10 reps) • Flexiones murales (10 reps lentas)",
                        explanation: "Prepara articulaciones y activa músculos que vas a usar."
                    },
                    {
                        name: "Series de Activación",
                        details: "2 series: 10 flexiones inclinadas + 10 elevaciones laterales con mancuernas ligeras (2kg)",
                        explanation: "Practica el patrón de movimiento antes de cargar peso real."
                    }
                ]
            },
            {
                title: "💪 FUERZA - Compuestos Pesados",
                exercises: [
                    {
                        name: "Press Banca con Barra",
                        details: "4 series x 6-8 reps • Descanso: 2-3 min",
                        explanation: "Ejercicio rey para pecho. Agarre ligeramente más ancho que hombros. Baja la barra al pecho (esternón), sube explosivo. Aprieta glúteos y pies firmes en suelo."
                    },
                    {
                        name: "Press Militar con Barra (de pie)",
                        details: "4 series x 6-8 reps • Descanso: 2-3 min",
                        explanation: "Para hombros y core. Barra frente a hombros, sube sin inclinar cuerpo. Glúteos apretados, core contraído. No arquees espalda baja."
                    }
                ]
            },
            {
                title: "🎯 HIPERTROFIA - Volumen",
                exercises: [
                    {
                        name: "Press Inclinado con Mancuernas",
                        details: "3 series x 10-12 reps • Descanso: 90 seg",
                        explanation: "Banco a 30-45°. Trabaja pecho superior. Palmas hacia adelante, baja controlado hasta sentir estiramiento en pecho."
                    },
                    {
                        name: "Aperturas con Mancuernas (flat bench)",
                        details: "3 series x 12-15 reps • Descanso: 90 seg",
                        explanation: "Aísla pecho. Codos ligeramente flexionados (no rígidos), abre brazos sintiendo estiramiento. Sube apretando pectorales."
                    },
                    {
                        name: "Elevaciones Laterales con Mancuernas",
                        details: "3 series x 12-15 reps • Descanso: 60 seg",
                        explanation: "Deltoides lateral. Codos ligeramente flexionados, sube hasta hombros paralelos al suelo. Control en bajada."
                    },
                    {
                        name: "Press Francés (Skull Crushers)",
                        details: "3 series x 10-12 reps • Descanso: 90 seg",
                        explanation: "Acostado, barra baja hacia frente. Solo codos se mueven. Tríceps trabaja al máximo. Codos apuntando arriba, no se abren."
                    },
                    {
                        name: "Fondos en Paralelas",
                        details: "3 series x 8-12 reps • Descanso: 90 seg",
                        explanation: "Inclínate hacia adelante para enfatizar pecho. Si no puedes, usa máquina asistida. Baja hasta 90° en codos."
                    }
                ]
            },
            {
                title: "🏃 CARDIO POST-ENTRENAMIENTO (20-30 min)",
                exercises: [
                    {
                        name: "Trote en Caminadora o Exterior",
                        details: "20-30 minutos a ritmo constante (zona 2: puedes hablar pero con esfuerzo)",
                        explanation: "Tu cuerpo ya agotó glucógeno en las pesas. Ahora quema grasa directamente. Mantén ritmo donde puedas respirar por nariz."
                    }
                ]
            }
        ]
    },
    
    martes: {
        title: "PULL A - Espalda, Bíceps",
        focus: "Ancho y Grosor de Espalda",
        duration: "65-75 min",
        phases: [
            {
                title: "🔥 CALENTAMIENTO (10-12 min)",
                exercises: [
                    {
                        name: "Remo en máquina o bici",
                        details: "5 minutos ritmo suave",
                        explanation: "Activa sistema cardiovascular."
                    },
                    {
                        name: "Movilidad Dinámica",
                        details: "Rotaciones de torso (20 reps) • Dislocaciones de hombro con banda (15 reps) • Cat-cow (10 reps) • Hang pasivo en barra (30 seg x 2)",
                        explanation: "Prepara columna y hombros para jalones."
                    },
                    {
                        name: "Activación",
                        details: "2 series: 10 jalones con banda ligera + 10 remos con mancuerna muy ligera",
                        explanation: "Conecta mente-músculo en espalda."
                    }
                ]
            },
            {
                title: "💪 FUERZA - Movimientos Dominantes",
                exercises: [
                    {
                        name: "Peso Muerto Convencional",
                        details: "4 series x 5-6 reps • Descanso: 3 min",
                        explanation: "REY de ejercicios. Activa TODO el cuerpo. Espalda recta SIEMPRE, cadera atrás, empuja con piernas. Si tu forma se rompe, baja peso."
                    },
                    {
                        name: "Dominadas (o Jalón al Pecho)",
                        details: "4 series x 6-10 reps • Descanso: 2-3 min",
                        explanation: "Para ancho de espalda. Agarre pronado (palmas alejadas), más ancho que hombros. Tira codos hacia abajo y atrás."
                    }
                ]
            },
            {
                title: "🎯 HIPERTROFIA - Desarrollo",
                exercises: [
                    {
                        name: "Remo con Barra (Bent-Over Row)",
                        details: "3 series x 8-10 reps • Descanso: 2 min",
                        explanation: "Grosor de espalda. Inclínate 45°, rodillas ligeramente flexionadas. Tira barra a abdomen bajo, aprieta omóplatos."
                    },
                    {
                        name: "Remo en Polea Sentado",
                        details: "3 series x 10-12 reps • Descanso: 90 seg",
                        explanation: "Pecho afuera, hombros atrás. Tira hasta abdomen, aprieta espalda. No uses impulso de espalda baja."
                    },
                    {
                        name: "Pullover con Mancuerna",
                        details: "3 series x 12-15 reps • Descanso: 90 seg",
                        explanation: "Activa dorsal ancho y pecho. Acostado, mancuerna sobre pecho, baja atrás de cabeza sintiendo estiramiento."
                    },
                    {
                        name: "Curl con Barra Z",
                        details: "3 series x 10-12 reps • Descanso: 90 seg",
                        explanation: "Bíceps. Codos pegados al cuerpo, no se mueven. Solo antebrazo sube. Control en bajada (3 seg)."
                    },
                    {
                        name: "Curl Martillo con Mancuernas",
                        details: "3 series x 12-15 reps • Descanso: 60 seg",
                        explanation: "Trabaja braquial y braquiorradial. Palmas enfrentadas. Alterna brazos o simultáneo."
                    }
                ]
            },
            {
                title: "🏃 CARDIO (25-35 min)",
                exercises: [
                    {
                        name: "Intervalos en Caminadora o Bici",
                        details: "5 min calentamiento • 15-20 min: 2 min moderado + 1 min fuerte • 5 min enfriamiento",
                        explanation: "Mejora resistencia cardiovascular. Los intervalos mantienen metabolismo alto."
                    }
                ]
            }
        ]
    },
    
    miercoles: {
        title: "LEGS A - Piernas Completas",
        focus: "Potencia y Volumen",
        duration: "70-80 min",
        phases: [
            {
                title: "🔥 CALENTAMIENTO (12-15 min)",
                exercises: [
                    {
                        name: "Bici estática",
                        details: "5 min ritmo progresivo",
                        explanation: "Lubrica rodillas y caderas."
                    },
                    {
                        name: "Movilidad Piernas",
                        details: "Círculos de cadera (10 cada lado) • Sentadilla profunda (30 seg x 2) • Zancadas caminando (10 cada pierna)",
                        explanation: "Rango de movimiento completo previene lesiones."
                    },
                    {
                        name: "Series de Calentamiento",
                        details: "2 series: 10 sentadillas sin peso + 10 peso muerto rumano solo barra",
                        explanation: "Patrón de bisagra de cadera."
                    }
                ]
            },
            {
                title: "💪 FUERZA - Ejercicios Base",
                exercises: [
                    {
                        name: "Sentadilla con Barra (Back Squat)",
                        details: "4 series x 6-8 reps • Descanso: 3 min",
                        explanation: "REY DE PIERNAS. Barra en trapecios, baja hasta muslos paralelos. Pecho arriba, rodillas siguen línea de pies."
                    },
                    {
                        name: "Peso Muerto Rumano",
                        details: "4 series x 8-10 reps • Descanso: 2-3 min",
                        explanation: "Isquiotibiales y glúteos. Baja barra por piernas manteniendo cerca. Espalda recta SIEMPRE."
                    }
                ]
            },
            {
                title: "🎯 HIPERTROFIA - Accesorios",
                exercises: [
                    {
                        name: "Prensa de Piernas",
                        details: "3 series x 12-15 reps • Descanso: 2 min",
                        explanation: "Volumen seguro sin cargar columna. Baja hasta 90°. No despegues espalda baja."
                    },
                    {
                        name: "Zancadas con Mancuernas",
                        details: "3 series x 10 reps cada pierna • Descanso: 90 seg",
                        explanation: "Funcional, trabaja equilibrio. Paso largo, rodilla trasera casi toca suelo."
                    },
                    {
                        name: "Curl Femoral Acostado",
                        details: "3 series x 12-15 reps • Descanso: 90 seg",
                        explanation: "Aísla isquiotibiales. Sube talones a glúteos, aprieta arriba."
                    },
                    {
                        name: "Extensiones de Cuádriceps",
                        details: "3 series x 15-20 reps • Descanso: 60 seg",
                        explanation: "Aísla cuádriceps. Extiende completamente, aprieta arriba."
                    },
                    {
                        name: "Elevaciones de Gemelos",
                        details: "4 series x 15-20 reps • Descanso: 60 seg",
                        explanation: "Pantorrillas. Rango completo: baja talones, sube en puntillas."
                    }
                ]
            },
            {
                title: "🏃 CARDIO (20-25 min)",
                exercises: [
                    {
                        name: "Trote Ligero o Caminata Inclinada",
                        details: "20-25 min ritmo muy suave",
                        explanation: "Después de piernas, cardio suave ayuda a eliminar ácido láctico."
                    }
                ]
            }
        ]
    },
    
    jueves: {
        title: "PUSH B - Pecho, Hombros, Tríceps (Variante)",
        focus: "Explosividad y Definición",
        duration: "65-75 min",
        phases: [
            {
                title: "🔥 CALENTAMIENTO (10 min)",
                exercises: [
                    {
                        name: "Jumping Jacks + Burpees",
                        details: "3 min: 30 seg jumping jacks + 30 seg burpees lentos",
                        explanation: "Activa todo el cuerpo, sube pulsaciones."
                    },
                    {
                        name: "Movilidad + Activación",
                        details: "Igual que Lunes + 10 flexiones explosivas + 10 press con bandas",
                        explanation: "Prepara sistema nervioso para explosividad."
                    }
                ]
            },
            {
                title: "💥 POTENCIA - Velocidad",
                exercises: [
                    {
                        name: "Press Banca con Pausa",
                        details: "4 series x 5 reps explosivas • Pausa 2 seg en pecho • Descanso: 3 min",
                        explanation: "Elimina rebote, construye fuerza real. Baja controlado, pausa 2 seg, EXPLOTA hacia arriba."
                    },
                    {
                        name: "Press Arnold con Mancuernas",
                        details: "3 series x 8-10 reps • Descanso: 2 min",
                        explanation: "Empieza con palmas hacia ti, gira al subir terminando palmas afuera. Trabaja los 3 deltoides."
                    }
                ]
            },
            {
                title: "🎯 HIPERTROFIA - Ángulos Diferentes",
                exercises: [
                    {
                        name: "Press Declinado con Barra",
                        details: "3 series x 10-12 reps • Descanso: 90 seg",
                        explanation: "Pecho inferior. Banco declinado -15°. Mueve más peso pero con control."
                    },
                    {
                        name: "Cruces en Polea Alta",
                        details: "3 series x 12-15 reps • Descanso: 90 seg",
                        explanation: "Define pecho. Manos se cruzan abajo, aprieta pectorales. Control total."
                    },
                    {
                        name: "Elevaciones Frontales con Disco",
                        details: "3 series x 12-15 reps • Descanso: 60 seg",
                        explanation: "Deltoides frontal. Agarra disco con ambas manos, sube hasta hombros."
                    },
                    {
                        name: "Extensiones de Tríceps en Polea",
                        details: "3 series x 12-15 reps • Descanso: 60 seg",
                        explanation: "Aísla tríceps. Codos pegados al cuerpo, solo antebrazos se mueven."
                    },
                    {
                        name: "Diamond Push-ups al Fallo",
                        details: "3 series x máximo reps • Descanso: 90 seg",
                        explanation: "Finalizer brutal. Manos formando diamante, pecho toca manos. Quema tríceps."
                    }
                ]
            },
            {
                title: "🏃 CARDIO (20-30 min)",
                exercises: [
                    {
                        name: "Trote Constante",
                        details: "20-30 min ritmo moderado",
                        explanation: "Recuperación activa. Mantén conversación mientras trotas."
                    }
                ]
            }
        ]
    },
    
    viernes: {
        title: "PULL B - Espalda, Bíceps (Variante)",
        focus: "Densidad y Detalle",
        duration: "65-75 min",
        phases: [
            {
                title: "🔥 CALENTAMIENTO (10 min)",
                exercises: [
                    {
                        name: "Remo o bici",
                        details: "5 min + movilidad completa igual que Martes",
                        explanation: "Prepara espalda y brazos."
                    }
                ]
            },
            {
                title: "💪 FUERZA - Variante",
                exercises: [
                    {
                        name: "Dominadas Weighted (con peso)",
                        details: "4 series x 5-8 reps • Descanso: 3 min",
                        explanation: "Si ya haces 10+ dominadas, añade peso (cinturón con disco). Construye espalda de gorila."
                    },
                    {
                        name: "Remo con Mancuernas (unilateral)",
                        details: "4 series x 8-10 reps cada brazo • Descanso: 2 min",
                        explanation: "Rodilla y mano en banco, otra pierna atrás. Tira mancuerna a cadera, aprieta omóplato."
                    }
                ]
            },
            {
                title: "🎯 HIPERTROFIA - Volumen Alto",
                exercises: [
                    {
                        name: "Jalón con Agarre Cerrado",
                        details: "3 series x 10-12 reps • Descanso: 90 seg",
                        explanation: "Agarre supino (palmas hacia ti), manos separadas ancho de hombros. Enfatiza dorsal inferior."
                    },
                    {
                        name: "Face Pulls",
                        details: "3 series x 15-20 reps • Descanso: 60 seg",
                        explanation: "Cuerda en polea alta. Tira hacia cara separando manos. Deltoides posterior y trapecios medios."
                    },
                    {
                        name: "Shrugs con Mancuernas",
                        details: "3 series x 12-15 reps • Descanso: 90 seg",
                        explanation: "Encogimientos de hombros. Sube trapecios superiores, pausa arriba. No gires hombros."
                    },
                    {
                        name: "Curl Concentrado",
                        details: "3 series x 10-12 reps cada brazo • Descanso: 60 seg",
                        explanation: "Sentado, codo en muslo interno. Curl lento, aprieta bíceps arriba. Conexión mente-músculo."
                    },
                    {
                        name: "Curl en Polea Baja (21s)",
                        details: "3 series x 21 reps (7 mitad baja + 7 mitad alta + 7 completas) • Descanso: 90 seg",
                        explanation: "Técnica avanzada. Quema metabólica brutal. Sin descanso entre las 21 reps."
                    }
                ]
            },
            {
                title: "🏃 CARDIO (25-35 min)",
                exercises: [
                    {
                        name: "HIIT en Bici o Caminadora",
                        details: "30 seg sprint + 90 seg suave • Repite 10-12 rondas",
                        explanation: "Intervalos de alta intensidad. Maximiza quema de grasa post-entreno."
                    }
                ]
            }
        ]
    },
    
    sabado: {
        title: "LEGS B - Piernas (Variante Funcional)",
        focus: "Explosividad y Resistencia",
        duration: "70-80 min",
        phases: [
            {
                title: "🔥 CALENTAMIENTO (12-15 min)",
                exercises: [
                    {
                        name: "Calentamiento completo igual que Miércoles",
                        details: "Bici + movilidad + activación",
                        explanation: "Prepara piernas para día pesado."
                    }
                ]
            },
            {
                title: "💥 POTENCIA - Explosivos",
                exercises: [
                    {
                        name: "Front Squat (Sentadilla Frontal)",
                        details: "4 series x 6-8 reps • Descanso: 3 min",
                        explanation: "Barra en hombros frontales. Más énfasis en cuádriceps y core. Pecho arriba obligatorio."
                    },
                    {
                        name: "Bulgarian Split Squat con Mancuernas",
                        details: "3 series x 8-10 reps cada pierna • Descanso: 2 min",
                        explanation: "Pie trasero elevado en banco. Trabaja equilibrio, glúteos y cuádriceps. Baja profundo."
                    }
                ]
            },
            {
                title: "🎯 HIPERTROFIA - Variantes",
                exercises: [
                    {
                        name: "Hack Squat (máquina)",
                        details: "3 series x 12-15 reps • Descanso: 2 min",
                        explanation: "Si tu gym tiene. Cuádriceps sin cargar espalda. Baja hasta tope."
                    },
                    {
                        name: "Peso Muerto Piernas Rígidas",
                        details: "3 series x 10-12 reps • Descanso: 90 seg",
                        explanation: "Piernas casi extendidas. Baja barra sintiendo estiramiento brutal en isquios. Glúteos y femorales."
                    },
                    {
                        name: "Hip Thrust con Barra",
                        details: "3 series x 12-15 reps • Descanso: 90 seg",
                        explanation: "Espalda en banco, barra en cadera. Empuja cadera arriba apretando glúteos. CLAVE para glúteos."
                    },
                    {
                        name: "Sentadilla Goblet con Pausa",
                        details: "3 series x 15-20 reps • Descanso: 60 seg",
                        explanation: "Mancuerna en pecho. Baja profundo, pausa 3 seg abajo. Quema cuádriceps."
                    },
                    {
                        name: "Gemelos Sentado",
                        details: "4 series x 20-25 reps • Descanso: 60 seg",
                        explanation: "Trabaja soleo (músculo profundo). Más volumen que de pie."
                    }
                ]
            },
            {
                title: "🏃 CARDIO FINAL (20-30 min)",
                exercises: [
                    {
                        name: "Trote Suave",
                        details: "20-30 min muy tranquilo",
                        explanation: "Recuperación. Tus piernas están destruidas. Camina si es necesario."
                    }
                ]
            }
        ]
    },
    
    domingo: {
        title: "DESCANSO ACTIVO",
        focus: "Recuperación y Movilidad",
        duration: "30-45 min (opcional)",
        isRest: true
    }
};

// ============================================
// FUNCIONALIDAD PRINCIPAL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const dayButtons = document.querySelectorAll('.day-btn');
    const contentArea = document.getElementById('workout-content');
    
    // Event listeners para botones
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover active de todos
            dayButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir active al clickeado
            this.classList.add('active');
            
            // Cargar workout del día
            const day = this.getAttribute('data-day');
            loadWorkout(day);
        });
    });
    
    // Cargar lunes por defecto
    loadWorkout('lunes');
});

function loadWorkout(day) {
    const workout = workouts[day];
    const contentArea = document.getElementById('workout-content');
    
    if (workout.isRest) {
        contentArea.innerHTML = generateRestDay();
        return;
    }
    
    let html = `
        <div class="workout-container">
            <div class="workout-header">
                <h2>${workout.title}</h2>
                <p class="focus">${workout.focus}</p>
                <div class="duration">${workout.duration}</div>
            </div>
    `;
    
    // Generar fases
    workout.phases.forEach(phase => {
        html += `
            <div class="phase">
                <div class="phase-title">${phase.title}</div>
        `;
        
        phase.exercises.forEach(exercise => {
            html += `
                <div class="exercise">
                    <div class="exercise-name">${exercise.name}</div>
                    <div class="exercise-details">${exercise.details}</div>
                    <div class="exercise-explanation">${exercise.explanation}</div>
                </div>
            `;
        });
        
        html += `</div>`;
    });
    
    html += `</div>`;
    contentArea.innerHTML = html;
}

function generateRestDay() {
    return `
        <div class="rest-day">
            <h2>🌿 DÍA DE DESCANSO ACTIVO</h2>
            <p>Tu cuerpo crece cuando descansa. Este día es tan importante como entrenar.</p>
            
            <div class="rest-activities">
                <div class="rest-activity">
                    <h4>🚶 Caminata Ligera</h4>
                    <p>20-30 min en parque o naturaleza. Respira profundo, relaja mente.</p>
                </div>
                
                <div class="rest-activity">
                    <h4>🧘 Yoga o Estiramientos</h4>
                    <p>15-20 min de estiramientos profundos. Prioriza cadera, hombros y columna.</p>
                </div>
                
                <div class="rest-activity">
                    <h4>💆 Foam Rolling</h4>
                    <p>10-15 min rodando músculos tensos. Libera adhesiones y mejora recuperación.</p>
                </div>
                
                <div class="rest-activity">
                    <h4>🍽️ Nutrición Inteligente</h4>
                    <p>Come suficiente proteína (2g/kg). Hidrátate bien. Considera un masaje o sauna.</p>
                </div>
            </div>
        </div>
    `;
}
