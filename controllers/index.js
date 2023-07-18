import { Router } from 'express';
import { ChatGPTAPI } from 'chatgpt';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

router.get('/', (req, res) => {
    res.render('homepage');
});
// const api = new ChatGPTAPI({
//     apiKey: process.env.OPENAI_API_KEY
//   })

//   const res = await api.sendMessage('Hello World!')
//   console.log(res.text)
router.post('/regexsaurus', async (req, res) => {
    // Create a new ChatGPT instance
    const api = new ChatGPTAPI({
        apiKey: process.env.CHATGPT_API_KEY
      })
    
    const response = await api.sendMessage('Describe the functionality of this javascript regular expression, and provide examples. Look at the entire regular expression first. Double check your work. ' + req.body.regex)
    console.log(response.text);
    res.json(response.text);
});

export default router;
