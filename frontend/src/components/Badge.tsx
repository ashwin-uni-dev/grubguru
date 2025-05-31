import {HTMLAttributes, ReactNode} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const Badge = ({ children, ...rest }: Props) => {
    return (
        <div className='flex min-w-10 h-10 bg-gray-100 p-2 rounded-full justify-center items-center' {...rest}>
            { children }
        </div>
    )
}

export default Badge;