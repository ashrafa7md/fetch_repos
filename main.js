let myInput = document.querySelector(".get-repos input")
let myButton = document.querySelector(".get-button")
let myShow = document.querySelector(".show-data")

myButton.onclick = function () {
    getRepos()
}

function getRepos() {
    if (myInput.value == "") {
        myShow.innerHTML = "<span>Please enter Data</span>"
    } else {
        fetch(`https://api.github.com/users/${myInput.value}/repos`)
            .then((response) => {
            return response.json()
        }).then((repo) => {
            myShow.innerHTML = " "
            repo.forEach((repo) => {
                let mainDiv = document.createElement("div")
                let myTxt = document.createTextNode(repo.name)
                mainDiv.appendChild(myTxt)
                mainDiv.className = "repo-box"
                let myUrl = document.createElement("a")
                let urlTxt = document.createTextNode("Visit")
                myUrl.appendChild(urlTxt)
                myUrl.href = `https://github.com/${myInput.value}/${repo.name}`;
                myUrl.setAttribute("target","_blank")
                mainDiv.appendChild(myUrl)
                let starSpan = document.createElement("span")
                let spanTxt = document.createTextNode(`Stars  ${repo.stargazers_count}`);
                starSpan.appendChild(spanTxt)
                mainDiv.appendChild(starSpan)
                myShow.appendChild(mainDiv)
            });
        }
        )
    }
}