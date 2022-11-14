field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
  }


let pane1 = document.getElementById('pane1')
let pane2 = document.getElementById('pane2')
let pane3 = document.getElementById('pane3')

let close1 = document.getElementById('close1')
let close2 = document.getElementById('close2')
let close3 = document.getElementById('close3')

close1.addEventListener('click', function(){
  pane1.style = `display: none;`
})
close2.addEventListener('click', function(){
  pane2.style = `display: none;`
})
close3.addEventListener('click', function(){
  pane3.style = `display: none;`
})