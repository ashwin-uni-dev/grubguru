import { DynamicIcon } from "lucide-react/dynamic";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    preference: string
    icon: any
}

const PreferenceCard = ({ preference, icon, ...rest }: Props) => {
    return (
        <div {...rest}>
            <div className='flex rounded-lg bg-purple-500 p-4 justify-center items-center'>
                <DynamicIcon name={icon} color='white' />
            </div>
            <h1 className="font-medium text-md mt-2">{ preference }</h1>
        </div>
    )
}

export default PreferenceCard;