/*사이드 바*/

var sidebar = document.getElementById('mySidebar');

        sidebar.addEventListener('mouseover', function() {
            sidebar.style.width = '200px';
            
            
        });

        sidebar.addEventListener('mouseout', function() {
            sidebar.style.width = '60px';
        });

/*방청 신청*/
const menu = [
    {
      id: 0,
      item: "즐거운 아침",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 1,
      item: "오픈마인드",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 2,
      item: "조은만남",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 3,
      item: "음악쇼",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 4,
      item: "하하호호",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 5,
      item: "마법같은하루",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 6,
      item: "야호나라",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 7,
      item: "사랑하자",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 8,
      item: "별따기",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 9,
      item: "북치고",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
    {
      id: 10,
      item: "장구치고",
      price: 5000,
      num: 0,
      itemPrice: 0,
    },
  ];
  
  let menuTable = document.getElementById("menuTable");
  let sumPrice = document.getElementById("sum");
  
  function generateTable() {
    menuTable.innerHTML = "";
    menu.forEach(function (item) {
      let tr = `<tr>
        <td>${item.id}</td>
        <td>${item.item}</td>
        <td>${new Intl.NumberFormat().format(item.price)}</td>
        <td>${new Intl.NumberFormat().format(item.num)}</td>
        <td>${new Intl.NumberFormat().format(item.itemPrice)}</td>
      <td> <button type="button" class="btn btn-primary" onclick="select(${
        item.id
      })"> + </button> </td>
      <td> <button type="button" class="btn btn-secondary" onclick="decrease(${
        item.id
      })"> - </button> </td>
        <td> <button type="button" class="btn btn-secondary" onclick="unselect(${
          item.id
        })"> x </button> </td>
        </tr>`;
      menuTable.innerHTML += tr;
    });
  }
  
  generateTable();
  calcSum();
  
  function select(item) {
    menu[item].num += 1;
    menu[item].itemPrice = menu[item].price * menu[item].num;
    generateTable();
    calcSum();
  }
  
  function decrease(item) {
    if (menu[item].num >= 1) menu[item].num -= 1;
    menu[item].itemPrice = menu[item].price * menu[item].num;
    generateTable();
    calcSum();
  }
  
  function unselect(item) {
    menu[item].num = 0;
    menu[item].itemPrice = menu[item].price * menu[item].num;
    generateTable();
    calcSum();
  }
  
  function calcSum() {
    let sum = 0;
    menu.forEach(function (item) {
      sum += item.price * item.num;
    });
    sumPrice.innerHTML = new Intl.NumberFormat().format(sum);
  }
  
  function myFunction() {
    var x = document.getElementById("demo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
