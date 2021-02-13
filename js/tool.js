function ksort(vm, inputArr, sort_flags) {
  var tmp_arr = {},
    keys = [],
    sorter, i, k, that = vm,
    strictForIn = false,
    populateArr = {};
      sorter = function (a, b) {
        var aFloat = parseFloat(a),
          bFloat = parseFloat(b),
          aNumeric = aFloat + '' === a,
          bNumeric = bFloat + '' === b;
        if (aNumeric && bNumeric) {
          return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
        } else if (aNumeric && !bNumeric) {
          return 1;
        } else if (!aNumeric && bNumeric) {
          return -1;
        }
        return a > b ? 1 : a < b ? -1 : 0;
      };
  // Make a list of key names
  for (k in inputArr) {
    if (inputArr.hasOwnProperty(k)) {
      keys.push(k);
    }
  }
  keys.sort(sorter);

  // BEGIN REDUNDANT
  vm.php_js = vm.php_js || {};
  vm.php_js.ini = vm.php_js.ini || {};
  // END REDUNDANT
  strictForIn = vm.php_js.ini['phpjs.strictForIn'] && vm.php_js.ini['phpjs.strictForIn'].local_value && vm.php_js
    .ini['phpjs.strictForIn'].local_value !== 'off';
  populateArr = strictForIn ? inputArr : populateArr;

  // Rebuild array with sorted key names
  for (i = 0; i < keys.length; i++) {
    k = keys[i];
    tmp_arr[k] = inputArr[k];
    if (strictForIn) {
      delete inputArr[k];
    }
  }
  for (i in tmp_arr) {
    if (tmp_arr.hasOwnProperty(i)) {
      populateArr[i] = tmp_arr[i];
    }
  }

  return strictForIn || populateArr;
}

function randomString(len) {
  len = len || 32;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = chars.length;
  var pwd = '';
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

function getFullTime(){
    var d = new Date();
    var y = d.getFullYear();
    var mo = d.getMonth() + 1;
    var date = d.getDate();
    var w = d.getDay();
    var ws = new Array("日", "一", "二", "三", "四", "五", "六");
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    return y+" 年 "+mo+" 月 "+date+" 日 星期"+ws[w]+" "+t(h)+"："+t(m)+"："+t(s)
}

function t(num){
  if(num < 10)
    return "0" + num
  return num
}
function is_weixnQQ() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger")
        return true;
    if (ua.match(/QQ/i) == 'qq')
        return true;
    return false
}

var token = "?token=qXRLP50xskWLwIx3"
var token2 = "&token=qXRLP50xskWLwIx3"
function fanyi(ch) {
  var en;
  $.ajax({
    url: "https://v1.alapi.cn/api/fanyi" + token,
      dataType: 'JSON',
      jsonp: 'callback',
      type: "GET",
      "async" : false,
      data: {
        q: ch,
        to: "en"
      },
    success: function(re) {
      en = re.data.trans_result[0].dst;
    }
  })
  return en
}

function shuffleSelf(array, size) {
    var index = -1,
        length = array.length,
        lastIndex = length - 1;

    size = size === undefined ? length : size;
    while (++index < size) {
        // var rand = baseRandom(index, lastIndex),
        var rand = index + Math.floor( Math.random() * (lastIndex - index + 1))
            value = array[rand];

        array[rand] = array[index];

        array[index] = value;
    }
    array.length = size;
    return array;
}
