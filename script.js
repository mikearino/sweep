document.addEventListener('DOMContentLoaded', () =>  {
  const grid = document.querySelector('.grid')
  let width = 10;

  //create Board

  for (let i =0; i < width*width; i ++) {
    const square = document.createElement('div')
    square.setAttribute('id', i)
    grid.appendChild(square)
  }

})