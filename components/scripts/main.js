async function getQuizTitles() {
    const char = await fetch('/quiz.config.assets/title.json');
    const data = await char.json();
    return data;
}

async function loadQuizList() {
    const pathHolder = document.querySelector('#quizMenu');
    const list = await getQuizTitles();
    list.forEach(title => {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = title;
        pathHolder.appendChild(option);
    });
}

loadQuizList();