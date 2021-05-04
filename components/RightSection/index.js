import Image from 'next/image'
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithubAlt, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

const RightSection = () => {
    return (
        <div class="font-san text-gray-600">
            <div class="p-24"></div>
            <div class="mr-10 mt-10">
                <p class="pb-5 font-medium border-b">ABOUT ME</p>
                <div class="border-b-2 border-blue-300 mb-5 w-10"></div>
                <div class="flex justify-center mb-5">
                    <Image src="/img.png" alt="headshot" width="150" height="150" objectFit="cover"
                           className="rounded-full"/>
                </div>
                <p class="mb-10 text-center">Quis vero phasellus hac nullam, in quam vitae duis adipiscing mauris leo,
                    laoreet eget at quis, ante vestibulum vivamus vel. Sapien lobortis, eget orci purus amet pede,
                    consectetur neque risus.</p>
            </div>
            <div>
                <p class="pb-5 font-medium border-b">SUBSCRIBE & FOLLOW</p>
                <div className="border-b-2 border-blue-300 mb-5 w-10"></div>
                <div class="flex mb-10">
                    <a href="https://github.com/fiona20072007" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 text-white mr-2">
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
            <div>
                <p class="pb-5 font-medium border-b">CATEGORIES</p>
                <div className="border-b-2 border-blue-300 mb-5 w-10"></div>
            </div>
            <div>
                <p class="pb-5 font-medium border-b">ARCHIVES</p>
                <div className="border-b-2 border-blue-300 mb-5 w-10"></div>
            </div>
            <div>
                <p class="pb-5 font-medium border-b">TAGS</p>
                <div className="border-b-2 border-blue-300 mb-5 w-10"></div>
            </div>
        </div>
    )
}

export default RightSection;