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

type Asd = { color? : string , size : number, readonly position : number[] }

type User = { name : string , phone : number , email : string }
type Bl = { adult : boolean }
type New = User & Bl;

function 함수e( a :'kim'){
    return a
}
함수e('kim')



type Dh = {
    name : string,
    age : number,
    t : string
}
let 동호 :Dh = {
    name :'동호',
    age : 29,
    t : '의정부'
}

let Like : {
    song : string,
    singer : string
} =
{
    song : '히히',
    singer : '히히'
}

type Pj = {
    member : string[],
    days : number,
    started : boolean
}

let project2 : Pj = {
    member : ['안녕','히히/'],
    days : 20,
    started : true
}

let 회원들 :(number | string)[] = [1,'3',1]

let 오브제 :{ a : string | number} = { a : '123'}
