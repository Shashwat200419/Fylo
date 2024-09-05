const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-schema:dark)").matches)
  ) {
    // Show Light Icon, Because we are in dark mode
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    // Show Dark Icon, Because we are in Light mode
    themeToggleDarkIcon.classList.remove('hidden');
  }


themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode() {
    // toggle icon
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // If is set in localstorage
    if(localStorage.getItem('color-theme')){
        // If Light, make dark and save in localstorage
        if(localStorage.getItem('color-theme') === 'light'){
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    }else{
        // If not in localstorage
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}