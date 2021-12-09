const data = require("./../public/data");

// Get frequently asked questions
const getFrequentlyDataMethod = (faqCategory, language) => {
  let questions;
  switch (language?.toLocaleLowerCase()) {
    case "en":
      questions = data.questionsEN;
      break;
    case "fr":
      questions = data.questionsFR;
      break;
    case "tn":
      questions = data.questionsTN;
      break;
    default:
      questions = data.questionsEN;
  }
  if (!faqCategory) {
    return questions.faq;
  } else {
    faqCategory = faqCategory.toLocaleLowerCase();

    const keys = Object.keys(questions).map((key) => key.toLocaleLowerCase());
    if (!keys.includes(faqCategory)) {
      return questions.faq;
    } else {
      return questions[faqCategory];
    }
  }
};

module.exports = {
  getFrequentlyDataMethod,
};
