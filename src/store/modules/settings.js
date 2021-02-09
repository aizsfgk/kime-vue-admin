import defaultSettings from '@/settings'

const { sidebarLogo, fixedHeader } = defaultSettings

const state = {
  sidebarLogo: sidebarLogo,
  fixedHeader: fixedHeader
}

export default {
  namespaced: true,
  state
}
