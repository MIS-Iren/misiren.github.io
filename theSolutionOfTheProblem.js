function solution(swParam) {

    document.getElementById('solutionOutput').innerHTML = '';

    switch (swParam) {
        case 1:
            document.getElementById('solutionOutput').innerHTML = 'Функция считывает текст из элемента формы input и запоминает его в local storage.';            
            break;
        case 2:
            document.getElementById('solutionOutput').innerHTML = 'Функция считывает числа из элементов формы input и по известной формуле считает результат. Ответ выводится в тег p.';
            break;
        case 3:
            document.getElementById('solutionOutput').innerHTML = 'Функция считывает строки из элементов формы input. Если количества символов в строках равны, выводится true, в противном случае false.';
            break;
        case 4:
            document.getElementById('solutionOutput').innerHTML = 'Пользователь по очереди добавляет элементы в числовой массив. Функция находит max и min в полученном массиве и выводит их.';
            break;
        case 5:
            document.getElementById('solutionOutput').innerHTML = 'Функция считывает числа и преобразует их в одно число (количество секунд). При помощи setInterval реализована работа таймера.';
            break;
        case 6:
            document.getElementById('solutionOutput').innerHTML = 'Функция считывает значения из элементов формы input и запоминает их в массив ответов пользователя, налету сверяя каждый ответ с верным. На основе полученных результатов формируется оценка пользователю.';
            break;
        case 7:
            document.getElementById('solutionOutput').innerHTML = 'При нажатии на Большую Красную Кнопку появляется окошко с сообщением. Дату получаем при помощи объекта Date(), имя - из local storage.';
            break;
        default:
            break;
    }

    openWindowSolution(solutionBlock);
}

function openWindowSolution(solutionBlock) {
    display = document.getElementById('solutionBlock').style.display;
	if (display=="none"){
		document.getElementById('solutionBlock').style.display = "block";

	}
}

function closeWindowSolution(solutionBlock) {
    display = document.getElementById('solutionBlock').style.display;

	if (display!="none"){
		document.getElementById('solutionBlock').style.display = "none";
	}
}