<script lang="ts">
import { defineComponent } from 'vue';
import festivalJson from './_festival.json'
import residentJson from './_resident.json'
import svgTranslate from '@icons/translate.svg?url'
import iconStar from "@icons/star.svg?url"
import iconCake from "@icons/cake-2-fill.svg?url"
import iconCakeRed from "@icons/cake-2-fill-red.svg?url"
import iconCakeBlue from "@icons/cake-2-fill-blue.svg?url"
import iconArrowLeft from "@icons/arrow-left-s-line.svg?url"
import iconArrowLeftGreen from "@icons/arrow-left-s-line-green.svg?url"
import iconArrowRight from "@icons/arrow-right-s-line.svg?url"
import iconArrowRightGreen from "@icons/arrow-right-s-line-green.svg?url"


export default defineComponent({
    data() {
        return {
            iconStar,
            iconCake,
            iconCakeRed,
            iconCakeBlue,
            iconArrowLeft,
            iconArrowRight,
            iconArrowLeftGreen,
            iconArrowRightGreen,
            "language": "cn",
            svgTranslate,
            "title": {
                "cn": "年度日历",
                "jp": "年間カレンダー"
            },
            "season": {
                "cn": [
                    ['spring', '春'],
                    ['summer', '夏'],
                    ['autumn', '秋'],
                    ['winter', '冬']
                ],
                "jp": [
                    ['spring', 'はるの月'],
                    ['summer', 'なつの月'],
                    ['autumn', 'あきの月'],
                    ['winter', 'ふゆの月']
                ]
            },
            "week": {
                "cn": ['日', '一', '二', '三', '四', '五', '六'],
                "jp": ['日', '月', '火', '水', '木', '金', '土']
            },
            "year": 1,
            "month": 0,
            "list": "",
            "festival": "",
            "arrow_left": iconArrowLeft,
            "arrow_right": iconArrowRight,
        }
    },
    created() {
        //@ts-ignore
        if (localStorage && localStorage?.year != undefined && localStorage?.month != undefined) {
            this.year = parseInt(localStorage.year)
            this.month = parseInt(localStorage.month)
        }
        this.list = residentJson
        this.festival = festivalJson
    },
    methods: {
        switch_langusge() {
            if (this.language == 'cn') {
                this.language = 'jp'
            } else {
                this.language = 'cn'
            }
        },
        switch_month(i) {
            this.month = i
        },
        switch_year(i) {
            if (i == 'add') {
                this.year += 1
            } else if (i == 'sub') {
                if (this.year > 1) {
                    this.year = parseInt(this.year) - 1
                }
            }
        },
        change_year(e) {
            var INT = new RegExp("^[1-9][0-9]*$")
            if (e.target.value == '') {
                this.year = 1
            } else if (INT.test(e.target.value)) {
                this.year = parseInt(e.target.value)
            } else {
                e.target.value = parseInt(this.year)
            }
        }
    }
})

