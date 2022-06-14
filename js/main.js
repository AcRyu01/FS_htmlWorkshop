const listItems = [
  {
    title: "Beautiful Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#",
  },
  {
    title: "Wonderful Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#",
  },
  {
    title: "Fantastic Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#",
  },
  {
    title: "Amazing Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#",
  },
  {
    title: "Stylish Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#",
  },
  {
    title: "Modern Kitchen",
    text: "Lorem ipsum dolor sit amet marlan consectetur adipiscing elit.",
    image: "images/kitchen.jpg",
    link: "#",
  },
];

let innerHTML = "";
listItems.forEach((item) => {
  console.log("IN");
  innerHTML += `
    <div class="item shadow-lg transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
        <img src="images/kitchen.jpg" alt="" class="rounded-lg">
        <h3 class="text-2xl text-blue-400 pt-4 pb-1 text-center">${item.title}</h3>
        <p class="text-md px-12  text-center">Lorem ipsum dolor sit amet marlan consectetur adipiscing elit Lorem. </p> 
        <div class="flex justify-center mb-4">
          <button class="mt-4 px-10 py-2 text-blue-500 hover:text-blue-600 bg-white font-semibold border border-blue-500 hover:border-blue-600 rounded-3xl shadow ">View Home</button>
        </div>
    </div>
    `;
});

const display = document.getElementById("template-output");
display.innerHTML = innerHTML;
