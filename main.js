function biblioteca (nombre,codigo,autor,año,cantidad,precio,costo,ganancia){
    this.nombre = nombre;
    this.codigo = codigo;
    this.autor = autor;
    this.año = año;
    this.cantidad = cantidad;
    this.precio = precio;
    this.costo = costo;
    this.ganancia = this.precio - this.costo;

  }

  const libreria = [
      new biblioteca("Harry Potter y la piedra filosofal","HPJK1997","J.K Rowling",1997,100,10000,2000),
      new biblioteca("Los juegos del hambre","JHSC2008","Suzane Collins",2008,10,25000,9000),
      new biblioteca("El Hobbit","EHJR1937","J.R.R. Tolkien",1937,200,37000,1900),
      new biblioteca("Hamlet","HWS1589","William Shakespeare", 1589, 200,15000,1300
      ),
      ];
  const LibrosVentas = libreria.find((libros) => libros.cantidad > 100 && libros.ganancia > 14000);

  if(LibrosVentas){
    console.log(`el libro ${LibrosVentas.nombre} escrito por ${LibrosVentas.autor} en el año ${LibrosVentas.año_p} con el codigo ${LibrosVentas.codigo} y precio de ${LibrosVentas.precio} es la mejor opción a vender`);
  } else{
    console.log("Ninguno de los libros es la mejor opción");
  }