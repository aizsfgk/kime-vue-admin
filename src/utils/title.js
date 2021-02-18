import { title } from '@/settings'

export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return title + '-' + pageTitle
  } else {
    return title
  }
}