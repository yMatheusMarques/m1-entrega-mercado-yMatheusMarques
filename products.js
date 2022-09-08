const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

function criarProduto(produto){
   let nome = produto.title
   let preco = produto.price
   let categoria = produto.category
   let imagem = produto.image
   
   //Elementos
   
   let main = document.createElement('main')
   let card = document.createElement('li')
   let img = document.createElement('img')
   let title = document.createElement('h1')
   let category = document.createElement('h5')
   let productPrice = document.createElement('strong')
   let ul = document.createElement('ul')
   let frutas = document.getElementById('frutas')
   let bebidas = document.getElementById('bebidas')
   let higiene = document.getElementById('higiene')
   
   // Inserindo as informações

   if(imagem == undefined){
    img.src = './img/products/no-img.svg'
   
  }else{
    img.src = `${imagem}`
  }
  
  img.alt = nome
  title.innerHTML = `${nome}`
  category.innerHTML = `${categoria}`
  productPrice.innerHTML = `${preco}`

  if(produto.category == 'Frutas'){
      
      frutas.appendChild(ul)
      ul.appendChild(card)
      card.appendChild(img)
      card.appendChild(main)
      main.appendChild(title)
      main.appendChild(category)
      main.appendChild(productPrice)
  
    }else if(produto.category == 'Bebidas'){
     
      bebidas.appendChild(ul)
      ul.appendChild(card)
      card.appendChild(img)
      card.appendChild(main)
      main.appendChild(title)
      main.appendChild(category)
      main.appendChild(productPrice)
  
    }else if(produto.category == 'Higiene'){

      higiene.appendChild(ul)
      ul.appendChild(card)
      card.appendChild(img)
      card.appendChild(main)
      main.appendChild(title)
      main.appendChild(category)
      main.appendChild(productPrice)
    }
   
    card.classList.add('product')
    img.classList.add('product-img')
    main.classList.add('product-main')
    title.classList.add('product-title')
    category.classList.add('product-category')
    productPrice.classList.add('product-price')

    return card
}

function listarProdutos(listaProdutos){
  for(let i = 0; i < listaProdutos.length; i++){

    let produto = listaProdutos[i]
    let cardProduto = criarProduto(produto)
  }
}

listarProdutos(products)