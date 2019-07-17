<script lang="ts">
import { createComponent } from 'vue-function-api';
import { PropType } from 'vue';

type Props = {
  msg: string;
};

// createComponent({
//   props: {
//     options: (null as any) as PropType<Props>
//   },
//   setup(props) {
//     props.options.msg; // { msg: string } | undefined
//   }
// });

// export default createComponent({
//   props: (['type', 'disabled'] as any) as PropType<Props>,
//   setup(props) {
//     const { type = 'button', disabled = false } = props;
//     return {
//       type,
//       disabled
//     };
//   }
// });

// createComponent({
//   props: {
//     foo: {
//       type: String,
//       required: true
//     },
//     bar: {
//       type: String
//     }
//   },
//   setup(props) {
//     props.foo; // "string" as expected
//     props.bar; // should be -> "string | undefined" but it actually "string"
//   }
// });
</script>
