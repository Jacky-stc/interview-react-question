## 1.
There is an array, each item has such format: 
```javascript
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', 
profession: 'xxx'}
``` 
`lastName` , `note` can be empty, `customerID` can only be a set of digital numbers. 
`profession` can only have ‘student’, ‘freelancer’, ‘productOwner’, 
‘engineer’ or ‘systemAnalytics’. 

```javascript
// Example data
const user = [
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "134",
    note: "",
    profession: "engineer",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    customerID: "479",
    note: "Hello",
    profession: "student",
  },
  {
    firstName: "John",
    lastName: "",
    customerID: "628",
    note: "World",
    profession: "freelancer",
  },
  {
    firstName: "David",
    lastName: "Lan",
    customerID: "165",
    note: "World",
    profession: "systemAnalytics",
  },
  {
    firstName: "Jackson",
    lastName: "Wang",
    customerID: "781",
    note: "World",
    profession: "productOwner",
  },
];
```
### Q1.
> Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) 
to sort this array and print it out.
```javaScript
function sortUserName(user) {
  user.sort((a, b) => {
    return `${a.firstName}${a.lastName}${a.customerID}`.localeCompare(
      `${b.firstName}${b.lastName}${b.customerID}`
    );
  });
  console.log(user);
}
sortUserName(user);
```
### Q2.
> Please sort by ‘profession’ to follow the principle.  
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > 
‘student’’)
```javascript
function sortByType(user) {
  const professionWeightList = {
    systemAnalytics: 5,
    engineer: 4,
    productOwner: 3,
    freelancer: 2,
    student: 1,
  };
  user.sort((a, b) => {
    if (
      professionWeightList[a.profession] - professionWeightList[b.profession] >
      0
    ) {
      return -1;
    } else if (
      professionWeightList[a.profession] - professionWeightList[b.profession] <
      0
    ) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(user);
}
sortByType(user);
```

## 2.
```html
<div class="container"> 
    <div class="header">5/8 外出確認表</div> 
    <div class="content"> 
      <ol class="shop-list"> 
        <li class="item">麵包</li> 
        <li class="item">短袖衣服</li> 
        <li class="item">飲用水</li> 
        <li class="item">帳篷</li> 
      </ol> 
      <ul class="shop-list"> 
        <li class="item">暈車藥</li> 
        <li class="item">感冒藥</li> 
        <li class="item">丹木斯</li> 
        <li class="item">咳嗽糖漿</li> 
      </ul> 
    </div> 
    <div class="footer">以上僅共參考</div> 
  </div> 
```
```css
.container { 
  font-size: 14px; 
} 
.container .header { 
  font-size: 18px; 
} 
.container .shop-list { 
   list-style: none; 
   margin-left: -15px; 
} 
.container .shop-list li.item { 
   color: green; 
} 
.container .shop-list .item { 
  /* Explain why does this color not works, and how to fix make it work on 
1st list */ 
   color: blue; 
}
```
### 2-1.

> .container .shop-list .item { 
/* Explain why does this color not works, and how to fix make it work on 
1st list */ 
color: blue; 
}

因為CSS有權重之分，目的在於讓瀏覽器能決定哪一項CSS屬性對於特定元素來說的優先級更大，權重高的會優先使用
權重的基本大小：

```
!important > inline-style > ID > class > element > *
````

如果不考慮!important的話原始(以及使用*)的權重預設值是 `0-0-0-0`，如果有一個 `class` 的話就是 `0-0-1-0`，`ID` 則是 `0-1-0-0`，以此類推，將上面兩者計算權重之後做比較：
1. 包含三個 `class` 以及一個 `element`，權重為 `0-0-3-1`
2. 包含三個 `class`，權重為 `0-0-3-0`

第一個大於第二個，所以會優先使用，這裡如果要讓 `color: blue` 顯示的話，可以提高第二段CSS的權重：

1. 將 

    ```css
    .container .shop-list .item
    ``` 
    改為 
    ```css
    .container ol.shop-list .item
    ```
    這樣雖然權重都是 `0-0-3-1`，但是CSS會讓後面定義的規則覆蓋前面的。
2. 將 `color: blue` 改成 `color: blue !important`，如此一來權重會變為 `1-0-0-3-0`。

### 2-2.
> Write styling make every other line give background color to next one
```css
.container .shop-list li:nth-child(odd) {
  background-color: #eeeeee;
}
.container .shop-list li:nth-child(even) {
  background-color: #ffffff;
}
```

## 3.
> let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 
3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1]; 
Please write down a function to console log unique value from this array. 
```javascript
let items = [
  1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4,
  4, 7, 8, 8, 0, 1, 2, 3, 1,
];

