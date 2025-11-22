const people = [
  {
    fullName: "Aarav Mehta",
    image: "https://plus.unsplash.com/premium_photo-1664300274417-350ae1a691b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    profession: "Frontend Developer",
    description: "A passionate frontend engineer, loves creating smooth UI experiences using HTML, CSS and JavaScript.",
    tags: ["JavaScript", "Frontend", "UI/UX"]
  },
  {
    fullName: "Sana Kapoor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Product Designer",
    description: "Focusing on crafting clean product designs and believes in user-centered design thinking.",
    tags: ["Design", "Figma", "UX", "Wireframes"]
  },
  {
    fullName: "Rohan Verma",
    image: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    profession: "Software Engineer",
    description: "Working on scalable backend systems and enjoying solving complex architectural problems.",
    tags: ["Backend", "Node.js", "System Design", "API"]
  },
  {
    fullName: "Maya Singh",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    profession: "Digital Marketer",
    description: "Specialized in SEO, branding and digital campaigns that help businesses grow organically.",
    tags: ["Marketing", "SEO", "Branding", "Analytics"]
  },
  {
    fullName: "Kabir Malhotra",
    image: "https://plus.unsplash.com/premium_photo-1658506732542-fab3b94279a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
    profession: "Content Creator",
    description: "Technology-focused content creator and teaching people how to get better at coding.",
    tags: ["Content", "Tech", "Education", "Creator"]
  },
  {
    fullName: "Ishika Rao",
    image: "https://media.istockphoto.com/id/1800607111/photo/close-up-of-a-girl-in-glasses-with-a-beautiful-make-up-in-a-fur-coat-that-looks-at-the-camera.webp?a=1&s=612x612&w=0&k=20&c=nGSvGcwj4MmtG6RApjafiXp-FzaJZIv53oDCK_p2xWw=",
    profession: "UI/UX Researcher",
    description: "Researching user behavior,and helping teams build intuitive, user-friendly products.",
    tags: ["Research", "UX", "User Testing", "Prototyping"]
 }
];

let sum = "";

people.forEach((elem) => {
    sum += `<div class="card">
            <img src="${elem.image}" alt="${elem.fullName}">
            <div class="info">
            <h2>${elem.fullName}</h2>
            <h3>${elem.profession}</h3>
            </div>
            <div class="about">
             <p>${elem.description}</p>
             </div>
            <p class="tags">${elem.tags}</p>
            <div class="btns">
            <button class="message">Message</button>
            <button class="connect">Follow</button>
            </div>
        </div> 
        `
})

let main = document.querySelector("main");
main.innerHTML = sum;

let cards = document.querySelectorAll(".card");
let connection = document.querySelectorAll(".connect");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.scale = 0.95;
  });

  card.addEventListener("mouseleave", () => {
    card.style.scale = 1;
  });
});

connection.forEach(connect => {
  connect.addEventListener("click", () => {
    if(connect.innerHTML === "Follow"){
      connect.innerText = "Unfollow";
    } else {
        connect.innerText = "Follow";
      }
  });
});