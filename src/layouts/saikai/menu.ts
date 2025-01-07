import type { AsideFooter } from "../types"
export const aside: AsideFooter["aside"] = [
    {
        name: "重聚矿石镇",
        items: [
            { name: "游戏概要", href: "knowledge/summary" },
            { name: "基础知识", href: "knowledge/basic" },
            { name: "年度日历", href: "event/calendar" },
            { name: "牧场生活指南", href: "knowledge/guide" },
            { name: "居民喜好速查", href: "tools/quick-reference" },
        ],
    },
    {
        name: "牧场生活",
        items: [
            { name: "牧场", href: "life/pasture" },
            { name: "自宅", href: "life/home" },
            { name: "扩建", href: "life/expansion" },
            { name: "农作", href: "life/farm" },
            { name: "动物", href: "life/breeding" },
            { name: "宠物", href: "life/pet" },
            { name: "采矿", href: "life/mining" },
            { name: "钓鱼", href: "life/fishing" },
            { name: "道具改造", href: "life/level-up" },
        ],
    },
    {
        name: "村庄居民",
        items: [
            { name: "地图", href: "life/map" },
            { name: "别墅", href: "life/villa" },
            { name: "商店", href: "life/store" },
            { name: "居民交流", href: "life/communicate" },
            { name: "恋爱结婚", href: "life/love" },
            { name: "村民介绍", href: "resident" },
        ],
    },
    {
        name: "活动事件",
        items: [
            { name: "年度节日", href: "life/event" },
            { name: "居民事件", href: "event/resident" },
            { name: "情敌事件", href: "event/love-enemy" },
            { name: "婚后事件", href: "event/marriage" },
            { name: "其他事件", href: "event/other" },
        ],
    },
    {
        name: "道具说明",
        items: [
            { name: "农作道具", href: "tools/farm-implements" },
            { name: "动物用品", href: "tools/animal-implements" },
            { name: "作物", href: "tools/crop" },
            { name: "副产品", href: "tools/sideline" },
            { name: "钓鱼", href: "tools/fishing" },
            { name: "矿石", href: "tools/ore" },
            { name: "山货", href: "tools/collection" },
            { name: "其他物品", href: "tools/other" },
            { name: "定情信物", href: "tools/affirmation" },
            { name: "唱片", href: "tools/valuables" },
        ],
    },
    {
        name: "烹饪料理",
        items: [
            { name: "料理基础", href: "life/cuisine" },
            { name: "料理食谱", href: "tools/cookbook" },
            { name: "料理道具", href: "tools/kitchenware" },
            { name: "购买食材", href: "tools/ingredients" },
        ],
    },
    {
        name: "其他",
        items: [
            { name: "成就与称号", href: "life/designation" },
            { name: "戒指", href: "tools/ring" },
            { name: "猜谜书", href: "event/riddle-book" },
            { name: "霍安的迷你游戏", href: "event/apple" },
            { name: "玛丽的图书馆", href: "mary-library" },
            { name: "更新日志", href: "update/update" },
            { name: "矿石镇Plus", href: "plus/" },
        ],
    },
]