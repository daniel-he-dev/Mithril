import React, { useState } from 'react';
import moment from 'moment';
import axios from 'axios';

const Answer = ({ answer, asker }) => {
  const [reported, setReported] = useState(false);
  const [helpful, setHelpful] = useState(false);

  const handleHelpful = () => {
    axios
      .put(`proxy/api/fec2/hratx/qa/answers/${answer.id}/helpful?question_id=${answer.id}`)
      .then(() => setHelpful(true))
      .catch((err) => {
        throw err;
      });
  };

  const handleReport = () => {
    axios
      .put(`proxy/api/fec2/hratx/qa/answers/${answer.id}/report?question_id=${answer.id}`)
      .then(() => setReported(true))
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <div className='d-answer'>
        <div>{answer.body}</div>
        <div className='d-answer-toolbar d-light'>
          {`by ${answer.answerer_name}`}
          {asker === answer.answerer_name && (
            <span>
              {' '}
              - <strong>Seller</strong>
            </span>
          )}
          {`, ${moment(answer.date).format('MMM DD, YYYY').toString()}  |  Helpful ? `}
          <span
            className='d-underlined'
            onClick={helpful ? null : handleHelpful}
            style={helpful ? { textDecoration: 'none' } : null}
          >
            Yes
          </span>
          {` (${helpful ? answer.helpfulness + 1 : answer.helpfulness})  | `}
          {reported ? (
            <span
              className='d-underlined'
              style={{
                filter: 'brightness(300%)',
                textDecoration: 'none',
                pointerEvents: 'none'
              }}
            >
              Reported
            </span>
          ) : (
            <span className='d-underlined' onClick={handleReport}>
              Report
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Answer;
