<script>
export default {
  name: 'Item',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: { // 标题
      type: String,
      default: ''
    }
  },
  render (h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon, 'sub-el-icon']} />)
      } else {
        vnodes.push(<svg-icon icon-class={icon} />)
      }
    }

    if (title) {
      vnodes.push(<span slot="title">{(title)}</span>)
    }
    return vnodes
  }
}
</script>
