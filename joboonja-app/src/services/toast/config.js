export const errors = {
  CAN_NOT_REMOVE_SKILL: skillName => `توانایی ${skillName} حذف نشد.`,
  CAN_NOT_ADD_SKILL: skillName => `توانایی ${skillName} اضافه نشد.`,
  CAN_NOT_GET_ALL_SKILLS: 'خطا در دریافت توانایی‌های قابل اضافه.',
  CAN_NOT_ENDORSE_SKILL: skillName => `توانایی ${skillName} تایید نشد.`,
  CAN_NOT_GET_USERS: 'خطا در دریافت کاربران.',
  CAN_NOT_GET_PROJECTS: 'خطا در دریافت پروژه‌ها.',
};

export const successes = {
  ADD_SKILL: skillName => `توانایی ${skillName} با موفقیت اضافه شد.`,
  ENDORSE_SKILL: skillName => `توانایی ${skillName} تایید شد.`,
};