function getUniqueNumber(items) {
  let hashMap = new Map();
  let result = [];
  items.forEach((element) => {
    if (hashMap.get(element) !== undefined) {
      hashMap.set(element, hashMap.get(element) + 1);
    } else {
      hashMap.set(element, 1);
    }
  });
  hashMap.forEach((value, key) => {
    if (value === 1) {
      result.push(key);
    }
  });
  console.log(result);
  return result;
}
getUniqueNumber(items);
```

## 4.

> Can you explain about Interface and Enum, and where will you be using, 
please make some examples. 

`Interface` 與 `Enum` 最主要的差別在於，`Interface`是定義一個物件的所包含的**屬性**與**方法**，也就是物件中應該要有的 `key` 以及 `value` 的「型別」，而 `Enum` 則是定義一組「常數」，這些常數會有「特定的值」
- `Interface` 會用來處理「資料內容不固定」，但是傳入型別必須固定的資料，任何的物件都可以使用 `Interface` 來控制型別。

- `Enum` 則較適合用來定義有「固定內容的物件」，例如從後端回傳的status、用戶的會員狀態等等。
```TypeScript
// interface定義了Book這個物件裡面必須包含name、author、price，且他們的型別必須要是string、string、number
interface Book {
    name: string,
    author: string,
    price: number
}
// enum會直接決定這個物件中的值只能是一開始所定義的內容，如果不是就會報錯
enum Status {
    Success: "SUCCESS",
    Error: "ERROR",
    Pending: "PENDING"
}
```

## 5.
> Can you explain the problem with the following code, and how to fix 
it.
```javascript
class Count extends React.Component { 
constructor(props) { 
super(props); 
this.state = { count: 0 }; 
this.handleAddCount = this.handleAddCount.bind(this); 
} 
handleAddCount(){ 
this.setState({ count: this.state.count + 1 }); 
this.setState({ count: this.state.count + 1 }); 
this.setState({ count: this.state.count + 1 }); 
} 
render() { 
return ( 
<div> 
<h2>{this.state.count}</h2> 
<button onClick={this.handleAddCount}>Add</button> 
</div> 
); 
} 
} 
ReactDOM.render( 
<Count />, 
document.getElementById('root') 
); 
```
上面的三次 `setState` 並不能有效地將 `state: count` 增加三次，因為 `setState` 屬於 `asynchronous` 的操作，在同一次的事件循環中 `this.state` 的值會等到循環結束才做更新，因此每一次調用的 `this.state.count` 其實都是初始值 `0`

要有效的讓 `this.state.count` 增加三次可以將
```javascript
this.setState({ count: this.state.count + 1 })
```
改為
```javascript
this.setState(prevState => count: this.state.count + 1 )
```
`this.state` 反映的是事件循環「開始」的狀態，`prevState` 則是「更新當下」的狀態

## 6.
>  Please write the sample code to debounce handleOnChange
```javascript
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

var SearchBox = React.createClass({
  componentWillMount: function () {
    this.debouncedHandleChange = debounce((searchTerm) => {
      console.log(searchTerm);
    }, 1000);
  },

  render: function () {
    return <input type="search" name="p" onChange={this.handleOnChange} />;
  },

  handleOnChange: function (event) {
    const searchTerm = event.target.value;

    this.debouncedHandleChange(searchTerm);
  },
});
```