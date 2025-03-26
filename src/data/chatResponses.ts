export type ChatResponse = {
    patterns: string[];
    responses: string[];
    followUp?: string[];
}
  
export type ChatCategory = {
    [key: string]: ChatResponse;
}
  
export const chatResponses: ChatCategory = {
    greeting: {
      patterns: ['string','hola', 'buenos días', 'buenas', 'hey', 'saludos'],
      responses: [
        'backticks o template strings',
        '¡Hola! Me llamo Woody ¿Cómo puedo ayudarte hoy?',
        '¡Bienvenido! Me llamo Woody ¿En qué puedo asistirte?',
        '¡Hola! Me alegro de verte. Me llamo Woody ¿Necesitas ayuda con algo?'
      ],
      followUp: [
        '¿Te gustaría saber más sobre nuestra web?',
        '¿Puedo ayudarte con el proceso de registro?'
      ]
    },
    gallery: {
      patterns: ['web', 'app', 'aplicacion', 'aplicación', 'pagina', 'talento','empresa'],
      responses: [
        'Nuestra web cuenta con dos categorías principales: Talento y Empresa.',
        'Puedes registrarte en talento si eres un usuario particular.',
        'Puedes registrarte en empresa si vas a hacer un uso como empresa de la web'
      ],
      followUp: [
        '¿Te gustaría registrarte ahora?',
        '¿En qué categoría te interesa registrarte?'
      ]
    },
    help: {
      patterns: ['ayuda', 'cómo', 'como', 'funciona', 'usar'],
      responses: [
        'Para ingresar en la web, simplemente haz clic en el botón "Talento" o "Empresa" segun tu opcion favorita.',
        'Es muy fácil de usar: Solo tienes que pulsar el boton de la opcion elegida e introducir tus datos.',
        'Navegar por la web es simple:sigue los pasos y rellena el formulario para registrarte.'
      ]
    },
    about: {
      patterns: ['qué es', 'que es', 'acerca', 'sobre', 'web', 'página'],
      responses: [
        'Esta es una web que te busca hacer Match entre candidatos y empresas dejando a un lado los sesgos',
        'Somos una plataforma que apuesta por el Matching "ciego" para evitar los sesgos en los procesos de selección',
        'Este es un espacio donde puedes descubrir el Talento que buscas, si eres empresa, y donde ser valorado como debes, si eres candidato'
      ]
    },
    thanks: {
      patterns: ['gracias', 'thanks', 'te lo agradezco', 'muchas gracias','guay'],
      responses: [
        '¡De nada! Ha sido un placer ayudarte.',
        'Me alegro de haber podido ayudar. ¡No dudes en preguntar si necesitas algo más!',
        'El placer es mío. ¿Hay algo más en lo que pueda ayudarte?'
      ]
    },
    goodbye: {
      patterns: ['adiós', 'chao', 'hasta luego', 'bye', 'adeu'],
      responses: [
        '¡Hasta luego! Espero que hayas disfrutado de la galería.',
        '¡Adiós! Vuelve pronto para descubrir más imágenes.',
        '¡Que tengas un excelente día! Regresa cuando quieras.'
      ]
    },
    programacion:{
      patterns: ['hook','hooks'],
      responses: [
        'Los principales hooks en react son useState, useEffect y useContext'
      ]
    },
    funciones:{
      patterns: ['arrow','flecha','function'],
      responses: [
        'La funcion arrow o flecha se formula () => {}',
        
      ],
      followUp: [
        'La funcion simple se formula const function {name} = {}'
      ]
    },
    Web:{
      patterns: ['Woowii', 'woowii', 'wooWii','WOOWII'],
      responses: [
        'Woowii es lo mejor que ha parido madre',
        
      ],
      followUp: [
        '¿Que estás esperando para unirte a nuestra "Waiting List"',
      ],

    },
    default: {
      patterns: [],
      responses: [
        '¿Podrías darme más detalles sobre lo que necesitas?',
        'No estoy seguro de entender. ¿Podrías reformular tu pregunta?',
        'Estoy aquí para ayudarte. ¿Podrías ser más específico?'
      ],
      followUp: [
        '¿Te gustaría saber más sobre la web?',
        '¿Necesitas ayuda con algo en particular?',
        '¿Quieres que te explique cómo funciona la página?'
      ]
    }
};