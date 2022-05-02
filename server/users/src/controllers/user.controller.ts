class UserController {
  // constructor() {}

  getAllUser(req: any, res: any) {
    res.status(200).send({
      message: 'All users found',
    });
  }

  getUserById(req: any, res: any) {
    res.send({
      code: 200,
      message: 'All users found',
    });
  }
}

export default UserController;
