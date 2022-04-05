import React from 'react'

export interface AvailableCheckboxProps extends React.ComponentProps<'input'> {
  isChecked?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
