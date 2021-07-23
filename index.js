
let x =[ 'Lisa', 'Kaitlin', 'Jan' ]
let y = 'surprise'

function writeCards(x,y){
 let z = []
  for (let i = 0; i < x.length; i++){
    z.push(`Thank you, ${x[i]}, for the wonderful ${y} gift!`)
    console.log(i)
  }
  return z
} 

function countDown(f) {
  while (f > 0){
    console.log(f) 
    f--
       }
  return console.log(f)
  }
