import { DynamicIcon } from "lucide-react/dynamic";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    preference: string
    description: string
    icon: any
}

const PreferenceCard = ({ preference, icon, description, ...rest }: Props) => {
    return (
        <div className='flex flex-row gap-2 items-center' {...rest}>
            <div className='flex rounded-lg bg-purple-500 p-3 justify-center items-center'>
                <DynamicIcon size={24} name={icon} color='white' />
            </div>
            <div>
                <h1 className="font-medium text-lg">{ preference }</h1>
                <p className='text-gray-500 text-sm whitespace-nowrap'>{ description }</p>
            </div>
        </div>
    )
}

export default PreferenceCard;