export const BASE_URL = 'http://localhost:5000'

export const DATE = new Date(Date.now()).toISOString();

export const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const PASS_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*-_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*-_]{6,}/g;