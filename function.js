function saveInput() {

    
    let inputValue = document.getElementById("textInput").value;

    const greetingText = document.getElementById("greetingText");
    const powerStory = `Once upon a time there was a guy, named ${inputValue}. He came here to find unlimited power in exchange for his immortal soul. The guy sitting behind the wall told him to get the fuck out of here. And he left with his stupid immortal soul and with no great and mighty unlimited power. What a waste. Poor ${inputValue}. I'm glad I'm not, like, his relative or something.`
    const reason = ["Because you are fat.", "Because U r faget.", "Go away or I'll call the police.", "The permission you need is somewhere over the rainbow. Go and get it.", "If you come again I'm gonna have to ask you to leave.", "Come again.", "Don't come again.", "Collect your monatki and went away on dick.", powerStory];
    const randomReason = reason[Math.floor(Math.random() * reason.length)];

    greetingText.innerText = "Hi, " + inputValue + ". You don't have permisson. " + randomReason;

}