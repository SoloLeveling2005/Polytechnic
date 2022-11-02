const cell1 = document.querySelector('.cell1')
const cell2 = document.querySelector('.cell2')
const cell3 = document.querySelector('.cell3')
const cell4 = document.querySelector('.cell4')
const cell5 = document.querySelector('.cell5')
const cell6 = document.querySelector('.cell6')
const cell7 = document.querySelector('.cell7')
const cell8 = document.querySelector('.cell8')
const cell9 = document.querySelector('.cell9')
const cell10 = document.querySelector('.cell10')
const cell11 = document.querySelector('.cell11')
const cell12 = document.querySelector('.cell12')
const cell13 = document.querySelector('.cell13')
const cell14 = document.querySelector('.cell14')
const cell15 = document.querySelector('.cell15')
const cell16 = document.querySelector('.cell16')
const cell17 = document.querySelector('.cell17')
const cell18 = document.querySelector('.cell18')
const cell19 = document.querySelector('.cell19')
const cell20 = document.querySelector('.cell20')
const cell21 = document.querySelector('.cell21')
const cell22 = document.querySelector('.cell22')
const cell23 = document.querySelector('.cell23')
const cell24 = document.querySelector('.cell24')
const cell25 = document.querySelector('.cell25')
const cell26 = document.querySelector('.cell26')
const cell27 = document.querySelector('.cell27')
const cell28 = document.querySelector('.cell28')
const cell29 = document.querySelector('.cell29')
const cell30 = document.querySelector('.cell30')
const cell31 = document.querySelector('.cell31')
const cell32 = document.querySelector('.cell32')


const drag1 = document.querySelector('#drag1')
const drag2 = document.querySelector('#drag2')
const drag3 = document.querySelector('#drag3')
const drag4 = document.querySelector('#drag4')
const drag5 = document.querySelector('#drag5')
const drag6 = document.querySelector('#drag6')
const drag7 = document.querySelector('#drag7')
const drag8 = document.querySelector('#drag8')
const drag9 = document.querySelector('#drag9')
const drag10 = document.querySelector('#drag10')
const drag11 = document.querySelector('#drag11')
const drag12 = document.querySelector('#drag12')
const drag13 = document.querySelector('#drag13')
const drag14 = document.querySelector('#drag14')
const drag15 = document.querySelector('#drag15')
const drag16 = document.querySelector('#drag16')
const drag17 = document.querySelector('#drag17')
const drag18 = document.querySelector('#drag18')
const drag19 = document.querySelector('#drag19')
const drag20 = document.querySelector('#drag20')
const drag21 = document.querySelector('#drag21')
const drag22 = document.querySelector('#drag22')
const drag23 = document.querySelector('#drag23')
const drag24 = document.querySelector('#drag24')
const drag25 = document.querySelector('#drag25')
const drag26 = document.querySelector('#drag26')
const drag27 = document.querySelector('#drag27')
const drag28 = document.querySelector('#drag28')
const drag29 = document.querySelector('#drag29')
const drag30 = document.querySelector('#drag30')
const drag31 = document.querySelector('#drag31')
const drag32 = document.querySelector('#drag32')


cell1.ondragover=allowDrop;
cell2.ondragover=allowDrop;
cell3.ondragover=allowDrop;
cell4.ondragover=allowDrop;
cell5.ondragover=allowDrop;
cell6.ondragover=allowDrop;
cell7.ondragover=allowDrop;
cell8.ondragover=allowDrop;
cell9.ondragover=allowDrop;
cell10.ondragover=allowDrop;
cell11.ondragover=allowDrop;
cell12.ondragover=allowDrop;
cell13.ondragover=allowDrop;
cell14.ondragover=allowDrop;
cell15.ondragover=allowDrop;
cell16.ondragover=allowDrop;
cell17.ondragover=allowDrop;
cell18.ondragover=allowDrop;
cell19.ondragover=allowDrop;
cell20.ondragover=allowDrop;
cell21.ondragover=allowDrop;
cell22.ondragover=allowDrop;
cell23.ondragover=allowDrop;
cell24.ondragover=allowDrop;
cell25.ondragover=allowDrop;
cell26.ondragover=allowDrop;
cell27.ondragover=allowDrop;
cell28.ondragover=allowDrop;
cell29.ondragover=allowDrop;
cell30.ondragover=allowDrop;
cell31.ondragover=allowDrop;
cell32.ondragover=allowDrop;


function allowDrop(event) {
  event.preventDefault();
}


drag1.ondragstart=drag;
drag2.ondragstart=drag;
drag3.ondragstart=drag;
drag4.ondragstart=drag;
drag5.ondragstart=drag;
drag6.ondragstart=drag;
drag7.ondragstart=drag;
drag8.ondragstart=drag;
drag9.ondragstart=drag;
drag10.ondragstart=drag;
drag11.ondragstart=drag;
drag12.ondragstart=drag;
drag13.ondragstart=drag;
drag14.ondragstart=drag;
drag15.ondragstart=drag;
drag16.ondragstart=drag;
drag17.ondragstart=drag;
drag18.ondragstart=drag;
drag19.ondragstart=drag;
drag20.ondragstart=drag;
drag21.ondragstart=drag;
drag22.ondragstart=drag;
drag23.ondragstart=drag;
drag24.ondragstart=drag;
drag25.ondragstart=drag;
drag26.ondragstart=drag;
drag27.ondragstart=drag;
drag28.ondragstart=drag;
drag29.ondragstart=drag;
drag30.ondragstart=drag;
drag31.ondragstart=drag;
drag32.ondragstart=drag;


