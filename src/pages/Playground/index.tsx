import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify';
type Props = {}
const Playground = (props: Props) => {
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
    const handleFileUpload = (file?: File) => {
        if (file && file.size > 15 * 1024 * 1024) {
            notify('Maximum file size supported is 15MB.');
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
    return (
        // #171717
        <div className='w-full h-screen flex items-center justify-center relative z-[999] '>
            <div className='w-[80%] rounded-lg h-[80%] my-auto p-10 bg-dot-white/[0.09] overflow-y-auto'>
                <div className='flex justify-center flex-col gap-3'>
                    <div className='flex items-center justify-between'>
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
                    <input type="file"
                        onChange={(e) => handleFileUpload(e.target.files?.[0])}
                        accept="application/pdf, text/plain, document/*"
                        multiple={true}
                        className="file text-white/45 bg-white/30 transition-all shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] duration-300 px-4 py-3 rounded-md  hover:ring hover:ring-blue-500 focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    )
}

export default Playground