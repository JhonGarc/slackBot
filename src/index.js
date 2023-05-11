const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');

const client = new WebClient('xoxb-5224816731476-5222356301154-bT2XZS8H9o8QeTAJ3ULqbNIc');
const slackEvents = createEventAdapter('3ee65999d8574fb5811ca4cfb566739f');
  


slackEvents.on('message', (data) => {
  console.log('Mensaje recibido:', data.text);
});



(async () => {
    try {
        const result = await client.chat.postMessage({
            channel: '#general',
            text: '¡Hola, mundo! :smiley:'
        });
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
