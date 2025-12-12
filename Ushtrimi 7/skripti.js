function changeParagraphText() {
  const uniqueParagraph = document.getElementById('unique-paragraph');
  uniqueParagraph.textContent = 'Pershendetje, studente!';
}

function changeButtonBackground() {
  const changeBgBtn = document.getElementById('change-bg-btn');
  changeBgBtn.style.backgroundColor = 'red';
}

function changeDivBorder() {
  const dynamicDiv = document.getElementById('dynamic-div');
  dynamicDiv.style.border = '3px dashed dodgerblue';
  dynamicDiv.style.padding = '0.6rem';
}

function changeFirstTitle() {
  const titles = document.querySelectorAll('.title');
  if (titles.length > 0) {
    titles[0].textContent = 'Titulli i perditesuar';
  }
}

function colorParagraphsGreen() {
  const greenParagraphs = document.querySelectorAll('.green-paragraph');
  greenParagraphs.forEach((p) => {
    p.style.color = 'green';
  });
}

function countParagraphs() {
  const paragraphContainer = document.getElementById('paragraph-container');
  const totalParagraphs = paragraphContainer.querySelectorAll('p').length;
  document.getElementById('paragraph-count').textContent = totalParagraphs;
}

function colorListItems() {
  const colors = ['red', 'gold', 'limegreen', 'dodgerblue', 'purple'];
  const listItems = document.querySelectorAll('#colorful-list li');
  listItems.forEach((item, index) => {
    item.style.backgroundColor = colors[index % colors.length];
  });
}

