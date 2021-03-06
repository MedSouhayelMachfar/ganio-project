const faqModel = require("../models/faqModel");

// @desc      Get frequently asked questions
// @route     GET /api/v1/faq
// @access    Public
const getFrequentlyData = (req, res) => {
  const faqCategory = req.query?.category;
  const language = req.query?.lang;

  const questions = faqModel.getFrequentlyDataMethod(faqCategory, language);

  res.status(200).json({
    success: "True",
    data: {
      questions: questions,
    },
  });
};

module.exports = {
  getFrequentlyData,
};
