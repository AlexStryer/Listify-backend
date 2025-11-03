// src/app.ts
import { createProduct, getAllProducts } from "./services/productService";
import { createList, getAllLists } from "./services/listService";
import { addItemToList, getItemsForList } from "./services/listItemService";

// crear producto
const productId = createProduct({
  name: "Pan integral",
  category: "carbohidratos",
});

// crear lista
const listId = createList("Súper del domingo");

// agregar item
addItemToList(listId, productId, 2);

// mostrar resultados
console.log("Listas:", getAllLists());
console.log("Items de la lista:", getItemsForList(listId));
console.log("Productos:", getAllProducts());