const questions = require('./components/QuestionList.jsx');

test('renders an array of questions', () => {
  expect(questions.toContain('Why is this product cheaper here than other sites?'));
});