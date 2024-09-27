
const display = document.getElementById('display');

const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (!isNaN(value) || ['+', '-', '*', '/'].includes(value)) {
            display.innerText += value;
        } 
        
        if (value === 'Clear') {
            display.innerText = '';
        }

        if (value === 'C') {
            display.innerText = display.innerText.slice(0, -1); 
        }

        if (value === '=') {
            try {
                display.innerText = eval(display.innerText);

                if (display.innerText === '143') {
                    display.innerText = "I miss her";
                }

                else if (display.innerText === '666') {
                    window.open("https://www.pornhub.com/");
                }

                else if (display.innerText === '69') {
                    window.open("https://www.beeg.com/");
                }

            } catch {
                display.innerText = 'Error'; 
            }
        }

        if (display.innerText === '09-22-2006') {
            alert("My fav song");
            window.open("https://www.youtube.com/watch?v=VyPwEZTIpVc&list=RDMMVyPwEZTIpVc&start_radio=1");
        }

    });
});
