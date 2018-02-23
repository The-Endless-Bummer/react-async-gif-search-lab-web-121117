import React from 'react'
import PropTypes from 'prop-types'

const GifSearch = (props) => {
  return (
    <form onSubmit={props.onSubmit} action="">
      <h6></h6>
      <input type="text" value={props.data} onInput={props.onInput} />
      <input type="submit" value="find gifs"/>
    </form>
  )
}

export default GifSearch
