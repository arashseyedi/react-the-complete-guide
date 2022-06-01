import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;
//
//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'black')}
//   }
//
//   & input {
//     font: inherit;
//     display: block;
//     width: 100%;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')}
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//   }
//
//   & input:focus {
//     border-color: #8b005d;
//     outline: none;
//     background: #fad0ec;
//   }
//
//   &.invalid label {
//     color: red;
//   }
// `;

const CourseInput = props => {
  const [isValid, setIsValid] = useState(true);

  const [enteredValue, setEnteredValue] = useState('');

  const inputChangeHandler = e => {
    if (e.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input id="goalInput" type="text" onChange={inputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
