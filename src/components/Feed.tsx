import { Header } from "./Header";
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Feed = () => {
    // const choices = ['/1.jpg', '/2.jpg', '/3.jpg'];
    // const titles = [];
    // const texts = [''];
    // const random = Math.floor(Math.random() * 3);
    // console.log(random)
    const [projects, setProjects] = useState<any>();
    // const [projectIndex, setProjectIndex] = useState(5);
    // const [url_for_fetch, setUrl_for_fetch] = useState();

    async function fetchData() {
        const res = await axios.get('https://coopenscience.targino.com.br/api/projects')
        const data = await res.data;
        // console.log(data);
        let ps = []
        for(let i = 0; i < data.length; i + 200) {
            let p = {
                project_name: data[i].project_name,
                project_url_on_catalog: data[i].project_url_on_catalog,
                project_description: data[i].project_description,
                fields_of_science: data[i].fields_of_science
            };
            ps.push(p);
            setProjects(ps);
        }
    }

    useEffect(() => {
        console.log('chamou')
        fetchData();
        console.log(projects);
    }, [])

    return (
        <>
        <Header />
        <main className="pt-24 w-full overflow-x-hidden flex items-center justify-center gap-16 px-32 mt-16">
            {projects?.map((project: any) => {
                    return (
                        <>
                            <img className="w-72 rounded-xl" />
                            {/* <img className="w-[28rem] shadow-2xl rounded-xl" src={choices[index]}></img> */}
                            <span className="max-w-[30rem] font-poppins">
                                <h1 className="font-extrabold text-[2rem]">{project.project_name}</h1> 
                                <p>{project.project_description}</p>
                            </span>
                        </>
                    )
                }
            )}
        </main>
        </>

    )
}