function drag(event) {
  console.log(event['path'][1]['id'])
  event.dataTransfer.setData("id_get", event.target.id);
  event.dataTransfer.setData("drop_cell_id", event['path'][1]['id']);
}

cell1.ondrop=drop;
cell2.ondrop=drop;
cell3.ondrop=drop;
cell4.ondrop=drop;
cell5.ondrop=drop;
cell6.ondrop=drop;
cell7.ondrop=drop;
cell8.ondrop=drop;
cell9.ondrop=drop;
cell10.ondrop=drop;
cell11.ondrop=drop;
cell12.ondrop=drop;
cell13.ondrop=drop;
cell14.ondrop=drop;
cell15.ondrop=drop;
cell16.ondrop=drop;
cell17.ondrop=drop;
cell18.ondrop=drop;
cell19.ondrop=drop;
cell20.ondrop=drop;
cell21.ondrop=drop;
cell22.ondrop=drop;
cell23.ondrop=drop;
cell24.ondrop=drop;
cell25.ondrop=drop;
cell26.ondrop=drop;
cell27.ondrop=drop;
cell28.ondrop=drop;
cell29.ondrop=drop;
cell30.ondrop=drop;
cell31.ondrop=drop;
cell32.ondrop=drop;

function drop(event) {
  let itemId = event.dataTransfer.getData("id_get");
  let drop_cell_id = event.dataTransfer.getData("drop_cell_id") // Этот объект нужен для того чтобы сделать замещение обьектов
  let drop_item_id = event['path'][0]['id'] // Этот объект нужен для того чтобы сделать замещение обьектов
  let first_value = document.getElementById(itemId).value
  let second_value = document.getElementById(drop_item_id).value
  document.getElementById(itemId).value = second_value
  document.getElementById(drop_item_id).value = first_value
}
















// open Full screen

var elem = document.getElementById("table_data");

/* При выполнении функции open Full screen() откройте видео в полноэкранном режиме.
Примечание что мы должны включать префиксы для разных браузеров, так как они еще не поддерживают метод requestFullscreen */
function openFullscreenData() {
  for (let i = 1;i<=32;i++) {
    document.getElementById(`drag${i}`).readOnly = true;
  }
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      for (let i = 1;i<=32;i++) {
        document.getElementById(`drag${i}`).readOnly = false;
      }
    }
}  





// Сохранение данных
function reload() {
  let datas = "VIP List \n\n"

  for (let i = 1;i<=32;i++) {
    let element
    try{
      element = document.getElementById(`drag${i}`).value;
    } catch {
      element = null
    }
    
    if (element == null) {
      // console.log(document.getElementById(`cell${i}`).value)
      datas+=("- "+"\n")
    } else {
      // let str = document.getElementById(`cell${i}`).value.split("<")
      // let new_str = str[1].split(">")[1]
      let new_str = document.getElementById(`drag${i}`).value
      datas+=("- "+new_str+"\n")
      // console.log(datas)
    }
    if ((i)%4==0) {
      datas+="\n"
    }
  }
  
  localStorage['datas'] = datas;
  console.log(datas)
}



function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

document.onmousemove = mouseMove

function mouseMove(event){ 
  reload()
	
}
















// Загрузка списка с данными

function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result)
    let i = 0
    let index = 0
    while (true) {
      let mass = (reader.result).split("\n")
      // let str = String(reader.result[i]).trim()

      console.log(reader.result[i])
      if (mass[i][0] == "-") {
        index+=1
        // console.log(str[i])
        document.getElementById(`drag${index}`).value = ((mass[i]).substring(1)).trim();
        
      }
      i++
      if (i > 100) {
        break
      }
    }
      
    
  };

  reader.onerror = function() {
    alert("Error\n"+`${reader.error}`)
  };

}












// Скачивание списка с данными

const fileSaver = document.querySelector('.file-saver')

// настройки
const options = {
  // рекомендуемое название файла
  suggestedName: 'test4.txt',
  types: [
    {
      description: 'Text',
      accept: {
        'text/plain': '.txt'
      }
    }
  ],
  excludeAcceptAllOption: true
}

// функция для записи
// Скопировал))))
function download(filename, text) {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pom.setAttribute('download', filename);

  if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
  }
  else {
      pom.click();
  }
}

fileSaver.addEventListener('click', async () => {
  var datas = "VIP List \n\n"

  for (let i = 1;i<=32;i++) {
    let element
    try{
      element = document.getElementById(`drag${i}`).value;
    } catch {
      element = null
    }
    
    if (element == null) {
      // console.log(document.getElementById(`cell${i}`).value)
      datas+=("- "+"\n")
    } else {
      // let str = document.getElementById(`cell${i}`).value.split("<")
      // let new_str = str[1].split(">")[1]
      let new_str = document.getElementById(`drag${i}`).value
      datas+=("- "+new_str+"\n")
      console.log(datas)
    }
    if ((i)%4==0) {
      datas+="\n"
    }
  }

  const fileData = `${datas}`
  download('text.txt', fileData);
  // const fileHandle = await window.showSaveFilePicker(options)
  // const writableStream = await fileHandle.createWritable()

  // await writableStream.write(fileData)
  // // данный метод не упоминается в черновике спецификации,
  // // хотя там говорится о необходимости закрытия потока
  // // для успешной записи файла
  // await writableStream.close()
})