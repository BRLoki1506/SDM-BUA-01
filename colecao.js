let map = new Map()

map.set("nome", "Danilo")
map.set("idade", 39)

console.log(map.get("nome"))
console.log(map.has("idade"))
console.log(map.size)

map.forEach((valor, chave)=>{
    console.log(`${chave}: ${valor}`)
})

//remover elemantos do map
map.clear()
console.log(map.size)