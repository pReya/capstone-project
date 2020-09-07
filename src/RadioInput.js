import React, { forwardRef } from 'react'
import styled from 'styled-components/macro'

const RadioInput = forwardRef(({ question }, ref) => {
  return (
    <div>
      {question.answerOptions.map((answerOption) => {
        return (
          <div key={answerOption.name}>
            <StyledRadioInput
              name={question?.questionText || 'defaulRadioInput'}
              value={answerOption.label}
              id={answerOption.name}
              type="radio"
              ref={ref}
            />
            <StyledLabel htmlFor={answerOption.name}>
              {answerOption.label}
            </StyledLabel>
          </div>
        )
      })}
    </div>
  )
})

export default RadioInput

const StyledRadioInput = styled.input`
  margin: 10px 10px 10px 0;
`

const StyledLabel = styled.label`
  line-height: 1.6;
`