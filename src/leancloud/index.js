
export const av = () => {
  let AV = require('leancloud-storage')
  let APP_ID = 'KAe6JffMXbfI2Ne0PXNr3kBp-gzGzoHsz'
  let APP_KEY = 'UguHTpYdi0D8bHFzDLxG9ghx'
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  })
  return AV
}

