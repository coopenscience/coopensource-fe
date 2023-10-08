import { Header } from "./Header";
import { useState, useEffect } from 'react';
// import axios from 'axios';

export const Feed = () => {
    // const choices = ['/1.jpg', '/2.jpg', '/3.jpg'];
    // const titles = [];
    // const texts = [''];
    // const random = Math.floor(Math.random() * 3);
    // console.log(random)
    const [projects, setProjects] = useState<any>();
    // const [projectIndex, setProjectIndex] = useState(5);
    // const [url_for_fetch, setUrl_for_fetch] = useState();

    const some_projects = [{
            "project_id": "3",
            "project_name": "NOAA NWS SKYWARN® Weather Spotter Program",
            "project_url_on_catalog": "https://www.citizenscience.gov/catalog/3/",
            "project_url_external": "http://www.nws.noaa.gov/skywarn/",
            "project_description": "SKYWARN® is a National Weather Service (NWS) program developed in the 1960s that consists of trained weather spotters who provide reports of severe and hazardous weather to help meteorologists and emergency managers make life-saving warning decisions. There are well over 300,000 active SKYWARN Weather Spotters in the U.S. Spotters are concerned citizens, amateur radio operators, truck drivers, mariners, airplane pilots, emergency management personnel, and public safety officials who volunteer their time and energy to report on hazardous weather impacting their community. The first steps in becoming an official NWS SKYWARN Weather Spotter is to complete training on weather hazards and their reporting in your area. Classroom type training is typically offered each Spring and Fall. To find the next available training provided by your local NWS forecast office please visit this interactive map: http://www.nws.noaa.gov/skywarn/skywarn.htm In partnership with the COMET® Program, which is part of the University Corporation for Atmospheric Research&#39;s Community Programs supplemental national web-based training was also created. For more information please visit: https://www.meted.ucar.edu/training_course.php?id=23",
            "keywords": "Skywarn, weather, spotter, flood, tornado, thunderstorm. hurricane, typhoon, snow, ice, wind, damage, storm, NOAA, NWS, training, meteorology",
            "fields_of_science": "Climate and weather",
            "project_status": "active",
            "agency_sponsor": "National Oceanic and Atmospheric Administration (NOAA)",
            "agency_sponsor_other": "",
            "geographic_scope": "National",
            "participant_age": "families, general_public, seniors, teens",
            "project_goals": "",
            "participation_tasks": "audio_video_recording, identification, learning, measurement, observation, photography",
            "scistarter": "true",
            "email": "ron.gird@noaa.gov",
            "start_date": "1965"
        },
        {
            "project_id": "4",
            "project_name": "Florida Keys Water Watch",
            "project_url_on_catalog": "https://www.citizenscience.gov/catalog/4/",
            "project_url_external": "http://monroe.ifas.ufl.edu/pdf/environment/fkww.pdf",
            "project_description": "The University of Florida IFAS Monroe County Extension developed Florida Keys Water Watch, a community-based volunteer water quality monitoring program to promote awareness of the importance of water quality, reduce nonpoint source pollution, and involve students and citizens to monitor coastal habitats from man-made canals to bays to  beaches.  Florida Keys Water Watch teaches volunteers to test a site of their choice for dissolved oxygen, pH, salinity and temperature after attending a 4-hour workshop.",
            "keywords": "water quality, dissolved oxygen, pH, salinity, Florida Keys, South Florida, coastal",
            "fields_of_science": "Chemistry,  Ecology and environment,  Nature and outdoors, Ocean/water and marine",
            "project_status": "active",
            "agency_sponsor": "U.S. Environmental Protection Agency (EPA)",
            "agency_sponsor_other": "",
            "geographic_scope": "Florida",
            "participant_age": "elementary_school_children, families, general_public, seniors",
            "project_goals": "",
            "participation_tasks": "data_entry, identification, learning, measurement, observation, sample_analysis, site_selection_description, specimen_sample_collection",
            "scistarter": "true",
            "email": "shellykrueger@ufl.edu",
            "start_date": "2014-10-17"
        },
        {
            "project_id": "6",
            "project_name": "System for Mapping and Predicting Species of Concern",
            "project_url_on_catalog": "https://www.citizenscience.gov/catalog/6/",
            "project_url_external": "http://www.dri.edu/",
            "project_description": "The purpose of SMAP-SOC is to provide BLM natural resource managers with an application to model the current and future distributions of freshwater species of concern (SOC), across large management regions. These models will be based on occurrences from both crowdsourced data and detections using environmental DNA (e-DNA). These occurrences will then be related to Earth observations and other spatial data so distributions can be predicted across landscapes.",
            "keywords": "freshwater, fish, Alaska, rivers, lakes, threatened and endangered",
            "fields_of_science": "Animals, Ecology and environment,  Nature and outdoors",
            "project_status": "active",
            "agency_sponsor": "National Aeronautics and Space Administration (NASA), Bureau of Land Management (BLM) ",
            "agency_sponsor_other": "",
            "geographic_scope": "Alaska",
            "participant_age": "general_public",
            "project_goals": "",
            "participation_tasks": "geolocation, specimen_sample_collection",
            "scistarter": "true",
            "email": "john.olson@dri.edu",
            "start_date": "2014-02-14"
        }]
    // async function fetchData() {
    //     setProjects(projects)
    //     // const res = await axios.get('https://api.coopenscience.targino.com.br/api/projects')
    //     // const data = await res.data;

    //     // let ps = []
    //     // for(let i = 0; i < data.length; i + 200) {
    //     //     let p = {
    //     //         project_name: data[i].project_name,
    //     //         project_url_on_catalog: data[i].project_url_on_catalog,
    //     //         project_description: data[i].project_description,
    //     //         fields_of_science: data[i].fields_of_science
    //     //     };
    //     //     ps.push(p);
    //     // }
    //     // setProjects(ps);
    // }

    useEffect(() => {
        setProjects(some_projects)
    }, [])

    return (
        <section className="px-12">
        <Header />
        <h1 className="font-poppins text-2xl font-bold text-black mt-36">Recommended projects for you:</h1>
        <main className="flex flex-col w-full items-center justify-start gap-8 mt-8">
            {projects?.map((project: any) => {
                    return (
                        <main className="">
                            <img className="w-72 rounded-xl" />
                            {/* <img className="w-[28rem] shadow-2xl rounded-xl" src={choices[index]}></img> */}
                            <span className="max-w-[30rem] font-poppins">
                                <h1 className="font-extrabold text-[2rem]">{project.project_name} <span className="border rounded-lg px-2 py-1 border-green-500 text-green-500">Colaborate</span></h1> 
                                <p>{project.project_description}</p>
                            </span>
                        </main> 
                    )
                    })}
        </main> 
        </section>

    )
}