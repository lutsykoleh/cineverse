import { useState } from 'react'
import Select from 'react-select'

const options = [
  {
    value: 'text1',
    label: 'text1',
  },
  {
    value: 'text2',
    label: 'text2',
  },
  {
    value: 'text3',
    label: 'text3',
  },
  {
    value: 'text4',
    label: 'text4',
  },
]

function Dropdown({ placeholder = '' }) {
  const [value, setValue] = useState('text1')

  const getValue = () => {
    return value ? options.find((c) => c.value === value) : ''
  }

  const onChange = (value) => {
    setValue(value)
  }

  const customStyles = {
    container: (provided) => ({
      ...provided,
      height: '48px',
    }),
    control: (provided) => ({
      ...provided,
      height: '100%',
      backgroundColor: 'transparent',
      border: '1px solid white',
      borderRadius: '8px',
      color: 'white',
      boxShadow: 'none',
      '&:hover': {
        borderColor: 'white',
      },
    }),
    indicatorSeparator: (provided) => ({ ...provided, display: 'none' }),
    menu: (provided) => ({
      ...provided,
      margin: '0',
      textAlign: 'center',
      border: '1px solid white',
      backgroundColor: 'rgb(17, 17, 17)',
      borderRadius: '8px',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'rgb(248, 119, 25);' : 'rgb(255, 255, 255);',
      fontSize: state.isSelected ? '24px' : '16px',
      backgroundColor: 'none',
    }),

    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'white',
    }),
  }

  return (
    <>
      <Select
        classNamePrefix="custom-select"
        onChange={onChange}
        value={getValue()}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
      />
    </>
  )
}

export default Dropdown
