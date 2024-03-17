document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (
    (e.ctrlKey && e.shiftKey && e.code === "I") || // Ctrl+Shift+I
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.code === "J") || // Ctrl+J (Chrome console)
    (e.ctrlKey && e.shiftKey && e.code === "J") // Ctrl+Shift+J (DevTools)
  ) {
    e.preventDefault();
  }
  // Add similar checks for F12, Ctrl+Shift+J, etc.
};

const wordInput = document.getElementById("wordInput");
const definition = document.getElementById("definition");

function lookupWord() {
  const searchWord = wordInput.value.toLowerCase().trim().replace(/\s/g, ""); // Ensure case-insensitive search and remove leading/trailing spaces

  if (!searchWord) {
    definition.textContent =
      "Hey enter your full name or nickname that you and me alone know🌈🌈";
    return;
  }

  // Replace this with your actual dictionary data structure or API implementation
  const dictionary = {
    monisha:
      "I never thought I would find such a junior in this trash skasc..! You are one of the best juniors I have ever seen, I hope you find happiness and knowledge here in skasc soon, be happy dude I am always there to help you out..! Call me any time.., okay..!😊",
    hello:
      "Hello, This is Robert Antony Guys, This is a simple web app to express my thoughts which I wasn't able to convey to you guys my situation.",

    vigas:
      "The most important person I am going to miss in my life is you buddy, I have no idea how we got connected from the first, but never connected to anyone like you. Sharing all the awards and days with you is the best, and our conversation about life is the best. I learned a lot of lessons from you, I have no idea, how these 3 years ended so soon. I always thought we could share our career but, It wasn't possible in this college, If something happens in the future, I will be so delighted, I love you a lot buddy, and Don't forget to update anything that happens in your life, I am always there for you to support.😊 Thanks for everything, You have done many more things for which the word 'Thanks' isn't enough.",
    darshana:
      "The most perfect person I have ever seen in my life, It was a great experience to share my college days with and liked the late-night calls, work, projects and chat. I have no words to explain about the perfect. I am really happy to start my career with you. I am happy that I have two good friends in my professional life in the future, you are one of them. You have supported me and many people in college, and I have to thank you for that. I wouldn't have completed my records in time without you. I am very excited to share future days with you buddy.😊 Thanks for everything on behalf of me and everyone.",
    tharini:
      "The best friendship I have made in my college life is you akka, you have an irreplaceable bond with me. I have never thought I would find this great bond in my college life, I am really happy that I shared my SIH with you learned a lot, and had a great time with you every day with you sis. I will miss you a lot in the future. Thanks for giving me a great friend Karthika. I am always there to support you akka, anytime anywhere.😄😄. Thanks for everything akka.",
    karthika:
      "You are the next best person I got in my college, you have an irreplaceable bond you too sis. I still feel for getting your opportunity for SIH. I hope you too get the same experience we had in SIH next year. You can call me anytime for any help, I was there to help you with all my potential. I wanted you to develop your skills and get a real job. Enjoy your college life and be happy with your friends and, don't forget to call me anytime as a brother I am there to help.😊😊🌈",
    world: "The planet Earth and its inhabitants.",
    kuttysathan:
      "Hey Gopika, Thanks for being a good friend to me in this college life and I am sorry for teasing you a lot, I am sorry for that. And stay in touch with me, and I am always there to help you guys. And I hope your friendship in college follows after college too.😊😊🌈",
    gopika: "Hey gopika, type how do I call you..!",
    superman:
      "Hey Kiruthika, You were also a great friend to me in college, and you never forgot to torture me in all the way possible, but still you never gave up on me and so did I. I never thought we would be friends like this in the first year, but it happened. I am happy to have a friend like you. I am always there to help you anytime and anywhere. And unnoda marriage ku na confirm varuvan, so don't forget to invite me, And don't cry in future, if you have any problem just call me okay!.😊😊🌈",
    kiruthika: "Hey Kiruthika, epdi aa una na kupuduvan..?",
    shaahin: "Hey ma..! Enter the name only we two know..!",
    twin: "Hey Shaahin, You are the best friend I got in college, I never thought that I could find someone like this to connect with me and share my thoughts. I am really happy that we met in college and had a really good friendship. I am always there to help you anytime and anywhere. I hope our friendship continues after college too. You can call me anytime to annoy me. I will be a great friend to you in all the possible. Keep me updated all-time and I will be there to help. And a small comment (I get possessive on you sometimes, but till now I am fine.. Sorry I wasn't able to tell you this in person) 😊😊🌈",
    aravinthsuryaa:
      "Hey Suryaa, You taught me games and stuff like downloading movies, games and courses which helped me lot. And I happy that I have a friend who is different from others. Enjoy your future studies buddy, keep me updated and I am always there to help😊😊 ",
    balaprethiv:
      "Dai bala, I have never seen such an ADHD person in my whole life. And every day class became happy because of you. Thanks for being a member of the hackathon and the activities we have done together. And aborad poviyanu confirm thrila, pona sollu. As always be funny and enjoy buddy.🌈",
    dharineesh:
      "Hey buddy, Nee last vairukum ponuga kita persakudathu, atha tha ennode aasai, but still oru ponna mattum love pannu, if incase love panna soollu yennala enna pana mudiyumo ma pannuvan, help aa sonna. And had a great time sharing memories with you bro. And video editing and Memes aa vituratha pangu..!😊",
    gopinaath:
      "Hello Gopi, Learned a lot of lessons and characters for you buddy. And you are the most proper boy I have ever met in this college life. Future la ennga ponalum you can call me and I will help you with all the possible way. Thanks for all the help you made in this college life bro..!😊",
    tablet:
      "Hey jeeva shree., This is Robert a brother-like friend, I never thought we could be this close friend but somehow now we have a great bond.  You are the only friend who I can call a sister, I was there when you had a hard time, Same like that I will be helping you all the time you can call me and feel free to share, I am always there to support you..!😊😊",
    karthik:
      "Dai Karthik.., epdiyo etha 3-year SKASC la cross pannita, ethuku appro Feberal bank la jolly aa iruka pora, but don't forget me, buddy, Anytime you can make a call, and unoda laziness aa kami panniko.. You got my support all the time bro., Stay happy okay..!😊😊",
    keerthanah:
      "Hello buddy, We never talked much but still you were a good friend to me. Be happy and stay in touch.😊",
    nandana:
      "Hello Nandana, We never talked much and I never understood what you were trying to tell me, but still I am amazed by your talent o in drawing and handwriting. I hope you shine in the future and be happy.😊",
    maheshraj:
      "Hey Mahesh raj..! I enjoyed your company in the room and the fun we had together. I want to appreciate your for the focus you had on gym and exercise. Never seen a guy who had this much focus in the gym and was devoted to that. Keep me updated bro., even after college okay buddy..!😊",
    niranjani:
      "Hey Niranjani, enter the name, how do I save your contact in my phone..!",
    mayonnaise:
      "Hey first I am sorry for teasing you recently, don't take it personally and I am sorry for talking like an idiot to you guys. Still you a friend to me, and stay happy😊😊.!",
    pradeep:
      "Hello Mr.Pradeep, You were a great friend to me. I am happy to have a friend like you. And nee etha help aa iruthalum call pannu bro I am always there to help you. And I hope you get a good job in the future and be happy. Keep me updated buddy..!😊",
    saisakthicharan:
      "Hey Sai, You are the stupidest person and a great friend to me, you helped me a lot in college and without you sure there is no fun in our class. Hope you join a good and be happy in life, stay in touch and keep me updated.😊.!",
    rohit:
      "Hey Rohit, You are the best guy with multi-talent I have ever seen. And I am still a fan of your dance. I learned a lot from your attitude and the way you handle things. I hope you follow your dreams in the future. Stay in touch buddy..!😊 ",
    sandhiya: "Hey Sandhiya, unoda nickname aa type panni paru..!",
    sundappalayaam:
      "Hey Ms. Sandhiya, Recently you became a great friend to me. I have no idea how it happened, but still, I am happy to have a friend like you. I hope this bond lasts forever. Call me anytime to have a chit-chat even if it is midnight. I will never forget the ideathon we participated in and many more incidents. Keep me updated and stay in touch dude..!😊",
    sathishkummar:
      "Hello Mahaprabhu..! Una marriya oru different aana friend aa na pathathu ila, but nee special and mass bro, I am happy to share my days and time with you in college, future la nee priya business owner aa irukanum. Eppovanlum nee call pannu bro na irukan help pana..! okay stay in touch bro..!😊",
    selvaganapathi:
      "Hello mams, From the first year to the final year, we were together, had a lot of fun and shared a lot of memories. But still, we have a long path together in the future in the workplace too. You are also a good friend, I won't forget you..!😊  Future la job and work epdi irukunu oona papom mams, take care broo..!😊😊🌈",
    selvavignesh:
      "Hello bro.! You were a good friend to me.! and I am impressed by your dedication and hard work. I hope you have a great future and be happy. Always stay in touch with me buddy even if you go abroad..! okay..!😊",
    sethuraj:
      "Hello Sethu..! Neeyum Suryaa um tha games epdi download pannrathu and gaming pathi solli kuduthathu and thanks for that. And never believe suryaa in any cause, okay ..! Have a great future journey bro..!😊",
    shivaneshkumar:
      "Dai shivanesh unoda name aa na epdi save pannirukano atha name a type pannu..!",
    cringe:
      "Dai Cringe., nee ilana class avolo fun aa irukathu, and you are good person bro.! Stay in touch okay..!😊",
    sivaprakash:
      "Hello Siva, You always been the best and sway guy in our class, and I am happy to have a friend like you. Neeyum Bala combimation tha etha three year class fun iruthuchu. And you never gave up on something like etha project work..! So I was happy to have a great friend like you buddy, Have a great future, Stay in touch..!😊",
    sneha:
      "Hey Sneha,  We never talked much but still you were a good friend to me. Be happy and stay in touch.😊",
    arulhepzibeulah: "Hello Akka, ungaluku moli sir vicha name aa enter panuga",
    faceoftheteam:
      "Hello Hepzi akka, It was a great experience for me to travel and participate in SIH with you, I will never forget that experience. I hope you have a great future and be happy. Try to stay in touch and share any technology you come across  okay..!😊",
    jayasurya:
      "Hey Jayasurya akka, Unga counter and comedies na miss panran akka, and I will never forget the fun you we had with moli and raji akka., I am glad that I shared my SIH experience with you guys..! Stay in touch akka..!😊",
    rajashree:
      "Hey Raji akka, It was really a great experience for me to travel and participate in SIH with you. And I will miss our team so much..! Stay in touch akka..! 😊",
    subiksha:
      "Hey Subiksha sis, from the first day I can't forget the fun and learning we had, happy that I got the opportunity to participate in sih with you guys. I hope you have a great future and be happy. Try to stay in touch and share any technology you come across  okay..!😊",
    mohamedali: "Bro unga name ooda short form aa type pannuga..!",
    moli: "Hey Bro.., You have no idea how much I respect you, You are my inspiration and I am really happy that I was able to participate in SIH with you and learned a lot of lessons and technology from you. I hope we stay in touch and develop a lot. Surely you are my inspiration and thanks for creating such a beautiful memory by this SIH trip..!😊",
    alfiya:
      "Hey Alfiya, I am happy we are friends, I have known you from the second year a lot, but we became friends in the third year. I wasn't spying, it is because you were that famous. So I hope you have a great future in the way you like and Thank you for all the help you did to me. I will miss you in future, so stay in touch okay..! I am always there to help anytime, anywhere..!🌈😊",
    zahara:
      "Hey Zahara, I never thought we would be friends but I am happy that now we are good friends. You really admired me, because you have the idea to develop your father's business, I hope that goes well in the future. Stay in touch and I am always there to help you out, so be happy..!😊",
    aswathi:
      "Hello Aswathi akka, I miss the guitar class days, and now I have to go to a job and I think won't to able to learn and play guitar again. And I will never forget you sis, I have never felt connected to someone like you on the exam day. I even had a crush on you🤫 (sister-crush), I hope you have a great future and be happy. Stay in touch akka..!🌈🌈😊 ",
    lavanya:
      "Hey Lavanya, I am a great fan of your song and I hope you will learn guitar. Hope you have a great future in the way you like. And a Secret message and not get me wrong for this, (I had a secret crush on you, from 2nd year) Don't take it seriously, I hope you have a great future and be happy. Stay in touch okay..!😊",
    vedika:
      "Hey Vedika, You were a great friend to me, and sharing thoughts with you was pleasant and great dude. I hope you have a great future and be happy. Stay in touch okay..!😊",
    vashanthakumar:
      "Dai Vashatha kumar erruma, nee epdiyum phone panna matan, una friend nu solla mudiyala, but paravala , neeyum oru nala friend tha ennaku, mariyathu weekly once aachu call panra seri okay..!😊",
    sonika:
      "Hey Sonika, I never imagined we would be in a situation, Never thought we would be friends when we were in school. But what happened is happened, I am happy about the bond we have, I never expect anything from anyone, but from you, I expect you to tell me if you have anything to say, That's all I ever want. So be happy and take care, I am there to help you anytime, anywhere..!😊",
    ashish:
      "Hey Ashish, I can't tell you about in text, never possible, so call me and get your comment okay..!😊",
  };
  if (dictionary.hasOwnProperty(searchWord)) {
    definition.textContent = dictionary[searchWord];
  } else {
    definition.textContent =
      "Hey sorry dude, If you don't find your special comment, I might have forgotten to add, sorry for that, Can you pls drop a message using the form below so that I can add your special content to this page..!😊😊🌈";
  }
}
