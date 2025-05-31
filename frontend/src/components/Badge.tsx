import {HTMLAttributes, ReactNode} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const Badge = ({ children, ...rest }: Props) => {
    return (
        <div className='flex h-10 bg-gray-100 px-4 py-2 rounded-full justify-center items-center whitespace-nowrap' {...rest}>
            { children }
        </div>
    )
}

export default Badge;