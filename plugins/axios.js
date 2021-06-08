export default function (context) {
  // REVIEW 这个 context 就相当于整个 app
  // store，什么的，redirect 都能够拿到

  context.$axios.onRequest(config => {
    console.log('拦截器, REQUEST');
  })

  context.$axios.onResponse(response => {
    console.log('拦截器, RESPONSE');
    // NOTE  这边是没有办法控制 是不是 return 的
  })

  context.$axios.onError(error => {
    console.log('拦截器, ERROR');
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      context.redirect('/400')
    }
  })


}