/**
 * 常用工具类
 * 使用示例
 * let channel=getUrlParam(window.location.search,'channel')b
 * */
export const tool={
  getUrlParam(str,key){
    if(str) {
      let queryString = str.split('?')[1] || '';
      let arr = queryString.split('&') || [];
      for(let i = 0; i<arr.length; i++) {
        let keyString = decodeURIComponent(arr[i].split('=')[0]);
        let valueString = decodeURIComponent(arr[i].split('=')[1]);
        if(key === keyString) {
          return valueString;
        }
      }
      return;
    } else {
      return;
    }
  }
};