import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import LockOutlined from '@mui/icons-material/LockOutlined';
import { makeStyles } from '@mui/styles';
import PasswordField from '../../../Form-Control/PasswordField';

const useStyles = makeStyles({
    avatar: {
        margin: '0 auto',
        backgroundColor: 'red',
    },
    title: {
        fontStyle: 'bold',
        margin: '12px 0px 12px 0px',
        textAlign: 'center',
    },
    submit: {
        marginTop: '20px',
    },
    password: {
        marginTop: '5px',
    },
});

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({});
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };
    return (
        <div>
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component={'h2'} variant={'h5'}>
                Create An Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <TextField margin="normal" fullWidth name="name" label="Name" form={form} />
                <TextField margin="normal" fullWidth name="email" label="Email" form={form} />
                <PasswordField fullWidth name="password" label="Password" form={form} />
                <PasswordField fullWidth name="retypePassword" label="Retype Password" form={form} />

                <Button type="submit" variant="contained" fullWidth color="primary" className={classes.submit}>
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
