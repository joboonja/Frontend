/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import UserProfileShow from './components/UserProfileShow';
import Footer from '../../components/Footer';
import OthersProfileSkill from './scenes/OthersProfileSkill';
import SelfProfileSkill from './scenes/SelfProfileSkill';
import './styles.scss';
import image from '../../assets/images/profile.jpg';

// TODO: Profile Info from axios
const selfId = 'Self';

export function ProfileRoute({ match }) {
  return (
    <div>
      <Route
        path={`${match.path}/:id`}
        render={props => <Profile id={props.match.params.id} isSelf={false} />}
      />
      <Route
        exact
        path={match.path}
        render={() => <Profile id={selfId} isSelf />}
      />
    </div>
  );
}

class Profile extends React.PureComponent {
  render() {
    const { id, isSelf } = this.props;
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
          {
            isSelf ? <SelfProfileSkill id={id} />
              : <OthersProfileSkill id={id} />
          }
        </div>
        <Footer />
      </div>
    );
  }
}

Profile.propTypes = {
  id: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired,
};

export default Profile;
