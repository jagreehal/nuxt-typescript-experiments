console.log('in lib!', Date());
import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  proxy: {
    host: '127.0.0.1',
    port: 5005
  }
});

export { api };
const date = Date();
console.log('date set', date);

export function getDate() {
  return date;
}