</script>
<template>
    <div id="calendar">
        <h1>{{ title[language] }}</h1>
        <div class="lang_flex" @click="switch_langusge">
            <img :src="svgTranslate">
            <div class="lang" v-if="language == 'cn'">中文</div>
            <div class="lang" v-if="language == 'jp'">日文</div>
        </div>
        <div class="season">
            <div v-for="(s, i) in season[language]" :class="[i == month ? s[0] : s[0] + '_none', 'season_month']"
                 @click="switch_month(i)">{{ s[1] }}</div>
        </div>
        <table>
            <thead>
                <tr>
                    <th class="week" v-for="i in week[language]">{{ i }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <template v-for="i of ((year - 1) * 4 + (month)) * 30 % 7">
                        <td></td>
                    </template>
                    <template v-for="i of 30">
                        <template v-if="((year - 1) * 4 + (month)) * 30 % 7 == 0">
                            <td v-if="i <= 7">
                                <div class="calendar">
                                    <div class="calendar_top">{{ i }}</div>
                                    <div class="calendar_bottom">
                                        <template v-for="(item, index) in list">
                                            <template
                                                      v-if="item['birthday']['month'] == season['cn'][month][1] && item['birthday']['day'] == i">
                                                <template v-if="item['birthday']['day2'] != null">
                                                    <template v-if="item['sex'] == 0">
                                                        <a :href="'..' + item['href']" class="days_birthday">
                                                            <img :src="iconCakeRed"><span
                                                                  class="girl">{{ item['name'][language] }}</span>
                                                        </a>
                                                    </template>
                                                    <template v-else>
                                                        <a :href="'..' + item['href']" class="days_birthday">
                                                            <img :src="iconCakeBlue"><span
                                                                  class="boy">{{ item['name'][language] }}</span>
                                                        </a>
                                                    </template>
                                                </template>
                                                <template v-else>
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCake"><span
                                                              class="event">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                            </template>
                                        </template>
                                        <template v-for="f in festival">
                                            <template v-if="f['month'] == season['cn'][month][1] && f['day'] == i">
                                                <a :href="'../Life/Event.html#' + f['name'][language]"
                                                   class="days_birthday">
                                                    <img :src="iconStar">
                                                    <span class="event">{{ f['name'][language] }}</span>
                                                </a>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </td>
                        </template>
                        <template v-else>
                            <td v-if="i <= 7 - ((year - 1) * 4 + (month)) * 30 % 7">
                                <div class="calendar">
                                    <div class="calendar_top">{{ i }}</div>
                                    <div class="calendar_bottom">
                                        <template v-for="(item, index) in list">
                                            <template
                                                      v-if="item['birthday']['month'] == season['cn'][month][1] && item['birthday']['day'] == i">
                                                <template v-if="item['birthday']['day2'] != null">
                                                    <template v-if="item['sex'] == 0">
                                                        <a :href="'..' + item['href']" class="days_birthday">
                                                            <img :src="iconCakeRed"><span
                                                                  class="girl">{{ item['name'][language] }}</span>
                                                        </a>
                                                    </template>
                                                    <template v-else>
                                                        <a :href="'..' + item['href']" class="days_birthday">
                                                            <img :src="iconCakeBlue"><span
                                                                  class="boy">{{ item['name'][language] }}</span>
                                                        </a>
                                                    </template>
                                                </template>
                                                <template v-else>
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCake"><span
                                                              class="event">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                            </template>
                                        </template>
                                        <template v-for="f in festival">
                                            <template v-if="f['month'] == season['cn'][month][1] && f['day'] == i">
                                                <a :href="'../Life/Event.html#' + f['name'][language]"
                                                   class="days_birthday">
                                                    <img :src="iconStar">
                                                    <span class="event">{{ f['name'][language] }}</span>
                                                </a>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </td>
                        </template>
                    </template>
                </tr>
                <tr>
                    <template v-for="i of 30">
                        <td v-if="7 - ((year - 1) * 4 + (month)) * 30 % 7 < i && i <= 7 - ((year - 1) * 4 + (month)) * 30 % 7 + 7"
                            style="width: 120px;">
                            <div class="calendar">
                                <div class="calendar_top">{{ i }}</div>
                                <div class="calendar_bottom">
                                    <template v-for="(item, index) in list">
                                        <template
                                                  v-if="item['birthday']['month'] == season['cn'][month][1] && item['birthday']['day'] == i">
                                            <template v-if="item['birthday']['day2'] != null">
                                                <template v-if="item['sex'] == 0">
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeRed"><span
                                                              class="girl">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                                <template v-else>
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeBlue"><span
                                                              class="boy">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <a :href="'..' + item['href']" class="days_birthday">
                                                    <img :src="iconCake"><span
                                                          class="event">{{ item['name'][language] }}</span>
                                                </a>
                                            </template>
                                        </template>
                                    </template>
                                    <template v-for="f in festival">
                                        <template v-if="f['month'] == season['cn'][month][1] && f['day'] == i">
                                            <a :href="'../Life/Event.html#' + f['name'][language]"
                                               class="days_birthday">
                                                <img :src="iconStar">
                                                <span class="event">{{ f['name'][language] }}</span>
                                            </a>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </td>
                    </template>
                </tr>
                <tr>
                    <template v-for="i of 30">
                        <td v-if="14 - ((year - 1) * 4 + (month)) * 30 % 7 < i && i <= 7 - ((year - 1) * 4 + (month)) * 30 % 7 + 14">
                            <div class="calendar">
                                <div class="calendar_top">{{ i }}</div>
                                <div class="calendar_bottom">
                                    <template v-for="(item, index) in list">
                                        <template
                                                  v-if="item['birthday']['month'] == season['cn'][month][1] && item['birthday']['day'] == i">
                                            <template v-if="item['birthday']['day2'] != null">
                                                <template v-if="item['sex'] == 0">
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeRed"><span
                                                              class="girl">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                                <template v-else>
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeBlue"><span
                                                              class="boy">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <a :href="'..' + item['href']" class="days_birthday">
                                                    <img :src="iconCake"><span
                                                          class="event">{{ item['name'][language] }}</span>
                                                </a>
                                            </template>
                                        </template>
                                    </template>
                                    <template v-for="f in festival">
                                        <template v-if="f['month'] == season['cn'][month][1] && f['day'] == i">
                                            <a :href="'../Life/Event.html#' + f['name'][language]"
                                               class="days_birthday">
                                                <img :src="iconStar">
                                                <span class="event">{{ f['name'][language] }}</span>
                                            </a>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </td>
                    </template>
                </tr>
                <tr>
                    <template v-for="i of 30">
                        <td v-if="21 - ((year - 1) * 4 + (month)) * 30 % 7 < i && i <= 7 - ((year - 1) * 4 + (month)) * 30 % 7 + 21">
                            <div class="calendar">
                                <div class="calendar_top">{{ i }}</div>
                                <div class="calendar_bottom">
                                    <template v-for="(item, index) in list">
                                        <template
                                                  v-if="item['birthday']['month'] == season['cn'][month][1] && item['birthday']['day'] == i">
                                            <template v-if="item['birthday']['day2'] != null">
                                                <template v-if="item['sex'] == 0">
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeRed"><span
                                                              class="girl">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                                <template v-else>
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeBlue"><span
                                                              class="boy">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <a :href="'..' + item['href']" class="days_birthday">
                                                    <img :src="iconCake"><span
                                                          class="event">{{ item['name'][language] }}</span>
                                                </a>
                                            </template>
                                        </template>
                                    </template>
                                    <template v-for="f in festival">
                                        <template v-if="f['month'] == season['cn'][month][1] && f['day'] == i">
                                            <a :href="'../Life/Event.html#' + f['name'][language]"
                                               class="days_birthday">
                                                <img :src="iconStar">
                                                <span class="event">{{ f['name'][language] }}</span>
                                            </a>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </td>
                    </template>
                </tr>
                <tr>
                    <template v-for="i of 30">
                        <td v-if="28 - ((year - 1) * 4 + (month)) * 30 % 7 < i && i <= 7 - ((year - 1) * 4 + (month)) * 30 % 7 + 28">
                            <div class="calendar">
                                <div class="calendar_top">{{ i }}</div>
                                <div class="calendar_bottom">
                                    <template v-for="(item, index) in list">
                                        <template
                                                  v-if="item['birthday']['month'] == season['cn'][month][1] && item['birthday']['day'] == i">
                                            <template v-if="item['birthday']['day2'] != null">
                                                <template v-if="item['sex'] == 0">
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeRed"><span
                                                              class="girl">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                                <template v-else>
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeBlue"><span
                                                              class="boy">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <a :href="'..' + item['href']" class="days_birthday">
                                                    <img :src="iconCake"><span
                                                          class="event">{{ item['name'][language] }}</span>
                                                </a>
                                            </template>
                                        </template>
                                    </template>
                                    <template v-for="f in festival">
                                        <template v-if="f['month'] == season['cn'][month][1] && f['day'] == i">
                                            <a :href="'../Life/Event.html#' + f['name'][language]"
                                               class="days_birthday">
                                                <img :src="iconStar">
                                                <span class="event">{{ f['name'][language] }}</span>
                                            </a>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </td>
                    </template>
                    <template v-if="7 - ((year - 1) * 4 + (month + 1)) * 30 % 7 < 6" v-for="i of 7 - ((year - 1) * 4 + (month + 1)) * 30 % 7">
                        <td></td>
                    </template>
                </tr>
                <tr v-if="((year - 1) * 4 + (month)) * 30 % 7 == 6">
                    <template v-for="i of 30">
                        <td v-if="35 - ((year - 1) * 4 + (month)) * 30 % 7 < i">
                            <div class="calendar">
                                <div class="calendar_top">{{ i }}</div>
                                <div class="calendar_bottom">
                                    <template v-for="(item, index) in list">
                                        <template
                                                  v-if="item['birthday']['month'] == season['cn'][month][1] && item['birthday']['day'] == i">
                                            <template v-if="item['birthday']['day2'] != null">
                                                <template v-if="item['sex'] == 0">
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeRed"><span
                                                              class="girl">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                                <template v-else>
                                                    <a :href="'..' + item['href']" class="days_birthday">
                                                        <img :src="iconCakeBlue"><span
                                                              class="boy">{{ item['name'][language] }}</span>
                                                    </a>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <a :href="'..' + item['href']" class="days_birthday">
                                                    <img :src="iconCake"><span
                                                          class="event">{{ item['name'][language] }}</span>
                                                </a>
                                            </template>
                                        </template>
                                    </template>
                                    <template v-for="f in festival">
                                        <template v-if="f['month'] == season['cn'][month][1] && f['day'] == i">
                                            <a :href="'../Life/Event.html#' + f['name'][language]"
                                               class="days_birthday">
                                                <img :src="iconStar">
                                                <span class="event">{{ f['name'][language] }}</span>
                                            </a>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </td>
                    </template>
                    <template v-for="i of 7 - ((year - 1) * 4 + (month + 1)) * 30 % 7">
                        <td></td>
                    </template>
                </tr>
            </tbody>
        </table>
        <div class="year_season">
            <div class="year_arrow" @click="switch_year('sub')"><img :src="arrow_left" @mouseover="this.arrow_left = iconArrowLeftGreen" @mouseout="this.arrow_left = iconArrowLeft"></div>
            <div class="year_text">第<input type="text" :value="year" @input="change_year">年</div>
            <div class="year_arrow" @click="switch_year('add')"><img :src="arrow_right" @mouseover="this.arrow_right = iconArrowRightGreen" @mouseout="this.arrow_right = iconArrowRight"></div>
        </div>
    </div>
</template>

<style scoped>
#calendar {
    display: flex;
    display: -webkit-flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
}

