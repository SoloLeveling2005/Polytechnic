//  Задание 1

const names = ['john', 'smith', 'karl'];
const newNames = addPrefix(names, 'Mr');


console.log(newNames);


// function addPrefix(names, mr) {
//     let new_names = []
//     for (let i in names){
//         new_names.push(mr + " " + names[i])
//     }
//     return new_names
// }

// или(мне второй способ нравиться больше :)

function addPrefix(names, mr) {
    return names.map(elem => mr + " " + elem);
}



console.log(names);



console.log("\n\n\n\n")
//  Задание 2




const definitions = [
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
    ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
    ['Бобр', 'Животное из отряда грызунов'],
];

buildDefinitionList(definitions);

// function buildDefinitionList(data) {
//     let new_data = "<dl>"
//     data.forEach((item, index, array) => {
//         new_data += "<dt>"+item[0]+"</dt>"
//         new_data += "<dd>"+item[1]+"</dd>"
//     });
//     new_data += "</dl>"
//     console.log(new_data)
// }

// или(мне второй способ тут тоже нравиться больше :)

function buildDefinitionList(data) {
    result = data.map(elem => "<dt>"+elem[0]+"</dt>"+"<dd>"+elem[1]+"</dd>").join('')
    console.log(String(result))

}