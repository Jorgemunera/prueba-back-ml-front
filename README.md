# MANUAL DE USO

Aplicación de 3 entidades relacionadas de la siguiente manera:

users - orders (1:1)
orders - products (N:N)
users - products (1:N)

se crea una tabla pivote parea resolver la relación N:N
por defecto, la aplicación tiene un user administrador, puesto que cuando se hace el registro, no se define el role, ya que todos quedaran con role : ['vendedor', 'comprador'], puesto que en un marketplace cualquier persona puede ofrecer sus productos y comprar productos, pero no todos son administradores

Cuando se inicia en la aplicación no hay ningún producto ni usuario creado, por lo que recomiendo seguir el siguiente flujo para probar todas las funcionalidades

1. Regístrese como usuario y explore colocando datos para tratar de tener problemas en el registro

2. Una vez registrado, inicie sesión para obtener el token, con este, podrá tener acceso a varias de las funcionalidades

3. explore las diferentes ventanas, podrá notar que están vaciás, puesto que nadie ha comprado ni vendido algún producto

4. cree un producto y explore las opciones para tratar de que falle la creación, una vez creado, vuelva a mandar los mismos datos, no debería poder hacerlo

5. Debió notar que mientras no se está logueado no se puede crear productos ni vender, solamente se puede ver los que están disponibles en total

6. cuando cree el producto puede ver que el inventario se ha actualizado con los datos correspondientes

7. ahora puede ver que en la lista de productos globales está el producto que usted creó

8. si navega a la ventana de órdenes, podrá ver que no hay nada, puesto que usted no ha comprado nada

9. agregue un producto a su orden y dele en comprar en el símbolo de + que tienen las cards de cada producto, aquí también podrá ver que se ve la cantidad disponible

10. Si preciona x veces el símbolo + del producto, quiere decir que habrá comprado x productos de ese tipo, y si navega a ver sus compras, podrá ver esta actualización, de igual manera, si hay un usuario registrado a su nombre, y alguien más compra, incluido usted, puede notar que el inventario de su producto disminuye, no puede comprar más que la cantidad total de producto disponible

11. Sí se registra e inicia sesión con otro usuario, podrá ver que los paneles de cada uno corresponden exclusivamente a los productos que ha comprado y vendido cada uno, de igual manera en la lista de productos generales, podrá ver todos los productos de todos los vendedores.

12. Aquí también podrá filtrar los productos por su nombre, se encontrará y mostrara las coincidencias que usted busque

13. Sí inicia sesión como administrador, podrá ver que no puede ni comprar ni vender, puesto que desde mi perspectiva no tendría mucho sentido, su función debería ser más reguladora y de gestión

14. el administrador, por tanto, tiene unas vistas distintas, donde puede ver todos los usuarios que han ofrecido productos a la venta

15. La API realmente soporta mas funcionalidades que no se alcanzan a probar en este front, puede revisar su documentación, instalarlas localmente y hacer pruebas con un cliente tipo postman o insomnia
