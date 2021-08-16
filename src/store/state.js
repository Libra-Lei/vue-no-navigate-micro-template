/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-13 10:59:29
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-16 12:59:50
 */
import themeConfig from "@/../themeConfig.js"
import colors from "@/../themeConfig.js"

const state = {
  scrollY: 0,
  theme: themeConfig.theme || 'light',
  themePrimaryColor: colors.primary,
  windowWidth: null
}

export default state
