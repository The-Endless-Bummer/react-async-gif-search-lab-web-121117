import React from 'react'
import PropTypes from 'prop-types'

const GifList = (props) => {
  return (
    <div>
      <img src={props.imageData.images.downsized_medium.url} alt={props.id}/>
    </div>
  )
}

export default GifList
