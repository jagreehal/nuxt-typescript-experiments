<script lang="ts">
// import Vue from 'vue';
import { value } from 'vue-function-api';

export default {
  render: function(h) {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
      </AnchoredHeading>
    );
  }
};

// const MyComponent = {
//   setup(props) {
//     const msg = value('hello')
//     const appendName = () => {
//       msg.value = `hello ${props.name}`
//     }
//     return {
//       msg,
//       appendName
//     }
//   },
//   template: `<div>x</div>`
// }
</script>
