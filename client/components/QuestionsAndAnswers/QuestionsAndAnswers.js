import React, { useState, useEffect, useContext } from 'react';
import SearchBar from './SearchBar.js';
import QuestionList from './QuestionList.js';
import AddQuestion from './AddQuestion.js';
import { ProductContext } from '../../context/ProductContext.js';
import axios from 'axios';

const QuestionsAndAnswers = (props) => {
  const { curProduct } = useContext(ProductContext);
  const [numQuestions, setNumQuestions] = useState(2);
  let initialQuestions = [];
  const [questions, setQuestions] = useState([]);

  //Initial data fetch
  useEffect(() => {
    axios
      .get(`proxy/api/fec2/hratx/qa/questions?product_id=${curProduct.id}&count=50`)
      .then((res) => {
        let data = res.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        initialQuestions = data;
        setQuestions(data);
      });
  }, [curProduct.id]);

  const handleAddQuestion = (question) => {
    axios
      .post('proxy/api/fec2/hratx/qa/questions', question)
      .then(() => {
        setQuestions([
          ...questions,
          {
            question_id: questions.length + 1,
            question_body: question.body,
            question_helpfulness: 0,
            asker_name: question.name
          }
        ]);
      })
      .then(() => setNumQuestions(questions.length))
      .catch((err) => console.log('Error: ', err));
  };

  //Search function
  const handleSearch = (e) => {
    let val = e.target.value;
    if (val.length > 2) {
      setQuestions(
        initialQuestions.filter(
          (question) => question.question_body.toLowerCase().indexOf(val) > -1
        )
      );
    } else {
      setQuestions(initialQuestions);
    }
  };

  return (
    <div id='questions-and-answers' className='d-module'>
      <strong>QUESTIONS &amp; ANSWERS</strong>
      <SearchBar handleInput={handleSearch} />
      {questions.length > 0 && (
        <QuestionList
          questions={questions.length > numQuestions ? questions.slice(0, numQuestions) : questions}
        />
      )}
      <div className='d-module-bottom'>
        {numQuestions < questions.length && (
          <button
            className='d-border-button d-bold'
            onClick={() => setNumQuestions(numQuestions + 2)}
          >
            More Questions
          </button>
        )}
        <AddQuestion handleSubmit={handleAddQuestion} />
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
