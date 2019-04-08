import React from 'react';
import SearchUser from './components/SearchUser';
import ProfileSummary from './components/ProfileSummary';

function Profiles() {
  return (
    <div>
      <SearchUser />
      <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
      <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
      <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
      <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
      <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
      <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
      <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/><ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>

    </div>
  );
}

export default Profiles;
