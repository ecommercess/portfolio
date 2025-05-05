const projects = [
    {
      id: 1,
      title: "Portfolio",
      subtitle: "Showcasing my skills, projects, and personal journey",
      description: "A responsive personal portfolio website built with modern web technologies. It highlights my technical skills, experiences, and projects in a clean, professional layout.",
      image: "/project-portfolio.png",
      tags: ["React", "Tailwind CSS", "Responsive Design", "Portfolio"],
      links: [
        {
          text: "View Demo",
          url: "*",
          external: true,
          primary: true
        },
        {
          text: "GitHub",
          url: "*",
          external: true
        }
      ],
      featured: true
    },
    {
      id: 2,
      title: "PokeDex",
      subtitle: "Interactive Pokémon browser with drag-and-drop UI",
      description: "A fun and engaging Pokédex built with React. Features drag-and-drop reordering, search functionality, and real-time Pokémon data pulled from the PokéAPI.",
      image: "/project-pokemon.png",
      tags: ["React", "API Integration", "Drag-and-Drop", "PokéAPI"],
          links: [
        {
          text: "View Demo",
          url: "*",
          external: true,
          primary: true
        },
        {
          text: "GitHub",
          url: "https://github.com/ecommercess/pokemon.git",
          external: true
        }
      ],
      featured: true
    },
    {
      id: 3,
      title: "Todo List",
      subtitle: "Smart task manager with built-in weather updates",
      description: "A productivity-focused to-do list app that integrates OpenWeather API. Users can manage tasks while staying updated on weather forecasts through geolocation and visual charts.",
      image: "/project-todo.png",
      tags: ["React", "Task Management"],
           links: [
        {
          text: "View Demo",
          url: "*",
          external: true,
          primary: true
        },
        {
          text: "GitHub",
          url: "https://github.com/ecommercess/todo-app.git",
          external: true
        }
      ]
    },
  ];
  
  export default projects;