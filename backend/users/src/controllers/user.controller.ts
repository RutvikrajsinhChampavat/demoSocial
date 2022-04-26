class UserController {
  // constructor() {}
  private a = 10;

  getAllUser(req: any, res: any) {
    this.a = 11;
    res.send({
      code: 200,
      message: 'All users found',
    });
  }

  getUserById(req: any, res: any) {
    this.a = 11;
    res.send({
      code: 200,
      message: 'All users found',
    });
  }
}
export default UserController;
