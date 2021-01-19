interface Email {
  value: string;
  selected: boolean;
}

const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];
interface ProductNumber{
  value: number;
  selected: boolean;
}

interface TrueFalse{
  value: boolean;
  selected: boolean;
}

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

numberOfProducts.forEach.(function(product) {
  const item = createDropdownItem(product);
})

// 언제든지 value 의 타입이 변경 될 수 있다는 가정하에 
// 수용할 수 있게 interface를 통해서 하는게 아니라 유연하게 갖다 쓸 수 있도록 제네릭을 이용할 수 있을 것이다.