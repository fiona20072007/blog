import React, {useState, useEffect} from "react";
import Link from "next/link";

const Sort = ({type, ListItems}) => {
    const [tags, setTags] = useState([])
    const arr = [];

    useEffect(() => {
        if (type === "CATEGORIES" || type === "ARCHIVES") {
            const listArr = [];
            ListItems.forEach(list => {
                const category = list.categories
                const archive = list.createdAt.slice(0, 4) + list.createdAt.slice(7);
                type === "CATEGORIES" ? listArr.push(category) : listArr.push(archive)
            })

            let counter = {};
            listArr.forEach((x) => {
                counter[x] = (counter[x] || 0) + 1;
            });

            listArr.forEach(key => {
                let countAmount = counter[key];
                if (key === undefined) {
                    return counter;
                }
                arr.push(`${key} (${countAmount})`)
            })
        }

        if (type === "TAGS") {
            ListItems.forEach(list => {
                list.tag.forEach(tag => {
                    arr.push(tag)
                })
            })
        }
        const filterArr = arr.filter(function (element, index, arr) {
            return arr.indexOf(element) === index;
        })
        setTags(filterArr)
    }, [type])


    return (
        <div>
            <p className="pb-5 font-medium border-b">{type}</p>
            <div className="border-b-2 border-blue-300 mb-5 w-10"></div>
            <div className="mb-5 flex flex-wrap">
                {type !== "TAGS" && tags.map(tag => {
                    return <div
                        className="mr-5 tracking-wide text-sm mb-5 w-full font-light">
                        <Link href={`/?${type.toLowerCase()}=${tag.substr(0,tag.length-4)}`}>{tag}</Link></div>
                })}
                {type === "TAGS" && tags.map(tag => {
                    return <div
                        className="mr-5 bg-gray-200 pl-4 pr-4 pt-1 pb-1 tracking-wider uppercase text-xs font-semibold rounded mb-3">
                        <Link href={`/?${type.toLowerCase()}=${tag}`}>{tag}</Link></div>
                })}
            </div>
        </div>
    )
}

export default Sort