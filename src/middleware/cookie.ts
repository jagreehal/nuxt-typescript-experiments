console.log('in middleware!');
export default function({ req, res, query, $axios }) {
  const isServer = !!req;
  console.log('SETUP');
  // @ts-ignore
  $axios.onResponse(response => {
    if (isServer && (response.headers['set-cookie'] || []).length) {
      console.log('server', response.headers['set-cookie'][0]);
      res.setHeader('Set-Cookie', response.headers['set-cookie'][0]);
    }
    return response;
  });

  if (isServer && req.headers.cookie) {
    // $axios.defaults.headers.common.cookie = req.headers.cookie;
  }
}
