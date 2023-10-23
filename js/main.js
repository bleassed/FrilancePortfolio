const btnDarkMode = document.querySelector(".dark-mode-btn");


//Проверка тёмной темы на уровне системных настроек

/*проверка тёмной темы в localStorage*/ 
if (localStorage.getItem("darkMode") ==="dark"){
   btnDarkMode.classList.add("dark-mode-btn--active");
   document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "lidht") {
   btnDarkMode.classList.remove("dark-mode-btn--active");
document.body.classList.remove("dark");
}






//Если меняются настроки системы меняем тему
window.matchMedia("(prefers-color-scheme:dark)").addEventListener('change', (event)=>{
   const newColorScheme = event.matches ? "dark": 'Light';

   if(newColorScheme==="dark"){
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem
      localStorage.setItem("darkMode", "dark");
   } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
   }
});


/*Включение ночного режима по кнопке*/ 

btnDarkMode.onclick = function() {
    console.log('click')
    btnDarkMode.classList.toggle("dark-mode-btn--active");
   const isDark = document.body.classList.toggle('dark');

   if(isDark){
    localStorage.setItem('darkMode', 'dark')
   } else {
    localStorage.setItem('darkMode', "light");
   }


}
