const middleware = {}

middleware['cookie'] = require('../src/middleware/cookie.ts');
middleware['cookie'] = middleware['cookie'].default || middleware['cookie']

export default middleware
