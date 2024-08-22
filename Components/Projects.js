import React from 'react'
import ProjectCard from './ProjectCard';
import food from '../Assets/food order.jpg';
import todo from '../Assets/to doapp.avif';
import weather from '../Assets/weather app.webp';
import movie from '../Assets/movie.jpg';
import grocery from '../Assets/grocery.jpg';
import '../Styles/ProjectCard.css'


export default function Projects() {
    const projects=[
        {
            title:'Online Food Order Website',
            description:'Online food delivery using MonoDB,Express js, Node js,React js',
            technologies:['React.js','Node.js','Express.js','MongoDB'],
            githubLink:'https://github.com/varshini1215/Online-delivery-frontend.git',
            demoLink:'',
            image: food
        },
        {
            title:'To do App',
            description:'To do App created using MonoDB,Express js, Node js,React js',
            technologies:['React.js','Node.js','Express.js','MongoDB'],
            githubLink:'https://github.com/varshini1215/To-do-App.git',
            demoLink:'varshinitodo.netlify.app',
            image: todo
        },
       {
        title:'Movie Rating System',
        description:'Designed a movie rating system to rate the movie',
        technologies:['HTML','CSS','JavaScript'],
        githubLink:'https://github.com/varshini1215/Movie-Rating-system.git',
        demoLink:'https://varshini1215.github.io/Movie-Rating-system/',
        image: movie
       },
       {
        title:'Grocery Listing',
        description:'Designed a Grocery Listing App for listing the items',
        technologies:['HTML','CSS','JavaScript'],
        githubLink:'https://github.com/varshini1215/Grocery-listing.git',
        demoLink:'https://varshini1215.github.io/Grocery-listing/',
        image: grocery
       },
       {
        title:'Weather App',
        description:'Designed a Weather App using Vite+React',
        technologies:['HTML','CSS','React.js'],
        githubLink:'https://github.com/varshini1215/Weather-App.git',
        demoLink:'https://varshini1215.github.io/Weather-App/',
        image: weather
       }

    ]
  return (
    <div>
        <h1 style={{color:'purple',textAlign:'center'}}>Projects</h1>
        <div>
        {projects.map((project,index)=>(
            <ProjectCard key={index} project={project}/>
        ))}
    </div>
    </div>
  )
}
