import React from 'react';
import { useForm } from 'react-hook-form';

interface Member {
  name: string;
  email: string;
  password: string;
}

const MemberRegistrationPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Member>();

  const onSubmit = (data: Member) => {
    // TODO: Implement registration logic here
    console.log('Member:', data);
  };

  return (
    <div>
      <h2>Member Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            type="text"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Name is required</span>}
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>Invalid email address</span>}
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <span>Password is required (min. 6 characters)</span>}
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default MemberRegistrationPage;
