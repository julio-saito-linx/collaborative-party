function redirectAction({input, services}) {
  services.router.redirect(input.page);
}

const redirectTo = [
  redirectAction,
];

export default redirectTo;
