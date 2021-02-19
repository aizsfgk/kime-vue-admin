import defaultSettings from '@/settings'

const { sidebarLogo, fixedHeader, tagsView } = defaultSettings

const state = {
  sidebarLogo: sidebarLogo,
  fixedHeader: fixedHeader,
  tagsView: tagsView
}

export default {
  namespaced: true,
  state
}
