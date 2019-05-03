const axios = require('axios')

const ogImagePattern = /og:image"[\s]+content="([^"]+)"/i
const igProfilePattern = /rel="canonical"[\s]+href="https:\/\/www.instagram.com\/([^/]+)\//i

async function parseIGUrl (url) {
  const html = (await axios.get(url)).data
  // console.log({ html })
  const imageUrl = html.match(ogImagePattern)[1]
  const profile = html.match(igProfilePattern)[1]

  return { imageUrl, profile }
}

module.exports = {
  parseIGUrl
}
