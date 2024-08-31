import React from 'react'
import { Spotlight } from '../../@/components/ui/spotlight'

type Props = {}

const Test = (props: Props) => {
    return (

        <div className="absolute inset-0 top-1/2 z-[99999999] -translate-y-1/2 translate-x-[-30px] overflow-hidden rounded-full">
            <div className="relative h-full w-full">
                <div
                    className="moving-grid-background absolute h-[200%] w-full"
                    style={{ opacity: 1 }}
                ></div>
                <div className="shadow-background absolute h-full w-full rounded-full shadow-[inset_0_0_5rem_3rem]"></div>
            </div>
        </div>

    )
}

export default Test