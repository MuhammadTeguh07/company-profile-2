import Image from "next/image"

function ProjectItem(props) {
    console.log(props)
    return (
        <div className="group lg:flex lg:flex-row mb-4 py-5 rounded-md lg:p-5 transition-all lg:hover:bg-surface-200">
            <div className="basis-1/4 mr-5">
                <Image
                    src={props.image}
                    unoptimized
                    height={200}
                    width={500}
                    alt={props.name}
                    title={props.name}
                    style={{border: "3px solid gray", borderRadius: "5px"}}
                />
            </div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.name} </a>
                <div className='text-surface-600 mb-4 mt-2'>{props.description}</div>
                <div className='flex flex-row flex-wrap gap-2'>
                    {props.language ? props.language.map(function (object, index) {
                        return <div key={index} className='bg-surface-400 py-1 px-3 rounded-full text-xs'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem