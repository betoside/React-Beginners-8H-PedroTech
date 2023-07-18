import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Form = () => {
    
    const schema = yup.object().shape({ 
        fullname: yup.string().required("Seu nome é obrigatório informar"),
        email: yup.string().email().required("informar 1 e-mail"),
        age: yup.number().positive().integer().min(18).required("qual é sua idade?"),
        password: yup.string().min(4).max(10).required("senha, digite min 4, max 10"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("senha não confere")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name" {...register('fullname')} />
            <p className='erros'>{errors.fullname?.message}</p>
            <br />

            <input type="text" placeholder="Email" {...register('email')} />
            <p className='erros'>{errors.email?.message}</p>
            <br />

            <input type="number" placeholder="Age" {...register('age')} />
            <p className='erros'>{errors.age?.message}</p>
            <br />

            <input type="password" placeholder="Password" {...register('password')} />
            <p className='erros'>{errors.password?.message}</p>
            <br />

            <input type="password" placeholder="Confirm Password" {...register('confirmPassword')} />
            <p className='erros'>{errors.confirmPassword?.message}</p>
            <br />

            <input type="submit" />
        </form>
    );

}