// EXERCITIU 1
// const vocale = ['a','e','i','o','u']
// const arr = ['mere','pere','afine','struguri','ananas','smochine']


// const result1 = arr.reduce((acc,currElement,index,arr) => {
    
//     if ( vocale.some((vocale) => currElement[0].toLowerCase() === vocale)){
//         acc.push(currElement);
//     }

//     return acc;

// }, [])

// console.log(result1)


// const result2 = arr.reduce((acc,curr,index,arr) =>{
//     if (!vocale.includes(curr[0].toLowerCase())) {
//         acc.push(curr)
//     }

//     return acc;
// }, [])

// console.log(result2)


// const result3 = arr.reduce((acc,curr,index,arr) =>{
//     if (vocale.some((vocale)=>curr[curr.length - 1].toLowerCase() === vocale ) ){
//         acc.push(curr)
//     }

//     return acc;
// }, [])

// console.log(result3)

// const result4 = arr.reduce((acc,curr,index,arr) =>{
//     if (!vocale.some((vocale)=>curr[curr.length - 1].toLowerCase() === vocale ) ){
//         acc.push(curr)
//     }

//     return acc;
// }, [])

// console.log(result4)


// EXERCITIUL 2

// const lista1 = ['str1','str2','str3'];
// const lista2 =['str6','str4','str8','str7','str5'];
// const K = 6;

// function addFirstKElem(list1, lista2, K) {
//     const l1 = !lista1.every(item => typeof item === 'string');
//     const l2 = !lista2.every(item => typeof item === 'string');
//     if( l1 === true || l2 === true) {
//         return 'Verificati listele sa contina doar elemente de tip string';
//     }
//     const lista2sortata = [...lista2].sort();
        
//     const result = lista2sortata.reduce((acc,curr,index,lista2sortata) =>{
//         if (index < K){
//             acc.push(curr);
//         } 
            
//         return acc;
//     }, [...lista1]);

//    return result;
// }

// const rezultat = addFirstKElem(lista1,lista2,K)
// console.log(rezultat)

// EXERCITIUL 3

// const angajati = [
//     {name: 'Ilie', age: 20},
//     {name: 'Ana', age: 30},
//     {name: 'Ramona', age: 26},
//     {name: 'Petru', age: 29},
//     {name: 'Afonasie', age: 35},
//     {name: 'Lucretia', age: 48},
//     {name: 'Frosinia', age: 50},
//     {name: 'Valentin', age: 42}
// ]


// const angajatiTineri = angajati.reduce((acc,curr,index,angajati) =>{
//     if(curr.age >= 20 && curr.age <= 40){
//         acc.push(curr);
//     }

//     return acc;
// }, []);

// console.log('Angajatii cu varsta cuprinsa intre 20 si 40 de ani:', angajatiTineri)

// const angajatiBatrani = angajati.reduce((acc,curr,index,angajati) =>{
//     if(curr.age >= 50 ){
//         acc.push(curr);
//     }

//     return acc;
// }, []);

// console.log('Toti angajatii sub mai mici de 50 ani?', angajatiBatrani)

// EXERCITIUL 5
// Crescator
// const str = ['mere','pere','afine','struguri','ananas','smochine']

// const sortStr =[...str].sort((a, b) => {
//     return a > b ? 1 : -1;
// });
// console.log(sortStr)

// const num =[1,6,7,9,50,6,4]

// const sortNum =[...num].sort((a, b) => {
//     return a - b
// });

// console.log(sortNum)

// descrescator

// const str = ['mere','pere','afine','struguri','ananas','smochine']

// const sortStr =[...str].sort((a, b) => {
//     return b > a ? 1 : -1;
// });
// console.log(sortStr)

// const num =[1,6,7,9,50,6,4]

// const sortNum =[...num].sort((a, b) => {
//     return b - a
// });

// console.log(sortNum)


// EXERCITIUL 5

const arr = ['1', '2', '3'];

const showItems = (list, order) => {
    const aranjare = arr.reduce((acc,curr,index) =>{
        if (order === 'ASC') {
            acc.push(curr);
        } else if ( order === 'DSC') {
            acc=[curr, ...acc];
    
        }

        return acc;
    }, []);
    
    console.log(aranjare)   

}

showItems(arr, 'ASC')
showItems(arr, 'DSC')

    

 const lista1 = ['str1','str2','str3'];
// const lista2 =['str6','str4','str8','str7','str5'];

// function addFirstKElem(lista1, lista2, K) {
//     if(!lista1.every(item=> typeof item === 'string') || !lista2.every(item => typeof item === 'string')) {
//         return 'Verificati listele sa contina doar elemente de tip string';
//     }
    
//     const lista2sortata = [...lista2].sort();

//     const newlist = [...lista1];

//     for (let i = 0; i < K && i < lista2sortata.length; i++){
//         newlist.push(lista2sortata[i]);
//     }

//     return newlist;

// }
// const rez = addFirstKElem(lista1,lista2,3)

// console.log(rez)


