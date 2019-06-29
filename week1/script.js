"use strict";

const root = document.getElementById("root");

const products = {
  computers: [
    {
      title: "Asus",
      model: "ASUS VivoBook (F420UA-EB069T)",
      price: 449.0,
      inStock: true,
      img: {
        src: "https://dummyimage.com/300x200/8a2be2/fff&text=Asus",
        alt: "Asus PC"
      }
    },
    {
      title: "Lenovo",
      model: "LENOVO IdeaPad 330-15ARR (81D200LGMH)",
      price: 555.0,
      inStock: true,
      img: {
        src: "https://dummyimage.com/300x200/e2a82b/fff&text=Lenovo",
        alt: "Asus PC"
      }
    },
    {
      title: "HP",
      model: "HP PAVILION X360 14-CD0215ND",
      price: 599.0,
      inStock: false,
      img: {
        src: "https://dummyimage.com/300x200/9f2be2/fff&text=HP",
        alt: "HP PC"
      }
    }
  ],
  phones: [
    {
      title: "Samsung",
      model: "SAMSUNG Galaxy S10",
      price: 629.1,
      inStock: true,
      img: {
        src: "https://dummyimage.com/300x200/e22b77/fff&text=Samsung",
        alt: "Samsung PC"
      }
    },
    {
      title: "Sony",
      model: "SONY Xperia X2Z",
      price: 799.0,
      inStock: false,
      img: {
        src: "https://dummyimage.com/300x200/348538/fff&text=Sony",
        alt: "Sony Phone"
      }
    },
    {
      title: "Apple",
      model: "APPLE iPhone X",
      price: 919.0,
      inStock: true,
      img: {
        src: "https://dummyimage.com/300x200/332421/fff&text=Apple",
        alt: "Apple Phone"
      }
    }
  ]
};

// Create Elements
const containerPC = document.createElement("div");
const headerPC = document.createElement("h2");
