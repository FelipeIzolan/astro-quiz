import Quiz from "./src/Quiz.astro";
import Question from "./src/Question.astro";
import Placeholder from "./src/Placeholder.astro";

enum QuestionTypes {
  SINGLE,
  BINARY,
  MULTIPLE,
  COMPLETE,
  INPUT,
}

const uid = (() => {
  let counter = 0;
  return () => `q${counter++}`;
})();

export {
  Quiz,
  Question,
  Placeholder,
  QuestionTypes,
  uid
};
