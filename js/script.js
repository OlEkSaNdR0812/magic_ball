window.onload=function(){
let text=document.createElement("input");
text.setAttribute("type","text");
text.classList.add('InputType')
text.setAttribute("id","string");
text.setAttribute("placeholder","Введіть питання");
document.body.appendChild(text)

let div = document.createElement("div");
div.classList.add("center")
document.body.appendChild(div)

var answers = [ 'Можливо.', 'Звісно що Ні.', 'Хто це спитав?.', 'Мені звідки знати.',
  'Краще сходи до Гадалки.', 'Краще загугли.', 'На це тільки надіятись.', 'Я сподіваюсь що так.',
  'Без шансів.', 'Ніколи', '50 на 50.', 'Зірки  говорять що все можливо', 'Краще тобі цього не знати .',
  'Секунду, встановлюю звязок із вищими силами.', 'Абонент недоступний.', 'Ти перший хто у мене це запитав.', 'Знайди інформацію в енциклопелії.'];
text.addEventListener("keypress", e =>{
	if(e.key==="Enter"){
		var answer = answers[Math.floor(Math.random() * answers.length)];
		div.innerHTML=answer
	}
}
)}