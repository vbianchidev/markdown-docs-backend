const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const SLUG_RULE = /[*+~.()'"!:@]/g;

export const REGEX = {
  PASSWORD_RULE,
  SLUG_RULE
};


