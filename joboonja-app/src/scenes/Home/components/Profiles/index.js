import React from 'react';
import SearchUser from './components/SearchUser';
import ProfileSummary from './components/ProfileSummary';
import '../../styles.scss';

function Profiles() {
  return (
    <div>
      <SearchUser />
      <div className="scrollableSectionSection">
        <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
        <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
        <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
        <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
        <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
        <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
        <ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/><ProfileSummary onClick={() => {}}  firstName={'فرزاد'} jobTitle={'دانشجو'} lastName={'حبیبی'}/>
        <div className="shadowContainer" />
      </div>
    </div>
  );
}

export default Profiles;
