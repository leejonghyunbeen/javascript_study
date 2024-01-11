const user = [{
    name:'lee',
    age:20,
},{
    name : 'kim',
    age:30,
}]
function a() {
    let num_a =1
    console.log('a함수위치'+num_a)
    user[0].age++
    console.log(user[0].age)
    b()
}
function b() {
    let num_b =1
    console.log('b 함수 위치'+num_b)
    user[1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ].age++
    console.log(user[1].age)
}
a()