
const form = document.querySelector('form');
const div = document.querySelector('div');
const p = document.querySelector('p');

p.addEventListener('click', () => {
  console.log('    p 클릭')
});

div.addEventListener('click', () => {
  console.log('  div 클릭')
  
},true)

form.addEventListener('click', () => {
  console.log(' form 클릭')
  
})