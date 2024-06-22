function shout(string){
    return string.toUpperCase();
  }
  (shout("hello"));

  function whisper(string){
    return string.toLowerCase();
  }
 (whisper("HELLO"));
 function logShout(string) {
  console.log(string.toUpperCase())
}
(logShout("hello"));

function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper(("hello"));

function sayHiToHeadphonedRoommate(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }

 if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  if (string === "Let's have dinner together!") {
    return "I would love to!"
  }
}


