export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "Email esta vacio.";
  if (!re.test(email)) return "Ooops! Necesitamos un Correo Valido.";

  return "";
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return "Password esta vacio.";

  return "";
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return "Nombre esta vacio.";

  return "";
};
