let 이름 :string = '동호';
let 나이 :number = 27;
let 출생지 :string = '의정부';

let 노래 : { 제목 : string , 가수명 : string} = { 제목 : "백예린" , 가수명 : "산책"}

let project :{
    member :(string | number)[],
    days : number,
    start : boolean,
} = {
    member : ['kim',1423],
    days : 30,
    start : true
}

let 회원 :number | string = '김';

let user :string = 'kim';
let age :undefined | number = undefined;
let married : boolean = false; 
let 철수 :(string | number | undefined | boolean)[] = [user, age, married];

let 학교 :{
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

function 함수(x? : string){
    if(x) {
        console.log(x)
    }
    else { 
        console.log('입력안됨')
    }
}

function 함수2(x? : string | number) :number{
    return x.toString().length
}
function 함수3(x? : number | boolean | string) {

}