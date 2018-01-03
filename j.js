/*
small tool
zhubenjie.com
*/

/* v validate */
var j = (function (argument) {
  if (typeof $ === 'undefined' && typeof jQuery === 'undefined') {
    console.error('需要jquery   百度静态资源：http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js')
    return '需要jquery 百度静态资源： http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js'
  }
    /* validate phone */
  function v_mobi (e) {
    if (/^1[35789]\d{9}$/.test(e)) {
      return true
    } else {
      return false
    }
  }

    /* email */

  function v_email (str) {
    if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)) {
      return true
    } else {
      return false
    }
  }

    /* xss 字符转译 */

  String.prototype.xss=function(){
    return this
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/, '&quot;')
            .trim()
  }

    /* str len */

  String.prototype.len=function(min_len,max_len){
    return this.length >= min_len &&  this.length <= max_len
  }

  /* is_ios */
  function v_ios () {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/iPhone\sOS/i) == 'iphone os') {
      return true
    } else {
      return false
    }
  }

/* is_android */
  function v_android () {
    var ua = navigator.userAgent.toLowerCase()
    if (ua.match(/Android/i) == 'android') {
      return true
    } else {
      return false
    }
  }

/* is weixin */
  function v_wechat () {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      return false
    }
  }

    /* validate end */

    /* ez ajax
    fn(url,callback)
    param.length ==2
    default method get

    fn(url,data,callback)
    param.length ==3
    default method post

    */
  function _ajax (url, data, fn) {
    var zz = {
      url: url,
      type: 'get'
    }

    if (arguments.length == 2 && typeof arguments[1] === 'function' && typeof arguments[0] === 'string') {
      zz.success = function (e) {
        data(e)
      }
    } else if (arguments.length == 3 && typeof arguments[1] === 'object' && typeof arguments[0] === 'string' && typeof arguments[2] === 'function') {
      zz.data = arguments[1]
      zz.type = 'post'
      zz.success = function (e) {
        fn(e)
      }
    } else {
      console.error('param err', 'get:fn(url,callback)  post:fn(url,data,callback)  ')
      return
    }
    $.ajax(zz)
  }

    /* w window  */

    /* window gotop */
  function _goTop (select, fn) {
    $(select).click(function () {
      $('html,body').stop().animate({ scrollTop: 0 }, 500, fn())
    })
  }

    /* key down trigger */
  function _enterKeyClickTrigger (select, trigger_seletor) {
    $(select).on('keydown', function (e) {
      if (e.keyCode == 13) {
        $(trigger_seletor).click()
      }
    })
  }

    /* q query */
  function _GetUrlQueryString (query) {
    var zbj = {}
        /* 传入 key string类型 ，如有有参数 返回value 没有则返回false */
    window.location.search.replace('?', '').split('&').forEach(function (i) {
      zbj[i.split('=')[0]] = i.split('=')[1]
    })
    if (zbj[query]) {
            /* url 编码转中文 */
      return decodeURIComponent(zbj[query])
    } else {
      return false
    }
  }

  /* t  time */

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

  function _getTimeStamp () {
    return Date.parse(new Date()) / 1000
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

    /* help */
  function _help () {

  }

    /* info */

  function _info () {
    console.error({
      name: 'small tool',
      v: '0.0',
      date: '2017.12.5',
      update: '2018-1-2 16:24:15'
    })
  }

  var zbj = {
    ajax: _ajax,
    v: {
      mobi: v_mobi,
      email: v_email,
      ios: v_ios,
      android: v_android,
      wechat: v_wechat
    },
    w: {
      goTop: _goTop,
      enter: _enterKeyClickTrigger,
      w: window.innerWidth,
      h: window.innerHeight
    },
    q: {
      url: _GetUrlQueryString
    },
    d: {
      now: _getTimeStamp,
      s: _date
    },

    help: _help,
    info: _info
  }
  return zbj
})()
