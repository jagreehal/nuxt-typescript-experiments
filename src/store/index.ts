export const state = () => ({});
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
export const actions = {
  async nuxtServerInit() {
    console.log('start nuxtServerInit');
    await sleep(1000);
    console.log('end nuxtServerInit');
  }
};
