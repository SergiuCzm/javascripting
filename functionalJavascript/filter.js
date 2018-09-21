function getShortMessages(messages) {
  let result = messages.filter(x => x.message.length < 50).map(x => x.message)
  return result
}

module.exports = getShortMessages