export interface AsideFooter {
  /** 桌面模式的侧边栏 */
  aside: {
    /** 显示的名称 */
    name: string
    /** url里使用的名称 */
    id?: string
    /** 是否以flex布局显示 */
    flex?: boolean
    items: {
      name: string
      href: string
      /** 特效样式 */
      style?: string
    }[]
  }[]

  /** 手机模式的底部工具栏 */
  footer: {
    name: string
    icon: string
    href: string
  }[]
}

export type Aside = AsideFooter['aside']


export type MobileLinkPageData = AsideFooter['aside'][0]

export function addPrefixToHref(data: MobileLinkPageData[], prefix: string) {
  for (const item of data) {
    for (const subItem of item.items) {
      if (!subItem.href.startsWith(prefix))
        subItem.href = prefix + subItem.href;
    }
  }
}
