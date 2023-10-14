import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['REACT_APP_OPENAI_API_KEY'],
  dangerouslyAllowBrowser: true // It's fine for hackathon, but don't deploy
});

export default openai;