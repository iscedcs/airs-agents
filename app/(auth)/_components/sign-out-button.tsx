'use client';
import { Button } from '@/components/ui/button';
import { fullSignOut } from '@/lib/actions';
import React from 'react';

const SignOutBtn = () => {
	return <Button onClick={() => fullSignOut()}>SIGN OUT</Button>;
};

export default SignOutBtn;
