import React, { useState } from 'react'
import { FileUpload } from '../../../@/components/ui/file-upload'

type Props = {}
const Playground = (props: Props) => {
    const [files, setFiles] = useState<File[]>([]);
    const handleFileUpload = (files: File[]) => {
        setFiles(files);
        console.log(files);
    };
    return (
        <div className='w-full h-screen flex items-center justify-center relative z-[999]'>
            <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-gray-950/30 border-neutral-200 dark:border-neutral-800 rounded-lg">
                <FileUpload onChange={handleFileUpload} />
            </div>
        </div>
        // <div className="theme-zinc w-full" style={{ '--radius': '0.5rem' } as React.CSSProperties}>
        //     <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
        //         <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        //             <div className="w-full" role="presentation" tabIndex={0}>
        //                 <div className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden">
        //                     <input id="file-upload-handle" className="hidden" type="file" />
        //                     <div className="flex flex-col items-center justify-center">
        //                         <p className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
        //                             Upload file
        //                         </p>
        //                         <p className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
        //                             Drag or drop your files here or click to upload
        //                         </p>
        //                         <div className="relative w-full mt-10 max-w-xl mx-auto">
        //                             <div className="relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md shadow-[0px_10px_50px_rgba(0,0,0,0.1)]">
        //                                 <svg
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                     width="24"
        //                                     height="24"
        //                                     viewBox="0 0 24 24"
        //                                     fill="none"
        //                                     stroke="currentColor"
        //                                     strokeWidth="2"
        //                                     strokeLinecap="round"
        //                                     strokeLinejoin="round"
        //                                     className="h-4 w-4 text-neutral-600 dark:text-neutral-300"
        //                                 >
        //                                     <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
        //                                     <path d="M7 9l5-5 5 5"></path>
        //                                     <path d="M12 4l0 12"></path>
        //                                 </svg>
        //                             </div>
        //                             <div className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"></div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Playground