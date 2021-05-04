const container=document.getElementById('container')
const colors=['#3d84b8','#ff8474','#1cc5dc','#fa9905','#fb3640','#81b214',
'#991d0f','#ff9292','#ea2c62','#16a596','#734046','#fcf876','#cc0e74','#d2e603','#fa1616'
,'#fa7d09','#45046a','#ff5200','#ff1e56','#5b8c85','#df42d1']
const SQUARES=500
for(let i=0;i<SQUARES;i++){
  const square=document.createElement('div')
  square.classList.add('square')
  square.addEventListener('mouseover',()=>setColor(square))
  square.addEventListener('mouseout',()=>removeColor(square))
  container.appendChild(square)
}
function setColor(element){
  const color=getRandomColor()
  element.style.background=color
  element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
  element.style.background='#1a1c20'
  element.style.boxShadow='0 0 2px #000'
}
function getRandomColor(){
  return colors[Math.floor(Math.random()*colors.length)]
}