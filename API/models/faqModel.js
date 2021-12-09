const data = require("./../public/data");

// Get frequently asked questions
const getFrequentlyDataMethod = (faqCategory) => {
  if (!faqCategory) {
    return data.questions.faq;
  } else {
    faqCategory = faqCategory.toLocaleLowerCase();

    const keys = Object.keys(data.questions).map((key) =>
      key.toLocaleLowerCase()
    );
    if (!keys.includes(faqCategory)) {
      return data.questions.faq;
    } else {
      return data.questions[faqCategory];
    }
  }
};

module.exports = {
  getFrequentlyDataMethod,
};
