import { api } from '@/lib';
console.log('in middleware!');
export default function({ req, res, query }) {
  const isServer = !!req;
  console.log('SETUP');
  // @ts-ignore
  api.interceptors.response.use(response => {
    if (isServer && (response.headers['set-cookie'] || []).length) {
      console.log('server', response.headers['set-cookie'][0]);
      res.setHeader('Set-Cookie', response.headers['set-cookie'][0]);
    }
    return response;
  });

  if (isServer && req.headers.cookie) {
    api.defaults.headers.common.cookie = req.headers.cookie;
  }
}
