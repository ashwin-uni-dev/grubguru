import Input from "../../components/Input";

const Register = () => {
    return (
        <div className='flex flex-col gap-4'>
            <Input placeholder='Enter a username...' />
            <Input placeholder='Enter a password...' type='password'/>
        </div>
    )
}

export default Register;