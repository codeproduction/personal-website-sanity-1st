import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {       
    const client = createClient({
        projectId: "n1ovu5rt",
        dataset: "production",
        apiVersion: "2023-05-08",
    });


    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content
        }`
    )


}