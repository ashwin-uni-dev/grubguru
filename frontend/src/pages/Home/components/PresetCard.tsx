interface PresetCardProps {
    name: string
    color: string
}

const PresetCard = ({ name, color }: PresetCardProps) => {
    return (
        <div className={`bg-${color}-500 flex items-center justify-center p-4 rounded-lg text-white`}>
            <p className='font-semibold text-sm whitespace-nowrap'>{ name }</p>
        </div>
    )
}

export default PresetCard;