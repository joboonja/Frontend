export const errors = {
  CAN_NOT_REMOVE_SKILL: skillName => `توانایی ${skillName} حذف نشد.`,
  CAN_NOT_ADD_SKILL: skillName => `توانایی ${skillName} اضافه نشد.`,
  CAN_NOT_ADD_BID: 'مبلغ پیشنهادی شما قابل قبول نیست.',
  CAN_NOT_GET_ALL_SKILLS: 'خطا در دریافت توانایی‌های قابل اضافه.',
  CAN_NOT_ENDORSE_SKILL: skillName => `توانایی ${skillName} تایید نشد.`,
  CAN_NOT_GET_USERS: 'خطا در دریافت کاربران.',
  CAN_NOT_GET_PROJECTS: 'خطا در دریافت پروژه‌ها.',
  USER_EMPTY: 'نام کاربری نمی‌تواند خالی باشد.',
  PASSWORD_EMPTY: 'رمز عبور نمی‌تواند خالی باشد.',
  PASSWORD_SIX_CHAR: 'رمز عبور نمی‌تواند کمتر از ۶ کاراکتر باشد.',
  PASS_MUST_MATCH: 'رمز عبور و تکرار آن باید یکسان باشند.',
  FIELD_EMPTY: '*اطلاعات ستاره‌دار نمی‌تواند خالی باشد.',
  ADD_USER: 'ثبت‌نام شما با مشکل مواجه شد. لطفا دوباره تلاش کنید.',
  USER_EXISTS: 'نام کاربری تکراری است.',
  LOGIN_FAILURE: 'نام‌کاربری یا رمز عبور اشتباه است.',
  CAN_NOT_LOGIN: 'امکان ورود وجود ندارد.',
};

export const successes = {
  ADD_SKILL: skillName => `توانایی ${skillName} با موفقیت اضافه شد.`,
  ENDORSE_SKILL: skillName => `توانایی ${skillName} تایید شد.`,
  ADD_BID: amount => `پیشنهاد شما به مبلغ ${amount} ثبت شد.`,
  ADD_USER: 'ثبت‌نام شما با موفقیت انجام شد.',
};
