const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const itemGallery = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></img></li>`)
  .join("");

const elListGallery = document.querySelector(".gallery");

elListGallery.insertAdjacentHTML("afterbegin", itemGallery);

// const listOfItems = images.map((image) => {
//   const itemGallery = document.createElement("li");

//   const galleryImage = document.createElement("img");

//   galleryImage.url = image.url;
//   galleryImage.alt = image.alt;

//   // itemGallery.appendChild(galleryImage);

//   return itemGallery;
// });

// elListGallery.append(...listOfItems);
