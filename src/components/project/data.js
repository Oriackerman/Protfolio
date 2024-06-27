import { v4 as uuidv4 } from "uuid";

const data = [
  {
    _id: uuidv4(),
    name: "Friends To Meet",
    imageUrls: [
      "https://i.postimg.cc/Y92PFbX6/friendstomee-222.jpg",
      "https://i.postimg.cc/0N03rLC5/friends-to-meet.png",
    ],
    shortDescription:
      "An application for meeting new people and creating new friendships based on shared interests. The purpose of the project is to make it easier for people to form new connections and develop new friendships. Users register for the application, select their interests, and then are automatically matched based on these shared topics, thereby opening a chat where they can communicate.",
    technology: "Java, AndroidStudio, Firebase, XML, MVC.",
  },
  {
    _id: uuidv4(),
    name: "Football Project",
    imageUrls: [
      "https://i.postimg.cc/zDxrxRKD/footballproject1.png",
      "https://i.postimg.cc/jjY0D60c/footballproject2.png",
      "https://i.postimg.cc/5NjMTNSB/insert.png",
      "https://i.postimg.cc/dVycQHXD/projectfootball.png",
      "https://i.postimg.cc/BQyG09md/team23.png",
    ],
    shortDescription:
      "A football player contract management project, with the ability to add a player's contract to a team, remove it, and even update the team's details and view the details of the players who have a contract with the same team. The project is designed to streamline and plan the contracts of players with football teams.",
    technology: "C#, MongoDB, WinForm.",
  },
  {
    _id: uuidv4(),
    name: "Pcman",
    imageUrls: ["https://i.postimg.cc/JhHN2JGf/screens-tv-pcman233.png"],
    shortDescription:
      "A website for a client that was built using WordPress, incorporating PHP and CF7, while adhering to a tight schedule and paying attention to small details. This is a corporate website for a business operating in the field of building management.",
    technology: "WordPress, PHP, CF7.",
  },
  {
    _id: uuidv4(),
    name: "am-kiduhim",
    imageUrls: ["https://i.postimg.cc/L8nLJfBJ/am-kiduhim-tv-screen23.png"],
    shortDescription:
      "The website is being built in the WordPress system without using templates, integrating a design from Figma. The site is constructed using only clean code in PHP, JavaScript, and jQuery, without utilizing Elementor. Attention is given to the small details and the website is optimized for mobile.",
    technology: "WordPress, PHP, CF7, ACF, JavaScript, Jquery.",
  },
];

export default data;
