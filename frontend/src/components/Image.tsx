const Image = ({ url }: { url?: string })=> {
    return (
        <img
            src={ url ? url : '/images/noSrc.png' }
            className='w-full h-full object-cover'
            alt={'No image available'}
        />
    )
}

export default Image;