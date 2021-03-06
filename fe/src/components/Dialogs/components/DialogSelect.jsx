import React from 'react'
import Select from 'react-select';
import cl from './../Chat/Chat.module.css'

const DialogSelect = (props) => {
  console.log(props)
  props.options.map(i => i.label = i.partner.name)
//const [option, setOption] = useState(props.options);
//const [isLoading, setIsLoading] = useState(false)
//isLoading={isLoading}
const  handleChange = (newValue ,actionMeta) => {
  //вытащить из пропсов функцию для изменения стейта
  //props.экшенИзРедакса(newOption, option)
  };
  return (
    <Select
      className = {cl.cont}
      placeholder ={'Имя чата'}
      name="DialogList"
      options ={props.options}
      isClearable={true}
      isSearchable={true}
      onChange={handleChange}
      noOptionsMessage={() => "Нету открытых чатов"}
    />
  )
}

export default DialogSelect
