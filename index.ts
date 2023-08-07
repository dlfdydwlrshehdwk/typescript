let user :string = 'kim'
let age :number | undefined = undefined;
let married :boolean = false;
let 철수 :(string | number | boolean)[] = [user,age,married]

let 학교 : {
    score : (boolean | number)[],
    teacher : string,
    friend : string | string[],
} = {
    score : [100,97,84],
    teacher : 'phil',
    friend : 'john'
}
학교.score[4] = false;
학교.friend = ['lee',학교.teacher]

function 함수3 ( x? : string){
    if(x){console.log(x)}
    else console.log('이름이없음')
}
함수()
function 함수2(x : string | number) :number{
    return x.toString().length
}
함수2(3325)

function 결혼여부(q : number,w : boolean, e : string){
    let a:number;
    let b:number;
    let c:number;
    if(w) b = 500; else b = 0
    a = q * 1
    if(e == '상') c = 100
    else c = 0;

    if(a + b + c >= 600) return '결혼가능'
    else null
}

console.log(결혼여부(700,false,'중'))
console.log(결혼여부(100,false,'상'))


function 함수(x :number | string){
    return (x as number) + 1
}

