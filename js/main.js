var summandA = getRandomIntInclusive(6, 9);
var sum = getRandomIntInclusive(11, 14);
var summandB = sum - summandA;


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var taskTemplate = document.querySelector('.task-template').content;
var taskElement = taskTemplate.cloneNode(true);

taskElement.querySelector('.variable-item-a').textContent = summandA;
taskElement.querySelector('.variable-item-b').textContent = summandB;
var arrowItemA = taskElement.querySelector('.arrow-item');
var arrowItemB = taskElement.querySelector('.arrow-item').cloneNode(true);
arrowItemA.classList.add('arrow-item--a');
arrowItemA.style.width = 38.9 * summandA + 'px';
var arrowImageA = arrowItemA.querySelector('.arrow-image');
arrowImageA.classList.add('arrow-image--a');
arrowImageA.setAttribute('width', 38.9 * summandA + 'px');
var arrowPathA = arrowItemA.querySelector('.arrow-path');
arrowPathA.classList.add('arrow-path--a');
arrowAEndX = 38.5 * (summandA);
arrowACurveY = 48 - arrowAEndX * 0.15;
arrowPathA.setAttribute('d', 'M0,48 C5,' + arrowACurveY + ' ' + (arrowAEndX - 5) + ',' + arrowACurveY + ' ' + arrowAEndX + ',48');

document.body.appendChild(taskElement);

var inputA = document.querySelector('.arrow-input');
inputA.classList.add('arrow-input--a');
inputA.style.bottom = (arrowAEndX * 0.15 + 5) + "px";
inputA.focus();

inputA.addEventListener("input", function() {
  var variableA = document.querySelector('.variable-item-a');
  var inputValueA = inputA.value;

  if (inputValueA == summandA) {
    inputA.style.color = '#000000';
    inputA.setAttribute('disabled', true);
    inputA.classList.add('disabled');
    variableA.classList.remove('attention');
    arrowItemB.setAttribute('width', 38.9 * summandA + 'px');
    arrowItemB.classList.add('arrow-item--b');
    arrowItemB.style.width = 38.9 * summandB + 'px';
    var arrowImageB = arrowItemB.querySelector('.arrow-image');
    arrowImageB.classList.add('arrow-image--b');
    arrowImageB.setAttribute('width', 38.9 * summandB + 'px');
    var arrowPathB = arrowItemB.querySelector('.arrow-path');
    arrowPathB.classList.add('arrow-path--b');
    arrowBEndX = 38.5 * (summandB);
    arrowBCurveY = 48 - arrowBEndX * 0.15;
    arrowPathB.setAttribute('d', 'M0,48 C5,' + arrowBCurveY + ' ' + (arrowBEndX - 5) + ',' + arrowBCurveY + ' ' + arrowBEndX + ',48');
    var inputB = arrowItemB.querySelector('.arrow-input');
    inputB.classList.add('arrow-input--b');
    inputB.style.bottom = (arrowBEndX * 0.15 + 5) + "px";
    inputB.addEventListener("input", function() {
      var variableB = document.querySelector('.variable-item-b');
      var inputValueB = inputB.value;
      if (inputValueB == summandB) {
        inputB.style.color = '#000000';
        inputB.setAttribute('disabled', true);
        inputB.classList.add('disabled');
        variableB.classList.remove('attention');
        document.querySelector('.result').innerHTML = '<input class="result-input" type="number" min="0" max="99"/>';
        checkResult();
      } else {
        variableB.classList.add('attention');
        inputB.style.color = 'red';
      }
    });

    var taskImage = document.querySelector('.task__image');
    taskImage.appendChild(arrowItemB);
  } else {
    variableA.classList.add('attention');
    inputA.style.color = 'red';
  }
});

function checkResult() {
  var inputResult = document.querySelector('.result-input');
  inputResult.addEventListener("input", function() {
    var inputValueResult = inputResult.value;
    if (inputValueResult == sum) {
      inputResult.style.color = '#000000';
      inputResult.setAttribute('disabled', true);
      inputResult.classList.add('disabled');
    } else {
      inputResult.style.color = 'red';
    }
  });
}
