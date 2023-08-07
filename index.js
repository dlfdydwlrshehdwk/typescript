var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'phil',
    friend: 'john'
};
학교.score[4] = false;
학교.friend = ['lee', 학교.teacher];
function 함수3(x) {
    if (x) {
        console.log(x);
    }
    else
        console.log('이름이없음');
}
함수();
function 함수2(x) {
    return x.toString().length;
}
함수2(3325);
function 결혼여부(q, w, e) {
    var a;
    var b;
    var c;
    if (w)
        b = 500;
    else
        b = 0;
    a = q * 1;
    if (e == '상')
        c = 100;
    else
        c = 0;
    if (a + b + c >= 600)
        return '결혼가능';
    else
        null;
}
console.log(결혼여부(700, false, '중'));
console.log(결혼여부(100, false, '상'));
function 함수(x) {
    return x + 1;
}
