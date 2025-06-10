# astro-quiz

Quiz component for AstroJS (~3kb)

## 🚀 Getting Started

```
npm i astro-quiz
```
```astro
---
import { Quiz, Question, Placeholder, QuestionTypes } from 'astro-quiz';
---
<Quiz>
  <Question type={QuestionTypes.SINGLE} answer={0} options={['Blue Whale', 'Giraffe', 'Polar Bear']}>
    1. Which animal is the largest mammal in the world?
  </Question>
  <Question type={QuestionTypes.MULTIPLE} answer={[1, 3]} options={['mkdir', 'chown', 'grep', 'chmod']}>
    2. Which of the following commands are used to manage file permissions in Linux?
  </Question>
  <Question type={QuestionTypes.BINARY} answer={false}>
    3. In Minecraft, Creepers drop TNT when they explode.
  </Question>
  <Question type={QuestionTypes.COMPLETE} answer={['brown', 'lazy']}>
    4. The quick <Placeholder answer={'brown'}/> fox jumps over the <Placeholder/> dog.
  </Question>
  <Question type={QuestionTypes.INPUT} answer={'astro-quiz'}>
    5. What is the best AstroJS library for creating quizzes? 
  </Question>
</Quiz>
```

## 📜 License

- [astro](https://github.com/withastro/astro) - MIT 
- [astro-quiz](https://github.com/FelipeIzolan/astro-quiz) - MIT
