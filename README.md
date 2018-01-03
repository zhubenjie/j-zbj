##small tool
```linux
	npm i j-zbj
```

###example
```javascript
const j=require('j-zbj');

//date format  j.d()

console.log(j.d())
//2018 01 02 17:26:50

console.log(j.d(3))
//2018 01 02

console.log(j.d(6))
//2018 01 02 17:26:50

console.log(j.d(3,'-'))
//2018-01-02


// string length validate
'abcd'.len(min_len,max_len)
//return boolean  (equal)

//xss+trim
console.log('   <script>  & </script> '.xss())
//&lt;script&gt;  &amp; &lt;/script&gt;
```
---
### browser
```javascript
<!-- need jquery -->
<!-- so lazy -->
<script src='path/jquery.js'></script>
<script src='path/j.js'></script>

<!-- ajax  -->
<!-- get method - 2 params  url + fn -->
j.ajax('url',function(e){

	})

<!-- post method - 3 params url + data +fn -->
j.ajax('url',{},function(e){

	})

<!-- device validate -->

j.v.ios()
j.v.android()
j.v.email()
j.v.wechat()
return  boolean

<!-- get url params 
example  ?c=1
-->

j.q.url(yourKey)
return value || false

j.q.url('c')  // 1
j.q.url('q')  // false

```
