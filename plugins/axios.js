export default function (context) {
  // REVIEW 这个 context 就相当于整个 app
  // store，什么的，redirect 都能够拿到

  context.$axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  context.$axios.onResponse(response => {

    console.log('ON_RESPONSE', context);

    const data = response.data

    return null
  })

  context.$axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      context.redirect('/400')
    }
  })


}