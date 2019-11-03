// Function to fetch work from JSON
function get_work() {
    fetch ('http://sandrawara.se/portfolio/project/read_single.php?table=work')
        .then((res) => res.json())
        .then((data) => {
            let output = ``;

            // Loop
            data.forEach((post)=> {
                output +=`

                       <div class="entry entry--left">
                                <div class="entry__content wow animated fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <h3> ${post.title}</h3>
                                    <p> ${post.place} </p>
                                    <p> ${post.description}</p>
                                </div>
                        </div>     
                
                `;
            })
            document.getElementById('w-output').innerHTML = output;
        })
    
}

// Function to fetch work from JSON
function get_education() {
    fetch ('http://sandrawara.se/portfolio/project/read_single.php?table=education')
        .then((res) => res.json())
        .then((data) => {
            let output = ``;

            // Loop
            data.forEach((post)=> {
                output +=`
                <div class="entry entry--right">
                <div class="entry__content wow animated fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <h3> ${post.title}</h3>
                    <p> ${post.place} </p>
                    <p> ${post.description}</p>
                </div>
            </div>
                `;
            })
            document.getElementById('e-output').innerHTML = output;
        })
    
}



// Function to fetch work from JSON
function get_weblinks() {
    fetch ('http://sandrawara.se/portfolio/project/read_single.php?table=web_pages')
        .then((res) => res.json())
        .then((data) => {
            let output = ``;

            // Loop
            data.forEach((post)=> {
                output +=`
                <div class="entry entry--left">
                <div class="entry__content wow animated fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                    <h3> ${post.title}</h3>
                    <a href="${post.place}">Link to web page</a>
                    <p> ${post.description}</p>
                </div>
            </div>
                `;
            })
            document.getElementById('wb-output').innerHTML = output;
        })
    
}


// ** Functions for adminpage ** //

// Function to fetch work from JSON
function get_workAdmin() {
    fetch ('http://sandrawara.se/portfolio/project/read_single.php?table=work')
        .then((res) => res.json())
        .then((data) => {
            let output = `
            <fieldset class="admin-input"> 
            <input id="type" type="text" name="type" placeholder="Type e.g. work, education or web_pages" value=""></input>  
            <input id="title" type="text" name="title" placeholder="Title" value=""></input>
            <input id="place" type="text" name="place" placeholder="Place" value=""></input>
            <input id="description" type="text" name="description" placeholder="Description" value=""></input>
            <input id="start_date" type="text" name="start_date" placeholder="Start date" value=""></input>
            <input id="end_date" type="text" name="end_date" placeholder="End date" value=""></input>
            <button onclick="add_work()" class="btn" type"button">Lägg till</button>
                `;
            // Loop
            data.forEach((post)=> {
                output +=`
                       <fieldset class="admin-input">
                            <input id="${post.id}${post.type}type" type="text" name="type" value="${post.type}"></input>
                            <input id="${post.id}${post.type}title" type="text" name="title" value="${post.title}"></input>
                            <input id="${post.id}${post.type}place" type="text" name="place" value="${post.place}"></input>
                            <input id="${post.id}${post.type}description" type="text" name="description" value="${post.description}"></input>
                            <input id="${post.id}${post.type}start_date" type="text" name="start_date" value="${post.start_date}"></input>
                            <input id="${post.id}${post.type}end_date" type="text" name="end_date" value="${post.end_date}"></input>
                            <button onclick="put_Arg(this)" id="${post.id}" class="${post.type}" type"button">Ändra</button>
                            <button onclick="delete_info(this)" id="${post.id}" class="${post.type}" type"button">Ta bort</button>
                        </fieldset>     
                
                `;
            })
            document.getElementById('w-output').innerHTML = output;
        })
    
}

// Function that post and get the id and convert to JSON
function add_work() { 
    let type = document.getElementById('type').value;
    let place = document.getElementById('place').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let start_date = document.getElementById('start_date').value;
    let end_date = document.getElementById('end_date').value;
    
    let info = JSON.stringify(
        {
        "table": type,
        "title": title,
        "description": description,
        "place": place,
        "start_date": start_date,
        "end_date": end_date

        }
    );

    let getData = {
        method: 'POST',
        body: info
    }
    fetch('http://sandrawara.se/portfolio/project/create.php', getData);

    get_workAdmin();
    get_educationAdmin();
    get_webAdmin(); // Call function and post new data

}

