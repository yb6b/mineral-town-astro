import pastureIcon from "@/assets/icons/seedling-fill.svg?url"
import residentIcon from "@/assets/icons/user-2-line.svg?url"
import townIcon from "@/assets/icons/home-3-line.svg?url"
import eventIcon from "@/assets/icons/calendar-line.svg?url"
import otherIcon from "@/assets/icons/more-fill.svg?url"

import type { AsideFooter } from "./types"

const footer: AsideFooter["footer"] = [
    { name: "牧场", href: "pasture", icon: pastureIcon },
    { name: "居民", href: "resident", icon: residentIcon },
    { name: "村庄", href: "town", icon: townIcon },
    { name: "事件", href: "event", icon: eventIcon },
    { name: "其他", href: "other", icon: otherIcon },
]

/** @param gameName 游戏的具体名称ID，就是URL里的第二个路由参数 */
export function getMobileFooterArray(gameName: string) {
    return footer.map((e) => {
        return {
            name: e.name,
            href: `/${gameName}/${e.href}`,
            icon: e.icon,
        }
    })
}
