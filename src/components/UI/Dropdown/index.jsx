import { useSelector } from 'react-redux'
import Select from 'react-select'

function Dropdown({
  isMulti = false,
  placeholder = '',
  options = [],
  value,
  onChange,
}) {
  const theme = useSelector((state) => state.theme.theme)
  const getValue = () => {
    if (value) {
      return isMulti
        ? options.filter((g) => value.indexOf(g.value) >= 0)
        : options.find((g) => g.value === value)
    } else {
      return isMulti ? [] : ''
    }
  }

  const customStyles = {
    container: (provided) => ({
      ...provided,
      display: 'flex',
      height: '48px',
    }),
    control: (provided, state) => ({
      ...provided,
      height: '100%',
      backgroundColor: 'transparent',
      border: `1px solid ${theme === 'dark' ? 'white' : 'rgb(89,89,89)'}`,
      borderRadius: '8px',
      color: 'white',
      boxShadow: 'none',
      minWidth: state.selectProps.isMulti ? '150px' : 'auto',
      '&:hover': {
        borderColor: `${theme === 'dark' ? 'white' : 'rgb(89,89,89)'}`,
      },
    }),
    indicatorSeparator: (provided) => ({ ...provided, display: 'none' }),
    menu: (provided) => ({
      ...provided,
      margin: '0',
      textAlign: 'center',
      border: `1px solid ${theme === 'dark' ? 'white' : 'rgb(89,89,89)'}`,
      backgroundColor: `${
        theme === 'dark' ? 'rgb(17,17,17)' : 'rgb(248,248,248)'
      }`,
      borderRadius: '8px',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected
        ? 'rgb(248, 119, 25)'
        : `${theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(40,40,40)'} `,
      fontSize: state.isSelected ? '24px' : '16px',
      backgroundColor: 'none',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: `${theme === 'dark' ? 'white' : 'rgb(89,89,89)'}`,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: `${theme === 'dark' ? 'white' : 'rgb(89,89,89)'}`,
    }),
    multiValue: (provided) => ({
      ...provided,
      color: `${theme === 'dark' ? 'white' : 'rgb(89,89,89)'}`,
      backgroundColor: 'rgb(248, 119, 25)',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'rgb(255, 255, 255)',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
    }),
  }

  return (
    <Select
      classNamePrefix="custom-select"
      onChange={onChange}
      value={getValue()}
      isMulti={isMulti}
      options={options}
      placeholder={placeholder}
      styles={customStyles}
    />
  )
}

export default Dropdown
