import React from 'react'
import cn from 'classnames'

import { AvailableCheckboxProps } from './AvailableCheckbox.props'

import styles from './AvailableCheckbox.module.scss'

const AvailableCheckbox: React.FC<AvailableCheckboxProps> = ({ isChecked = false, onChange }) => {
  return (
    <label className={cn(styles.root, { [styles.active]: isChecked })} htmlFor="available">
      <span className={styles.label}>Available</span>
      <span className={styles.icon}>
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L3.70711 5.70711C3.31658 6.09763 2.68342 6.09763 2.29289 5.70711L0.292893 3.70711C-0.0976311 3.31658 -0.0976311 2.68342 0.292893 2.29289C0.683417 1.90237 1.31658 1.90237 1.70711 2.29289L3 3.58579L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z"
          />
        </svg>
      </span>
      <input
        className={styles.input}
        type="checkbox"
        id="available"
        name="available"
        value="Available"
        checked={isChecked}
        onChange={onChange}
      />
    </label>
  )
}

export default AvailableCheckbox
