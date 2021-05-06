import Image from 'next/image'
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import Sort from "./Sort";

const RightSection = ({ListItems}) => {
    return (
        <div className="font-san text-gray-600">
            <div className="p-24"></div>
            <div className="mr-10 mt-10">
                <p className="pb-5 font-medium border-b">ABOUT ME</p>
                <div className="border-b-2 border-blue-300 mb-5 w-10"></div>
                <div className="flex justify-center mb-5">
                    <Image src="/img.png" alt="headshot" width="150" height="150" objectFit="cover"
                           className="rounded-full"/>
                </div>
                <p className="mb-10 text-center">Quis vero phasellus hac nullam, in quam vitae duis adipiscing mauris leo,
                    laoreet eget at quis, ante vestibulum vivamus vel. Sapien lobortis, eget orci purus amet pede,
                    consectetur neque risus.</p>
            </div>
            <div className="mr-10 mt-10">
                <p className="pb-5 font-medium border-b">SUBSCRIBE & FOLLOW</p>
                <div className="border-b-2 border-blue-300 mb-5 w-10"></div>
                <div className="flex mb-10">
                    <a href="https://github.com/fiona20072007" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white mr-2">
                        <FontAwesomeIcon width="13" icon={faGithubAlt}/>
                    </a>
                    <a href="https://www.linkedin.com/in/fiona-jang-8a17741b3/" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white mr-2">
                        <FontAwesomeIcon width="13" icon={faLinkedinIn}/>
                    </a>
                    <a href="mailto:fiona20072007@gmail.com" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white mr-2">
                        <FontAwesomeIcon width="13" icon={faEnvelope}/>
                    </a>
                    <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white">
                        <FontAwesomeIcon width="13" icon={faPhone}/>
                    </a>
                </div>
            </div>
            <div className="mr-10 mt-10">
                <Sort type="CATEGORIES" ListItems={ListItems} />
                <Sort type="ARCHIVES" ListItems={ListItems} />
                <Sort type="TAGS" ListItems={ListItems} />
            </div>
        </div>
    )
}

export default RightSection;