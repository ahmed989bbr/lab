// عناصر البطاقات
let products = [
    {
      name: "اسم المنتج 1",
      image: "1.jpg",
      price: 50,
      quantity: 10
    },
    {
      name: "اسم المنتج 2",
      image: "1.jpg",
      price: 75,
      quantity: 5
    },
    {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      },
      {
        name: "اسم المنتج 1",
        image: "1.jpg",
        price: 50,
        quantity: 10
      },
      {
        name: "اسم المنتج 2",
        image: "1.jpg",
        price: 75,
        quantity: 5
      }, 
    // المنتجات الأخرى هنا
  ];
  
  // استرجاع البيانات المخزنة في LocalStorage إذا كانت موجودة
  const storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    products = JSON.parse(storedProducts);
  }
  
  // إنشاء البطاقات
  const cardsContainer = document.getElementById("cards-container");
  
  function createCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const image = document.createElement("img");
    image.src = product.image;
    card.appendChild(image);
  
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    card.appendChild(productName);
  
    const price = document.createElement("p");
    price.textContent = "السعر: " + product.price + " جنيه";
    card.appendChild(price);
  
    const inquiryButton = document.createElement("button");
    inquiryButton.textContent = "استعلام";
    inquiryButton.classList.add("inquiry-button");
    inquiryButton.addEventListener("click", () => {
      const whatsappNumber = "2001119894122";
      const message = encodeURIComponent(`أود الاستفسار عن المنتج: ${product.name}`);
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
      window.open(whatsappLink);
    });
    card.appendChild(inquiryButton);
  
    const quantityButton = document.createElement("button");
    quantityButton.textContent = "عرض الكمية المتاحة";
    quantityButton.classList.add("quantity-button");
    quantityButton.addEventListener("click", () => {
      alert("الكمية المتاحة: " + product.quantity);
    });
    card.appendChild(quantityButton);
  
    cardsContainer.appendChild(card);
  }
  
  function renderCards() {
    cardsContainer.innerHTML = "";
  
    products.forEach(product => {
      createCard(product);
    });
  }
  
  renderCards();
  
  function addProduct(event) {
    event.preventDefault();
  
    const productNameInput = document.getElementById("product-name");
    const productImageInput = document.getElementById("product-image");
    const productPriceInput = document.getElementById("product-price");
    const productQuantityInput = document.getElementById("product-quantity");
  
    const newProduct = {
      name: productNameInput.value,
      image: "1.jpg",
      price: Number(productPriceInput.value),
      quantity: Number(productQuantityInput.value)
    };
  
    products.push(newProduct);
  
    // يمكنك استخدام localStorage أو قاعدة بيانات أخرى لتخزين البيانات
    localStorage.setItem("products", JSON.stringify(products));
  
    createCard(newProduct);
  
    productNameInput.value = "";
    productImageInput.value = "";
    productPriceInput.value = "";
    productQuantityInput.value = "";
  }
  