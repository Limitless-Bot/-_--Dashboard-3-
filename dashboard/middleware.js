module.exports.updateUser = async (req, res, next) => {
    try {
      const key = res.cookies.get('key');
      if (key) {
        const { authUser } = await sessions.get(key);
        res.locals.user = authUser;
      }
    } finally {
      return next();
    }
  };