// Sample project data
const projects = [
    {
        title: "Project 1",
        description: "This is a description of the first project.",
        url: "https://github.com/yourusername/project1"
    },
    {
        title: "Project 2",
        description: "This is a description of the second project.",
        url: "https://github.com/yourusername/project2"
    },
    {
        title: "Project 3",
        description: "This is a description of the third project.",
        url: "https://github.com/yourusername/project3"
    }
];

// Function to display projects dynamically
const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectCard);
});
