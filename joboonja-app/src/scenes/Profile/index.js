import React from 'react';
import Navbar from '../../components/Navbar';
import UserProfileShow from './components/UserProfileShow';
import SkillItem from '../../components/SkillItem';
import Footer from '../../components/Footer';
import AddSkill from './components/AddSkill';
import './styles.scss';
import image from '../../assets/images/profile.jpg';

// TODO: Profile Info from axios

const skills = [
  { points: 10, name: 'Html' },
  { points: 10, name: 'CSS' },
  { points: 10, name: 'OK' },
  { points: 10, name: 'HELLO' },
  { points: 10, name: 'Html' },
];


function Profile() {
  const skillRow = skills.map(item => (<SkillItem type="Self" skill={item} />));
  return (
    <div className="background">
      <Navbar />
      <div className="main">
        <UserProfileShow
          firstName="محمدرضا"
          lastName="کیانی"
          nickName="اعلی‌حضرت"
          bio="
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                    کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                    آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                    ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                    تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
        "
          imgUrl={image}
        />
        <div className="container">
          <AddSkill skillNames={['html']} />
          {skillRow}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
