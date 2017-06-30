import React from 'react'
import numeral from 'numeral'
import TextFont from './TextFont'

export default function TextPrice ({ children, unit = 'đ', ...props }) {
  return (
    <TextFont {...props}>
      {numeral(children).format(0, 0)} {unit}
    </TextFont>
  )
}
