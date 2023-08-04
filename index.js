const sideMeun = document.querySelector('aside');
const meunBtn = document.getElementById('meun-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode')

meunBtn.addEventListener('click', () =>{
    sideMeun.style.display = 'block';
});

closeBtn.addEventListener('click', () =>{
    sideMeun.style.display = 'none';
});

darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('i:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('i:nth-child(2)').classList.toggle('active');
})

