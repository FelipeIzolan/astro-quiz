import Quiz from "./src/Quiz.astro";
import Question from "./src/Question.astro";
import Placeholder from "./src/Placeholder.astro";

enum QuestionTypes {
  SINGLE,
  MULTIPLE,
  BINARY,
  COMPLETE
}

const uid = (function() {
  let counter = 0;
  return function() {
    return `qq${counter++}`;
  };
})();

export {
  Quiz,
  Question,
  Placeholder,
  QuestionTypes,
  uid // <- generates unique names for <input>
};
