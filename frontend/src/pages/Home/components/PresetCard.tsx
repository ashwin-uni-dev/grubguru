interface PresetCardProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    color: string
}

const PresetCard = ({ name, color, ...props }: PresetCardProps) => {
    return (
        <div {...props} className={`flex items-center justify-center bg-${color}-500 p-4 rounded-lg text-white`}>
            <p className='font-semibold text-xs whitespace-nowrap'>{ name }</p>
        </div>
    )
}

export default PresetCard;