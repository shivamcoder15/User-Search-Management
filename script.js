let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑 | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens ☁️ | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diva bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don't text, just vibe 🌑 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://lastfm.freetls.fastly.net/i/u/ar0/f5af646254e1bbf0f48c662315785288.jpg",
    bio: "aesthetic overload 🖤 | livin' in lowercase",
  },
  {
    name: "aarav malhotra",
    pic: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "chasing sunsets and better days 🌅 | stay curious",
  },
  {
    name: "zoya kapoor",
    pic: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "lost in good music 🎧 | finding my own way",
  },
  {
    name: "reyansh bhatt",
    pic: "https://randomuser.me/api/portraits/men/13.jpg",
    bio: "coffee first, everything later ☕ | lowkey living",
  },
  {
    name: "anaya deshmukh",
    pic: "https://randomuser.me/api/portraits/women/14.jpg",
    bio: "creating memories, not excuses ✨ | dreamer",
  },
  {
    name: "vihaan saxena",
    pic: "https://randomuser.me/api/portraits/men/15.jpg",
    bio: "less perfection, more authenticity 🖤 | just vibing",
  },
  {
    name: "myra singhania",
    pic: "https://randomuser.me/api/portraits/women/16.jpg",
    bio: "sunshine mixed with a little chaos 🌻 | be kind",
  },
  {
    name: "aditya chauhan",
    pic: "https://randomuser.me/api/portraits/men/17.jpg",
    bio: "building dreams one day at a time 🚀 | keep moving",
  },
  {
    name: "saanvi mehra",
    pic: "https://randomuser.me/api/portraits/women/18.jpg",
    bio: "art speaks what words can't 🎨 | peaceful mind",
  },
  {
    name: "kabir shetty",
    pic: "https://randomuser.me/api/portraits/men/19.jpg",
    bio: "weekend wanderer 🌍 | stories over things",
  },
  {
    name: "riya rathod",
    pic: "https://randomuser.me/api/portraits/women/20.jpg",
    bio: "making ordinary moments memorable 🌸 | stay real",
  },
  {
    name: "arjun naik",
    pic: "https://randomuser.me/api/portraits/men/21.jpg",
    bio: "music, mountains and midnight thoughts 🎵 | explorer",
  },
  {
    name: "meera joshi",
    pic: "https://randomuser.me/api/portraits/women/22.jpg",
    bio: "collecting little joys 🌙 | heart over hype",
  },
  {
    name: "ishaan patel",
    pic: "https://randomuser.me/api/portraits/men/23.jpg",
    bio: "focused on the journey 🛣️ | no shortcuts",
  },
  {
    name: "tara kulkarni",
    pic: "https://randomuser.me/api/portraits/women/24.jpg",
    bio: "soft soul, wild dreams 🦋 | living slowly",
  },
  {
    name: "dhruv yadav",
    pic: "https://randomuser.me/api/portraits/men/25.jpg",
    bio: "keeping it simple ✌️ | always learning",
  },
  {
    name: "navya agarwal",
    pic: "https://randomuser.me/api/portraits/women/26.jpg",
    bio: "good energy only ✨ | coffee & conversations",
  },
  {
    name: "krish verma",
    pic: "https://randomuser.me/api/portraits/men/27.jpg",
    bio: "mindset over everything 🧠 | one step ahead",
  },
  {
    name: "avani trivedi",
    pic: "https://randomuser.me/api/portraits/women/28.jpg",
    bio: "finding beauty in the little things 🌷 | grateful",
  },
  {
    name: "yash vardhan",
    pic: "https://randomuser.me/api/portraits/men/29.jpg",
    bio: "born to explore 🗺️ | never settle",
  },
  {
    name: "kavya menon",
    pic: "https://randomuser.me/api/portraits/women/30.jpg",
    bio: "pages, playlists and peaceful nights 📖🎶 | introvert vibes",
  },
];


// =====================================
// DOM ELEMENTS
// =====================================

const cards = document.querySelector(".cards");
const inp = document.querySelector(".inp");


// =====================================
// SHOW USERS
// =====================================

function showUsers(arr) {

  // Clear old cards
  cards.innerHTML = "";


  // User not found
  if (arr.length === 0) {

    const notFound = document.createElement("h2");

    notFound.textContent = "User not found";

    notFound.classList.add(
      "text-white",
      "text-2xl",
      "font-semibold",
      "text-center"
    );

    cards.appendChild(notFound);

    return;
  }


  // Document Fragment
  const fragment = document.createDocumentFragment();


  // Create cards
  arr.forEach((user) => {

    // Card
    const card = document.createElement("div");
    card.classList.add("card");


    // Image
    const img = document.createElement("img");

    img.src = user.pic;
    img.alt = user.name;

    img.classList.add("bg-img");


    // Blurred layer
    const blurredLayer = document.createElement("div");

    blurredLayer.classList.add("blurred-layer");

    blurredLayer.style.backgroundImage =
      `url("${user.pic}")`;


    // Content
    const content = document.createElement("div");

    content.classList.add("content");


    // Name
    const heading = document.createElement("h3");

    heading.textContent = user.name;


    // Bio
    const para = document.createElement("p");

    para.textContent = user.bio;


    // Add content
    content.append(heading, para);


    // Add everything to card
    card.append(
      img,
      blurredLayer,
      content
    );


    // Add card to fragment
    fragment.appendChild(card);

  });


  // Add all cards at once
  cards.appendChild(fragment);
}


// =====================================
// INITIAL DISPLAY
// =====================================

showUsers(users);


// =====================================
// DEBOUNCING SEARCH
// =====================================

let timer;

inp.addEventListener("input", () => {

  // Previous timer clear
  clearTimeout(timer);


  // New timer
  timer = setTimeout(() => {

    const searchValue = inp.value
      .toLowerCase()
      .trim();


    // Filter users
    const filteredUsers = users.filter((user) => {

      return user.name
        .toLowerCase()
        .includes(searchValue);

    });


    // Display filtered users
    showUsers(filteredUsers);

  }, 300);

}); 