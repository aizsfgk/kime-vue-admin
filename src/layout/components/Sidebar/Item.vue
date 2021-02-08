<script>
export default {
  name: 'Item',
  functional: true,
  props: {
    title: { // 标题
      type: String,
      default: '242423423'
    }
  },
  render (h, context) {
    const { title } = context.props
    const vnodes = []
    // if (title) {
      vnodes.push(<span slot="title">{(title)}</span>)
    // }
    return vnodes
  }
}
</script>