h1 {
    width: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type='number'] {
    -moz-appearance: textfield;
}

[v-cloak] {
    display: none;
}

.spring {
    color: #00ad94;
    border: solid 1px #00ad94;
    background-color: #aad7d2;
}

.spring_none {
    color: #ffffff;
    background-color: #a8d6d14d;
}

.summer {
    color: #45933a;
    border: solid 1px #45933a;
    background-color: #88c283;
}

.summer_none {
    color: #ffffff;
    background-color: #88c2834d;
}

.autumn {
    color: #e28100;
    border: solid 1px #e28100;
    background-color: #efbb66;
}

.autumn_none {
    color: #ffffff;
    background-color: #efbb664d;
}

.winter {
    color: #308ece;
    border: solid 1px #308ece;
    background-color: #a7cae6;
}

.winter_none {
    color: #ffffff;
    background-color: #a7cae64d;
}

.season {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.season_month {
    border-radius: 5px;
    text-align: center;
}

table {
    margin-top: 20px;
    max-width: 900px;
}

td {
    padding: 0;
}

.boy {
    color: #2f81c2;
    margin-left: 0.5em;
}

.girl {
    color: #d93b4b;
    margin-left: 0.5em;
}

.event {
    color: #555;
    margin-left: 0.5em;
}

@media only screen and (min-width: 801px) {
    .season_month {
        width: 195px;
        margin: 10px;
        height: 2.5em;
        line-height: 2.5em;
    }

    .month {
        width: 847px;
    }

    .calendar {
        width: 100%;
        height: 100%;
        min-height: 110px;
        display: flex;
        display: -webkit-flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .calendar_top {
        width: 80%;
        margin-top: 10px;
        font-weight: bold;
        font-size: 1.5em;
        text-align: left;
    }

    .calendar_bottom {
        width: 100%;
        margin-bottom: 10px;
        flex-grow: 1;
        display: flex;
        display: -webkit-flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: center;
    }

    .days_birthday {
        width: 80%;
        font-size: 0.9em;
        display: flex;
        display: -webkit-flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;
    }
}

@media only screen and (max-width: 800px) {
    .season_month {
        width: 45%;
        margin: 1%;
        height: 2em;
        line-height: 2em;
    }

    .month {
        width: 100%;
    }

    .week {
        font-size: 0.8em;
    }

    .calendar {
        width: 100%;
        height: 100%;
        min-height: 50px;
        display: flex;
        display: -webkit-flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }

    .calendar_top {
        width: 100%;
    }

    .calendar_bottom {
        width: 100%;
        flex-grow: 1;
        display: flex;
        display: -webkit-flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: center;
    }

    .days_birthday {
        width: auto;
        font-size: 0.8em;
        display: flex;
        display: -webkit-flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: center;
    }
}



.year_season {
    margin-top: 20px;
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.year_arrow {
    margin: 0 20px 0 20px;
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}

.year_text {
    display: flex;
    display: -webkit-flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
}

.year_text input {
    width: 3em;
    text-align: center;
    outline: none;
    border: none;
    color: #555;
    font-size: 1em;
    background-color: transparent;
    width: 5em;
}
</style>