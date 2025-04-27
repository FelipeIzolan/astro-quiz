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
</Quiz>
```

## 📄 Documentation

### Quiz

```tsx
// Usage:
<Quiz>
<!--<Question>'s here-->
</Quiz>

// Props:
redColor?: string
greenColor?: string
buttonLabel?: string
```

### Question

```tsx
// Usage:
<Question type={QuestionType} answer={QuestionAnswer}>
  1. Your question here
</Question>

// Props:
type: QuestionTypes;
answer: number | boolean | string[] | number[];
options?: string[]; // required in SINGLE and MULTIPLE type.
```

#### Answer

- **SINGLE**: must be a number corresponding to the index of the correct answer.
- **MULTIPLE**: must be an array of numbers corresponding to the indixes of the correct answers.
- **BINARY**: must be true or false.
- **COMPLETE**:  must be an array of strings corresponding to the correct answers.


### Placeholder

```tsx
// Usage:
<Placeholder
  answer={'Used for input width calculation'}
/>

// Props:
answer?: string;
```

## 📜 License

- [astro](https://github.com/withastro/astro) - MIT 
- [astro-quiz](https://github.com/FelipeIzolan/astro-quiz) - MIT
