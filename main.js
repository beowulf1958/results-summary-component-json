var total = 0;

        // fetch data from jason file
        fetch('data.json')
        .then(res =>{
            return res.json();
        })
        .then(data => {
        console.log(data);
        data.forEach(score => {
            const markup = `<li class="text-lg flex justify-between ${score.txt} ${score.bg} mb-3 px-4 py-2 w-[300px] rounded-xl ">
                            <div class="flex items-center gap-3">
                                <img src="${score.icon}"/> ${score.category}</div>
                            <div class="text-gray-400">
                                <span class="text-black"> ${score.score}</span>/100 
                            </div>
                            </li>`;
            total = total + score.score;  
            console.log(total);
            document.querySelector('ul').insertAdjacentHTML("beforeend", markup);

        // calculate the average
            let avg = (Math.round(total/data.length));
            console.log(avg);

        // Get a reference to the HTML element
            const displayElement = document.getElementById("output");

        // Update the content of the HTML element
            displayElement.innerHTML = avg;
        });
        })
        .catch(error => console.log('error'));