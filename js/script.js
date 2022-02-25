// ===reduce===
// reduce - это метод массивов, который обрабатывает массив, сохраняя
// промежуточный результат
// также reduce удобен тем, что входными аргументами мы берем массив
// и в возвращаемых данных мы получаем другой тип данных

// Аргументы функции callback(acc,rec,index,array)
// acc - аккумулятор(накапливатель)
// rec - все элементы  
// index - index элемента
// array - весь массив

// initialValue - стартовое значение аккумулятора
// Если мы не задаем initialValue, то стартовым значением
// для аккумулятора становится первый элемент массива

// В initialValue мы можем записать любой тип данных(к примеру [],{},'',0)

// let arr = [1,2,3,4,5]
// let sum = 0;
// // аккумулятор
// for(let i = 0;i<arr.length;i++){
//     sum = sum+arr[i]
// }
// console.log(sum)



// let arr2 = [1,2,3,4,5]

// let result = arr2.reduce((acc,rec)=>{
    // return acc+rec
  
// },0)
// console.log(result)

// acc=0
// rec=1,2,3,4,5
// initialValue=0

// первая итерация
// acc=acc+rec - 0(acc)+1(rec)
// acc=1

// вторая итерация
// acc=acc+rec - 1(acc)+2(rec)
// acc=3

// третья итерация
// acc=acc+rec - 3(acc)+3(rec)
// acc=6

// четвертая итерация
// acc=acc+rec - 6(acc)+4(rec)
// acc=10

// пятая итерация 
// acc=acc+rec 10(acc)+5(rec)
// acc=15


// let arr = [50,20,3,60,10,70]

// let result = arr.reduce((acc,rec)=>{
//     if(acc<rec){
//         return rec
//     }else{
//         return acc
//     }
// },0)
// console.log(result)

// acc = 0
// rec = 50,20,3,60,10,70

// 1) acc(0) < rec(50) - true -> acc=50
// 2) acc(50) < rec(20) - false -> acc=50
// 3) acc(50) < rec(3) - false -> acc=50
// 4) acc(50) < rec(60) - true -> acc=60
// 5) acc(60) < rec(10) - false -> acc=60
// 6) acc(60) < rec(70) - true -> acc=70


// Сгенерируем map на reduce

// let arr = [1,2,3,4,5]

// let result = arr.map(el=>{
//     return el*2
// })
// console.log(result)

// let arrMap = [1,2,3,4,5]
// let resultMap = arrMap.reduce((acc,rec)=>{
//     return [...acc,rec*2]
//     // return acc.concat(rec*2)
// },[])
// console.log(resultMap)

// acc=[]
// rec=1,2,3,4,5

// 1)[[],rec(1)*2]
// 2)[[2],rec(2)*2]
// 3)[[2,4],rec(3)*2]
// 4)[[2,4,6],rec(4)*2]
// 5)[[2,4,6,8],rec(5)*2]
// result = [2,4,6,8,10]


// Сгенерируем filter на reduce

// let arr = [1,2,3,4,5,-1,-2,-3,-4,-5]

// let result = arr.filter(el=>{
//     return el>0
// })
// console.log(result)

// let arrFilter = [1,2,3,4,5,-1,-2,-3,-4,-5]
// let resultFilter = arrFilter.reduce((acc,rec)=>{
//     if(rec>0){
//         return [...acc,rec]
//     }
//     return acc
// },[])
// console.log(resultFilter)

// acc = []
// rec = 1,2,3,4,5,-1,-2,-3,-4,-5

// сгенеруем find на reduce

// let arr = [1,2,3,4,5]

// let result = arr.find(el=>{
//     if(el===3){
//         return el
//     }
// })
// console.log(result)

// let arrFind = [1,2,3,4,5]
// let resultFind = arrFind.reduce((acc,rec)=>{
//     if(rec===3){
//         return rec
//     }
//     return acc
// })
// console.log(resultFind)

// // Сгенерировать join на reduce

// let str = ['h','e','l','l','o']
// console.log(str.join(' '))

// let arrStr = ['h','e','l','l','o']
// let resultStr = arrStr.reduce((acc,rec)=>{
//     return acc+rec
// },'')
// console.log(arrStr)

// acc=''
// rec = 'h','e','l','l','o'
// acc = '' + rec('h')
// acc='h'
// acc='h'+rec('e')

// let arr = [1,2,3,undefined,5,6,undefined]

// let result = arr.reduce((acc,rec)=>{
//     if(typeof(rec)!=='undefined'){
//         return acc+rec
//     }
//     return acc
// },0)
// console.log(result)

// Напишите функцию, которая принимает массив объектов
//  и возвращает объект с ключами взятыми из полей
// token и значения объекта. Каждый объект содержит уникальный ключ в token
// //
// Input: [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]
// Output: {'1': {token: 1}, '2':{token: 2, value:23}, '3':{token: 3, name:'superman'}, '4': {token: 4}}


// let collection = [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]

// let resultObj = collection.reduce((acc,rec)=>{

//     return {...acc,[rec.token]:rec}
    

// },{})
// console.log(resultObj)



// 1. Напишите функцию, которая принимает массив строк
//  и возвращает объект с ключом - строка и значением - 
//  количество повторений этой строки в первом объекте

// Input: ['a','b', 'a','c','c','c']
// Output: {a:2, b:1,c:3}

// function count(arr){
//     let obj = {}
//     for(let i = 0;i<arr.length;i++){
//         let symbol = arr[i]
//         if(obj[symbol]===undefined){
//             obj[symbol]=1
//         }else{
//             obj[symbol]++
//         }
//     }
//     return obj

// }
// let newResult = count(['a','b', 'a','c','c','c'])
// console.log(newResult)



// function reduceCount(arr){
//     let newObj = arr.reduce((acc,rec)=>{
//         !acc[rec] ? acc[rec]=1:acc[rec]++
//         return acc
//     },{})
//     return newObj
// }
// let result = reduceCount(['a','b', 'a','c','c','c','a','b'])
// console.log(result)

// Домашнее задание ->
// input:const obj = {
//     "id": 2,
//     "first_name": "Aleksandr",
//     "last_name": "Pushkin",
//     "email": "Pushkin@gmail.com",
//     "gender": null,
//     "ip_address": "221.81.92.35"
// }

// output:['Aleksandr',"Pushkin","Pushkin@gmail.com","221.81.92.35"]

// С помощью reduce вернуть массив со значениями по типу данных - string


