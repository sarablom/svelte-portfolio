import projects from "../data/projects.json";

export function get() { 
    return {
        body: projects,
    }
}