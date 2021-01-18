// function logMessage(value: any){
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number){
    if(typeof value === 'number'){
    value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage("hello");
logMessage(100);

interface Developer{
name:string;
skill:string;
}
interface Person{
name:string;
age: number;
}
// function askSomeone(someone:Developer | Person){
    //someone에 대해서 유니온타입을 적용했을때 에러 발생 
    // someone.name
    // someone.age
    // someone.skill
    
// }
// askSomeone({name:'디벨로퍼' skill: '웹 개발'});
// askSomeone({name:'캡틴' age:100 });

function askSomeone(someone:Developer & Person){
    someone.name
    someone.age
    someone.skill
    
}
askSomeone({name:'디벨로퍼', skill: '웹 개발', age: 34});

var seho: string | number | boolean;
var capt: string & number & boolean;


