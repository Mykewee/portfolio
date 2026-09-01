function openProject(project) {

    // Open modal

    document.getElementById("projectModal").style.display = "block";


    // Hide all project details

    const projects =
        document.querySelectorAll(".project-details");


    projects.forEach(function (item) {

        item.style.display = "none";

    });


    // Show selected project

    document.getElementById(
        project + "-project"
    ).style.display = "block";

}


function closeProject() {

    document.getElementById(
        "projectModal"
    ).style.display = "none";

}


// Close modal when clicking outside

window.onclick = function (event) {

    const modal =
        document.getElementById(
            "projectModal"
        );


    if (event.target === modal) {

        modal.style.display = "none";

    }

};