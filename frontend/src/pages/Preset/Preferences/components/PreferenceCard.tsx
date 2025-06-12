import { DynamicIcon } from "lucide-react/dynamic";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    preference: string;
    description: string;
    icon: any;
    children?: React.ReactNode;
}

const PreferenceCard = ({ preference, icon, description, children, ...rest }: Props) => {
    return (
        <div className='flex flex-col gap-2 p-4 rounded-xl'>
            <div className='flex flex-row gap-3 items-center'  {...rest}>
                <div className='flex rounded-lg bg-purple-500 p-3 justify-center items-center'>
                    <DynamicIcon size={24} name={icon} color='white' />
                </div>
                <div>
                    <h1 className="font-medium text-lg">{preference}</h1>
                    <p className='text-gray-600 text-sm'>{description}</p>
                </div>
            </div>

            {children &&
                <>
                    <hr/>
                    <div className="text-sm mt-1 flex flex-row flex-wrap w-full gap-2">
                        {children}
                    </div>
                </>
            }
        </div>
    );
};

export default PreferenceCard;
