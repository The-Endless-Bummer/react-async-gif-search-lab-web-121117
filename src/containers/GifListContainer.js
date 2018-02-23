import React from 'react'
import PropTypes from 'prop-types'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  state = {
    input: '',
    gifs: []
  }

  onInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const firstThreeImages = []
    this.fetchData(this.state.input)
    .then(gifObj => {
      for(let i = 0; i < 3; i++) {
        firstThreeImages.push(gifObj.data[i])
        this.setState({
          input: '',
          gifs: [...firstThreeImages]
        })
      }
    })
  }

  fetchData = (event) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${event}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
  }

  render () {
    const images = this.state.gifs
    return (
      <div>
        <h1>Gifs List Container</h1>
        <GifSearch data={this.state.input} onInput={this.onInput} onSubmit={this.onSubmit} />
        {images.map((image, index) => {
          return <GifList imageData={image} key={index} />
        })}
      </div>
    )
  }
}

export default GifListContainer;
