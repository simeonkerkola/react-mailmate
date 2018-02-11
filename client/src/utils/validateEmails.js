const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  const invalidEmails = emails
    .split(',') // Separate by comma
    .map(email => email.trim()) // Trim all the whitespace
    .filter(email => re.test(email) === false); // grab the not valid emails

  if (invalidEmails.length) return `These emails are invalid: ${invalidEmails}`;
  return null;
};
