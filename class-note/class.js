class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다.');
        this.name = name;
        this.age = age;
    }
}
var seho = new Person('세호', 30); //생성 되었습니다.
console.log(seho)


var user ={name: 'capt',age: 100};
var admin = {name: 'capt', age: 100, role: 'role'};

// user에서 사용되었던 속성이 admin에서 중복되는 것을 알 수 있다. 그런 것들을 줄일 필요가 있다
// 그런것들을 해결하기 위해서 프로토타입을 통한 상속이라는 개념이 있다.

// user에서의 정보를 admin에서 재활용 할 수 있도록 admin의 prototype을 정의해보자.

var user ={name: 'capt',age: 100};

var admin = {};

admin.__proto__ = user;
// 크롬기준으로 admin의 프로토타입의 상위에 user 객체를 준다는 것이다.

admin.name
admin.age
// 하면 user의 속성들을 내려받아 사용할 수 있게 된다.
// 내려받는 다는 것을 상속이라고 보면 되는데 admin 의 기본적인 객체 모양은 아래와같다.
admin
// 프로토타입이라는 것이 제공되는데 거슬러 올라가면 age와 name이 제공되는 것을 볼 수가 있다.
// 이렇게 해서 admin의 age와 name 까지 출력 할 수 있는데 admin 에 다른 속성을 추가할 수 있다.
admin.role = 'admin';