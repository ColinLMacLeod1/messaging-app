import React from 'react'
import PropTypes from 'prop-types'

const Message = ({message, author}) => {
  <p>
    <i>{author}</i>: {messsage}
  </p>
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message
