import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify';
import ReactMarkdown from 'react-markdown';
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {}
const Playground = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const url = import.meta.env.VITE_SERVER_URL + 'query';
    const notify = (message: string) => toast.error(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
    const [files, setFiles] = useState<File | undefined>(undefined);
    const [fileInfo, setFileInfo] = useState<{ size: number, type: string } | null>(null);
    const [data, setData] = useState<any[] | null>(null);
    const handleFileChange = (file?: File) => {
        if (file && file.size > 10 * 1024 * 1024) {
            notify('Maximum file size supported is 10MB.');
            return;
        }
        if (file && !['application/pdf', 'text/plain', 'document/*'].includes(file.type)) {
            notify('File type not supported.');
            return;
        }
        setFiles(file);
        if (file) {
            setFileInfo({ size: file.size, type: file.type });
        } else {
            setFileInfo(null);
        }
    };
    const handleUpload = async (event: any) => {
        event.preventDefault();
        if (!files) {
            notify('No file selected.');
            return;
        }
        setIsLoading(true)
        const formData = new FormData();
        formData.append('file', files);
        try {
            const response = await axios.post(url, formData);
            console.log(response.data.data)
            if (response.status == 200) {
                setData(JSON.parse(response.data.data).response);
            } else {
                notify("Failed to upload file.");
            }
        } catch (error: any) {
            notify(error.message);
        }
        setIsLoading(false)
    };
    return (
        // #171717
        <div className='w-full h-screen flex items-center justify-center relative z-[999] '>
            <div className='w-[80%] h-[80%] justify-start gap-8 px-10 pb-6 pt-10 flex flex-col'>
                <div className='flex justify-center flex-col gap-3 w-full'>
                    <div className='flex items-baseline justify-between'>
                        <h1 className='text-2xl font-bold text-start dark:text-white'>What do you want to upload?</h1>
                        {fileInfo && (
                            <div className="flex gap-2">
                                <div className='flex gap-2'>
                                    <span className="text-gray-200">Size:</span>
                                    <span className="font-medium dark:text-gray-400">{fileInfo.size / (1024 * 1024) < 1 ? (fileInfo.size / 1024).toFixed(2) + " KB" : (fileInfo.size / (1024 * 1024)).toFixed(2) + " MB"}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span className="text-gray-200">Type:</span>
                                    <span className="font-medium dark:text-gray-400">{fileInfo.type}</span>
                                </div>
                                <div className='flex gap-2'>
                                    <span className="text-gray-200">Modified:</span>
                                    <span className="font-medium dark:text-gray-400">{new Date(files?.lastModified || 0).toLocaleDateString()}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='flex w-full gap-3'>
                        <input type="file"
                            onChange={(e) => handleFileChange(e.target.files?.[0])}
                            accept="application/pdf, text/plain, document/*"
                            multiple={true}
                            className="file w-full text-white/45 bg-white/30 transition-all shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] duration-300 px-4 py-3 rounded-md  hover:ring hover:ring-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <div className='flex justify-center items-center'>
                            <button onClick={e => handleUpload(e)} className='bg-blue-500 text-white px-4 py-3 rounded-md'>Upload</button>
                        </div>
                    </div>
                </div>
                <div className='bg-dot-white/[0.09] overflow-y-auto rounded-lg h-full border py-5 px-8'>
                    {isLoading ? (
                        <>
                            {[...Array(4)].map((_, index) => (
                                <SkeletonTheme baseColor="#5d7f93" highlightColor="#444" >
                                    <p key={index} className='mb-4'>
                                        <Skeleton enableAnimation={true} width={"60%"} height={"3vh"} />
                                        <Skeleton enableAnimation={true} height={"2.5vh"} width={"95%"} count={3} />
                                    </p>
                                </SkeletonTheme>
                            ))}
                        </>
                    ) : (
                        data &&
                        data.map((item, index) => (
                            <div key={index} className="p-6 border-b border-gray-200">
                                <h2 className="text-xl font-semibold mb-2">
                                    <ReactMarkdown>{`${index + 1}) ${item.question}`}</ReactMarkdown>
                                </h2>
                                <p className="text-gray-300">
                                    <ReactMarkdown>{item.answer}</ReactMarkdown>
                                </p>
                            </div>
                        ))
                    )}

                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Playground