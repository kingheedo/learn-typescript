//함수의 파라미터에 타입을 정의하는 방식
// function sum(a:number,b:number){
//     return a + b;
// }
// sum(10,20);

//함수의 반환 값에 타입을 정의하는 방식
function add(): number{
    return 10;
}

//함수에 타입을 정의하는 방식
function sum(a:number,b: number):number{
    return a + b;
}
sum (10, 20, 30 ,40);
//에러 발생 - 함수의 파라미터와 맞춰서 인자도 1대1 맵핑이 되어야 한다.


//함수의 옵셔널 파리미터(?)
function log(a: string, b?:string){
    
}
log('hello world');
log('hello ts','abc');
