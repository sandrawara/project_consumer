// Function to fetch work from JSON
function get_work() {
    fetch ('http://sandrawara.se/portfolio/api/post/read_single.php?table=work')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2>Work</h2>`;

            // Loop
            data.forEach((post)=> {
                output +=`
                <div id= "w-output">
                        <ul>
                            <li> ${post.place}</li>
                            <li> ${post.title}</li>
                            <li> ${post.description}</li>
                            <li> ${post.start_date}</li>
                            <li> ${post.end_date}</li>
                        </ul>
                </div>
                `;
            })
            document.getElementById('w-output').innerHTML = output;
        })
    
}

get_work(); // Call function

// Function to fetch work from JSON
function get_education() {
    fetch ('http://sandrawara.se/portfolio/api/post/read_single.php?table=education')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2>Education</h2>`;

            // Loop
            data.forEach((post)=> {
                output +=`
                <div id= "e-output">
                        <ul>
                            <li> ${post.place}</li>
                            <li> ${post.title}</li>
                            <li> ${post.description}</li>
                            <li> ${post.start_date}</li>
                            <li> ${post.end_date}</li>
                        </ul>
                </div>
                `;
            })
            document.getElementById('e-output').innerHTML = output;
        })
    
}

get_education(); // Call function

// Function to fetch work from JSON
function get_weblinks() {
    fetch ('http://sandrawara.se/portfolio/api/post/read_single.php?table=web_pages')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2>Web pages</h2>`;

            // Loop
            data.forEach((post)=> {
                output +=`
                <div id= "wb-output">
                        <ul>
                            <li> ${post.place}</li>
                            <li> ${post.title}</li>
                            <li> ${post.description}</li>
                            <li> ${post.start_date}</li>
                            <li> ${post.end_date}</li>
                        </ul>
                </div>
                `;
            })
            document.getElementById('wb-output').innerHTML = output;
        })
    
}

get_weblinks(); // Call function



// Function that post and get the id and convert to JSON
function post_work() { 
    place = document.getElementById('place').value;
    title = document.getElementById('title').value;
    description = document.getElementById('description').value;
    start_date = document.getElementById('start_date').value;
    end_date = document.getElementById('end_date').value;
 
    let info = JSON.stringify(
        {
        "place": place,
        "title": title,
        "description": description,
        "start_date": start_date,
        "end_date": end_date

        }
    );

    let getData = {
        method: 'POST',
        body: info
    }
    fetch('', getData);

    get_work('http://sandrawara.se/portfolio/api/create.php'); // Call function and post new data

}
