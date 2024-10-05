const container = document.querySelector('.container');
const userResult = document.querySelector('.user-result img');
const cpuResult = document.querySelector('.cpu-result img');
const result = document.querySelector('.result');
const optionImage = document.querySelectorAll('.option-image');

optionImage.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        optionImage.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });
        
        let imageSrc = e.target.src;
        userResult.src = imageSrc;
        
        let randomNumber = Math.floor(Math.random()*3);

        let cpuImage = ["Image/rock.png", "Image/paper.png", "Image/scissors.png"];

        cpuResult.src = cpuImage[randomNumber];

        let cpuValue = ["R", "P", "S"][randomNumber];

        let userValue = ["R", "P", "S"][index];

        let outcomes = {
            RR: "Draw",
            RP: "Bot",
            RS: "You",
            PP: "Draw",
            PR: "You",
            PS: "Bot",
            SS: "Draw",
            SR: "Bot",
            SP: "You"
        };

        let outcomeValue = outcomes[userValue + cpuValue];

        result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won! !`;
        console.log(outcomeValue);
    });
});
