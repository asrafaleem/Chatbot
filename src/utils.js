export const analyze = (text) => {
  const msg = text.toLowerCase();

  // Greetings
  if (msg.includes('hi') || msg.includes('hai') || msg.includes('hello')) {
    return "Hey there! I’m Asraf Bot 🤖 — Ask me anything about Asraf's tech journey!";
  }

  // Personal Identity
  if (msg.includes('your name')) {
    return "I'm Asraf Bot, created by Asraf himself.";
  } else if (msg.includes('who are you') || msg.includes('what are you')) {
    return "I’m a chatbot designed by Asraf to help share his journey, skills, and projects!";
  } else if (msg.includes('who is asraf')) {
    return "Asraf is a passionate MERN Stack Developer, Java programmer, and aspiring tech innovator.";
  }

  // Location & Age
  else if (msg.includes('age') || msg.includes('how old')) {
    return "Asraf was born on October 19, 2004.";
  } else if (msg.includes('where') && msg.includes('from')) {
    return "He is from Salem, Tamil Nadu, India 🇮🇳.";
  }

  // Technical Skills
  else if (msg.includes('skills') || msg.includes('technologies') || msg.includes('what can you do')) {
    return "Asraf is skilled in React, Node.js, Express.js, MongoDB, Java, JavaScript, HTML, CSS, Bootstrap, and Git.";
  } else if (msg.includes('mern')) {
    return "MERN stands for MongoDB, Express, React, and Node.js — Asraf builds full-stack applications using this stack.";
  } else if (msg.includes('frontend') || msg.includes('backend')) {
    return "He builds responsive UIs using React, and handles backend logic using Node.js with Express.";
  } else if (msg.includes('what are you learning')) {
    return "Asraf is currently mastering intermediate Java, exploring AWS services";
  } else if (msg.includes('aws')) {
    return "Asraf completed AWS Academy Cloud Foundations and more.";
  } else if (msg.includes('java')) {
    return "He is proficient in Java and currently focused on OOP, Collections, and Swing for GUI apps.";

  // Education & Certifications
  } else if (msg.includes('education') || msg.includes('college')) {
    return "Asraf is a final year B.Tech IT student.";
  } else if (msg.includes('certificates') || msg.includes('certification') || msg.includes('achievements')) {
    return "He holds certifications in AWS Cloud, Responsive Web Design, NPTEL (Cloud Computing & Software Testing), and Coursera’s Excel course.";
  } else if (msg.includes('nptel')) {
    return "He completed 4-week NPTEL courses in Cloud Computing and Software Testing with elite badges.";
  } else if (msg.includes('internship')) {
    return "He completed a MERN Stack internship, contributing to the Z-Stack blog application’s modules.";

  // Projects
  } else if (msg.includes('projects') || msg.includes('portfolio')) {
    return "Asraf has built Asify (e-learning), AshKart (e-commerce), a chatbot.";
  } else if (msg.includes('asify')) {
    return "Asify is an e-learning platform developed by Asraf with HTML, CSS, JavaScript courses — entirely self-built.";
  } else if (msg.includes('ashkart')) {
    return "AshKart is an e-commerce site made using React, Node.js, Express, MongoDB, and Stripe integration.";
  } else if (msg.includes('chatbot')) {
    return "This chatbot is built using React, Bootstrap, and custom logic to respond with Asraf's technical background.";
  } 

  // Contact Info
   else if (msg.includes('email') || msg.includes('contact') || msg.includes('reach you')) {
    return "You can reach Asraf at 📧 asrafaleem8@gmail.com";
  } else if (msg.includes('linkedin')) {
    return "Here’s Asraf’s LinkedIn: https://www.linkedin.com/in/asrafaleem/";

  // Misc
  } else if (msg.includes('favourite language') || msg.includes('like most')) {
    return "Java is Asraf's favorite language — object-oriented and powerful!";
  } else if (msg.includes('hobbies') || msg.includes('free time')) {
    return "Asraf enjoys solving coding problems, building projects, and learning new technologies.";

  // Gratitude & Exit
  } else if (msg.includes('thank') || msg.includes('thanks') || msg.includes('thank you')) {
    return "You're most welcome! 🚀";
  } else if (msg.includes('bye')) {
    return "Bye! Ask me anything next time about Asraf’s tech path. 👋";

  // Fallback
  } else {
    return "I haven’t learned how to respond to that yet 🙏. Try asking about Asraf’s skills, certifications, or projects.";
  }
};

