# Memories

Memories is a simple application designed to preserve and relive memories from past years. It consists of two main pages that offer an intuitive and user-friendly experience.

Vistion in: memories.jpcortesg.online

## Features

- **Home Page:** Welcome users with a warm greeting and provide quick access to the latest four years available for exploration: 2024, 2023, 2022, and 2021. Users can navigate using a topbar and switch languages using a dropdown menu. A search form facilitates finding specific memories by year.

<img src="https://github.com/jpcortesg1/mvc-we-memories/assets/60229777/ce93792d-0449-428d-8df6-2eb9a1552c59" />

- **Year Page:** Dynamically adapt according to the user's selection. By entering a specific year, the page displays all memories saved for that period. Along with the topbar, a more compact navigation bar makes exploration easier. Users can add new memories using a simple form that includes title, content, and image. Once a memory is created, the page automatically updates to display the current year with the new memory.

<img src="https://github.com/jpcortesg1/mvc-we-memories/assets/60229777/15708a44-3de1-4de9-8248-1f9a2c8ffd3a" />

## Key Features

- **Browser-Identified Memories:** Users can only edit or delete memories they have created, thanks to browser-based memory identification.
- **Technology Stack:** Built using the Model-View-Controller (MVC) design pattern, the application is dockerized and utilizes Node.js, Express, and MongoDB for its operation. Efficient development is achieved with tools like PNPM and TailwindCSS.
- **Efficient Image Storage:** Images attached to memories are compressed in .webp format and adjusted to a width of 300 pixels, ensuring minimal weight and fast loading. These images are stored in an Amazon S3 bucket.
- **Deployment on AWS:** The application is hosted on an EC2 instance of Amazon Web Services (AWS) and has a custom domain: memories.jpcortesg.online. Connection is secured through an SSL certificate obtained via Certbot.
- **Version Control and Collaboration:** The source code is managed in a GitHub repository, facilitating collaboration and tracking changes in the project.

## Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/memories.git
cd memories
```

## Run and Install
```
docker compose run --build
```

### Access the application in your browser at http://localhost