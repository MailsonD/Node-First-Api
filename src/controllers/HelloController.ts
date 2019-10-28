export default class HelloController {
  public static helloWorld(req, res): void {
    res.json({its: 'alll okay!'});
  }
}