function get_educationAdmin() {
    fetch ('http://sandrawara.se/portfolio/project/read_single.php?table=education')
        .then((res) => res.json())
        .then((data) => {
            let output = ``;
            // Loop
            data.forEach((post)=> {
                output +=`
                       <fieldset class="admin-input">
                            <input id="${post.id}${post.type}type" type="text" name="type" value="${post.type}"></input>
                            <input id="${post.id}${post.type}title" type="text" name="title" value="${post.title}"></input>
                            <input id="${post.id}${post.type}place" type="text" name="place" value="${post.place}"></input>
                            <input id="${post.id}${post.type}description" type="text" name="description" value="${post.description}"></input>
                            <input id="${post.id}${post.type}start_date" type="text" name="start_date" value="${post.start_date}"></input>
                            <input id="${post.id}${post.type}end_date" type="text" name="end_date" value="${post.end_date}"></input>
                            <button onclick="put_Arg(this)" id="${post.id}" class="${post.type}" type"button">Ändra</button>
                            <button onclick="delete_info(this)" id="${post.id}" class="${post.type}" type"button">Ta bort</button>
                        </fieldset>     
                
                `;
            })
            document.getElementById('e-output').innerHTML = output;
        })
    
}

function get_webAdmin() {
    fetch ('http://sandrawara.se/portfolio/project/read_single.php?table=web_pages')
        .then((res) => res.json())
        .then((data) => {
            let output = ``;
            // Loop
            data.forEach((post)=> {
                output +=`

                       <fieldset class="admin-input">
                            <input id="${post.id}${post.type}type" type="text" name="type" value="${post.type}"></input>
                            <input id="${post.id}${post.type}title" type="text" name="title" value="${post.title}"></input>
                            <input id="${post.id}${post.type}place" type="text" name="place" value="${post.place}"></input>
                            <input id="${post.id}${post.type}description" type="text" name="description" value="${post.description}"></input>
                            <input id="${post.id}${post.type}start_date" type="text" name="start_date" value="${post.start_date}"></input>
                            <input id="${post.id}${post.type}end_date" type="text" name="end_date" value="${post.end_date}"></input>
                            <button onclick="put_Arg(this)" id="${post.id}" class="${post.type}" type"button">Ändra</button>
                            <button onclick="delete_info(this)" id="${post.id}" class="${post.type}" type"button">Ta bort</button>
                        </fieldset>     
                
                `;
            })
            document.getElementById('wb-output').innerHTML = output;
        })
    
}

//Delete function
function delete_(id, table) {

    let info = JSON.stringify(
        {
        "id": id,
        "table": table
        }
    );

    let getData = {
        method: 'DELETE',
        body: info
    }
    fetch('http://sandrawara.se/portfolio/project/delete.php', getData);

    get_workAdmin();
    get_educationAdmin();
    get_webAdmin();

}

function delete_info(element){
    let table = element.className;
    let id = element.id;
    delete_(id, table);
}


//Put function
function put_info(_id, _table, _title, _place, _description, _start_date, _end_date) {
    
    let title = document.getElementById(_title).value;
    let place = document.getElementById(_place).value;
    let description = document.getElementById(_description).value;
    let start_date = document.getElementById(_start_date).value;
    let end_date = document.getElementById(_end_date).value;

    let info = JSON.stringify(
        {
        "id": _id,
        "type": _table,
        "table": _table,
        "title": title,
        "description": description,
        "place": place,
        "start_date": start_date,
        "end_date": end_date
        }
    );

    let getData = {
        method: 'PUT',
        body: info
    }
    fetch('http://sandrawara.se/portfolio/project/update.php', getData);

    get_workAdmin();
    get_educationAdmin();
    get_webAdmin();

}

function put_Arg(element) {
    let _table = element.className;
    let _id = element.id;
    let _title = _id.concat(_table, 'title');
    let _place = _id.concat(_table, 'place');
    let _description = _id.concat(_table, 'description');
    let _start_date = _id.concat(_table, 'start_date');
    let _end_date = _id.concat(_table, 'end_date');
    
    
    put_info(_id, _table, _title, _place, _description, _start_date, _end_date);

}





