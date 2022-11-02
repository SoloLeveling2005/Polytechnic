name = 'Это я его открыло!';
var win; /* НОВОЕ ОКНО! */

function winOpen() {
	/*	
		1. Откройте новое окно со следующими параметрами:
				ширина: 300, высота: 200
				окно должно быть открыто строго по середине экрана
		2. Передайте фокус созданному окну
	*/
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=700,height=600,left=400,top=200`;

    win = open('', 'test', params);
    win.focus();
}

function docWrite() {
	/*
		1. Запишите в документ дочернего окна содержание, 
			состоящее из полного набора элементов, включая html, head, body, title
		2. Включите в содержание элемент style с содержанием:
				«html{background:#369;color:#fff;font:16px calibri, sans-serif;}»
		3. Включите в содержание элемент p с содержанием «Текст параграфа»
		4. Включите в содержание элемент script с содержанием «alert(opener.name)»
	*/
    // let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    // width=700,height=600,left=400,top=200`;
    // win = open('', 'test', params);
    win.document.write(
        "<html><head><title>Hello</title></head><body><style>html{background:#369;color:#fff;font:16px calibri, sans-serif;}</style><p>Текст параграфа</p><script>alert(opener.name)</script>  </body></html>"
    );
    win.focus();
    
}

function winClose() {
	/*	
		1. Проверьте, существует ли дочернее окно и не закрыто ли оно 
		2. Если окно существует, то закройте его
	*/  

    try{
        if (win.closed) {
            alert("Страница не была открыта")
        } else {
            win.close()
            alert("Страница закрыта")
        }
    }catch{
        alert("Страница не была открыта")
    }

}