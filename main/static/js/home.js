document.addEventListener("DOMContentLoaded", function() {
    const nameSearch = document.getElementById("name-search")
    const tags = document.querySelectorAll(".tag")
    const projects = document.querySelectorAll(".project")

    function filterProjects() {
        const nameQuery = nameSearch.value.toLowerCase();

        projects.forEach((project) => {
            const name = project.getAttribute('data-name')
            const nameMatch = name.includes(nameQuery)

            if(nameMatch) {
                project.style.display = "";
            } else{
                project.style.display = "none";
            }

        })
    }

    tags.forEach((tag) => {
        tag.addEventListener("click", function(){ // anytime a tag is selected do this function
            const selectedTag = this.getAttribute("data-tag") // The tag that is clicked is the attribute that I want

            //grab each project that is associated with the tag that is clicked
            projects.forEach((project) => {
                const projectTags = project.getAttribute("data-tags")
                if (projectTags.includes(selectedTag)){
                    project.style.display = "" //if it matches, display it
                } else {
                    project.style.display = "none" // if it doesn't match the tag don't display it
                }
            })
        })
    })

    nameSearch.addEventListener("keyup", filterProjects) //anytime a new letter is typed or deleted the project filter will reset

})