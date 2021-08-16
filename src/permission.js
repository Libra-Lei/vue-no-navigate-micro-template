/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-13 14:22:46
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-13 17:17:06
 */
import router from './routes'
router.beforeEach(async(to, from, next) => {
  console.log('[米婆婆to]: ', to);
  next();
})

router.afterEach(() => {
  // Remove initial loading
  // const appLoading = document.getElementsByClassName('mpp-loading-bg')
  // console.log('appLoading: ', appLoading);
  // if (appLoading[0]) {
  //   appLoading[0].style.display = 'none';
  // }
  // const appLoading = document.getElementById('loading-bg')
  // if (appLoading) {
  //     appLoading.style.display = "none";
  // }
})
