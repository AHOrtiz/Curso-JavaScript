

function pintarTabla() {
   
   for (let index = 1; index <= 30; index++) {
      let fila = "";

      for (let rep = 0; rep < index; rep++) {

         document.write(index);
         fila += index
      }
      document.write("<br>")
      console.log(fila)
      console.log()
   }
}

pintarTabla()



