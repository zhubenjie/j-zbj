  Date.prototype.format = function (format) {
    var date = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S+': this.getMilliseconds()
    }
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
      }
    }
    return format
    // console.log(zz.format('yyyy-MM-dd h:m:s'));
  }

  function _date (num, split) {
    var c = ''
    split = split || ' '
    switch (num) {
      case 1:
        c = 'yyyy'
        break
      case 2:
        c = 'yyyy' + split + 'MM'
        break
      case 3:
        c = 'yyyy' + split + 'MM' + split + 'dd'
        break
      case 4:
        c = 'yyyy' + split + 'MM' + split + 'dd h'
        break
      case 5:
        c = 'yyyy' + split + 'MM' + split + 'dd h:m'
        break
      case 6:
        c = 'yyyy' + split + 'MM' + split + 'dd h:m:s'
        break
      default:
        c = 'yyyy-MM-dd h:m:s'
        break
    }
    return (new Date()).format(c)
  }

  String.prototype.len=function(min_len,max_len){
    return this.length >= min_len &&  this.length <= max_len
  }

  String.prototype.xss=function(){
    return this
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/, '&quot;')
            .trim()
  }


  module.exports={
    d:_date
  }