const AdviceNo = document.getElementById('adviceNo')
const Quote = document.getElementById('quote')
const Btn = document.getElementById('btn')


const fetchAdvice = async () => {
    const data = await fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        return data;
    })
    .catch((error) =>{
        console.log(error)
    })
    Quote.textContent= data.slip.advice
    AdviceNo.textContent = data.slip.id
}

    Btn.addEventListener("click", function(){
        fetchAdvice()
        
    })