/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-13 10:59:29
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-16 11:31:43
 */
const mutations = {
  UPDATE_WINDOW_WIDTH(state, width) {
    state.windowWidth = width;
  },
  UPDATE_WINDOW_SCROLL_Y(state, val) { state.scrollY = val }
}

export default mutations

