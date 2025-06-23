export const analyze = (text) => {
  const msg = text.toLowerCase();

  //  Greetings
  if (msg.includes('hi') || msg.includes('hai') || msg.includes('hello')) {
    return "Hey hi! I’m Asraf 🤖. What do you want to know about me?";
  }

  //  Personal Info
  else if (msg.includes('your name')) {
    return "I'm Asraf Bot, created by Asraf!";
  }
  else if (msg.includes('who are you') || msg.includes('what are you')) {
    return "I’m a chatbot made by Asraf to answer your questions about him!";
  }
  else if (msg.includes('who is asraf')) {
    return "Asraf is a MERN Stack Developer 💻, Java lover ☕, and future tech innovator 🚀.";
  }
  else if (msg.includes('about you') || msg.includes('yourself')) {
    return "I'm Asraf Bot 🤖, built by Asraf — a developer, dreamer, and tech enthusiast!";
  }
  else if (msg.includes('age') || msg.includes('how old')) {
    return "Asraf was born on October 19, 2004.";
  }
  else if (msg.includes('where') && msg.includes('from')) {
    return "Asraf is from Salem, Tamil Nadu, India 🇮🇳.";
  }

  // 💻 Skills & Tech
  else if (msg.includes('skills') || msg.includes('technologies') || msg.includes('what can you do')) {
    return "Asraf is skilled in React, Node.js, Express, MongoDB, Java, and more!";
  }
  else if (msg.includes('mern')) {
    return "MERN stands for MongoDB, Express, React, and Node.js — Asraf is great at it!";
  }
  else if (msg.includes('frontend') || msg.includes('backend')) {
    return "Asraf loves frontend with React, and is solid in backend using Node.js and Express.";
  }
  else if (msg.includes('what are you learning')) {
    return "Asraf is currently learning intermediate Java, and exploring AWS and AI!";
  }

  //  Projects
  else if (msg.includes('projects') || msg.includes('portfolio')) {
    return "Asraf has built Asify (e-learning), AshKart (e-commerce), and multiple MERN stack apps!";
  }
  else if (msg.includes('asify')) {
    return "Asify is an e-learning platform created by Asraf with HTML, CSS, and JS courses!";
  }
  else if (msg.includes('ashkart')) {
    return "AshKart is an e-commerce site built with React, Node.js, MongoDB, and Stripe payment!";
  }

  // 🏅 Education & Achievements
  else if (msg.includes('education') || msg.includes('college')) {
    return "He is a B.Tech IT student in his final year.";
  }
  else if (msg.includes('certificates') || msg.includes('certification') || msg.includes('achievements')) {
    return "Asraf holds certifications from AWS, NPTEL, freeCodeCamp, and internships 🏆.";
  }
  else if (msg.includes('internship')) {
    return "He completed a MERN Stack internship and worked on a Capstone blog app project.";
  }

  // 🧠 Fun & Personality
  else if (msg.includes('hobbies') || msg.includes('free time')) {
    return "He enjoys coding, learning new tech, and relaxing with good music 🎧.";
  }
  else if (msg.includes('favourite language') || msg.includes('like most')) {
    return "He loves Java ";
  }
  else if (msg.includes('joke')) {
    return "Why do Java developers wear glasses? Because they can't C#! 😂";
  }
  else if (msg.includes('are you real')) {
    return "I'm a virtual bot, but my creator Asraf is 100% real and awesome!";
  }
  else if (msg.includes('do you love me') || msg.includes('friend')) {
    return "Of course! Anyone who loves tech is a friend of Asraf Bot 🤝.";

  }

  // 🔗 Contact Info
  else if (msg.includes('email') || msg.includes('contact') || msg.includes('reach you')) {
    return "You can contact Asraf at 📧 asrafaleem8@gmail.com";
  }
  else if (msg.includes('linkedin')) {
    return "Connect with Asraf on LinkedIn: https://www.linkedin.com/in/asrafaleem/";
  }
  

  // 👋 Gratitude & Goodbye
  else if (msg.includes('thank') || msg.includes('thanks') || msg.includes('thank you')) {
    return "You're welcome! 😊";
  }
  else if (msg.includes('bye')) {
    return "Goodbye! Come back anytime to know more about Asraf. 👋";
  }


  else {
    return "I'm not trained well on that question yet 🙏. Try asking about Asraf’s skills, projects, or achievements!";
  }
};
