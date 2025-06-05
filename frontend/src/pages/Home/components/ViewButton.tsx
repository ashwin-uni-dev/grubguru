import React, {useEffect, useState} from "react";

const Button = ({ view, ...props }: any) => {
    const [style, setStyle] = useState('text-sm bg-purple-500 text-white py-1 px-2 rounded-lg');

    useEffect(() => {
        if (view) setStyle('text-sm bg-purple-500 text-white py-1 px-2 rounded-lg');
        else setStyle('text-sm bg-purple-100 text-purple-500 py-1 px-2 rounded-lg');
    }, [view]);

    return (
        <button className={style} {...props} />
    )
}

export default Button;